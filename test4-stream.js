let fs = require('fs');
let data = '';
let stream = fs.createReadStream('input.txt');
stream.setEncoding('utf-8');
stream.on('data', function(chunk){
    data += chunk;
});
stream.on('end', function(){
    console.log(data);
    console.log('读取完成');
});
stream.on('error', function(err){
    console.log(err.stack);
});



let wirteStream = fs.createWriteStream('output.txt');
wirteStream.write('hello my mother fucker!!', 'utf-8');
wirteStream.end();
wirteStream.on('finish', function(){
    console.log('写入完成！');
});
wirteStream.on('error', function(err){
    console.log(err.stack);
});


