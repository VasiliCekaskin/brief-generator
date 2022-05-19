#!/bin/bash

if [ "$1" = "start" ]; then
  export NODE_ENV=production

  exec ./bin/letter-generator
else
  exec "$@"
fi
