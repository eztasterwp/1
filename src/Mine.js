import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import './Mine.css';

function Mine({ onQuestClick }) {
  return (
    <div className="mine-container">
      <div className="tabs">
        <div className="tab active">Markets</div>
        <div className="tab">PR&Team</div>
        <div className="tab">Legal</div>
        <div className="tab">Specials</div>
      </div>
      <div className="quests">
        <div className="quest" onClick={() => onQuestClick('Купить воду', 10)}>
          <div className="quest-header">
            <div className="quest-title">Купить воду</div>
            <div className="quest-profit">Profit per hour <span>+100</span></div>
          </div>
          <div className="quest-level">lvl 0</div>
          <div className="quest-cost">
            <span>10 <FontAwesomeIcon icon={faCoins} /></span>
          </div>
        </div>
        <div className="quest" onClick={() => onQuestClick('Купить удобрения', 20)}>
          <div className="quest-header">
            <div className="quest-title">Купить удобрения</div>
            <div className="quest-profit">Profit per hour <span>+200</span></div>
          </div>
          <div className="quest-level">lvl 0</div>
          <div className="quest-cost">
            <span>20 <FontAwesomeIcon icon={faCoins} /></span>
          </div>
        </div>
        <div className="quest" onClick={() => onQuestClick('Купить семена', 30)}>
          <div className="quest-header">
            <div className="quest-title">Купить семена</div>
            <div className="quest-profit">Profit per hour <span>+300</span></div>
          </div>
          <div className="quest-level">lvl 0</div>
          <div className="quest-cost">
            <span>30 <FontAwesomeIcon icon={faCoins} /></span>
          </div>
        </div>
        <div className="quest" onClick={() => onQuestClick('Купить землю', 40)}>
          <div className="quest-header">
            <div className="quest-title">Купить землю</div>
            <div className="quest-profit">Profit per hour <span>+400</span></div>
          </div>
          <div className="quest-level">lvl 0</div>
          <div className="quest-cost">
            <span>40 <FontAwesomeIcon icon={faCoins} /></span>
          </div>
        </div>
        <div className="quest" onClick={() => onQuestClick('Заплатить налоги', 50)}>
          <div className="quest-header">
            <div className="quest-title">Заплатить налоги</div>
            <div className="quest-profit">Profit per hour <span>+500</span></div>
          </div>
          <div className="quest-level">lvl 0</div>
          <div className="quest-cost">
            <span>50 <FontAwesomeIcon icon={faCoins} /></span>
          </div>
        </div>
        <div className="quest" onClick={() => onQuestClick('Отправить товар в CoffeShop', 60)}>
          <div className="quest-header">
            <div className="quest-title">Отправить товар в CoffeShop</div>
            <div className="quest-profit">Profit per hour <span>+600</span></div>
          </div>
          <div className="quest-level">lvl 0</div>
          <div className="quest-cost">
            <span>60 <FontAwesomeIcon icon={faCoins} /></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mine;
