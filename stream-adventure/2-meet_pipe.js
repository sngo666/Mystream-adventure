let fs = require('fs');
let arg = process.argv[2];
fs.createReadStream(arg).pipe(process.stdout);