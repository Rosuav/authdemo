var express = require('express');

var app = express();

app.get('/', (req, res) => {
	res.send("Hello, world!");
});

app.listen(process.env.PORT || 8080, process.env.IP, () => {
	console.log("Listening on port " + process.env.PORT || 8080);
});
