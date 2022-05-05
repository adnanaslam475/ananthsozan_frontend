const path = require("path");
const app = require('./src/app')
const express = require('express')
const PORT = process.env.PORT || 5000;

require('dotenv').config({ path: '.env' })

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});
app.listen(PORT, () => console.log(`server listen at ${PORT}`))

// "scripts": {
//     "build": "cd frontend_react && npm run build",
//     "start": "nodemon --experimental-modules --es-module-specifier-resolution=node server.js",
//     "install-client": "npm install --prefix frontend_react",
//     "client": "npm start --prefix frontend_react",
//     "heroku-postbuild": "npm run install-client && npm run build",
//     "server": "nodemon --experimental-modules --es-module-specifier-resolution=node server.js",
//     "dev": "concurrently \"npm run server\" \"npm run client\""
//   },