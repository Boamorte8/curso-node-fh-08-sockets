const { io } = require('../server');

io.on('connection', (socketClient) => {
    console.log('Client connected');
    socketClient.on('disconnect', (socketClient) => {
        console.log('Client disconnected');
    });

    socketClient.on('event', data => {
        console.log(data);
    });

    socketClient.on('sendMessage', (data, callback) => {
        console.log('sendMessage', data);
        socketClient.broadcast.emit('message', data);
        // if (data.user) {
        //     callback('All works!');
        // } else {
        //     callback('Something went wrong!');
        // }
    });

    socketClient.emit('message', {
        message: 'message test from server'
    }, (data) => {
        console.log('Message delivered - message', data);
    }); // emit an event to the socket
});