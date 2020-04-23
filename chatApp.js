const chatApp = server => {
  // server side socket instantiation
  const io = require('socket.io')(server);

  io.on('connection', socket => {
    const userId = socket.conn.id.slice()
    console.log('socket connected, id: ', userId);
    io.emit('chatMessages', 'new user connected. total: ' + socket.conn.server.clientsCount);

    socket.on('message', message => {
      socket.broadcast.emit('chatMessages', userId + ' : ' + message);
    });

    socket.on('disconnect', () => {
      io.emit('chatMessages', 'user disconnected. total: ' + socket.conn.server.clientsCount);
      console.log('disconnected');
    });
  });
}

module.exports = chatApp;