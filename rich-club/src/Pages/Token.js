import React, { useLayoutEffect } from "react";
import { Section } from "react-fullpage";
import Slide from "../SlideComponents/Slide";

function Token() {
  const data = [
    {
      src: "/assets/image/NFT/Token/8poisoning.png",
      title: "poisoning",
      description:
        "This token prevents death from toxicity of snakes, mushrooms, and various drugs. Shield yourself from a silent death.",
    },
    {
      src: "/assets/image/NFT/Token/5aging.png",
      title: "aging",
      description:
        "This token prevents death from aging. Make sure you secure time to say hello to your family.",
    },
    {
      src: "/assets/image/NFT/Token/12zombie.png",
      title: "zombie",
      description:
        "This token allows you to withstand a virus infection in the event of a zombie crisis and is immune to the virus. Be the savior of the zombie world.",
    },
    {
      src: "/assets/image/NFT/Token/1assassination.png",
      title: "assassination",
      description:
        "This token allows you to withstand a virus infection in the event of a zombie crisis and is immune to the virus. Be the savior of the zombie world.",
    },
    {
      src: "/assets/image/NFT/Token/2brain.png",
      title: "brain",
      description:
        "This token prevents death from stroke, concussion, etc. It is recommended for those who often feel headaches.",
    },
    {
      src: "/assets/image/NFT/Token/3fire.png",
      title: "fire",
      description:
        "This token prevents you from burning to death. Recommended for people who are vulnerable to heat.",
    },
    {
      src: "/assets/image/NFT/Token/4freeze.png",
      title: "freeze",
      description:
        "This token prevents you from freezing to death. Recommended for people who get cold easily.",
    },
    {
      src: "/assets/image/NFT/Token/13heart.png",
      title: "heart",
      description:
        "This token prevents death from heart disease such as heart attack, high blood pressure, etc. Protect yourself from sudden death.",
    },
    {
      src: "/assets/image/NFT/Token/7lightning.png",
      title: "lightning",
      description:
        "This token prevents you from being struck by thunder. If you are guilty of many crimes, secure them secretly.",
    },
    {
      src: "/assets/image/NFT/Token/9lung.png",
      title: "lung",
      description:
        "This token prevents death from lung disease. Recommended for smokers.",
    },
    {
      src: "/assets/image/NFT/Token/11meteorite.png",
      title: "meteorite",
      description:
        "This token prevents an accident that hits a meteorite that enters the atmosphere. Watch out for hot meteorite.",
    },
    {
      src: "/assets/image/NFT/Token/10TrafficAccident.png",
      title: "TrafficAccident",
      description:
        "This token prevents possible accidents that might occur on the road. Experience the limits of speed.",
    },
  ];

  useLayoutEffect(() => {
    const tokenElement = document.querySelector(".token");
    const tokenRect = tokenElement.getBoundingClientRect();
    console.log(tokenRect.top);

    if (tokenRect.top <= 0) {
      document.querySelector(".wrapper ").classList.remove("hide");
      document.querySelector(".wrapper-bg ").style.opacity = 1;
    } else {
      document.querySelector(".wrapper ").classList.add("hide");
      document.querySelector(".wrapper-bg ").style.opacity = 0;
    }
  });

  return (
    <Section className="token">
      <div className="token-inner">
        <Slide data={data} />
      </div>
    </Section>
  );
}

export default Token;
