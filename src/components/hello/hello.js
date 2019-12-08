import React from 'react';

const Hello = () => {
    return(
    <section id="hello" className="container section">
    <div className="row">
      <div className="col-md-10">
        <h2 id="hello_header" className="section__title">Hi_</h2>
        <p className="section__description">
          I'm a Software Engineer able to build a Web presence from the ground up - from concept, navigation,
          layout and programming to UX and SEO. Skilled at writing well-designed, testable and efficient code using
          current best practices in Web development. Fast learner, hard worker and team player who is proficient in
          an array of scripting languages and multimedia Web tools.
        </p>
        <a href="https://drive.google.com/open?id=1uHEngakKEuYacz74Na52sqaT0QxeSwiV" target="_blank" className="section_btn site-btn">Download CV</a>
      </div>
    </div>
  </section>
    )
}

export default Hello;