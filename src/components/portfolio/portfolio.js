import React from 'react';
import project1 from './img/project-1.png';
import project2 from './img/project-2.png';
import project3 from './img/project-3.jpg';

const Portfolio = () => {
    return (
      <section id="portfolio" className="container section">
        <div className="row">
          <div className="col-md-12">
            <h2 id="portfolio_header" className="section__title">My projects_</h2>
          </div>
        </div>
        <div className="portfolio-cards">
          <div className="row project-card" data-toggle="modal" data-target="#portfolioModal" data-portfolio-tag="web-sites">
            <div className="col-md-6 col-lg-5 project-card__img">
              <img className="" src={project3} alt="project-img" />
            </div>
            <div className="col-md-6 col-lg-7 project-card__info">
              <h3 className="project-card__title">Chessmate</h3>
              <p className="project-card__description">
                A chess application that was developed by myself and 4 other 
                developers using an Agile workflow. We worked together from the point
                of inception to completion. We used Slack and Trello to communicate
                ideas and concerns.
              </p>
              <p className="project-card__description">
                  Communication was important especially in areas of the application that
                  were dependent on someone to complete their assigned portion. In 
                  situations like this pair coding proved to be very effective in 
                  speeding up the progress and also point out potential issues that might
                  exist in the code.
              </p>
              <p className="project-card__stack">Used stack:</p>
              <ul className="tags">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>Jquery</li>
                <li>Ruby</li>
                <li>Ruby on Rails</li>
                <li>Slack</li>
              </ul>
              <a href="" className="project-card__link">www.chessmate.com</a>
            </div>
          </div>
          <div className="row project-card"  data-toggle="modal" data-target="#portfolioModal" data-portfolio-tag="mobile apps">
            <div className="col-md-6 col-lg-5 project-card__img">
              <img className="" src={project2} alt="project-img" />
            </div>
            <div className="col-md-6 col-lg-7 project-card__info">
              <h3 className="project-card__title">Sur Player</h3>
              <p className="project-card__description">
                Sur Player is a pure React JS application that fetches music from 
                Deezer API for any artist the user searches. Tracks are only samples
                , but it is still a fun way to find music from your favorite artist.
              </p>
              <p className="project-card__stack">Used stack:</p>
              <ul className="tags">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>GitHub</li>
              </ul>
              <a href="" className="project-card__link">www.surplayer.com</a>
            </div>
          </div>
          <div className="row project-card"  data-toggle="modal" data-target="#portfolioModal" data-portfolio-tag="landing-pages">
            <div className="col-md-6 col-lg-5 project-card__img">
            <img className="" src={project1} alt="project-img" />
          </div>
            <div className="col-md-6 col-lg-7 project-card__info">
            <h3 className="project-card__title">React Movie DataBase</h3>
            <p className="project-card__description">
              RMDB is a fun application that is closely connected to something I 
              enjoy very much and thats movies. It's not complicated, it provides 
              the movie popular movies on the initial load and queries and movies 
              matches the search terms a user provides.
            </p>
            <p className="project-card__description">
                When a movie is clicked it brings the user to an individual page that
                show the user information about the movie itself and its cast.
            </p>
            <p className="project-card__stack">Used stack:</p>
            <ul className="tags">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>ReactJS</li>
              <li>GitHub</li>
            </ul>
            <a href="" className="project-card__link">www.rmdb.com</a>
          </div>
          </div>
        </div>
      </section>
    )
}

export default Portfolio;