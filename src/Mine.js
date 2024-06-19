import React, { useState } from 'react';
import './Mine.css';

function Mine() {
  const [activeTab, setActiveTab] = useState('Markets');

  const quests = [
    { name: 'Fan tokens', profit: 950, cost: 10000, level: 0 },
    { name: 'Staking', profit: 600, cost: 7000, level: 0 },
    { name: 'BTC pairs', profit: 40, cost: 250, level: 0 },
    { name: 'ETH pairs', profit: 40, cost: 331, level: 1 },
    { name: 'Top 10 cmc pairs', profit: 80, cost: 1000, level: 0 },
    { name: 'GameFi tokens', profit: 70, cost: 500, level: 0 },
    { name: 'Defi2.0 tokens', profit: 40, cost: 250, level: 0 },
    { name: 'SocialFi tokens', profit: 50, cost: 800, level: 0 }
  ];

  return (
    <div className="mine-page">
      <div className="tabs">
        {['Markets', 'PR&Team', 'Legal', 'Specials'].map(tab => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="quests">
        {quests.map((quest, index) => (
          <div key={index} className="quest">
            <div className="quest-info">
              <h3>{quest.name}</h3>
              <p>Profit per hour: +{quest.profit}</p>
              <p>lvl {quest.level}</p>
            </div>
            <div className="quest-actions">
              <button>Upgrade</button>
              <p>{quest.cost}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mine;
