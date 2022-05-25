FROM node:18.1.0

WORKDIR /client

COPY package.json /client/

RUN npm install
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . /client/

EXPOSE 3000

CMD ["npm", "start"]