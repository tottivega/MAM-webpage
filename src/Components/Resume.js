import React, { Component, useState, useEffect } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    return (
      <section id="resume">
        <h1
          style={{
            width: "100%",
            textAlign: "center",
            marginBottom: 96,
          }}
        >
          Countdown to collection reveal <Countdown />
        </h1>

        <hr />
        <Slide top duration={1300}>
          <h1
            style={{
              width: "100%",
              textAlign: "center",
              fontSize: 24,
              marginBottom: 24,
              lineHeight: 1,
            }}
            className="meet-artists-responsive"
          >
            Meet the artists
          </h1>
          <h1
            style={{
              width: "100%",
              textAlign: "center",
              fontSize: 48,
              marginBottom: 96,
              lineHeight: 1,
            }}
            className="collection-name-responsive"
          >
            the Sounds of Mexico
          </h1>
        </Slide>
        {artists.map((artist, i) => (
          <Artist {...artist} key={i} />
        ))}
        {/* 
        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide> */}
      </section>
    );
  }
}

const artists = [
  {
    name: "Paco Calderon",
    img: "https://i.imgur.com/5sNJGiG.png",
    awards: [
      { award: "Editorial cartoonist for Grupo Reforma" },
      {
        award:
          "Bachelor in communications at the University Iberoamericana (Mexico City)",
      },
      { award: "'La catrina' award from the University of Guadalajara" },
      { award: "National Periodism award" },
      { award: "José Pagés Llergo award" },
      {
        award:
          "Maria Moors Cabot award from the Universidad of Columbia (New York)",
      },
      {
        award:
          "'Humoris Causa' professor at the University Alcalá de Henares (Madrid)",
      },
      {
        award:
          "Book writer and illustrator, has also hosted radio shows over the years",
      },
    ],
    bio: "If you live in Mexico, you have seen Paco's comics numerous times, an iconic legend of the Reforma newspaper. Decorated and successful, he decided to join Mexican Art Machine in the endeavor to show the crypto gang what actual art looks like. Paco is here to make his stand on the NFT world, and perhaps even after this, he will become Mexico's future president.",
  },
  {
    name: "Boris Viskin",
    img: "https://i.imgur.com/YdLbNP8.jpg",
    awards: [
      { award: "Studio Art Center International (Florence)" },
      { award: "Academia de San Carlos" },
      {
        award:
          "Mexico City's Museum of Modern Art dedicated an exposition to Boris (La belleza llegara después)",
      },
      { award: "Founding member of Zona and Acapulco 62" },
    ],
    bio: 'Born in Mexico, traversed his young years on Israel until he landed in Florence, where he would begin a monumental career in art. Boris navigates what he describes as his "uprooted being" through a coalition of the vulnerable and fragile with the stern and strong. "I have always felt uncomfortable and a distrust towards words, which is why since a very young age the world of images has shown a solid and secure space to me, a medium through which I have expressed my multiple and contradicting personalities. Sometimes I feel like an intuitive caveman, sometimes a conceptual artist". Leading the charge on Mexico`s art landscape, Boris comes to the NFT world to revolutionize how people value blockchain art.',
  },
  {
    name: "Manuel Macias",
    img: "https://i.imgur.com/0UhadEu.jpg",
    awards: [
      { award: "Master Illustrator" },
      { award: "Professional Birdwatcher" },
      { award: "Taco Sommelier" },
      { award: "Concept Creator Sensei" },
    ],
    bio: "A creature of the deep forest and the first crypto libertarian in Michoacan. Macias has an unparallel eye for drawing and a keen sense of the upcoming future. There is a very real possibility that the rumors are true and Macias is the real Satoshi, we can neither confirm nor deny said information. ",
  },
  {
    name: "Glenda Torrado",
    img: "https://i.imgur.com/hHnfQz0.jpg",
    awards: [
      {
        award:
          "Winner of the IDARTES grant, performing with the Orquesta de la Tierra Caliente",
      },
      { award: "Co-creator of Corona Sound Machine" },
      { award: "Participated in East London University's '#4.5A&SM'" },
    ],
    bio: "A daring colombian who found her place in the heart Mexico City. She is pure artistic talent, governing all landscapes from painting, sculptures, music to illustrations. You will not want to be caught watching from the sideline as Glenda reaches for the moon.",
  },
  {
    name: "Cris Altamirano",
    img: "https://i.imgur.com/qnTpaS0.jpg",
    awards: [
      {
        award:
          "Bachelors in Plastic and Visual arts at the National School of Paint, Sculpture and Engraving 'La Esmeralda'",
      },
      {
        award:
          "Studied a variety of at the Ars Vita Studio: Comic and Manga, Traditional Ink, Digital Drawing",
      },
    ],
    bio: "A young upcoming artist, with a powerful mastery of the arcane art of Manga, an absolute force to be reckoned with. Cris, notorious for being an early investor in Gamestop, and proud member of the Ape Yacht Club is excited to bring his unique style to the Sounds of Mexico collection.",
  },
];

export default Resume;

const Artist = ({ name, img, awards, bio }) => {
  return (
    <Slide left duration={1300}>
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>{name}</span>
          </h1>
          <img src={img} alt={name} />
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <div>
                <h3>Biography</h3>
                <p className="info">
                  {awards.map(({ award, date }, i) => {
                    return (
                      <React.Fragment key={i}>
                        <span>&bull;</span> {award}
                        {date && <em className="date">{date}</em>}
                      </React.Fragment>
                    );
                  })}
                </p>
                <p>{bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

function Countdown() {
  const [
    {
      days,
      daysText,
      hours,
      hoursText,
      minutes,
      minutesText,
      seconds,
      secondsText,
    },
    setCountdown,
  ] = useState({});

  useEffect(() => {
    const showRemaining = () => {
      const end = new Date("12/11/2021 10:00 PM");
      const _second = 1000;
      const _minute = _second * 60;
      const _hour = _minute * 60;
      const _day = _hour * 24;
      const now = new Date();
      const distance = end - now;

      const days = Math.floor(distance / _day);
      const hours = Math.floor((distance % _day) / _hour);
      const minutes = Math.floor((distance % _hour) / _minute);
      const seconds = Math.floor((distance % _minute) / _second);

      const daysText = "day" + (days === 1 ? " " : "s ");
      const hoursText = "hr" + (hours === 1 ? " " : "s ");
      const minutesText = "min" + (minutes === 1 ? " " : "s ");
      const secondsText = "sec" + (seconds === 1 ? " " : "s ");
      setCountdown({
        days,
        daysText,
        hours,
        hoursText,
        minutes,
        minutesText,
        seconds,
        secondsText,
      });
    };

    const interval = setInterval(showRemaining, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        marginTop: 24,
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{ display: "flex", justifyContent: "center", marginRight: 24 }}
      >
        <div
          style={{ color: "#053483", fontSize: 48, marginRight: 12 }}
          key={`days${days}`}
        >
          {days}
        </div>
        {daysText}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginRight: 24 }}
      >
        <div
          style={{ color: "#053483", fontSize: 48, marginRight: 12 }}
          key={`hours${hours}`}
        >
          {hours}
        </div>
        {hoursText}
      </div>
      <div className="flex-break-responsive" />
      <div
        style={{ display: "flex", justifyContent: "center", marginRight: 24 }}
        key={`minutes${minutes}`}
      >
        <div style={{ color: "#053483", fontSize: 48, marginRight: 12 }}>
          {minutes}
        </div>
        {minutesText}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        key={`seconds${seconds}`}
      >
        <div style={{ color: "#053483", fontSize: 48, marginRight: 12 }}>
          {seconds}
        </div>
        {secondsText}
      </div>
    </div>
  );
}
