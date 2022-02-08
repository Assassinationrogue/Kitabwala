/**
 * Required modules
 */
const express = require('express');
const expressApp = require('./src/app');
const http = require('http');
//const cors = require('cors');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "http://localhost:4200");
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true)
    next();
})

// app.use(
//     cors({
//         origin: "http://localhost:4200",
//         allowedHeaders: ['Content-Type', 'Authorization','application/x-www-form-urlencoded'],
//         methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
//         credentials: true
//     })
// )

app.use(expressApp);

//console.log(http.METHODS)

/**
 * Runs server on port 3000
 */
http.createServer(app).listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});