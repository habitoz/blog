FROM node:16-slim

USER retink

RUN mkdir -p /home/retink/blog-api

WORKDIR /home/retink/blog-api

COPY --chown=retink . .

ENV API_HOST=0.0.0.0 API_PORT=7090

ENV MONGO_HOST=172.18.0.5

ENV REDIS_HOST=172.18.0.6

EXPOSE ${API_PORT}

CMD [ "node", "main.js" ]
