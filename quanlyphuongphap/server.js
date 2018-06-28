const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// API file for interacting with MongoDB
const api = require('./server/routes/api');
const upload = require('./server/routes/upload');
const ghichu = require('./server/routes/ghichu');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, './')));
app.use(express.static(path.join(__dirname, '../')));
app.use(express.static(path.join(__dirname, '/node_modules')));
app.use(express.static(path.join(__dirname, 'frontend/dist')));

// API location
app.use('/api', api);
app.use('/upload', upload);
app.use('/ghichu', ghichu);

// Send all other requests to the Angular app
app.get('/**', (req, res) => {
    res.sendFile(__dirname + '/frontend/dist/index.html');
});

// Set Port
const port = process.env.PORT || '3002';
app.set('port', port);

const server = http.createServer(app);
 
server.listen(port, () => {
    console.log(`Running on localhost - :${port}`);
});

module.exports = server;