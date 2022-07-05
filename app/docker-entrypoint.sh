#!/bin/bash

if [ "$1" = "start" ]; then
  export NODE_ENV=production
  npm run knex migrate:latest
  exec npm run start
else
  exec "$@"
fi
