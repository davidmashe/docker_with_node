const express = require('express');
const app = express();
const PORT = 3000;

app.get("/",(req, res) => {
	res.send(`Hello from ${process.platform}`);
});

app.listen(PORT,() => {
	console.log("express listening on", PORT);
});