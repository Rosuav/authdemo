//Encrypt passwords to be used on the server
var pwd;
if (process.argv.length > 2) {
	//Password provided on command line
	pwd = process.argv.slice(2).join(" ");
} else {
	console.error("TODO: Generate pwd from /usr/share/dict/words");
	pwd = "correct horse battery staple";
	console.log("Generating password:", pwd);
}

var bcrypt = require('bcryptjs');
bcrypt.genSalt(10, (err, salt) => {
	if (err) return console.error(err);
	bcrypt.hash(pwd, salt, (err, hash) => {
		if (err) return console.error(err);
		console.log("");
		console.log("Add the following line to server.js, in the users array:");
		console.log("");
		console.log('{"username": "<username>", "password": "' + hash + '"}');
	});
});
