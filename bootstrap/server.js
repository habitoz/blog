import http from "http";
//import https from "https";
import express from "express";
import path from "path";
import cors from "cors";
import fs from "fs";
import morgan from "morgan";
import setRoutes from "./routes";
import helmetEncapsulation from "./helmet";
import app_auth from "../src/middleware/auth/app_auth";

const server = express();
const accessLogStream = fs.createWriteStream(
    path.normalize(__dirname + "/../logs/access.log"), {
    flags: "a",
}
);

server.use(morgan("combined", { stream: accessLogStream }));
server.use(
    morgan(function (tokens, req, res) {
        const message = [
            tokens.method(req, res),
            tokens.url(req, res),
            tokens.status(req, res),
            tokens.res(req, res, 'content-length'), '-',
            tokens['response-time'](req, res), 'ms'
        ].join(' ');
        // UDP_CONNECTION.send(message, 0, message.length, config.get('s_port'), config.get('s_ip'));
        return message;
    })
);
helmetEncapsulation(server);
server.use(morgan("dev"));

server.use(
    cors({
        origin: [
            "http://localhost:8080",
            "http://192.168.43.212:8080",
            "http://localhost:8081",
            "http://royal.bar",
            "http://192.168.62.173:8080",
        ],
    })
);
server.use(app_auth());
server.use(express.json({ limit: "100kb" }));
server.use("/api/photo", express.static("storage/images"));
setRoutes(server);

server.use((err, req, res, next) => {
    res.send(err.message);
});


const app = http.createServer(
    // {
    //   key: fs.readFileSync(path.normalize(__dirname + "/../keys/server-key.pem")),
    //   cert: fs.readFileSync(
    //     path.normalize(__dirname + "/../keys/server-cert.pem")
    //   ),
    // },
    server
);

export {
    app
};
