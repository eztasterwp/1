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
            <div className="quest-title">Fan tokens</div>
            <div className="quest-profit">Profit per hour <span>+950</span></div>
          </div>
          <div className="quest-level">lvl 0</div>
          <div className="quest-cost">
            <span>10K</span>
          </div>
        </div>
        <div className="quest">
          <div className="quest-header">
            <div className="quest-title">Staking</div>
            <div className="quest-profit">Profit per hour <span>+600</span></div>
          </div>
          <div className="quest-level">lvl 0</div>
          <div className="quest-cost">
            <span>KYC lvl 7</span>
          </div>
        </div>
        <div className="quest">
          <div className="quest-header">
            <div className="quest-title">BTC pairs</div>
            <div className="quest-profit">Profit per hour <span>+40</span></div>
          </div>
          <div className="quest-level">lvl 0</div>
          <div className="quest-cost">
            <span>250</span>
          </div>
        </div>
        <div className="quest">
          <div className="quest-header">
            <div className="quest-title">ETH pairs</div>
            <div className="quest-profit">Profit per hour <span>+40</span></div>
          </div>
          <div className="quest-level">lvl 1</div>
          <div className="quest-cost">
            <span>331</span>
          </div>
        </div>
        <div className="quest">
          <div className="quest-header">
            <div className="quest-title">Top 10 cmc pairs</div>
            <div className="quest-profit">Profit per hour <span>+80</span></div>
          </div>
          <div className="quest-level">lvl 0</div>
          <div className="quest-cost">
            <span>1K</span>
          </div>
        </div>
        <div className="quest">
          <div className="quest-header">
            <div className="quest-title">GameFi tokens</div>
            <div className="quest-profit">Profit per hour <span>+70</span></div>
          </div>
          <div className="quest-level">lvl 0</div>
          <div className="quest-cost">
            <span>HamsterTube lvl 4</span>
          </div>
        </div>
        <div className="quest">
          <div className="quest-header">
            <div className="quest-title">Defi2.0 tokens</div>
            <div className="quest-profit">Profit per hour <span>+40</span></div>
          </div>
          <div className="quest-level">lvl 0</div>
          <div className="quest-cost">
            <span>CEO lvl 2</span>
          </div>
        </div>
        <div className="quest">
          <div className="quest-header">
            <div className="quest-title">SocialFi tokens</div>
            <div className="quest-profit">Profit per hour <span>+50</span></div>
          </div>
          <div className="quest-level">lvl 0</div>
          <div className="quest-cost">
            <span>GameFi tokens lvl 11</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mine;
