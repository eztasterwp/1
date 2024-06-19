import React from 'react';
import './Mine.css';

const Mine = () => {
  return (
    <div className="mine">
      <div className="mine-header">
        <div className="mine-tabs">
          <div className="mine-tab">Fertilizers</div>
          <div className="mine-tab">Seeds</div>
          <div className="mine-tab">Soil</div>
          <div className="mine-tab">Water</div>
          <div className="mine-tab">Lamps</div>
        </div>
      </div>
      <div className="mine-content">
        <div className="quest">
          <div className="quest-title">Fertilizers</div>
          <div className="quest-progress">lvl 1/10</div>
          <div className="quest-reward">+50/hr</div>
          <button className="quest-button">Upgrade</button>
        </div>
        <div className="quest">
          <div className="quest-title">Seeds</div>
          <div className="quest-progress">lvl 1/10</div>
          <div className="quest-reward">+50/hr</div>
          <button className="quest-button">Upgrade</button>
        </div>
        <div className="quest">
          <div className="quest-title">Soil</div>
          <div className="quest-progress">lvl 1/10</div>
          <div className="quest-reward">+50/hr</div>
          <button className="quest-button">Upgrade</button>
        </div>
        <div className="quest">
          <div className="quest-title">Water</div>
          <div className="quest-progress">lvl 1/10</div>
          <div className="quest-reward">+50/hr</div>
          <button className="quest-button">Upgrade</button>
        </div>
        <div className="quest">
          <div className="quest-title">Lamps</div>
          <div className="quest-progress">lvl 1/10</div>
          <div className="quest-reward">+50/hr</div>
          <button className="quest-button">Upgrade</button>
        </div>
      </div>
    </div>
  );
};

export default Mine;
