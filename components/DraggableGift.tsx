
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import useDrag from "../hooks/useDrag";
import { useState } from "react";

const DraggableGift = ({ giftProp, opens = false }: { giftProp: StaticImageData | string, opens?: boolean }) => {
  const { dragContainerRef, constraints } = useDrag();
  const [letterVisible, setLetterVisible] = useState<boolean>(false);

  return (
    <div ref={dragContainerRef} className="absolute w-full h-screen overflow-hidden ">
      <motion.div
        drag
        dragConstraints={constraints}
        whileHover={{ scale: 1.1 }}
        whileDrag={{ scale: 0.9, rotate: 10 }}
        whileTap={{ cursor: "grabbing", scale: 1.1 }}
        className="cursor-grab w-36 h-36 absolute z-20 "
        onClick={() => {
          if (opens) {
            setLetterVisible(true);
          }
        }}
      >
        <Image
          src={giftProp}
          alt="draggable"
          width={144}
          height={144}
          draggable={false}
          className="w-full h-full"
        />
      </motion.div>
      {letterVisible && (<div className="relative p-5 rounded-lg shadow-lg h-screen w-full">
        <div className="absolute max-w-[380px] bg-candy/20  p-10 rounded-sm right-10 font-pacifico ">
          Hiiii,

          I don’t really know how to say this without sounding silly, but here goes nothing, I guess.
          I have the softest, most innocent little crush on you. I catch myself wondering how your day was, hoping it was filled with smiles. Sometimes, I imagine running into you by accident (or maybe not by accident), just to steal a moment of your time.

          When you achieve something amazing, I want to be the first to say congratulations and celebrate with you. And when I see you, even if it’s just for a second, my heart does this tiny, excited jump that I pretend isn’t happening.

          I know I’ve missed chances to say more, to do more, but for now, I just want you to know, you make the world a little brighter just by being in it.

          That’s all.

        </div>
      </div>)}

    </div>
  );
};

export default DraggableGift;
