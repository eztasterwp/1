import React from 'react';
import './QuestPage.css';

const QuestPage = () => {
  return (
    <div className="quest-page">
      <div className="quest-header">
        <div className="quest-category active">Fertilizers</div>
        <div className="quest-category">Seeds</div>
        <div className="quest-category">Soil</div>
        <div className="quest-category">Water</div>
        <div className="quest-category">Lamps</div>
      </div>
      <div className="quest-list">
        {/* Пример квеста */}
        <div className="quest-item">
          <img src="fertilizer.png" alt="Fertilizer" className="quest-icon" />
          <div className="quest-details">
            <div className="quest-title">Fertilizer</div>
            <div className="quest-progress">Profit per hour: +50</div>
            <div className="quest-level">Level 1/10</div>
          </div>
          <button className="quest-action">Buy for 10 coins</button>
        </div>
        {/* Добавьте другие квесты здесь */}
      </div>
    </div>
  );
}

export default QuestPage;
