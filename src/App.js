import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [points, setPoints] = useState(0);
  const [messages, setMessages] = useState([]);
  const [smokes, setSmokes] = useState([]);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [level, setLevel] = useState(1);
  const [coinsPerTap, setCoinsPerTap] = useState(2);
  const [coinsToLevelUp, setCoinsToLevelUp] = useState(100);

  useEffect(() => {
    const img = new Image();
    img.src = 'background.jpg';
    img.onload = () => {
      setBackgroundLoaded(true);
    };

    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
    }
  }, []);

  const handleTouchStart = (event) => {
    event.preventDefault();

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
        setPoints(prevPoints => prevPoints + coinsPerTap);

        const newMessage = {
          id: Date.now() + touch.identifier,
          text: `+${coinsPerTap} 💨`,
          x: touchX,
          y: touchY
        };

        setMessages(prevMessages => [...prevMessages, newMessage]);

        setTimeout(() => {
          setMessages(prevMessages =>
            prevMessages.filter(msg => msg.id !== newMessage.id)
          );
        }, 2000);
      }
    });
  };

  const handleButtonClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const smokeX = rect.left + rect.width / 2 - (window.innerWidth * 0.15);
    const smokeY = rect.top + rect.height / 2 - (window.innerHeight * 0.15);

    const newSmoke = {
      id: Date.now(),
      x: smokeX,
      y: smokeY
    };

    setSmokes(prevSmokes => [...prevSmokes, newSmoke]);

    setTimeout(() => {
      setSmokes(prevSmokes => prevSmokes.filter(smoke => smoke.id !== newSmoke.id));
    }, 1000);
  };

  if (!backgroundLoaded) {
    return null;
  }

  return (
    <div className="App" onTouchStart={handleTouchStart}>
      <div className="points-display">
        <img src="joint.png" alt="joints icon" />
        <h1>Your joints: {points}</h1>
      </div>
      <img
        src="settings.png"
        alt="settings"
        className="settings-icon"
        style={{ position: 'absolute', top: '10px', right: '10px', width: '24px', height: '24px', cursor: 'pointer' }}
      />
      <div className="plant-container">
        <div className="plant"></div>
      </div>
      <div className="buttons-container">
        <div className="button" id="exchange" onClick={handleButtonClick}>
          <i className="fas fa-exchange-alt"></i> Exchange
        </div>
        <div className="button" id="mine" onClick={handleButtonClick}>
          <i className="fas fa-coins"></i> Mine
        </div>
        <div className="button" id="friends" onClick={handleButtonClick}>
          <i className="fas fa-user-friends"></i> Friends
        </div>
        <div className="button" id="earn" onClick={handleButtonClick}>
          <i className="fas fa-hand-holding-usd"></i> Earn
        </div>
      </div>
      <div className="messages-container">
        {messages.map(message => (
          <div
            key={message.id}
            className="message"
            style={{ top: `${message.y}px`, left: `${message.x}px` }}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="smokes-container">
        {smokes.map(smoke => (
          <div
            key={smoke.id}
            className="smoke"
            style={{ top: `${smoke.y}px`, left: `${smoke.x}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
