#!/bin/sh

while true
do
	echo "Autorenewing frontend ++ Start ..."
	docker compose stop frontend
	docker compose build frontend --no-cache
	docker compose up -d frontend
	echo "Autorenewing frontend ++ Done ..."
	echo "Waiting 3 seconds"
	sleep 5 
done