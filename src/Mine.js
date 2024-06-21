import React from 'react';
import './Mine.css'; // Убедитесь, что CSS файл подключен правильно

const Mine = ({ points, quests }) => {
  return (
    <div className="mine-page">
      <div className="points-display">
        <h1>Mine</h1>
        <div className="points-info">
          <img src="coin.png" alt="points icon" className="points-icon" />
          <span className="points-text">{points}</span>
        </div>
      </div>
      <div className="quests-container">
        {quests.map(quest => (
          <div key={quest.id} className="quest-block">
            <div className="quest-title">{quest.title}</div>
            <div className="quest-details">Profit per hour: {quest.income}</div>
            <div className="quest-details">Level: {quest.level}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mine;
