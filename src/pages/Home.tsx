import React, { useState } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const [notification, setNotification] = useState<string | null>(null);
  const [notificationClass, setNotificationClass] = useState<string>('');

  // Función para manejar el clic en el botón y mostrar notificación
  const handleButtonClick = (buttonNumber: number) => {
    // Establecemos la notificación dependiendo del botón
    if (buttonNumber === 1) {
      setNotification('¡Operación exitosa! (Botón 1)');
      setNotificationClass('notification1'); // Notificación animada desde abajo con pulsación
    } else if (buttonNumber === 2) {
      setNotification('¡Acción completada! (Botón 2)');
      setNotificationClass('notification2'); // Notificación con rotación y escala
    } else if (buttonNumber === 3) {
      setNotification('¡Todo listo! (Botón 3)');
      setNotificationClass('notification3'); // Notificación con rebote
    }

    // Ocultamos la notificación después de un tiempo
    setTimeout(() => {
      setNotification(null);
    }, 5000); // 5 segundos para que desaparezca
  };

  return (
    <div className="gradient-background">
      <h1 className="title">Bienvenido a la App Financiera</h1>

      <div className="button-container">
        <button className="custom-button1" onClick={() => handleButtonClick(1)}>
          Botón 1: Carrusel de colores (izquierda a derecha)
        </button>
        <button className="custom-button2" onClick={() => handleButtonClick(2)}>
          Botón 2: Carrusel de colores (izquierda a derecha)
        </button>
        <button className="custom-button3" onClick={() => handleButtonClick(3)}>
          Botón 3: Carrusel de colores (izquierda a derecha)
        </button>

        {/* Mostrar notificación si está presente */}
        {notification && (
          <div className={notificationClass}>
            {notification}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
