import React from "react";
import { Parallax } from "react-parallax";
function Portfolio() {
  return (
    <div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={"https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=2000"}
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