import React, { Component } from "react";
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
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
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
    img: "https://i2.wp.com/blog.claroshop.com/wp-content/uploads/2021/07/e049b5042076ebd6c5f135b6821efa97.jpg?resize=655%2C1024&ssl=1",
    awards: [{ award: "Campeon Champeons league", date: "Abril 2021" }],
    bio: "Paco likes tortas de chorihuevo and walks in the park",
    interview: "I like art that is why I am in",
  },
  {
    name: "Boris Vinsky",
    img: "https://i2.wp.com/blog.claroshop.com/wp-content/uploads/2021/07/e049b5042076ebd6c5f135b6821efa97.jpg?resize=655%2C1024&ssl=1",
    awards: [{ award: "Campeon Champeons league", date: "Abril 2021" }],
    bio: "Paco likes tortas de chorihuevo and walks in the park",
    interview: "I like art that is why I am in",
  },
  {
    name: "Macias IDUNNO",
    img: "https://i2.wp.com/blog.claroshop.com/wp-content/uploads/2021/07/e049b5042076ebd6c5f135b6821efa97.jpg?resize=655%2C1024&ssl=1",
    awards: [{ award: "Campeon Champeons league", date: "Abril 2021" }],
    bio: "Paco likes tortas de chorihuevo and walks in the park",
    interview: "I like art that is why I am in",
  },
  {
    name: "Glenda IDUNNO",
    img: "https://i2.wp.com/blog.claroshop.com/wp-content/uploads/2021/07/e049b5042076ebd6c5f135b6821efa97.jpg?resize=655%2C1024&ssl=1",
    awards: [{ award: "Campeon Champeons league", date: "Abril 2021" }],
    bio: "Paco likes tortas de chorihuevo and walks in the park",
    interview: "I like art that is why I am in",
  },
  {
    name: "Cris Altamirano",
    img: "https://i2.wp.com/blog.claroshop.com/wp-content/uploads/2021/07/e049b5042076ebd6c5f135b6821efa97.jpg?resize=655%2C1024&ssl=1",
    awards: [{ award: "Campeon Champeons league", date: "Abril 2021" }],
    bio: "Paco likes tortas de chorihuevo and walks in the park",
    interview: "I like art that is why I am in",
  },
];

export default Resume;

const Artist = ({ name, img, awards, bio, interview }) => {
  return (
    <Slide left duration={1300}>
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>{name}</span>
          </h1>
          <img src={img} />
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
                        <em className="date">{date}</em>
                      </>
                    );
                  })}
                </p>
                <p>{bio}</p>
              </div>
            </div>
          </div>

          <div className="row item">
            <div className="twelve columns">
              <div>
                <h3>Thoughts on the project</h3>
                <p>{interview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};
