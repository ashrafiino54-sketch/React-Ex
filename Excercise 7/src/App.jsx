import { useState, useEffect } from "react";

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    function trackMouse(event) {
      setX(event.clientX);
      setY(event.clientY);
    }

    window.addEventListener("mousemove", trackMouse);

    return () => {
      window.removeEventListener("mousemove", trackMouse);
    };
  }, []);

  return (
    <div>
      <h3>Mouse X: {x}</h3>
      <h3>Mouse Y: {y}</h3>
    </div>
)}

export default App
