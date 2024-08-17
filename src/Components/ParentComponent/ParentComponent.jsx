import React, { useState } from "react";
import About from "./Components/About/About"; // Correct path to About.jsx

const ParentComponent = () => {
  const [playState, setPlayState] = useState(false); // Manage playState here

  return (
    <div>
      <About setPlayState={setPlayState} playState={playState} />
    </div>
  );
};

export default ParentComponent;
