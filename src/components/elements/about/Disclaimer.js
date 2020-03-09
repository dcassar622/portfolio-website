import React from "react";
import "../../sass/about.scss";

const Disclaimer = () => {
  return (
    <div id="disclaimer-container">
      <section id="disclaimer-section">
        <p className="explanation">
          <sup>*</sup> One of the things that I love most about web development
          is the sheer depth of material that comes with learning and using each
          and every single language, framework and library. Therefore the term
          'knowing' here refers more to a good level of comfort and confidence
          using the listed items, rather than a complete mastery of the subject.
          I learn something new pretty much every time I sit down to code, even
          if I'm quite familiar with the language or framework, and this is
          actually one of the things that makes being in the development space
          so exciting for me!
        </p>
        <br />
        <p className="explanation">
          <sup>**</sup> During my 3 years at university, I coded in Java every
          day (my final year thesis was a neural network built in Java). Sadly,
          it's true that if you don't use it, you lose it, so my Java skills are
          currently abysmally rusty. However, my hope is that it's (as they say)
          like riding a bike, and when I pick it back up it will start coming
          back to me without picking up too many cuts and bruises along the way
        </p>
      </section>
    </div>
  );
};

export default Disclaimer;
