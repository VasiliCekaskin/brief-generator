FROM node:17.9.0-slim

WORKDIR /code
COPY . /code

RUN npm ci

RUN npm run build

ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["start"]
