import React, { useEffect, useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faHammer, faUserFriends, faHandHoldingUsd, faCoins, faEllipsisH, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [points, setPoints] = useState(0);
  const [messages, setMessages] = useState([]);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [level, setLevel] = useState(1);
  const [coinsPerTap, setCoinsPerTap] = useState(2);
  const [coinsToLevelUp, setCoinsToLevelUp] = useState(50);
  const [activeButton, setActiveButton] = useState('exchange');
  const [username, setUsername] = useState('User');
  const [levelUpNotification, setLevelUpNotification] = useState('');

  useEffect(() => {
    const img = new Image();
    img.src = 'background.png';
    img.onload = () => {
      setBackgroundLoaded(true);
    };

    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      tg.expand();
      setUsername(tg.initDataUnsafe.user ? tg.initDataUnsafe.user.username : 'User');
    }
  }, []);

  const handleTouchStart = (event) => {
    event.preventDefault();

    const plantElement = document.querySelector('.plant');
    if (!plantElement) return; // Проверка, что элемент существует

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
        setPoints(prevPoints => {
          const newPoints = prevPoints + coinsPerTap;
          if (newPoints >= coinsToLevelUp) {
            setLevel(prevLevel => {
              const newLevel = prevLevel + 1;
              setLevelUpNotification(`Congratulations, you have reached level ${newLevel}, keep going - airdrop soon`);
              setTimeout(() => setLevelUpNotification(''), 3000);
              return newLevel;
            });
            return newPoints - coinsToLevelUp;
          } else {
            return newPoints;
          }
        });

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
        }, 3000);
      }
    });
  };

  const handleButtonClick = (buttonId) => {
    console.log(`Button ${buttonId} clicked`);
    setActiveButton(buttonId);
    console.log(`Active button is now: ${buttonId}`);
  };

  const formatPoints = (points) => {
    if (points >= 1000000) {
      return (points / 1000000).toFixed(1) + 'M';
    }
    return points.toString();
  };

  const calculateLevelProgress = () => {
    return (points / coinsToLevelUp) * 100;
  };

  const handleTouchEnd = (event) => {
    event.preventDefault();
  };

  const renderContent = () => {
    if (activeButton === 'mine') {
      return (
        <div className="mine-page">
          <div className="quest">
            <div className="quest-icon">🌱</div>
            <div className="quest-details">
              <h2>Fertilizer</h2>
              <p>Level up to increase your profit per hour.</p>
            </div>
            <div className="quest-level">1/10</div>
          </div>
          <div className="quest">
            <div className="quest-icon">🌿</div>
            <div className="quest-details">
              <h2>Seeds</h2>
              <p>Level up to increase your profit per hour.</p>
            </div>
            <div className="quest-level">1/10</div>
          </div>
          <div className="quest">
            <div className="quest-icon">🌍</div>
            <div className="quest-details">
              <h2>Soil</h2>
              <p>Level up to increase your profit per hour.</p>
            </div>
            <div className="quest-level">1/10</div>
          </div>
          <div className="quest">
            <div className="quest-icon">💧</div>
            <div className="quest-details">
              <h2>Water</h2>
              <p>Level up to increase your profit per hour.</p>
            </div>
            <div className="quest-level">1/10</div>
          </div>
          <div className="quest">
            <div className="quest-icon">💡</div>
            <div className="quest-details">
              <h2>Lamps</h2>
              <p>Level up to increase your profit per hour.</p>
            </div>
            <div className="quest-level">1/10</div>
          </div>
        </div>
      );
    }

    return (
      <>
        <div className="plant-container">
          <div className="plant"></div>
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
        {levelUpNotification && (
          <div className="level-up-notification">
            <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '5px' }} />
            {levelUpNotification}
          </div>
        )}
      </>
    );
  };

  if (!backgroundLoaded) {
    return null;
  }

  return (
    <div className="App" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onTouchMove={(e) => e.preventDefault()}>
      <div className="header">
        <div className="header-top">
          <div className="header-col" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="avatar.png" alt="avatar" className="avatar" />
            <span className="username">{username}</span>
          </div>
          <div className="header-col">
            <FontAwesomeIcon icon={faEllipsisH} className="settings-icon" />
          </div>
        </div>
        <div className="header-bottom">
          <div className="coin-display">
            <img src="coin.png" alt="coin" className="coin" />
            <h1>{formatPoints(points)}</h1>
          </div>
          <div className="level-display">
            <div className="level-bar-container">
              <div className="level-bar" style={{ width: `${calculateLevelProgress()}%` }}></div>
            </div>
            <div className="level-text">Grower {level}/10</div>
          </div>
        </div>
      </div>
      {renderContent()}
      <div className="buttons-container">
        <div className={`button ${activeButton === 'exchange' ? 'active' : ''}`} id="exchange" onClick={() => handleButtonClick('exchange')}>
          <FontAwesomeIcon icon={faExchangeAlt} />
          Exchange
        </div>
        <div className={`button ${activeButton === 'mine' ? 'active' : ''}`} id="mine" onClick={() => handleButtonClick('mine')}>
          <FontAwesomeIcon icon={faHammer} />
          Mine
        </div>
        <div className={`button ${activeButton === 'friends' ? 'active' : ''}`} id="friends" onClick={() => handleButtonClick('friends')}>
          <FontAwesomeIcon icon={faUserFriends} />
          Friends
        </div>
        <div className={`button ${activeButton === 'earn' ? 'active' : ''}`} id="earn" onClick={() => handleButtonClick('earn')}>
          <FontAwesomeIcon icon={faHandHoldingUsd} />
          Earn
        </div>
        <div className={`button ${activeButton === 'airdrop' ? 'active' : ''}`} id="airdrop" onClick={() => handleButtonClick('airdrop')}>
          <FontAwesomeIcon icon={faCoins} />
          Airdrop
        </div>
      </div>
    </div>
  );
};

export default App;
