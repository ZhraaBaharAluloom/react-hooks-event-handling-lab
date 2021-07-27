import React from "react";

const Keypad = () => {
  const handlePassword = (event) => {
    console.log(event);
  };

  return (
    <div>
      <input
        type="password"
        name="password"
        onChange={() => handlePassword("Entering password...")}
      />
    </div>
  );
};

export default Keypad;
