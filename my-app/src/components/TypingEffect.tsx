import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";

const TypingEffect = ({ text, reset }) => {
  return (
    <div key={reset}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(text)
            .start();
        }}
        options={{
          delay: 0.5,
          cursor: "",
        }}
      />
    </div>
  );
};

export default TypingEffect;

