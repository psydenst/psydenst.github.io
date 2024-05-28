import styles from '../../styles/About.module.css'
import Image from 'next/image'

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.about_me}>
        </div>

        <div className={styles.row}>
           <div className={styles.col_left}>
                <Image
                  src="/profileBW.JPG"
                  width={550}
                  height={550}
                  alt="C++"
                  className={styles.img}></Image>
            </div>
            <div className={styles.col_right}>
              <div className={styles.top}>
                <div className={styles.right}>
                  <h1>About me</h1>
                    <p className={styles.paragraph}>
                    Currently graduating from <a href="https://42.fr/42-cest-quoi/le-programme-42-explique/" class="link-ecole42">École 42</a>,
                    the <a href="https://www.wuri.world/5522-global-top-100" class="link-innovative">6th most innovative university
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
                </div>
                <div className={styles.bottom}>
                <div className={styles.column_skills}>
                <h3>Back-end Development</h3>
                <div className={styles.skills}>
                  <Image
                    src="/c++.png"
                    width={55}
                    height={55}
                    alt="C++"></Image>
                  <h6>C++</h6>
                </div>
                <div className={styles.skills}>
                  <Image
                    src="/c.png"
                    width={55}
                    height={55}
                    alt="C"></Image>
                  <h6>C</h6>
                </div>
                <div className={styles.skills}>
                  <Image
                    src="/bash.png"
                    width={55}
                    height={55}
                    alt="Bash"></Image>
                  <h6>Bash</h6>
                </div>
                </div>
                <div className={styles.column_skills_right}>
                  <h3>Front-end Development</h3>
                    <div className={styles.skills}>
                      <Image
                      src="/html.png"
                      width={55}
                      height={55}
                      alt="HTML"></Image>
                      <h6>HTML</h6>
                    </div>
                    <div className={styles.skills}>
                      <Image
                      src="/css.png"
                      width={55}
                      height={55}
                      alt="CSS"></Image>
                      <h6>CSS</h6>
                    </div>
                    <div className={styles.skills}>
                      <Image
                      src="/js.png"
                      width={55}
                      height={55}
                      alt="Javascript"></Image>
                      <h6>JavaScript</h6>
                    </div> 
                    <div className={styles.skills}>
                      <Image
                      src="/react.png"
                      width={55}
                      height={55}
                      alt="React"></Image>
                      <h6>React</h6>
                    </div>
                    <div className={styles.skills}>
                      <Image
                      src="/next-js.png"
                      width={55}
                      height={55}
                      alt="Next.js"></Image>
                      <h6>Next.js</h6>
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
