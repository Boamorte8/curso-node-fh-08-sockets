console.log('VERSION_DEV_0.0.0.1_20200615_1617');
const socket = io();

socket.on('connect', () => {
    console.log('Connected to server');
});

socket.on('disconnect', () => {
    console.log('Disconnected to server');
});

socket.on('message', (data, callback) => {
    console.log('message', data);
    // callback();
});

// Emit is to send data
socket.emit('sendMessage', {
    user: 'Boamorte',
    message: 'Test emit'
}, (answer) => {
    console.log('Message from sendMessage front - sendMessage', answer);
});