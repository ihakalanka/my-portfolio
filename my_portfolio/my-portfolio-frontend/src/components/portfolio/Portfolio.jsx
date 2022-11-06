import React from 'react';
import IMG1 from '../../assets/Home page.png';
import IMG2 from '../../assets/hms.png';
import IMG3 from '../../assets/photographer.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Mini-bell',
      img: IMG1,
      description:
        'E-commerce web application for all baby care product business. This application is built with React, MySQL, and GoLang.',
      technologies: 'React | MySQL | GoLang',
      // link: '_parent',
      github: 'https://github.com/ihakalanka/project-backend.git',
    },
    {
      id: 2,
      title: 'PHOTOGRAPHY STUDIO',
      img: IMG3,
      description:
        'Photography website for a photographer. This application is built with MERN stack.',
      technologies: 'MERN Stack',
      github: 'https://github.com/ihakalanka/photographer-project.git',
    },
    {
      id: 3,
      title: 'Hospital Management System',
      img: IMG2,
      description: 'Hospital management system for a hospital. This application is built with Angular, MySQL and Spring Boot.',
      technologies: 'Angular | MySQL | Spring Boot',
      github: 'https://github.com/BKHChathuranga/Hospital-Management-System.git',
    },   
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
