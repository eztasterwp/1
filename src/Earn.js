import React, { useState } from 'react';
import './Earn.css';

const items = [
  { id: 1, name: 'Item 1', image: 'image1.png' },
  { id: 2, name: 'Item 2', image: 'image2.png' },
  { id: 3, name: 'Item 3', image: 'image3.png' },
  { id: 4, name: 'Item 4', image: 'image4.png' },
  { id: 5, name: 'Item 5', image: 'image5.png' },
];

const Earn = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isRolling, setIsRolling] = useState(false);

  const startRolling = () => {
    setIsRolling(true);
    setSelectedItem(null);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * items.length);
      setSelectedItem(items[randomIndex]);
      setIsRolling(false);
    }, 3000); // Длительность анимации
  };

  return (
    <div className="earn-page">
      <h2>Open Your Case</h2>
      <div className="case-container">
        <div className={`case-items ${isRolling ? 'rolling' : ''}`}>
          {items.map(item => (
            <div key={item.id} className="case-item">
              <img src={process.env.PUBLIC_URL + '/' + item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <button onClick={startRolling} disabled={isRolling}>Open Case</button>
      {selectedItem && (
        <div className="selected-item">
          <h3>Congratulations! You got:</h3>
          <img src={process.env.PUBLIC_URL + '/' + selectedItem.image} alt={selectedItem.name} />
          <p>{selectedItem.name}</p>
        </div>
      )}
    </div>
  );
};

export default Earn;
