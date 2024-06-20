import React, { useState } from 'react';
import './Mine.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faSeedling, faHandHoldingUsd, faTruck, faFileInvoiceDollar, faLeaf, faCoins } from '@fortawesome/free-solid-svg-icons';

function Mine({ onQuestClick }) {
  const initialQuests = [
    { id: 1, title: 'Купить удобрения', cost: 10, income: 5, level: 0, icon: faLeaf },
    { id: 2, title: 'Купить грунт', cost: 20, income: 10, level: 0, icon: faTint },
    { id: 3, title: 'Купить семена', cost: 30, income: 15, level: 0, icon: faSeedling },
    { id: 4, title: 'Заплатить налоги', cost: 40, income: 20, level: 0, icon: faFileInvoiceDollar },
    { id: 5, title: 'Отправить товар в CoffeeShop', cost: 50, income: 25, level: 0, icon: faTruck },
    { id: 6, title: 'Купить лицензию', cost: 60, income: 30, level: 0, icon: faHandHoldingUsd }
  ];

  const [quests, setQuests] = useState(initialQuests);

  const handleQuestPurchase = (quest) => {
    onQuestClick(quest);
  };

  return (
    <div className="mine-container">
      <div className="tabs">
        <div className="tab active">Markets</div>
        <div className="tab">PR&Team</div>
        <div className="tab">Legal</div>
        <div className="tab">Specials</div>
      </div>
      <div className="quests">
        {quests.map((quest) => (
          <div className="quest" key={quest.id} onClick={() => handleQuestPurchase(quest)}>
            <div className="quest-header">
              <div className="quest-title">
                <FontAwesomeIcon icon={quest.icon} /> {quest.title}
              </div>
              <div className="quest-profit">Profit per hour <span>+{quest.income}</span></div>
            </div>
            <div className="quest-level">lvl {quest.level}</div>
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
