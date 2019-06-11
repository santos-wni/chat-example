// Run: DEBUG=* nodemon client3.js 

//client.js
var io = require('socket.io-client');

var socket = io.connect(
    'https://pt-wrap.wni.com',
    {
        path: '/notif/socket/socket.io',
        extraHeaders: {
            'Cookie': 'mod_auth_openidc_session=fae6e92b-daeb-45c1-8222-34946e7a5dcd',
        }
    }
);

// Add a connect listener
socket.on('connect', function (socket) {
    console.log('Connected!');
});

socket.on('chat_message', function(msg){
    console.log('Message:', msg);
});
