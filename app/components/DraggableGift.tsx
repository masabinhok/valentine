"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react"; 
import Image, { StaticImageData } from "next/image";

const DraggableGift = ({ giftProp }: { giftProp: StaticImageData | string }) => {
  const dragContainerRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ top: 0, left: 0, right: 0, bottom: 0 });

  useEffect(() => {
    const updateConstraints = () => {
      if (dragContainerRef.current) {
        const container = dragContainerRef.current.getBoundingClientRect();
        setConstraints({
          top: -container.top + 10 ,
          left: -container.left + 10,
          right: container.width - 150, 
          bottom: container.height - 150,
        });
      }
    };

    updateConstraints(); 
    window.addEventListener("resize", updateConstraints); 

    return () => window.removeEventListener("resize", updateConstraints); 
  }, []);

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
