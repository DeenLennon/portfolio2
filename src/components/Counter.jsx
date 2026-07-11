import { useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Counter = ({ from = 0, to, text, suffix = "+" }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const controls = animate(from, to, {
      duration: 2.5,
      ease: "easeOut",
      onUpdate: (value) => {
        setCount(Math.floor(value));
      }
    });

    return () => controls.stop();
  }, [isInView, from, to]);

  return (
    <div className="counter" ref={ref}>
      <h1>{count}{suffix}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Counter;
