let buffer1 = Buffer.from("test", "ascii");
let buffer2 = Buffer.alloc(10);
buffer2.write("mother fucker");
console.log(buffer2 + '\n' + buffer2.length + '\n');
let json1 = buffer1.toJSON();
console.log(json1);
console.log('\n');
let json2 = JSON.stringify(buffer1);
console.log(json2);
