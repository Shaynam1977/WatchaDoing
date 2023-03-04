import React from "react";
import { Parallax } from "react-parallax";
function Portfolio() {
  return (
    <div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={"https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"}
        bgImageAlt="the dog"
        strength={-200}
    >
        Blur transition from min to max
        <div style={{ height: '600px' }} />
    </Parallax>
    </div>
  );
}

export default Portfolio;