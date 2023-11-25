'use client'
import styles from './navbar.module.css'

export default function Navbar() {
  const navigationItems = [
    { label: 'Projects', path: '/project' },
    { label: 'Achievements', path: '/achievements' },
    { label: 'Résumé', path: '/resume' },
    { label: 'Transcript', path: '/transcript' },
    { label: 'Contact', path: '/contact' }
  ];

  const navigateTo = (path:string) => {
    window.location.href = path;
  }

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.menuContainer}>
      <img src="logo.png" onClick={() => navigateTo("/") }className={styles.pfp}/>
        {navigationItems.map((item, index) => (
          <button key={index} onClick={() => navigateTo(item.path)} className={styles.menuButton}>
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}
