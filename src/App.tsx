import { useEffect, useState } from 'react';
import './App.css'
import { motion } from 'motion/react';

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  }

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/oneko.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='App'>
      Happy Birthday
      <motion.div
        className='cursor'
        variants={variants}
        animate={"default"}
      />
    </div>
  )
}

export default App
