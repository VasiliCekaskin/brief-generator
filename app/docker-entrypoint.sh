#!/bin/bash

if [ "$1" = "start" ]; then
  exec npm run start
else
  exec "$@"
fi
