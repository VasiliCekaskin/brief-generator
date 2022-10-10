#!/bin/bash

if [ "$1" = "start" ]; then
  export NODE_ENV=production
  npm run db:create
  npm run db:migrate
  exec npm run start
else
  exec "$@"
fi
