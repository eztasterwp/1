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

    const plantElement = document.querySelector('.plant');
    const rect = plantElement.getBoundingClientRect();

    Array.from(event.changedTouches).forEach(touch => {
      const touchX = touch.clientX;
      const touchY = touch.clientY;

      if (
        touchX >= rect.left &&
        touchX <= rect.right &&
        touchY >= rect.top &&
        touchY <= rect.bottom
      ) {
        setPoints(prevPoints => prevPoints + 1);

        const newMessage = {
          id: Date.now() + touch.identifier,
          text: '+1 💨',
          x: touchX,
          y: touchY
        };

        setMessages(prevMessages => [...prevMessages, newMessage]);

        setTimeout(() => {
          setMessages(prevMessages =>
            prevMessages.filter(msg => msg.id !== newMessage.id)
          );
        }, 2000); // Удалить сообщения через 2 секунды
      }
    });
  };

  return (
    <div className="App" onTouchStart={handleTouchStart}>
      <div className="points-display">
        <h1>Ваши очки: {points}</h1>
      </div>
      <div className="plant-container">
        <div className="plant"></div>
      </div>
      <div className="buttons-container">
        <div className="button" id="exchange">Exchange</div>
        <div className="button" id="mine">Mine</div>
        <div className="button" id="friends">Friends</div>
        <div className="button" id="earn">Earn</div>
        <div className="button" id="airdrop">Airdrop</div>
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
