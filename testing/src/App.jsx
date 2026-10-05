import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function Messages() {

  const [messages, setMessages] = useState([]);
  const [name, setName] = useState('Hello, world!');

  const handleSendMessage = (message) => {
    setMessages([...messages, message]);
    //call api to send message to backend
    fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    
  }

  return (
    <>
      <div>
        Input name:
        <input
          type="text"
          placeholder="Type your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="text" placeholder="Type a message..." />
      </div>
      <div>
        <input type="button" placeholder="Send message" onClick={() => handleSendMessage(name)} />
      </div>
    </>

  );
}

export default Messages
