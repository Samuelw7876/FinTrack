import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonInput,
  IonLabel,
  IonItem,
  IonAlert,
  IonText,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { iniciarSesion } from '../firebase/authService';
import './Inicio.css';

const Inicio: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const history = useHistory();

  const handleLogin = async () => {
    if (!email.trim()) {
      setErrorMessage('El campo "Correo Electrónico" no puede estar vacío.');
      setShowAlert(true);
      return;
    }

    if (!password.trim()) {
      setErrorMessage('El campo "Contraseña" no puede estar vacío.');
      setShowAlert(true);
      return;
    }

    try {
      await iniciarSesion(email, password);
      setErrorMessage('');
      history.push('/tab2');
    } catch (err) {
      setErrorMessage(
        'Correo o contraseña incorrectos. Por favor, inténtelo de nuevo.'
      );
      setShowAlert(true);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Iniciar Sesión</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="login-container">
          <IonItem>
            <IonLabel position="floating">Correo Electrónico</IonLabel>
            <IonInput
              type="email"
              value={email}
              onInput={(e: any) => setEmail(e.target.value)} // Cambiado a `onInput`
              required
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Contraseña</IonLabel>
            <IonInput
              type="password"
              value={password}
              onInput={(e: any) => setPassword(e.target.value)} // Cambiado a `onInput`
              required
            />
          </IonItem>
          <IonButton expand="block" className="login-button" onClick={handleLogin}>
            Iniciar Sesión
          </IonButton>
          <IonText className="ion-text-center" color="medium">
            <p>
              ¿No tienes cuenta?{' '}
              <IonText
                color="primary"
                onClick={() => history.push('/registro')}
                style={{ cursor: 'pointer', textDecoration: 'underline' }}
              >
                Regístrate aquí
              </IonText>
            </p>
          </IonText>
          <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            header="Error"
            message={errorMessage}
            buttons={['OK']}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Inicio;
