#!/bin/bash

cd "${dirname "$0"}"

npm install --prefix backend
npm install --prefix frontend

npx nodemon backend/server.js &
npm start --prefix frontend &

fg "#0"
