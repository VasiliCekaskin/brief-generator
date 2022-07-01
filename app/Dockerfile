FROM node:17.9.0-slim

WORKDIR /app
COPY . /app

RUN npm ci

RUN npm run build

ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["start"]
