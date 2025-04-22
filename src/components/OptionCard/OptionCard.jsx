import styles from './OptionCard.module.css'

const OptionCard = ({ iconSrc, label, onClick }) => (
  <div className={styles.optionCard} onClick={onClick}>
    <div className={styles.optionIcon}>
      <img src={iconSrc} alt={label} />
    </div>
    <span className={styles.optionLabel}>{label}</span>
  </div>
)

export default OptionCard