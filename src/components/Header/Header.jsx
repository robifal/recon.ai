import styles from './Header.module.css'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerLogo}>
      <div className={styles.logoImage}>
        <img 
          src="https://raw.githubusercontent.com/gustavoataidez/site-ssp/main/assets/deep-learning.png" 
          alt="AI Logo" 
        />
      </div>
      <div className={styles.logoText}>RECON.AI</div>
    </div>
  </header>
)

export default Header