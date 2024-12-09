FROM node:18-alpine

WORKDIR /app

COPY /package*json ./

RUN npm install

COPY . /app

RUN npm run build

EXPOSE 3004

CMD ["npm", "start"]
