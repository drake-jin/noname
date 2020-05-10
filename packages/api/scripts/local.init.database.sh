#!/bin/bash
set -e

PG_CONTAINER=noname-pg
PW=$DB_PASSWORD
DB=$DB_DATABASE

# create the db 
echo "CREATE DATABASE $DB ENCODING 'UTF-8';" | docker exec -i $PG_CONTAINER psql -U postgres
echo "\l" | docker exec -i $PG_CONTAINER psql -U postgres