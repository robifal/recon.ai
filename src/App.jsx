import { useState, useRef } from 'react'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import CameraModal from './components/CameraModal/CameraModal'

function App() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [statusMessage, setStatusMessage] = useState('Nenhum arquivo selecionado')
  const [showCamera, setShowCamera] = useState(false)
  const videoRef = useRef(null)
  const canvasRef = useRef(null)

  const handleFileChange = (file) => {
    setSelectedFile(file)
    setStatusMessage(file ? `Arquivo selecionado: ${file.name}` : 'Nenhum arquivo selecionado')
  }


  const startCamera = async () => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const hasCamera = devices.some(device => device.kind === 'videoinput');
      
      if (!hasCamera) {
        alert('Nenhuma câmera encontrada neste dispositivo.');
        return;
      }
  
      const constraints = {
        video: {
          facingMode: 'environment', // Prefere a câmera traseira
          width: { ideal: 1920 },
          height: { ideal: 1080 }
        }
      };
  
      // Ajuste para iOS que não suporta ideal
      if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        delete constraints.video.width;
        delete constraints.video.height;
      }
  
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        // Ajuste de orientação para mobile
        videoRef.current.style.transform = 'scaleX(-1)'; // Espelha a imagem
      }
      setShowCamera(true);
    } catch (err) {
      console.error('Erro ao acessar a câmera:', err);
      alert('Não foi possível acessar a câmera. Verifique as permissões.');
    }
  };


  const takePhoto = () => {
    const video = videoRef.current
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    context.drawImage(video, 0, 0, canvas.width, canvas.height)

    canvas.toBlob((blob) => {
      const file = new File([blob], 'foto-camera.png', { type: 'image/png' })
      handleFileChange(file)
      stopCamera()
    }, 'image/png')
  }

  const stopCamera = () => {
    const stream = videoRef.current?.srcObject
    if (stream) {
      stream.getTracks().forEach(track => track.stop())
    }
    setShowCamera(false)
  }

  return (
    <div className="app">
      <Header />
      <MainContent 
        onFileChange={handleFileChange}
        onCameraClick={startCamera}
        statusMessage={statusMessage}
        selectedFile={selectedFile}
      />
      
      {showCamera && (
        <CameraModal
          videoRef={videoRef}
          onTakePhoto={takePhoto}
          onClose={stopCamera}
        />
      )}
      
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  )
}

export default App