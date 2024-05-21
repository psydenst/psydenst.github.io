import styles from '../../styles/About.module.css'
import Image from 'next/image'
export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.about_me}></div>
        <div className={styles.row}>
           <div className={styles.col_left}>
              <h2>About me</h2>
            </div>
            <div className={styles.col_right}>
              <div className={styles.column_skills}>
              <h2>Back-end Development</h2>
              <div className={styles.skills}>
                <Image
                  src="/c++.png"
                  width={20}
                  height={20}
                  alt="C++"></Image>
                <h6>C++</h6>
              </div>
              <div className={styles.skills}>
                <Image
                  src="/c.png"
                  width={20}
                  height={20}
                  alt="C"></Image>
                <h6>C</h6>
              </div>
              <div className={styles.skills}>
                <Image
                  src="/bash.png"
                  width={20}
                  height={20}
                  alt="Bash"></Image>
                <h6>Bash</h6>
              </div>
              </div>
              <div className={styles.column_skills}>
                <h2>Front-end Development</h2>
                  <div className={styles.skills}>
                    <Image
                    src="/html.png"
                    width={20}
                    height={20}
                    alt="HTML"></Image>
                    <h6>HTML</h6>
                  </div>
                  <div className={styles.skills}>
                    <Image
                    src="/css.png"
                    width={20}
                    height={20}
                    alt="CSS"></Image>
                    <h6>CSS</h6>
                  </div>
                  <div className={styles.skills}>
                    <Image
                    src="/js.png"
                    width={20}
                    height={20}
                    alt="Javascript"></Image>
                    <h6>JavaScript</h6>
                  </div> 
                  <div className={styles.skills}>
                    <Image
                    src="/react.png"
                    width={20}
                    height={20}
                    alt="React"></Image>
                    <h6>React</h6>
                  </div>
                  <div className={styles.skills}>
                    <Image
                    src="/next-js.png"
                    width={20}
                    height={20}
                    alt="Next.js"></Image>
                    <h6>Next.js</h6>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
