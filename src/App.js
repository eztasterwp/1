import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [points, setPoints] = useState(0);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
    }
  }, []);

  const handleClick = () => {
    setPoints(points + 1);
    const newMessage = { id: Date.now(), text: '+1 💨' };
    setMessages([...messages, newMessage]);
    setTimeout(() => {
      setMessages((messages) => messages.filter((msg) => msg.id !== newMessage.id));
    }, 2000); // Удалить сообщение через 2 секунды
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ваши очки: {points}</h1>
        <div className="plant-container" onClick={handleClick}>
          <img src="plant.png" alt="Марихуана" className="plant" />
        </div>
        <div className="messages-container">
          {messages.map((msg) => (
            <div key={msg.id} className="message">
              {msg.text}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
