FROM node:18.1.0

WORKDIR /server

COPY package.json /server/

RUN npm install

COPY . /server/

USER node

EXPOSE 8080

CMD ["npm", "start"]
