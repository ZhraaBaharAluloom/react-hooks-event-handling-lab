import React from "react";

const EyesOnMe = () => {
  const handleButton = (focusEvent) => {
    console.log(focusEvent);
  };

  return (
    <div>
      <button
        onFocus={() => handleButton("Good!")}
        onBlur={() => handleButton("Hey! Eyes on me!")}
      >
        Eyes on me
      </button>
    </div>
  );
};

export default EyesOnMe;
