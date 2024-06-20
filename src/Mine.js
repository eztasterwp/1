import React from 'react';
import './Mine.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

function Mine({ onQuestPurchase, points, quests }) {
  const handleQuestPurchase = (quest) => {
    if (points >= quest.cost) {
      onQuestPurchase(quest.id);
    } else {
      alert('Недостаточно очков для выполнения квеста.');
    }
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
          <div className="quest" key={quest.id} onClick={() => handleQuestPurchase(quest)}>
            <div className="quest-header">
              <div className="quest-title">
                <FontAwesomeIcon icon={quest.icon} /> {quest.title}
              </div>
              <div className="quest-profit">Profit per hour <span>+{quest.income}</span></div>
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
