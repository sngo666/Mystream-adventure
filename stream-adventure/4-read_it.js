let {Readable} = require('stream');
let readable = new Readable({
    read(){}
});
readable.push(process.argv[2]);
readable.pipe(process.stdout);