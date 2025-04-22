import styles from './CameraModal.module.css'

const CameraModal = ({ videoRef, onTakePhoto, onClose }) => {
    const handleTouchEnd = (e) => {
      e.preventDefault();
      onTakePhoto();
    };
  
    return (
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <button 
            className={styles.closeButton} 
            onClick={onClose}
            onTouchEnd={onClose}
          >
            &times;
          </button>
          
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className={styles.cameraView}
          />
          
          <button 
            className={styles.captureButton} 
            onClick={onTakePhoto}
            onTouchEnd={handleTouchEnd}
          >
            <span className={styles.desktopText}>Tirar Foto</span>
          </button>
        </div>
      </div>
    );
  };

export default CameraModal