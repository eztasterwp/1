import React from 'react';
import './Mine.css';

function Mine() {
  return (
    <div className="mine-container">
      <div className="tabs">
        <div className="tab active">Markets</div>
        <div className="tab">PR&Team</div>
        <div className="tab">Legal</div>
        <div className="tab">Specials</div>
      </div>
      <div className="quests">
        <div className="quest">
          <div className="quest-header">
            <div className="quest-title">Купить воду</div>
            <div className="quest-profit">Profit per hour <span>+100</span></div>
          </div>
          <div className="quest-level">lvl 0</div>
          <div className="quest-cost">
            <span>10</span>
          </div>
        </div>
        <div className="quest">
          <div className="quest-header">
            <div className="quest-title">Купить удобрения</div>
            <div className="quest-profit">Profit per hour <span>+200</span></div>
          </div>
          <div className="quest-level">lvl 0</div>
          <div className="quest-cost">
            <span>20</span>
          </div>
        </div>
        <div className="quest">
          <div className="quest-header">
            <div className="quest-title">Купить семена</div>
            <div className="quest-profit">Profit per hour <span>+300</span></div>
          </div>
          <div className="quest-level">lvl 0</div>
          <div className="quest-cost">
            <span>30</span>
          </div>
        </div>
        <div className="quest">
          <div className="quest-header">
            <div className="quest-title">Купить землю</div>
            <div className="quest-profit">Profit per hour <span>+400</span></div>
          </div>
          <div className="quest-level">lvl 0</div>
          <div className="quest-cost">
            <span>40</span>
          </div>
        </div>
        <div className="quest">
          <div className="quest-header">
            <div className="quest-title">Заплатить налоги</div>
            <div className="quest-profit">Profit per hour <span>+500</span></div>
          </div>
          <div className="quest-level">lvl 0</div>
          <div className="quest-cost">
            <span>50</span>
          </div>
        </div>
        <div className="quest">
          <div className="quest-header">
            <div className="quest-title">Отправить товар в CoffeShop</div>
            <div className="quest-profit">Profit per hour <span>+600</span></div>
          </div>
          <div className="quest-level">lvl 0</div>
          <div className="quest-cost">
            <span>60</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mine;
