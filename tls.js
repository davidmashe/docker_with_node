const express = require('express');
const fs = request('fs');
const http = require('https');
const app = express();
const PORT = 443;

const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/neurocollective.io/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/neurocollective.io/fullchain.pem')
};

app.get("/",(req, res) => {
	res.send(`Hello from ${process.platform}`);
});

listener = https.createServer(options, app).listen(PORT, () => {
    console.log('Express HTTPS server listening on port', PORT);
});