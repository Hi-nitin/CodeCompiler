const { Server } = require('socket.io');

const Mysocket = (server) => {
    const io = new Server(server, {
        cors: {
            origin: 'http://localhost:5173',
            methods: ['get', 'post']
        }
    });


    io.on('connection', (socket) => {
        console.log('a user connected ' + socket.id);

        socket.on('client-message', (msg,fid,sid) => {

            io.emit('msgtoclient', msg,fid,sid);
           
            

        })


        socket.on('disconnect', () => {
            console.log('user disconnected' + socket.id);
        });
    });

}

module.exports = Mysocket