FROM node:22.9

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 5005

CMD ["npm", "run", "dev"]