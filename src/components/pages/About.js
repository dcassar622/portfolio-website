import React from "react";
import { Redirect, Link } from "react-router-dom";
import "../sass/about.scss";
import me from "../../../src/images/me.jpg";

const About = () => {
  return (
    <div id="about-page-container" className="page-container slide-in-page">
      <div id="info-container">
        <section id="bio-section">
          <h1>Who Why</h1>
          <br />
          <p>
            At age 14, I had my first experience with computer code... all my
            friends were learning it, so naturally, I wanted to do the same (yay
            peer pressure!). The first time I changed a blank white screen to an
            eye-watering red in Pascal, I felt like I'd figured out the secrets
            of the universe... needless to say, I was hooked. Fast forward to
            2011, and I had graduated with a Bachelors Degree in Creative
            Computing from Goldsmiths University Of London. <br /> <br /> After
            this deeply fulfilling but also consuming experience, I felt like I
            needed a bit of a change for a while. So I worked professionally as
            a performer, composer/producer and educator in the UK music industry
            for a few years, before the coding bug came knocking on the door
            once more, and then some. The knock was loud and urgent, like a
            caffeinated parcel courier who's having a busy day. Since then, I've
            completely delved back into the wonderful world of creating
            something out of nothing (which is my favourite thing to do) with
            all those lovely 1's and 0's. Nowadays, I spend most of my time
            coding, learning about something related to code, or scouring
            through Stack Overflow trying to figure out why the console's giving
            me a bit of attitude. And to be honest, I wouldn't have it any other
            way...
          </p>
        </section>
        <section id="image-section">
          <img src={me} alt="profile picture" id="profile-picture"></img>
        </section>
      </div>
      <div id="knowledge-container">
        <section id="knowledge-section">
          <h1>What I Know</h1>
          <br />
          <p>
            <ul>
              <li>Javascript (ES6)</li>
              <li>
                CSS +{" "}
                <ul>
                  {" "}
                  Preprocessors & Frameworks :<li>SASS</li>
                  <li>Materialize</li>
                  <li>(some) Bootstrap</li>
                </ul>{" "}
              </li>
            </ul>
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
