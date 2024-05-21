import styles from '../../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.row}>
           <div className={styles.col_left}>
              <h2>Back-end Development</h2>
              <div className={styles.skills}>
                <h6>C++</h6>
              </div>
              <div className={styles.skills}>
                <h6>Bash</h6>
              </div>
              <div className={styles.skills}>
                <h6>C</h6>
              </div>
            </div>
            <div className={styles.col_right}>
              <h2>Front-end Development</h2>
                <div className={styles.skills}>
                  <h6>HTML</h6>
                </div>
                <div className={styles.skills}>
                  <h6>CSS</h6>
                </div>
                 <div className={styles.skills}>
                  <h6>JavaScript</h6>
                </div> 
                <div className={styles.skills}>
                  <h6>React</h6>
                </div>
                <div className={styles.skills}>
                  <h6>Next.js</h6>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
