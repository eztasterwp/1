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
              <FontAwesomeIcon icon={quest.icon} className="quest-icon" />
              <div className="quest-title">{quest.title}</div>
              <div className="quest-level">lvl {quest.level}</div>
            </div>
            <div className="quest-profit">Profit per hour: +{quest.income}</div>
            <div className="quest-details">
              <div className="quest-cost">
                {quest.cost}
                <FontAwesomeIcon icon={faCoins} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mine;
