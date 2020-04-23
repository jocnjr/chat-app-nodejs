const chatApp = server => {
  // server side socket instantiation
  const io = require('socket.io')(server);

  io.on('connection', socket => {
    console.log('socket connected, id: ', socket.conn.id);



    socket.emit('news', 'hello from the server side!');


    socket.on('news', data => {
      console.log(data);
    });

    socket.on('disconnect', () => {
      console.log('disconnected');
    });
  });
}

module.exports = chatApp;