import React from 'react';
import './Mine.css'; // Убедитесь, что CSS файл подключен правильно

const Mine = ({ points, quests }) => {
  return (
    <div className="mine-page">
      <div className="points-display">
        <h1>Mine</h1>
        <div className="points-info">
          <img src="path/to/your/icon.png" alt="points icon" className="points-icon" />
          <span className="points-text">{points}</span>
        </div>
      </div>
      <div className="quests-container">
        {quests.map(quest => (
          <div key={quest.id} className="quest-block">
            <h3>{quest.title}</h3>
            <p>Profit per hour: {quest.income}</p>
            <p>Level: {quest.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mine;
