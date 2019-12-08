import React from 'react';
import Main from '../main/main';
import Header from '../header/header';
import Hello from '../hello/hello';
import Resume from '../resume/resume';
import Portfolio from '../portfolio/portfolio';
import Contact from '../contact/contact';
import './base.css';


class Base extends React.Component {
  render() {
    return (
      <div>
        <Main />
        <Header />
        <Hello />
        <Resume />
        <Portfolio />
      </div>
    )
  }
}

export default Base;