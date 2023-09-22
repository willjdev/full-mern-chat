

export const connectToWs = ( handleMessage, setWs ) => {
    const ws = new WebSocket(`ws://full-mern-chat.vercel.app`);
    setWs( ws );
    ws.addEventListener( 'message', handleMessage );
    ws.addEventListener( 'close', () => {
      setTimeout(() => {
        console.log('Disconnected. Trying to reconnect.');
        connectToWs();
      }, 1000);
    });
  };