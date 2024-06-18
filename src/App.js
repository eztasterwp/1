import React, { useEffect, useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faHammer, faUserFriends, faHandHoldingUsd, faCoins } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [points, setPoints] = useState(0);
  const [messages, setMessages] = useState([]);
  const [smokes, setSmokes] = useState([]);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [level, setLevel] = useState(1);
  const [coinsPerTap, setCoinsPerTap] = useState(2);
  const [coinsToLevelUp, setCoinsToLevelUp] = useState(100);
  const [activeButton, setActiveButton] = useState('exchange');

  useEffect(() => {
    const img = new Image();
    img.src = 'background.png';
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

  const handleButtonClick = (event, buttonId) => {
    setActiveButton(buttonId);

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
        style={{ position: 'absolute', top: '10px', right: '10px', width: '30px', height: '30px', cursor: 'pointer' }}
      />
      <div className="plant-container">
        <div className="plant"></div>
      </div>
      <div className="buttons-container">
        <div className={`button ${activeButton === 'exchange' ? 'active' : ''}`} id="exchange" onClick={(e) => handleButtonClick(e, 'exchange')}>
          <FontAwesomeIcon icon={faExchangeAlt} />
          Exchange
        </div>
        <div className={`button ${activeButton === 'mine' ? 'active' : ''}`} id="mine" onClick={(e) => handleButtonClick(e, 'mine')}>
          <FontAwesomeIcon icon={faHammer} />
          Mine
        </div>
        <div className={`button ${activeButton === 'friends' ? 'active' : ''}`} id="friends" onClick={(e) => handleButtonClick(e, 'friends')}>
          <FontAwesomeIcon icon={faUserFriends} />
          Friends
        </div>
        <div className={`button ${activeButton === 'earn' ? 'active' : ''}`} id="earn" onClick={(e) => handleButtonClick(e, 'earn')}>
          <FontAwesomeIcon icon={faHandHoldingUsd} />
          Earn
        </div>
        <div className={`button ${activeButton === 'airdrop' ? 'active' : ''}`} id="airdrop" onClick={(e) => handleButtonClick(e, 'airdrop')}>
          <FontAwesomeIcon icon={faCoins} />
          Airdrop
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
