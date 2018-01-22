import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
  lightBlue600
} from 'material-ui/styles/colors';

import "../css/_index.scss"

const style = { margin: 5 };
const iconStyles = {
  marginRight: 24,
};

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <section id="intro">
          <div className="container">
            <div className="half">
              <h1>Panda Bridge</h1>
              <h2>Panda Bridge is Christopher Steel, a London based freelance web developer &amp; consultant.</h2>
              <p>Vestibulum interdum augue quis massa ornare, vel posuere lectus interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus eros libero, aliquam pharetra sagittis id, dignissim in ipsum. Aenean et volutpat nisl. Cras et massa vel orci efficitur facilisis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam non purus lorem. Donec ante libero, consectetur ut interdum sed, consectetur id dolor. Ut ultrices gravida ligula. Nunc bibendum ex id est blandit finibus.</p>
              <a className="button" href="#contact">Get In Contact</a>
            </div>
          </div>
        </section>
        <section id="about">
          <div className="container">
            <div className="padded center">
              <h3 className="underline">Who is it for?</h3>
              <p>Go Freelance has been written for digital and print creators - from designers and illustrators to front-end and back-end developers. If you've spent (or plan on spending) any time working in the digital creative industry then it should be a pretty good fit for you.</p>
            </div>
            <div className="padded center">
              <h3 className="underline">Who is it for?</h3>
              <p>Go Freelance has been written for digital and print creators - from designers and illustrators to front-end and back-end developers. If you've spent (or plan on spending) any time working in the digital creative industry then it should be a pretty good fit for you.</p>
            </div>
            <div className="padded center">
              <h3 className="underline">Who is it for?</h3>
              <p>Go Freelance has been written for digital and print creators - from designers and illustrators to front-end and back-end developers. If you've spent (or plan on spending) any time working in the digital creative industry then it should be a pretty good fit for you.</p>
            </div>
          </div>
        </section>
        <section id="quote">
          <div className="container center">
            <p className="underline">Go Freelance has been written for digital and print creators - from designers and illustrators to front-end and back-end developers. If you've spent (or plan on spending) any time working in the digital creative industry then it should be a pretty good fit for you.</p>
            <b> 
              James Browning<br/>
              <a href="#">Gloucestershire University</a>
            </b>
          </div>
        </section>
      </div>
    );
  }
}
