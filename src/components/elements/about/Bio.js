import React from "react";
import "../../sass/about.scss";
import me from "../../../../src/images/me.jpg";

const Bio = () => {
  return (
    <div id="bio-container">
      <section id="bio-section">
        <h1>
          ( Who & <span className="selected"> Why </span>)
        </h1>
        <br />
        <p>
          At age 14, I had my first experience with code... all my friends were
          learning computer programming, so naturally, I wanted to do the same
          (yay peer pressure!). The first time I changed a blank white screen to
          an{" "}
          <span style={{ color: "red", background: "white" }}>
            eye-watering red
          </span>{" "}
          in Pascal, I felt like I'd figured out the secrets of the universe...
          needless to say, I was hooked. Fast forward to 2011, and I had
          graduated with a Bsc Computer Science Degree from Goldsmiths
          University Of London. <br />
          <br />
          After this deeply fulfilling but also consuming experience, I felt
          like I needed a bit of a change for a while. So I worked
          professionally as a performer, composer/producer and educator in the
          UK music industry for a few years, before the coding bug came knocking
          on the door once more, and then some. The knock was loud and urgent,
          like a caffeinated parcel courier who's having a busy day. Since then,
          I've completely delved back into the wonderful world of creating
          something out of nothing (which is my favourite thing to do), using
          all those lovely 1's and 0's. Nowadays, I spend most of my time
          coding, working on professional and personal web-dev projects, or
          scouring through Stack Overflow trying to figure out why the console's
          giving me a bit of attitude. And to be honest, I wouldn't have it any
          other way...
        </p>
        <div id="image-section">
          <p>
            PS : --- I'd like to think that my code looks way better than the
            wallpaper behind me! --- &#x1F610;
          </p>
          <img src={me} alt="profile" />
        </div>
      </section>
    </div>
  );
};

export default Bio;
