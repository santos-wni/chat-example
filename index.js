// Run: nodemon index.js
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var connectCounter = 0;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  const sessionID = socket.id;
  connectCounter++;

  socket.join('room', function(){
    // console.log(sessionID, 'in room.');
    let message = sessionID + ' joined the room.';
    io.to('room').emit('chat_message', message);
  });

  console.log(sessionID,'joined. Connections:', connectCounter);

  socket.on('disconnect', function(){
    connectCounter--;
    console.log(sessionID,'left. Connections:', connectCounter);
  });

  socket.on('chat_message', function(msg){
    io.to('room').emit('chat_message', msg);
    console.log(sessionID, 'emit:', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
