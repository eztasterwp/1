import React from 'react';
import './Mine.css'; // Убедитесь, что CSS файл подключен правильно
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faClock, faLevelUpAlt } from '@fortawesome/free-solid-svg-icons';

const Mine = ({ points, quests, onQuestPurchase }) => {
  return (
    <div className="mine-page">
      <div className="points-display">
        <div className="points-info">
          <img src="coin.png" alt="points icon" className="points-icon" />
          <span className="points-text">{points}</span>
        </div>
      </div>
      <div className="quests-container">
        {quests.map(quest => (
          <div key={quest.id} className="quest-block" onClick={() => onQuestPurchase(quest.id)}>
            <div className="quest-title">{quest.title}</div>
            <div className="quest-details">
              <FontAwesomeIcon icon={faClock} className="quest-icon" />
              Profit per hour: {quest.income}
            </div>
            <div className="quest-details">
              <FontAwesomeIcon icon={faLevelUpAlt} className="quest-icon" />
              Level: {quest.level}
            </div>
            <div className="quest-details">
              <FontAwesomeIcon icon={faCoins} className="quest-icon" />
              Cost: {quest.cost}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mine;
