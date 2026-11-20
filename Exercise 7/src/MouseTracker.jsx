import { useState, useEffect } from "react";

const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);

    // for clean up

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div>
      <p>Mouse Position X: {position.x}</p>
      <p>Mouse Position Y: {position.y}</p>
    </div>
  );
};

export default MouseTracker;
