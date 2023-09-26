import React, { useEffect, useRef } from "react";
import { Section } from "react-fullpage";

import gsap from "gsap";

function Main() {
  const textRef0 = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const textRef4 = useRef(null);
  const textRef5 = useRef(null);

  const MainRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef0.current, { opacity: 0, duration: 2, delay: 0.2 });
    gsap.from(textRef1.current, { opacity: 0, duration: 2, delay: 0.4 });
    gsap.from(textRef2.current, { opacity: 0, duration: 2, delay: 0.6 });
    gsap.from(textRef3.current, { opacity: 0, duration: 2, delay: 0.8 });
    gsap.from(textRef4.current, { opacity: 0, duration: 2, delay: 1 });
    gsap.from(textRef5.current, { opacity: 0, duration: 2, delay: 1.2 });
  }, []);

  return (
    <Section className="main">
      <div className="main-inner" ref={MainRef}>
        <div className="main-content">
          <p ref={textRef0}>This is a private space for the rich.</p>
          <p ref={textRef1}>We offer special services</p>
          <p ref={textRef2}>beyond the imagination of the common people.</p>
          <p ref={textRef3}>
            If you're not a millionaire, please leave this page.
          </p>
          <p ref={textRef4}>But, if you are a millionaire, prove it to us.</p>
          <p ref={textRef5}>Are you a millionaire?</p>
        </div>
        <div className="nft-link">
          <button type="button">
            <img src="/assets/image/open-sea.png" alt="opensea" />
            OPEN SEA
          </button>
          <button type="button">
            <img src="/assets/image/angry-monkey.png" alt="angry-monkey" />
            ANGRY MONKEY
          </button>
        </div>
      </div>
    </Section>
  );
}

export default Main;
