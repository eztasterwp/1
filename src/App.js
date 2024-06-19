import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faHammer, faUserFriends, faHandHoldingUsd, faCoins, faEllipsisH, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Mine from './Mine';

function App() {
  const [points, setPoints] = useState(0);
  const [messages, setMessages] = useState([]);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [level, setLevel] = useState(1);
  const [coinsPerTap, setCoinsPerTap] = useState(2);
  const [coinsToLevelUp, setCoinsToLevelUp] = useState(50); // Уменьшил для тестирования
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
      tg.expand(); // Разворачивание приложения на полный экран
      setUsername(tg.initDataUnsafe.user ? tg.initDataUnsafe.user.username : 'User');
    }

    const preventSwipe = (e) => {
      e.preventDefault();
    };

    document.addEventListener('touchstart', preventSwipe, { passive: false });
    document.addEventListener('touchmove', preventSwipe, { passive: false });
    document.addEventListener('touchend', preventSwipe, { passive: false });

    return () => {
      document.removeEventListener('touchstart', preventSwipe);
      document.removeEventListener('touchmove', preventSwipe);
      document.removeEventListener('touchend', preventSwipe);
    };
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
        setPoints(prevPoints => {
          const newPoints = prevPoints + coinsPerTap;
          if (newPoints >= coinsToLevelUp) {
            setLevel(prevLevel => {
              const newLevel = prevLevel + 1;
              setLevelUpNotification(`Congratulations, you have reached level ${newLevel}, keep going - airdrop soon`);
              setTimeout(() => setLevelUpNotification(''), 3000); // Уведомление исчезает через 3 секунды
              return newLevel;
            });
            return newPoints - coinsToLevelUp; // Исправлено
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
        }, 3000); // Ускоряем анимацию до 3 секунд
      }
    });
  };

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
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

  if (!backgroundLoaded) {
    return null;
  }

  return (
    <Router>
      <div className="App" onTouchStart={handleTouchStart} onTouchMove={(e) => e.preventDefault()}>
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
        <div className="plant-container">
          <div className="plant"></div>
        </div>
        <div className="buttons-container">
          <div className={`button ${activeButton === 'exchange' ? 'active' : ''}`} id="exchange" onClick={() => handleButtonClick('exchange')} onTouchEnd={() => handleButtonClick('exchange')}>
            <FontAwesomeIcon icon={faExchangeAlt} />
            Exchange
          </div>
          <div className={`button ${activeButton === 'mine' ? 'active' : ''}`} id="mine" onClick={() => handleButtonClick('mine')} onTouchEnd={() => handleButtonClick('mine')}>
            <FontAwesomeIcon icon={faHammer} />
            Mine
          </div>
          <div className={`button ${activeButton === 'friends' ? 'active' : ''}`} id="friends" onClick={() => handleButtonClick('friends')} onTouchEnd={() => handleButtonClick('friends')}>
            <FontAwesomeIcon icon={faUserFriends} />
            Friends
          </div>
          <div className={`button ${activeButton === 'earn' ? 'active' : ''}`} id="earn" onClick={() => handleButtonClick('earn')} onTouchEnd={() => handleButtonClick('earn')}>
            <FontAwesomeIcon icon={faHandHoldingUsd} />
            Earn
          </div>
          <div className={`button ${activeButton === 'airdrop' ? 'active' : ''}`} id="airdrop" onClick={() => handleButtonClick('airdrop')} onTouchEnd={() => handleButtonClick('airdrop')}>
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
        {levelUpNotification && (
          <div className="level-up-notification">
            <FontAwesomeIcon icon={faCheckCircle} /> {levelUpNotification}
          </div>
        )}
        <Routes>
          <Route path="/mine" element={<Mine />} />
          <Route path="/" element={
            <div className="main-content">
              {/* Main content here */}
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
