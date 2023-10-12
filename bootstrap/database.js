import mongoose from "mongoose";
import config from "config";
import seeder from "./dbSeeder";

class Connection {
    constructor() {
        const url = `mongodb://${config.get("db.host")}:${config.get("db.port")}/${config.get("db.name")}`;
        //const url = `mongodb://${config.get('db.username')}:${config.get('db.password')}@${config.get('db.host')}:${config.get('db.port')}/${config.get('db.name')}`;
        console.log("Establish new connection with db");
        // mongoose.Promise = global.Promise;
        // mongoose.set("useNewUrlParser", true);
        // mongoose.set("useFindAndModify", false);
        // mongoose.set("useUnifiedTopology", true);
        mongoose.connect(url).then(async () => {
            await seeder();
            console.log("db seeded succesfully ..");
        }).catch(err => {
            console.log(err.message || "failed to reach database ....");
        });
    }
}

export default new Connection();