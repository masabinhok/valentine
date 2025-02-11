
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import useDrag from "../hooks/useDrag";

const DraggableGift = ({ giftProp }: { giftProp: StaticImageData | string }) => {
  const { dragContainerRef, constraints } = useDrag();

  return (
    <div ref={dragContainerRef} className="absolute w-full h-screen overflow-hidden ">
      <motion.div
        drag
        dragConstraints={constraints}
        whileTap={{ cursor: "grabbing" }}
        whileDrag={{ scale: 1.2 }}
        className="cursor-grab w-36 h-36 absolute z-20 "
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
    </div>
  );
};

export default DraggableGift;
