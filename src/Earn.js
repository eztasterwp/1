import React, { useState, useRef } from 'react';
import './Earn.css';

const items = [
  { id: 1, name: 'Item 1', image: 'image1.png' },
  { id: 2, name: 'Item 2', image: 'image2.png' },
  { id: 3, name: 'Item 3', image: 'image3.png' },
  { id: 4, name: 'Item 4', image: 'image4.png' },
  { id: 5, name: 'Item 5', image: 'image5.png' },
];

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const Earn = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isRolling, setIsRolling] = useState(false);
  const caseRef = useRef(null);

  const startRolling = () => {
    setIsRolling(true);
    setSelectedItem(null);
    const shuffledItems = shuffleArray([...items, ...items, ...items, ...items]);

    caseRef.current.innerHTML = '';
    shuffledItems.forEach((item, index) => {
      const div = document.createElement('div');
      div.className = 'case-item';
      div.innerHTML = `<img src="${process.env.PUBLIC_URL + '/' + item.image}" alt="${item.name}" /><p>${item.name}</p>`;
      caseRef.current.appendChild(div);
    });

    const totalItems = items.length;
    const randomIndex = Math.floor(Math.random() * totalItems);

    caseRef.current.style.transition = 'none';
    caseRef.current.style.transform = 'translateX(0)';

    setTimeout(() => {
      caseRef.current.style.transition = 'transform 1s cubic-bezier(0.4, 0, 0.2, 1) 0s, transform 2s ease-out 1s';
      caseRef.current.style.transform = `translateX(-${(shuffledItems.length - totalItems + randomIndex) * 100}px)`;

      setTimeout(() => {
        setSelectedItem(items[randomIndex]);
        setIsRolling(false);
        caseRef.current.style.transition = 'none';
        caseRef.current.style.transform = 'translateX(0)';
      }, 3000);
    }, 50);
  };

  return (
    <div className="earn-page">
      <h2>Open Your Case</h2>
      <div className="case-container">
        <div className="case-items" ref={caseRef}></div>
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
