#!/bin/sh

while true
do
	echo "Autorenewing build ++ Start ..."
	docker compose build backend
	docker compose up -d frontend
	echo "Autorenewing build ++ Done ..."
	echo "Waiting 3 seconds"
	sleep 3 
done