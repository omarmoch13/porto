import "./Works.css";
import findmates1 from "../../assets/findmates1.png";
import wcare1 from "../../assets/wcare1.png";
import kalku1 from "../../assets/kalku1.png";
import hangman1 from "../../assets/hangman1.png";
import foto2 from "../../assets/foto2.jpg";
import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const MyCollection = [
  {
    id: 1,
    name: "Hangman Game in C",
    desc: "This is a Hangman Game using C Programming Language. This program is for mid term project in a group of two.",
    link: "https://github.com/pindisel/Proyek_Hangman",
    image: hangman1,
  },
  {
    id: 2,
    name: "Currency Converter in C",
    desc: "This is a Currency Converter Program using C Programming Language. This program converts currencies in ASEAN. This program is for final project in a group of two.",
    link: "https://github.com/pindisel/Project_CurrencyConverter",
    image: kalku1,
  },
  {
    id: 3,
    name: "Findmates.me",
    desc: "EZCOOKFOR.ME is a website for people to search about food recipes. There are 3 categories which are appetizer, main course, and dessert. People can add recipes to the database by contacting us through e-mail because only the admin add or edit the recipes in the database. This website is fully accessible at https://ezcookfor.me/",
    link: "https://github.com/pindisel/ezcookforme",
    image: findmates1,
  },
  {
    id: 4,
    name: "WCARE",
    desc: "EZCOOKFOR.ME is a website for people to search about food recipes. There are 3 categories which are appetizer, main course, and dessert. People can add recipes to the database by contacting us through e-mail because only the admin add or edit the recipes in the database. This website is fully accessible at https://ezcookfor.me/",
    link: "https://github.com/pindisel/ezcookforme",
    image: wcare1,
  },
];

const Works = () => {
  let [current, setCurrent] = useState(0);
  const length = MyCollection.length;

  const nextProject = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevProject = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="workContainer">
      <div className="workWrapper">
        <div className="WorkHeader">
          <h1>PROJECT</h1>
        </div>
        <div className="project-container-1">
          <div className="arrow-wrapper">
            <BsArrowLeft onClick={prevProject} className="arrow" />
          </div>
          <div className="wrapper">
            {MyCollection.map((project, index) => {
              return (
                <div key={index}>
                  {index === current && (
                    <div className="project-container-2">
                      <h2 className="project-name">{project.name}</h2>
                      {/* <LinkRouter to={`/project/${project.name.replaceAll(" ", "-")}`}> */}
                      <img
                        src={project.image}
                        className="project-thumbnail"
                        alt={project.name}
                      />
                      {/* </LinkRouter> */}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="arrow-wrapper">
            <BsArrowRight onClick={nextProject} className="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
