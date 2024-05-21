
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
// import Link from 'next/link';
// import Script from 'next/script';


export default function About() {
  return (
    <div id="about">
      <div class="container">
        <div class="row">
          <div class="about-col-1">
            <img src="images/profileBW.JPG" />
          </div>
          <div class="about-col-2">
            <h1 class="sub-title">About me</h1>
            <p class="paragraph">
              Currently graduating from <a href="https://42.fr/42-cest-quoi/le-programme-42-explique/" class="link-ecole42">École 42</a>,
              the <a href="https://www.wuri.world/2022-global-top-100" class="link-innovative">6th most innovative university
              in the world</a>, I'm a aspiring FullStack
              Developer with experience in mobile
              and web development. By seamlessly
              integrating front-end and back-end
              technologies, I create dynamic and
              user-friendly applications. With a
              commitment to staying up-to-date
              with industry trends, I am poised
              to deliver innovative and impactful
              solutions to your projects.
            </p>

            <div class="tab-titles">
              <p class="tab-links active-link"><br /></p>
            </div>
            <div class="tab-contents">
              <div class="skills">
                <div class="skills-column">
                  <h2>Back-end Development</h2>
                  <div class="skill">
                    <img src="images/c++.png" alt="C++" />
                    <span id="description">C++</span>
                  </div>
                  <div class="skill">
                    <img src="images/c.png" alt="C" />
                    <span id="description">C</span>
                  </div>
                  <div class="skill">
                    <img src="images/bash.png" alt="Bash" />
                    <span id="description">Bash</span>
                  </div>
                </div>
                <div class="skills-column">
                  <h2>Front-end Development</h2>
                  <div class="skill">
                    <img src="images/html.png" alt="HTML" />
                    <span id="description">HTML</span>
                  </div>
                  <div class="skill">
                    <img src="images/css.png" alt="CSS" />
                    <span id="description">CSS</span>
                  </div>
                  <div class="skill">
                    <img src="images/js.png" alt="JavaScript" class="logo-image darken" />
                    <span id="description">JavaScript</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
