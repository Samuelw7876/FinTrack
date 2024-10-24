import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonItem, IonLabel, IonCheckbox, IonText, IonAlert } from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Registro.css';

const Registro: React.FC = () => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const history = useHistory();

  const handleRegistro = () => {
    if (!nombreCompleto || !correo || !contraseña || !acceptedTerms) {
      setShowAlert(true); // Mostrar alerta si faltan datos o no se aceptan los términos
    } else {
      console.log('Registro exitoso');
      history.push('/tab1'); // Redirigir al Tab1 después del registro exitoso
    }
  };

  const handleIniciarSesion = () => {
    history.push('/Inicio'); // Redirigir al inicio de sesión
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Regístrate</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Nombre Completo <span className="required">*</span></IonLabel>
          <IonInput type="text" placeholder="Ejemplo: Juan Pérez" value={nombreCompleto} onIonInput={(e: any) => setNombreCompleto(e.target.value)} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Correo Electrónico <span className="required">*</span></IonLabel>
          <IonInput type="email" placeholder="Ejemplo: usuario@dominio.com" value={correo} onIonInput={(e: any) => setCorreo(e.target.value)} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Contraseña <span className="required">*</span></IonLabel>
          <IonInput type="password" placeholder="Mínimo 8 caracteres" value={contraseña} onIonInput={(e: any) => setContraseña(e.target.value)} />
        </IonItem>
        <IonItem>
          <IonLabel>Acepto los términos y condiciones <span className="required">*</span></IonLabel>
          <IonCheckbox checked={acceptedTerms} onIonChange={e => setAcceptedTerms(e.detail.checked)} />
        </IonItem>
        <IonButton expand="block" onClick={handleRegistro}>Registrarse</IonButton>

        {/* Solo "Inicia sesión aquí" será clicable */}
        <IonText className="ya-tienes-cuenta">
          ¿Ya tienes cuenta? 
          <IonText className="inicia-sesion-link" onClick={handleIniciarSesion}>
            <strong> Inicia sesión aquí</strong>
          </IonText>
        </IonText>

        {/* Alerta si los datos no están completos */}
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Error'}
          message={'Por favor, complete todos los campos obligatorios y acepte los términos y condiciones.'}
          buttons={['Aceptar']}
        />
      </IonContent>
    </IonPage>
  );
};

export default Registro;
