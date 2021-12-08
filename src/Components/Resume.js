import React, { Component, useState } from "react";
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
        <Slide top duration={1300}>
          <h1
            style={{
              width: "100%",
              textAlign: "center",
              fontSize: 48,
              marginBottom: 24,
              lineHeight: 1,
            }}
          >
            Meet the artists for "the Sounds of Mexico"
          </h1>
          <h1
            style={{
              width: "100%",
              textAlign: "center",
              marginBottom: 96,
            }}
          >
            Countdown to collection reveal: <Countdown />
          </h1>
        </Slide>
        {artists.map((artist) => (
          <Artist {...artist} />
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
          "Book writer and illustrator, has hosted radio shows over the years",
      },
    ],
    bio: "If you live in Mexico, you have seen Paco's comics numerous times, an iconic legend of the Reforma newspaper is here to make his stand on the NFT world, perhaps even after this, he will become Mexico's next president. Decorated and successful, decided to join Mexican Art Machine in the endeavor to show the crypto gang what actual art is meant to be.",
  },
  {
    name: "Boris Viskin",
    img: "https://i.imgur.com/YdLbNP8.jpg",
    awards: [
      { award: "Studio Art Center International (Florence)" },
      { award: "Academia de San Carlos" },
      {
        award:
          "Mexico City's Museum of Modern Art dedicated an exposition to Boris (La belleza llegara despues)",
      },
      { award: "Founding member of Zona and Acapulco 62" },
    ],
    bio: "Born in Mexico, traversed his young years on Israel until he landed in Florence, where he would begin a monumental career in art, navigates what he describes as his uprooted being through a coalition of the vulnerable and fragile with the stern and strong. 'I have always felt uncomfortable and a distrust towards words, which is why since a very young age the world of images has shown a solid and secure space to me, a medium through which I have expressed my multiple and contradicting personalities. Sometimes I feel like an intuitive caveman, sometimes a conceptual artist'. Leading the charge on Mexico's art landscape, Boris comes to the NFT world to revolutionize how people value blockchain art. ",
  },
  {
    name: "Manuel Macias",
    img: "https://i.imgur.com/0UhadEu.jpg",
    awards: [{ award: "Campeon Champeons league", date: "Abril 2021" }],
    bio: "A creature of the deep forest and the first crypto libertarian in Zitacuaro, Michoacan, Macias has an unparallel eye for illustrating ",
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
    bio: "A daring colombian found her place in Mexico City, pure artistic talent, governing all landscapes from painting, sculptures, music to digital illustrations. Watch glenda as she becomes an iconic artist in the brewing digital revolution.",
  },
  {
    name: "Cris Altamirano",
    img: "https://i2.wp.com/blog.claroshop.com/wp-content/uploads/2021/07/e049b5042076ebd6c5f135b6821efa97.jpg?resize=655%2C1024&ssl=1",
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
    bio: "A young upcoming artist, with a powerful governance over all digital tools at his disposal. Cris, notorious for being an early investor in GME, and proud member of the Ape Yacht Club is excited to bring his unique style, has some words to say about the project 'MAMe los memes'.",
  },
];

export default Resume;

const Artist = ({ name, img, awards, bio }) => {
  return (
    <>
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
                    {awards.map(({ award, date }) => {
                      return (
                        <>
                          {award} <span>&bull;</span>
                          {date && <em className="date">{date}</em>}
                        </>
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
    </>
  );
};

function Countdown() {
  const [countdown, setCountdown] = useState("");
  var end = new Date("12/11/2021 10:00 PM");

  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;
  var timer;

  function showRemaining() {
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("countdown").innerHTML = "EXPIRED!";

      return;
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    let countdown = days + "day" + (days === 1 ? " " : "s ");
    countdown += hours + "hr" + (hours === 1 ? " " : "s ");
    countdown += minutes + "min" + (minutes === 1 ? " " : "s ");
    countdown += seconds + "sec" + (seconds === 1 ? " " : "s ");
    setCountdown(countdown);
  }

  setInterval(showRemaining, 1000);

  return countdown;
}
