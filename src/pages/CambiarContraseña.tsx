import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonLabel,
  IonItem,
  IonButton,
  IonAlert
} from '@ionic/react';
import { useHistory } from 'react-router-dom'; // Importa useHistory
import './CambiarContraseña.css'; // Importa el CSS específico

const CambiarContraseña: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const history = useHistory(); // Hook para la navegación

  const handleSaveChanges = () => {
    if (newPassword !== confirmPassword) {
      setShowAlert(true);
    } else {
      // Aquí iría la lógica de cambiar contraseña
      setShowAlert(true);
    }
  };

  // Función para volver a la página de Configuración
  const handleBackToConfig = () => {
    history.push('/configuracion');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cambiar Contraseña</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="cambiar-contrasena-content">
        <h1 className="cambiar-contrasena-title">Actualiza tu Contraseña</h1>
        <IonItem className="cambiar-contrasena-input">
          <IonLabel position="floating">Contraseña Actual</IonLabel>
          <br />
          <IonInput
            type="password"
            value={currentPassword}
            onIonChange={e => setCurrentPassword(e.detail.value!)}
            placeholder="Ingresa tu contraseña actual"
          />
        </IonItem>

        <IonItem className="cambiar-contrasena-input">
          <IonLabel position="floating">Nueva Contraseña</IonLabel>
          <br />
          <IonInput
            type="password"
            value={newPassword}
            onIonChange={e => setNewPassword(e.detail.value!)}
            placeholder="Ingresa tu nueva contraseña"
          />
        </IonItem>

        <IonItem className="cambiar-contrasena-input">
          <IonLabel position="floating">Confirmar Contraseña</IonLabel>
          <br />
          <IonInput
            type="password"
            value={confirmPassword}
            onIonChange={e => setConfirmPassword(e.detail.value!)}
            placeholder="Confirma tu nueva contraseña"
          />
        </IonItem>

        <IonButton
          className="cambiar-contrasena-button"
          expand="block"
          onClick={handleSaveChanges}
        >
          Guardar Cambios
        </IonButton>
        <br />
        {/* Botón para volver a Configuración */}
        <IonButton
          className="botonVolver"
          expand="block"
          color="light"
          onClick={handleBackToConfig}
        >
          Volver a Configuración
        </IonButton>

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Mensaje'}
          message={
            newPassword !== confirmPassword
              ? 'Las contraseñas no coinciden. Intenta de nuevo.'
              : 'Contraseña actualizada correctamente.'
          }
          buttons={['Hecho']}
        />
      </IonContent>
    </IonPage>
  );
};

export default CambiarContraseña;
