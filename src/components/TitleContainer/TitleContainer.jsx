import styles from './TitleContainer.module.css'

const TitleContainer = () => (
  <div className={styles.titleContainer}>
    <div className={styles.titleImage}>
      <img 
        src="https://raw.githubusercontent.com/gustavoataidez/site-ssp/main/assets/recon-face.png" 
        alt="Reconhecimento Facial" 
      />
    </div>
    <h1 className={styles.mainTitle}>Busque por reconhecimento facial</h1>
  </div>
)

export default TitleContainer