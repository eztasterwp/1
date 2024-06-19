import React from 'react';
import './Mine.css'; // Создайте и используйте стили для страницы Mine

const Mine = () => {
  return (
    <div className="mine">
      <div className="mine-header">
        <div className="mine-tabs">
          <div className="mine-tab">Удобрения</div>
          <div className="mine-tab">Семена</div>
          <div className="mine-tab">Земля</div>
          <div className="mine-tab">Вода</div>
          <div className="mine-tab">Лампы</div>
        </div>
      </div>
      <div className="mine-content">
        {/* Пример квестов */}
        <div className="quest">
          <div className="quest-title">Удобрения</div>
          <div className="quest-progress">1/10</div>
          <div className="quest-reward">+50 очков/час</div>
          <button className="quest-button">Купить за 10 очков</button>
        </div>
        <div className="quest">
          <div className="quest-title">Семена</div>
          <div className="quest-progress">0/10</div>
          <div className="quest-reward">+30 очков/час</div>
          <button className="quest-button">Купить за 5 очков</button>
        </div>
        {/* Добавьте остальные квесты аналогично */}
      </div>
    </div>
  );
};

export default Mine;
