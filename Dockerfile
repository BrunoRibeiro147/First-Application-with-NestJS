FROM node:12.14.0-alpine3.11

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY --chown=node package*.json ./

RUN npm install

COPY --chown=node . .

RUN npm run build

CMD ["npm", "run", "start:prod"]