import React from "react";
import { Section } from "react-fullpage";
import Slide from "../SlideComponents/Slide";

function Bless() {
  const data = [
    {
      src: "/assets/image/NFT/G-bless/Pharaoh.png",
      title: "Pharaoh",
      description: "Enjoy the sparkling blessings of the generous Buddha.",
    },
    {
      src: "/assets/image/NFT/G-bless/genie.png",
      title: "genie",
      description: "It will make your wish come true.",
    },
    {
      src: "/assets/image/NFT/G-bless/Ganesha.png",
      title: "Ganesha",
      description: "It will bring you dazzling good luck.",
    },
    {
      src: "/assets/image/NFT/G-bless/Elon_Musk.png",
      title: "Elon_Musk",
      description: "Dream of a shining future with him.",
    },
    {
      src: "/assets/image/NFT/G-bless/Great_Sage.png",
      title: "Great_Sage",
      description:
        "The Great Sage Heaven's Equal. He will satisfy you with his brilliant magical tricks.",
    },
    {
      src: "/assets/image/NFT/G-bless/oil_money.png",
      title: "oil_money",
      description: "Enjoy a luxurious life with him.",
    },
    {
      src: "/assets/image/NFT/G-bless/Anubis.png",
      title: "Anubis",
      description: "He will share the offerings of the dead with you.",
    },
    {
      src: "/assets/image/NFT/G-bless/jesus.png",
      title: "jesus",
      description: "He will save you with his grace.",
    },
    {
      src: "/assets/image/NFT/G-bless/Tony_Stark.png",
      title: "Tony_Stark",
      description: "Express yourself with confidence like him.",
    },
    {
      src: "/assets/image/NFT/G-bless/Pharaoh.png",
      title: "Pharaoh",
      description: "Enjoy the taste of power and gold with him.",
    },
  ];
  return (
    <Section className="bless">
      <div className="bless-inner">
        <Slide data={data} />
      </div>
    </Section>
  );
}

export default Bless;
