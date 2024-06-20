import React from 'react';
import './Mine.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import seedsImage from './images/seeds.png';
import soilImage from './images/soil.png';
import fertilizerImage from './images/fertilizer.png';
import taxImage from './images/tax.png';
import deliveryImage from './images/delivery.png';
import licenseImage from './images/license.png';

// Добавьте другие изображения квестов аналогично

const questBackgrounds = {
  'Купить семена': seedsImage,
  'Купить грунт': soilImage,
  'Купить удобрения': fertilizerImage,
  'Заплатить налоги': taxImage,
  'Отправить товар в CoffeeShop': deliveryImage,
  'Купить лицензию': licenseImage,
  // Добавьте остальные квесты и соответствующие им изображения
};

function Mine({ onQuestPurchase, points, quests }) {
  const handleQuestPurchase = (quest) => {
    if (points >= quest.cost) {
      onQuestPurchase(quest.id);
    } else {
      alert('Недостаточно очков для выполнения квеста.');
    }
  };

  return (
    <div className="mine-container">
      <div className="quests">
        {quests.map((quest) => (
          <div
            className="quest"
            key={quest.id}
            onClick={() => handleQuestPurchase(quest)}
            style={{ backgroundImage: `url(${questBackgrounds[quest.title]})` }}
          >
            <div className="quest-content">
              <div className="quest-header">
                <FontAwesomeIcon icon={quest.icon} className="quest-icon" />
                <div className="quest-title">{quest.title}</div>
              </div>
              <div className="quest-profit">Profit per hour: +{quest.income}</div>
              <div className="quest-details">
                <div className="quest-level">lvl {quest.level}</div>
                <div className="quest-cost">
                  {quest.cost}
                  <FontAwesomeIcon icon={faCoins} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mine;
