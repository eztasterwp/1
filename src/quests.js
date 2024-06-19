import React, { useState } from 'react';
import './Quests.css';

function Quests() {
  const [quests, setQuests] = useState([
    { id: 1, name: 'Удобрения', level: 0, cost: 10, profit: 50, maxLevel: 10 },
    { id: 2, name: 'Семена', level: 0, cost: 15, profit: 70, maxLevel: 10 },
    { id: 3, name: 'Земля', level: 0, cost: 20, profit: 90, maxLevel: 10 },
    { id: 4, name: 'Вода', level: 0, cost: 25, profit: 110, maxLevel: 10 },
    { id: 5, name: 'Лампы', level: 0, cost: 30, profit: 130, maxLevel: 10 },
  ]);

  const upgradeQuest = (questId) => {
    setQuests(prevQuests =>
      prevQuests.map(quest =>
        quest.id === questId && quest.level < quest.maxLevel
          ? { ...quest, level: quest.level + 1 }
          : quest
      )
    );
  };

  return (
    <div className="quests">
      {quests.map(quest => (
        <div key={quest.id} className="quest">
          <img src={`quest${quest.id}.png`} alt={quest.name} className="quest-icon" />
          <div className="quest-info">
            <h3>{quest.name}</h3>
            <p>Profit per hour: {quest.profit} 💨</p>
            <p>lvl {quest.level}/{quest.maxLevel}</p>
            <button
              onClick={() => upgradeQuest(quest.id)}
              disabled={quest.level >= quest.maxLevel}
            >
              {quest.level < quest.maxLevel ? `Upgrade for ${quest.cost} 💨` : 'Max level reached'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Quests;
