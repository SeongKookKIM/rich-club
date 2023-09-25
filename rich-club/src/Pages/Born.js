import React from "react";
import { Section } from "react-fullpage";
import Slide from "../SlideComponents/Slide";

function Born() {
  const data = [
    {
      src: "/assets/image/NFT/Born/triceratops.png",
      title: "triceratops",
      description:
        "A herbivorous dinosaur characterized by three horns on its head and a wide frill.",
    },
    {
      src: "/assets/image/NFT/Born/Ankylosaurus.png",
      title: "Ankylosaurus",
      description:
        "A herbivorous dinosaur with a body made of solid bones. like a tank. It has a solid club-like tail.",
    },
    {
      src: "/assets/image/NFT/Born/tyrannosaurus.png",
      title: "tyrannosaurus",
      description:
        "The top predator among carnivores, with long, well-developed hind legs and strong muscles.",
    },
    {
      src: "/assets/image/NFT/Born/dilophosaurus.png",
      title: "dilophosaurus",
      description:
        "A carnivorous dinosaur characterized by two bony crests on its head. It has a slender body and a long tail.",
    },
    {
      src: "/assets/image/NFT/Born/cryolophosaurus.png",
      title: "cryolophosaurus",
      description:
        "characterized by fan-shaped crests above the head. It is a carnivorous dinosaur found in Antarctica and called the 'cold lizard'.",
    },
    {
      src: "/assets/image/NFT/Born/corythosaurus.png",
      title: "corythosaurus",
      description:
        "It is called the helmeted lizard. It is a herbivorous dinosaur with a duck-like bill and a large crest on its head.",
    },
    {
      src: "/assets/image/NFT/Born/pachycephalosaurus.png",
      title: "pachycephalosaurus",
      description:
        "Also known as the thick-headed lizard. It is a herbivorous dinosaur with a thick dome head of 20cm.",
    },
  ];
  return (
    <Section className="born">
      <div className="born-inner">
        <Slide data={data} />
      </div>
    </Section>
  );
}

export default Born;
