import styles from './page.module.css'
import AboutMe from './aboutMe/aboutMe'
import Project from './project/page'
import Social from './social/social'
import Experience from './experience/expereince'
export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <AboutMe />
        <div className={styles.container2}>
          <Social />
          <Experience />
        </div>
      </div>
    </>
  )
}
