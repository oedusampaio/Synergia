import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./TiltedCard.css";

const springValues = {
  damping: 30,
  stiffness: 100,
};

export default function TiltedCard({ children, className = "" }) {
  const cardRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(mouseY, springValues);
  const rotateY = useSpring(mouseX, springValues);

  function handleMouseMove(e) {
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const rotateYValue = ((mouseXPos - width / 2) / width) * 10;
    const rotateXValue = ((mouseYPos - height / 2) / height) * 10;

    mouseX.set(rotateYValue);
    mouseY.set(-rotateXValue);
  }

  function handleMouseEnd() {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  }

  return (
    <motion.div
      ref={cardRef}
      className={`tilted-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseEnd}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
}