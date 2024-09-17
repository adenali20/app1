FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 2980



CMD [ "node","run", "dev" ]