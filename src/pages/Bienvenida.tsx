import { IonPage, IonContent, IonButton, IonImg, IonHeader, IonToolbar, IonTitle} from '@ionic/react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Bienvenida.css';

const Bienvenida: React.FC = () => {
  const history = useHistory();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [textoSiguienteIndex, setTextoSiguienteIndex] = useState(0);

  const imagenes = [
    'https://plus.unsplash.com/premium_photo-1682310088032-4320a8bdd5d0?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1661610875787-1c91e859cba2?q=80&w=1508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?q=80&w=1255&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ];

  const descripcionesFotos = [
    'Con FinTrack, lleva el control de tus inversiones de manera eficiente.',
    'Administra todas tus transacciones y mantén un registro detallado.',
    'Consulta gráficos detallados de tu desempeño financiero.'
  ];

  const textosSiguientes = [
    '¡Explora nuestras herramientas avanzadas para maximizar tus inversiones!',
    'Mantén un control detallado de tus movimientos financieros.',
    'Comienza a gestionar tus finanzas como un profesional.'
  ];

  // Cambia la imagen automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
    }, 8000); 

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, [imagenes.length]);

  const avanzarImagen = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
  };

  const retrocederImagen = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? imagenes.length - 1 : prevIndex - 1));
  };

  const siguienteTexto = () => {
    if (textoSiguienteIndex < textosSiguientes.length - 1) {
      setTextoSiguienteIndex((prevIndex) => prevIndex + 1);
    } else {
      history.push('/Inicio'); // Lleva a la pantalla de inicio de sesión cuando termine la bienvenida
    }
  };

  return (
    <IonPage>
      <IonContent className="bienvenida-contenido">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Regístrate</IonTitle>
        </IonToolbar>
      </IonHeader>
        {/* Carrusel de imágenes */}
        <div className="bienvenida-carrusel">
          <IonImg src={imagenes[currentIndex]} alt={`Foto ${currentIndex + 1}`} />
          
          {/* Áreas clicables para avanzar o retroceder */}
          <div className="clicable izquierda" onClick={retrocederImagen}></div>
          <div className="clicable derecha" onClick={avanzarImagen}></div>
        </div>

        {/* Descripción de la foto actual */}
        <div className="bienvenida-descripcion">
          {descripcionesFotos[currentIndex]}
        </div>

        {/* Texto que aparece al presionar "Siguiente" */}
        <div className="texto-siguiente">
          {textosSiguientes[textoSiguienteIndex]}
        </div>

        {/* Botón de siguiente */}
        <IonButton expand="block" className="bienvenida-boton" onClick={siguienteTexto}>
          Siguiente
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Bienvenida;
