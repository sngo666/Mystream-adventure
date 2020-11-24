let events = require('events');
let eventEmitter = new events.EventEmitter();
eventEmitter.on('event1', function(arg1){
    console.log('system emitting ' + arg1);
});
eventEmitter.emit('event1','e1');