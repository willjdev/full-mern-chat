

export const connectToWs = ( handleMessage, setWs ) => {
    const ws = new WebSocket( import.meta.env.VITE_API_WS_URL );
    setWs( ws );
    ws.addEventListener( 'message', handleMessage );
    ws.addEventListener( 'close', () => {
      setTimeout(() => {
        console.log('Disconnected. Trying to reconnect.');
        connectToWs();
      }, 1000);
    });
  };