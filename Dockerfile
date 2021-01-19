FROM node:alpine

RUN mkdir -p /usr/src/app
COPY ./start.sh /start.sh
RUN chmod +x /start.sh

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn

COPY . .

EXPOSE 3333

CMD [ "/start.sh" ]