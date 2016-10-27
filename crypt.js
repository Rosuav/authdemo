//Encrypt passwords to be used on the server
var pwd;
if (process.argv.length > 2) {
	//Password provided on command line
	pwd = process.argv.slice(2).join(" ");
} else {
	console.error("No password specified - generating from /usr/share/dict/words");
	var fs = require('fs');
	var words = fs.readFileSync('/usr/share/dict/words', 'utf8').split('\n');
	pwd = "";
	for (var i = 0; i < 4; ++i) {
		var word = words[Math.floor(Math.random() * words.length)];
		if (!/^[a-z]+$/.exec(word)) --i; //Ignore words with capitals or apostrophes
		else pwd += " " + word;
	}
	pwd = pwd.trim();
	console.log("Generated password:", pwd);
}

var bcrypt = require('bcryptjs');
bcrypt.genSalt(10, (err, salt) => {
	if (err) return console.error(err);
	bcrypt.hash(pwd, salt, (err, hash) => {
		if (err) return console.error(err);
		console.log("");
		console.log("Add the following line to server.js, in the users array:");
		console.log("");
		console.log('{"username": "<username>", "password": "' + hash + '"},');
	});
});
