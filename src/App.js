import React, { useState, useEffect } from "react";
import { Card, Divider } from "antd";
import moment from "moment";
import "./Portfolio.css";

const { Meta } = Card;

const Projet = ({ nom, description, date, lien }) => (
  <Card hoverable>
    <Meta title={nom} description={description} />
    <p>Date: {moment(date).format("MMMM YYYY")}</p>
    <a href={lien}>Lien vers le projet</a>
  </Card>
);

const Footer = () => (
  <footer className="footer">
    <p>MyEcoria ©2023 Created by Pierric Buchez</p>
  </footer>
);

const Portfolio = () => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const birthDate = moment("2007-07-12");
      setAge(moment().diff(birthDate, "years", true).toFixed(10));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const projets = [
    {
      nom: "Projet 1",
      description: "Description du projet 1",
      date: "2022-01-01",
      lien: "https://www.example.com/projet1",
    },
    {
      nom: "Projet 2",
      description: "Description du projet 2",
      date: "2021-06-01",
      lien: "https://www.example.com/projet2",
    },
    // Ajouter plus de projets ici...
  ];

  const projetsParticipes = [
    {
      nom: "Projet participé 1",
      description: "Description du projet participé 1",
      date: "2020-05-01",
      lien: "https://www.example.com/projet-participe-1",
    },
    {
      nom: "Projet participé 2",
      description: "Description du projet participé 2",
      date: "2019-09-01",
      lien: "https://www.example.com/projet-participe-2",
    },
    // Ajouter plus de projets participés ici...
  ];

  return (
    <div className="portfolio-container">
      <div className="presentation-container">
        <img
          src="https://avatars.githubusercontent.com/u/103332030?v=4"
          alt="Logo"
          className="logo"
        />
        <h1 className="name">MyEcoria</h1>
        <p className="description">
          Je suis un passionné d'informatique, constamment en quête de nouvelles connaissances et de nouveaux défis.
        </p>
        <p className="age">J'ai {age} ans 🙃</p>
      </div>
      <Divider className="divider" />
      <div className="projects-container">
        <h2>Projets</h2>
        {projets.map((projet, index) => (
          <Projet key={index} {...projet} />
        ))}
      </div>
      <Divider className="divider" />
      <div className="projects-container">
        <h2>Projets auxquels j'ai participé</h2>
        {projetsParticipes.map((projet, index) => (
          <Projet key={index} {...projet} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;

