import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

function App() {
  const [points, setPoints] = useState(0);
  const [messages, setMessages] = useState([]);
  const [smokes, setSmokes] = useState([]);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [coinsPerTap, setCoinsPerTap] = useState(2);

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
    <Router>
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
        <Switch>
          <Route path="/" exact>
            <Home handleButtonClick={handleButtonClick} />
          </Route>
          <Route path="/exchange">
            <PlaceholderPage text="Exchange Page - Under Development" />
          </Route>
          <Route path="/mine">
            <PlaceholderPage text="Mine Page - Under Development" />
          </Route>
          <Route path="/friends">
            <PlaceholderPage text="Friends Page - Under Development" />
          </Route>
          <Route path="/earn">
            <PlaceholderPage text="Earn Page - Under Development" />
          </Route>
        </Switch>
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
    </Router>
  );
}

function Home({ handleButtonClick }) {
  return (
    <div className="buttons-container">
      <Link to="/exchange" className="button" onClick={handleButtonClick}>
        <i className="fas fa-exchange-alt"></i> Exchange
      </Link>
      <Link to="/mine" className="button" onClick={handleButtonClick}>
        <i className="fas fa-coins"></i> Mine
      </Link>
      <Link to="/friends" className="button" onClick={handleButtonClick}>
        <i className="fas fa-user-friends"></i> Friends
      </Link>
      <Link to="/earn" className="button" onClick={handleButtonClick}>
        <i className="fas fa-hand-holding-usd"></i> Earn
      </Link>
    </div>
  );
}

function PlaceholderPage({ text }) {
  return (
    <div className="placeholder-page">
      <h1>{text}</h1>
    </div>
  );
}

export default App;
