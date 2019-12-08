import React from 'react';
import './main.css';

class Main extends React.Component {
    render() {
        return (
          <div class="menu">
            <div class="container main-menu">
              <div class="row">
                <div class="menu__wrapper d-none d-lg-block col-md-12">
                  <nav class="">
                    <ul>
                      <li><a id="logo" href="#hello">JumpingJackDev</a></li>
                      <li><a href="#resume">Resume</a></li>
                      <li><a href="#portfolio">Portfolio</a></li>
                      <li><a href="#contact">Contact</a></li>
                    </ul>
                  </nav>
                </div>
                <div class="menu__wrapper col-md-12 d-lg-none">
                  <button type="button" class="menu__mobile-button">
                    <span><i class="fa fa-bars" aria-hidden="true"></i></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Main;