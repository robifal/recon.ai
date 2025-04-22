import styles from './CameraModal.module.css'

const CameraModal = ({ videoRef, onTakePhoto, onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button 
          className={styles.closeButton} 
          onClick={onClose}
          aria-label="Fechar câmera"
        >
          &times;
        </button>
        
        <div className={styles.videoContainer}>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className={styles.cameraView}
          />
        </div>
        
        <div className={styles.controls}>
          <button 
            className={styles.captureButton} 
            onClick={onTakePhoto}
            aria-label="Tirar foto"
          >
            <div className={styles.captureIcon} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CameraModal
