const chatApp = server => {
  // server side socket instantiation
  const io = require('socket.io')(server);

  io.on('connection', socket => {
    console.log('socket connected, id: ', socket.conn.id);



    // socket.emit('news', 'hello from the server side!');

    // timer sends a random number by certain interval of time in miliseconds
    // 1000 = 1s
    // 500 = 0.5s
    const timer = setInterval(() => {
      socket.emit('timer', {
        timer: Math.random()
      })
    }, 1000);

    socket.on('news', data => {
      console.log(data);
    });

    socket.on('disconnect', () => {
      clearInterval(timer);
      console.log('disconnected');
    });
  });
}

module.exports = chatApp;