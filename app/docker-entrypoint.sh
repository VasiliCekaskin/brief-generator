#!/bin/bash

if [ "$1" = "start" ]; then
  DATABSE_URL=postgresql://postgres:postgres@localhost/letter-friend npm run prisma migrate deploy
  exec npm run start
else
  exec "$@"
fi
