# Build Stage
FROM node:22.9 as BUILD

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# Production Stage
FROM node:22.9-alpine as PRODUCTION

WORKDIR /app

COPY package*.json .

RUN npm ci --only=production

COPY --from=BUILD /app/dist ./dist

CMD ["node", "dist/index.js"]