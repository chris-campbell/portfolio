import React from 'react';

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <div className="row personal-profile">

          <div className="col-md-8">
            <p className="personal-profile__name">Chris Campbell_</p>
            <p className="personal-profile__work">Software Engineer</p>
            <div className="personal-profile__contacts">
              <dl className="contact-list contact-list__opacity-titles">
                <dt>Age:</dt>
                <dd>33</dd>
                <dt>Phone:</dt>
                <dd><a href="tel:9294343484">(929) 434-3484</a></dd>
                <dt>Email:</dt>
                <dd><a href="mailto:jumpingjackdev@gmail.com">jumpingjackdev@gmail.com</a></dd>
              </dl>
            </div>
            <p className="personal-profile__social">
              <a href="" target="_blank"><i className="fa fa-github"></i></a>
              <a href="" target="_blank"><i className="fa fa-linkedin-square"></i></a>
              <a href="" target="_blank"><i className="fa fa-facebook-square"></i></a>
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;