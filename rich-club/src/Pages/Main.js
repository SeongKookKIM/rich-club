import React from "react";
import { Section } from "react-fullpage";

function Main() {
  return (
    <Section className="main">
      <div className="main-inner">
        <div className="main-content">
          <p>This is a private space for the rich.</p>
          <p>We offer special services</p>
          <p>beyond the imagination of the common people.</p>
          <p>If you're not a millionaire, please leave this page.</p>
          <p>But, if you are a millionaire, prove it to us.</p>
          <p>Are you a millionaire?</p>
        </div>
        <div className="main-enter">
          <img src="/assets/image/Butten_Enter.png" />
        </div>
      </div>
    </Section>
  );
}

export default Main;
