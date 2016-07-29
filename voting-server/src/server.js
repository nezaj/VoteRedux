import Server from 'socket.io';

export default function startServer(store) {
  const PORT = 8090;
  const io = new Server().attach(PORT);

  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  );

  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS());
    socket.on('action', store.dispatch.bind(store));
  });
}
