import React from 'react';

import './resume.css';

const Resume = () => {
    return (
      <section id="resume" className="container section">
        <div className="row">
          <div className="col-md-10">
            <h2 id="resume_header" className="section__title">Resume_</h2>
            <p className="section__description">
              Below is a brief summary of my educational background professional experience. For a full <br />
              breakdown of experience please download.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 section__resume resume-list">
            <h3 className="resume-list_title">education</h3>
            <div className="resume-list__block">
              <p className="resume-list__block-title">The Firehose Project</p>
              <p className="resume-list__block-date">2017 - 2018</p>
              <p class='resume-list__description'>
                Worked on a team of 4 developers to build a Ruby on Rails chess application that <br />fully enforces the rules of the game.
              </p>
              <p className='title'>
                Certificate of Computer Science
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 section__resume resume-list">
            <h3 className="resume-list_title">employment</h3>
            <div class="resume-list__block">
              <p class="resume-list__block-title">Capstone Agile Project</p>
              <p class="resume-list__block-date">2017 - 2018</p>
              <p class='resume-list__description'>
                Worked on a team of 4 developers to build a Ruby on Rails chess
                application that <br />fully enforces the rules of the game.
              </p>
              <p className='title'>Backend Junior Web Developer</p>
            </div>
            <div class="resume-list__block">
            <p class="resume-list__block-title">Canon Business Processing Services / AIG</p>
            <p class="resume-list__block-date">2010 - 2018</p>
            <p class='resume-list__description'>
              Job consisted of capturing data, regarding records and employee's work, compile data to 
              enable management to make decisions that were presented to AIG clients.
            </p>
            <p class='title'>Data Analysis</p>
          </div>
          </div>
          
        </div>
      </section>
    )
}

export default Resume;