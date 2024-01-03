#! /bin/bash

# Initialization logic can go here

echo "Starting Json Server"
json-server --watch src/assets/data/index.js --host 0.0.0.0 &

echo "Starting Angular"
ng serve --host 0.0.0.0 &

# Wait for any process to exit
wait -n

# Exit with status of process that exited first
exit $?
