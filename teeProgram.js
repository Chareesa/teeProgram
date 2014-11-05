var fs = require('fs');

var write = fs.createWriteStream(process.argv[2]);

process.stdin.pipe(write);
process.stdin.pipe(process.stdout);

