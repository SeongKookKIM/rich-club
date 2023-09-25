import React from "react";
import { Section } from "react-fullpage";
import Slide from "../SlideComponents/Slide";

function Tip() {
  const data = [
    {
      src: "/assets/image/NFT/Tip/Gold.png",
      title: "Gold",
      description:
        "Pay what you can offer that is shiny and valuable. They will be happy with it.",
    },
    {
      src: "/assets/image/NFT/Tip/Skull.png",
      title: "Skull",
      description:
        "If you have no tips to offer, accept the curse. They will feel pity for you.",
    },
    {
      src: "/assets/image/NFT/Tip/Eyes.png",
      title: "zombie",
      description:
        "Please transplant your eyes. They will treat you with kindness.",
    },
    {
      src: "/assets/image/NFT/Tip/Soul stone.png",
      title: "Soul stone",
      description:
        "It doesn't have to be your soul. Pay with a mysterious stone. They will smile.",
    },
    {
      src: "/assets/image/NFT/Tip/Dagger.png",
      title: "Dagger",
      description:
        "Pay them in a hurry with daggers, even if you sign a blood contract.",
    },
    {
      src: "/assets/image/NFT/Tip/Candles.png",
      title: "Candles",
      description:
        "Tip them your candles that have your spiritual energy inside. They will be your best buddies.",
    },
  ];

  return (
    <Section className="tip">
      <div className="tip-inner">
        <Slide data={data} />
      </div>
    </Section>
  );
}

export default Tip;
