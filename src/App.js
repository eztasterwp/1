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

  const handleTouchStart = (event) => {
    event.preventDefault(); // Предотвращение нежелательного поведения, например, масштабирования или прокрутки

    const touches = event.changedTouches;
    setPoints(prevPoints => prevPoints + touches.length);

    const newMessages = Array.from(touches).map(touch => ({
      id: Date.now() + touch.identifier,
      text: '+1 💨',
      x: touch.clientX,
      y: touch.clientY
    }));

    setMessages(prevMessages => [...prevMessages, ...newMessages]);

    setTimeout(() => {
      setMessages(prevMessages =>
        prevMessages.filter(msg => !newMessages.some(newMsg => newMsg.id === msg.id))
      );
    }, 2000); // Удалить сообщения через 2 секунды
  };

  return (
    <div className="App" onTouchStart={handleTouchStart}>
      <div className="points-display">
        <h1>Ваши очки: {points}</h1>
      </div>
      <div className="plant-container">
        <div className="plant"></div>
      </div>
      <div className="messages-container">
        {messages.map(msg => (
          <div key={msg.id} className="message" style={{ left: msg.x, top: msg.y }}>
            {msg.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
