const express = require('express');
const fs = require('fs');
const https = require('https');
const app = express();
const PORT = 443;

const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/devmeetups.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/devmeetups.com/fullchain.pem')
};

app.get("/",(req, res) => {
	res.send(`Hello from ${process.platform}`);
});

const listener = https.createServer(options, app).listen(PORT, () => {
    console.log('Express HTTPS server listening on port', PORT);
});