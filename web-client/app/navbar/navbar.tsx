'use client'
import styles from './navbar.module.css'

export default function Navbar() {
  const handleContact = () => {
    window.location.href = '/contact';
  }
  const handleAchievements = () => {
    window.location.href = '/achievements';
  }
  const handleTranscript = () => {
    window.location.href = '/transcript';
  }
  const handleResume = () => {
    window.location.href = '/resume';
  }
  const handleProjects = () => {
    window.location.href = '/project';
  }
  const handleHome = () => {
    window.location.href = '/';
  }

  return (
    <div className={styles.navbarContainer}>
      <span>
        <img className={styles.pfp} src="./logo.png" onClick={handleHome}></img>
      </span>
      
      <span className={styles.menuContainer}>

      <button onClick={handleProjects} className={styles.menuButton}>Projects</button>

        <button onClick={handleResume} className={styles.menuButton}>Résumé</button>

        <button onClick={handleTranscript} className={styles.menuButton}>Transcript</button>

        <button onClick={handleAchievements} className={styles.menuButton}>Achievements</button>
        
        <button onClick={handleContact} className={styles.menuButton}>Contact</button>
      </span>
    </div>
  )
}
