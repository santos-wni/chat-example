// Run: nodemon client.js

//client.js
var io = require('socket.io-client');
var socket = io.connect(
    'https://pt-wrap.wni.com/notif/socket/socket.io',
    // 'http://localhost:3000',
    {
        reconnect: true,
        extraHeaders: {
            cookie: '2c4f14b8b1d0d8872dda92f49ef26fa2=3c0ab759c635c724c1874c8673e3357e; 28d60d74c678c1edc4ccfbf804102979=6abeb2c113a161f3e31e609bfa9a8965; 2c6caea60098201d98523c0f209eab9b=f91010d6b1a20342a7af2b9d62c8a77c; 2304922aba5e3905c58315f044524914=7fafe95f2d6c517d3ed718096866faa2; 74e3f124b1cefb5d6caceff92d8b8ec9=85e7a976c3b754c9456f0d7c38098765; 61a1e370fad4e04346fc6162aab57e62=e0602acf02eca5e766ed0cdbedd68293; 0d435af12f6ff3fbb3ea92c3e53abbc7=9c6606c29050f5ace0a3a18cbeed3ee1; 488361ee19ddb4879ad95f4e10004c3b=084a3167a709d19b5fde4652f1dcdda5; 2551eeb93b549aece37a29c0de5ce602=90c3d0949c1aba17bdf7d846db14eb33; 0abf441f9975406240aa253562f4279a=90c3d0949c1aba17bdf7d846db14eb33; f977e5591aa09d033507796b5ae2e8d1=4839f30394743a9fdc227c7d2e541b1e; bd0281ae84ad8272dbaf5dc098e68ea9=a9d36c8729a734c51811281a9b71d0cb; mod_auth_openidc_session=a7df3792-0a91-4682-b171-9e41f3cedfc9; 47438a7b68b2fce98e1453a7a77200cb=aca19ef90781095dcbe1d32274b8c30f; 49efd54bd51f96f5b01471ebe3f8492e=6f8a5d2bca893aeaad97dafcd280d628;'
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
