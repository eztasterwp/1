import React, { useState } from 'react';
import './Mine.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

function Mine({ onQuestClick }) {
  const initialQuests = [
    { id: 1, title: 'Купить воду', profit: 100, cost: 10, level: 0 },
    { id: 2, title: 'Купить удобрения', profit: 200, cost: 20, level: 0 },
    { id: 3, title: 'Купить семена', profit: 300, cost: 30, level: 0 },
    { id: 4, title: 'Купить землю', profit: 400, cost: 40, level: 0 },
    { id: 5, title: 'Заплатить налоги', profit: 500, cost: 50, level: 0 },
    { id: 6, title: 'Отправить товар в CoffeShop', profit: 600, cost: 60, level: 0 },
  ];

  const [quests, setQuests] = useState(initialQuests);

  const handleQuestClick = (questId) => {
    setQuests(prevQuests =>
      prevQuests.map(quest =>
        quest.id === questId
          ? {
              ...quest,
              level: quest.level + 1,
              cost: Math.floor(quest.cost * 1.5),
              profit: Math.floor(quest.profit * 1.5),
            }
          : quest
      )
    );
  };

  return (
    <div className="mine-container">
      <div className="tabs">
        <div className="tab active">Markets</div>
        <div className="tab">PR&Team</div>
        <div className="tab">Legal</div>
        <div className="tab">Specials</div>
      </div>
      <div className="quests">
        {quests.map((quest) => (
          <div className="quest" key={quest.id} onClick={() => handleQuestClick(quest.id)}>
            <div className="quest-header">
              <div className="quest-title">{quest.title}</div>
              <div className="quest-profit">Profit per hour <span>+{quest.profit}</span></div>
            </div>
            <div className="quest-level">lvl {quest.level}</div>
            <div className="quest-cost">
              <span>{quest.cost} <FontAwesomeIcon icon={faCoins} /></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mine;
