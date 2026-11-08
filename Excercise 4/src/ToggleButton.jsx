
import { useState } from "react";

const ToggleButton = () => {
  const [isTurn, setIsTurn] = useState(true);

  return (
    <>
      <p>The Button is Turn {isTurn ? "OFF" : "ON"}</p>

      <button onClick={() => setIsTurn(!isTurn)}>
        Turn {isTurn ? "ON" : "OFF"}
      </button>
    </>
  );
};

export default ToggleButton;