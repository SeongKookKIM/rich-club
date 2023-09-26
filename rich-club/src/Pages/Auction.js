import React from "react";
import { Section } from "react-fullpage";

function Auction() {
  return (
    <Section className="auction">
      <div className="auction-inner">
        <div className="auction-coin">
          <img src="/assets/image/Auction_light.png" alt="Auction_light" />
          <img src="/assets/image/Auction_Coin.png" alt="Auction_Coin" />
        </div>
        <div className="auction-content">
          <strong>AUCTION</strong>
          <p>
            Collection ancient golden dinosaur bones, that are extreamely
            difficult town. It would be perfect to express your wealth
          </p>
        </div>
        <div className="enter">
          <img src="/assets/image/Butten_Enter.png" alt="Butten_Enter" />
        </div>
      </div>
    </Section>
  );
}

export default Auction;
