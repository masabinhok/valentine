"use client"
import { useEffect, useRef, useState } from "react";

export default function useDrag() {
  const dragContainerRef = useRef<HTMLDivElement | null>(null);
  const [constraints, setConstraints] = useState({ top: 0, left: 0, right: 0, bottom: 0 });

  useEffect(() => {
    const updateConstraints = () => {
      if (dragContainerRef.current) {
        const container = dragContainerRef.current.getBoundingClientRect();
        setConstraints({
          top: -container.top + 10,
          left: -container.left + 10,
          right: container.width - 150,
          bottom: container.height - 150,
        });
      }
    }
    updateConstraints();
    window.addEventListener("resize", updateConstraints);

    return () => window.removeEventListener("resize", updateConstraints);
  }, [])

  return { dragContainerRef, constraints };
}