import React from 'react';
import './QuestPage.css';

function QuestPage() {
  return (
    <div className="quest-page">
      <div className="quest-header">
        <div className="quest-category">Удобрения</div>
        <div className="quest-category">Семена</div>
        <div className="quest-category">Земля</div>
        <div className="quest-category">Вода</div>
        <div className="quest-category">Лампы</div>
      </div>
      <div className="quest-list">
        <div className="quest-item">
          <img src="fertilizer.png" alt="fertilizer" className="quest-icon" />
          <div className="quest-details">
            <div className="quest-title">Уровень 1/10</div>
            <div className="quest-progress">Получено: 50 очков в час</div>
            <div className="quest-level">Стоимость: 10 очков</div>
          </div>
          <button className="quest-action">Купить</button>
        </div>
        {/* Add more quest items as needed */}
      </div>
    </div>
  );
}

export default QuestPage;
