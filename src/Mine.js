import React from 'react';
import './Mine.css';

const Mine = () => {
  return (
    <div className="mine">
      <div className="mine-header">
        <button className="mine-tab active">Удобрения</button>
        <button className="mine-tab">Семена</button>
        <button className="mine-tab">Земля</button>
        <button className="mine-tab">Вода</button>
        <button className="mine-tab">Лампы</button>
      </div>
      <div className="mine-content">
        {/* Add your quest content here */}
        <div className="quest">
          <img src="fertilizer.png" alt="Удобрения" className="quest-icon" />
          <div className="quest-details">
            <h3>Удобрения</h3>
            <p>Очки за час: +50</p>
            <button className="quest-action">Улучшить за 10 очков</button>
          </div>
        </div>
        {/* Add more quests as needed */}
      </div>
    </div>
  );
};

export default Mine;
