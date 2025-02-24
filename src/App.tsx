import { useEffect, useState } from "react";
import "./App.css";
import { motion } from "motion/react";
import { Button } from "./components/ui/button";

function App() {
  const [enableAnimation, setEnableAnimation] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
    },
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/oneko.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      <div className='text-4xl font-extrabold lg:text-5xl text-white'>Happy Birthday</div>
      <Button
        style={{ padding: 8, color: "white" }}
        variant="outline"
        onClick={() => setEnableAnimation(true)}
      >
        Click me!
      </Button>
      <motion.div className="cursor" variants={variants} animate={"default"} />
      {enableAnimation && (
        <div className="kiki" style={{ width: "5rem", height: "5rem" }} />
      )}
    </div>
  );
}

export default App;
