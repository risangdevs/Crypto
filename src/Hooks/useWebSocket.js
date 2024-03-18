import { useState, useEffect, useRef } from 'react';
import { webSocket } from 'rxjs/webSocket';

const useWebSocket = (url) => {
  const wsSubject = useRef(null);
  const [receivedMessage, setReceivedMessage] = useState('');

  useEffect(() => {
      const ws = webSocket(url);
  
      const subscription = ws.subscribe(
        (message) => {
          setReceivedMessage(message);
        },
        (error) => {
          // console.error('WebSocket error:', error);
        },
        () => {
          // console.log('WebSocket connection closed');
        }
      );
      wsSubject.current = ws
      return () => {
        subscription.unsubscribe();
        ws.complete(); // Close WebSocket connection when the component unmounts
      };
  }, [url]);

  // useEffect(()=>{
  //   return () =>{
  //     wsSubject?.current?.unsubscribe()
  //     wsSubject?.current?.complete()
  //   }
  // },[])

  return { wsSubject, receivedMessage };
};

export default useWebSocket;
