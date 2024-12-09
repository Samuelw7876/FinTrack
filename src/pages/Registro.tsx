import React, { useState, useEffect } from 'react';
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
import { registrarUsuario } from '../firebase/authService';
import './Registro.css';

const Registro: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const history = useHistory();

  // Validación en tiempo real de contraseñas
  useEffect(() => {
    setPasswordMatch(password.trim() === confirmPassword.trim());
  }, [password, confirmPassword]);

  const handleRegister = async () => {
    if (!nombre.trim()) {
      setErrorMessage('El campo "Nombre" no puede estar vacío.');
      setShowAlert(true);
      return;
    }

    if (!apellido.trim()) {
      setErrorMessage('El campo "Apellido" no puede estar vacío.');
      setShowAlert(true);
      return;
    }

    if (!email.trim()) {
      setErrorMessage('El campo "Correo Electrónico" no puede estar vacío.');
      setShowAlert(true);
      return;
    }

    if (!passwordMatch) {
      setErrorMessage('Las contraseñas no coinciden.');
      setShowAlert(true);
      return;
    }

    if (password.length < 6 || !/\d/.test(password)) {
      setErrorMessage(
        'La contraseña debe tener al menos 6 caracteres e incluir un número.'
      );
      setShowAlert(true);
      return;
    }

    try {
      await registrarUsuario(email.trim(), password.trim(), nombre.trim(), apellido.trim());
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
      history.push('/inicio');
    } catch (err) {
      setErrorMessage(
        'Hubo un error al registrar el usuario. Intente nuevamente.'
      );
      setShowAlert(true);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registro</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="register-container">
          <IonItem>
            <IonLabel position="floating">Nombre</IonLabel>
            <IonInput
              type="text"
              value={nombre}
              onInput={(e: any) => setNombre(e.target.value)} // Cambiado a onInput
              required
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Apellido</IonLabel>
            <IonInput
              type="text"
              value={apellido}
              onInput={(e: any) => setApellido(e.target.value)} // Cambiado a onInput
              required
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Correo Electrónico</IonLabel>
            <IonInput
              type="email"
              value={email}
              onInput={(e: any) => setEmail(e.target.value)} // Cambiado a onInput
              required
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Contraseña</IonLabel>
            <IonInput
              type="password"
              value={password}
              onInput={(e: any) => setPassword(e.target.value)} // Cambiado a onInput
              required
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Confirmar Contraseña</IonLabel>
            <IonInput
              type="password"
              value={confirmPassword}
              onInput={(e: any) => setConfirmPassword(e.target.value)} // Cambiado a onInput
              required
            />
          </IonItem>
          {!passwordMatch && (
            <IonText color="danger">
              <p>Las contraseñas no coinciden.</p>
            </IonText>
          )}
          <IonButton
            expand="block"
            className="register-button"
            onClick={handleRegister}
          >
            Registrarse
          </IonButton>
          <IonText className="ion-text-center" color="medium">
            <p>
              ¿Ya tienes cuenta?{' '}
              <IonText
                color="primary"
                onClick={() => history.push('/inicio')}
                style={{ cursor: 'pointer', textDecoration: 'underline' }}
              >
                Inicia sesión aquí
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

export default Registro;
