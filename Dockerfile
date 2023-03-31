FROM hub.lumigame.com/base/node:18.1-slim

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
RUN mkdir /app && chown -R node /app

WORKDIR /app
COPY package.json yarn.lock docker-slim-include-path ./

USER node
RUN npm run reg \
    && yarn install --production \
    && yarn cache clean
ENV PATH /app/node_modules/.bin:$PATH

COPY ./src/ .
HEALTHCHECK --interval=10s CMD node --es-module-specifier-resolution=node healthcheck.js


CMD [ "node", "--es-module-specifier-resolution=node", "./app.js" ]
