import React from 'react';
import './Mine.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faSeedling, faHandHoldingUsd, faTruck, faFileInvoiceDollar, faLeaf, faCoins } from '@fortawesome/free-solid-svg-icons';

function Mine({ onQuestClick }) {
  const quests = [
    { title: 'Купить удобрения', cost: 10, income: 5, icon: faLeaf },
    { title: 'Купить грунт', cost: 20, income: 10, icon: faTint },
    { title: 'Купить семена', cost: 30, income: 15, icon: faSeedling },
    { title: 'Заплатить налоги', cost: 40, income: 20, icon: faFileInvoiceDollar },
    { title: 'Отправить товар в CoffeeShop', cost: 50, income: 25, icon: faTruck },
    { title: 'Купить лицензию', cost: 60, income: 30, icon: faHandHoldingUsd }
  ];

  return (
    <div className="mine-container">
      <div className="tabs">
        <div className="tab active">Markets</div>
        <div className="tab">PR&Team</div>
        <div className="tab">Legal</div>
        <div className="tab">Specials</div>
      </div>
      <div className="quests">
        {quests.map((quest, index) => (
          <div className="quest" key={index} onClick={() => onQuestClick(quest.title, quest.cost, quest.income)}>
            <div className="quest-header">
              <div className="quest-title">
                <FontAwesomeIcon icon={quest.icon} /> {quest.title}
              </div>
              <div className="quest-profit">Profit per hour <span>+{quest.income}</span></div>
            </div>
            <div className="quest-level">lvl 0</div>
            <div className="quest-cost">
              <span>{quest.cost} <FontAwesomeIcon icon={faCoins} /></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mine;
