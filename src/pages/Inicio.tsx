import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonText, IonItem, IonLabel, IonToast } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import './Inicio.css';

// Lista de usuarios simulados
const usuarios = [
  { email: 'user1@example.com', password: '123456' },
  { email: 'user2@example.com', password: 'password' },
  { email: 'admin@example.com', password: 'admin123' }
];

const Inicio: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');  // Estado para guardar el correo
  const [password, setPassword] = useState('');  // Estado para guardar la contraseña
  const [showToast, setShowToast] = useState(false);  // Estado para mostrar el toast (alerta)
  const [toastMessage, setToastMessage] = useState('');  // Estado para el mensaje del toast

  const handleInicio = () => {
    // Simula la autenticación de usuario verificando el correo y la contraseña
    const usuarioValido = usuarios.find(
      (usuario) => usuario.email === email && usuario.password === password
    );

    if (usuarioValido) {
      history.push('/tab1');  // Si el usuario es válido, redirige a la app
    } else {
      setToastMessage('Correo o contraseña incorrectos');  // Mensaje de error
      setShowToast(true);  // Muestra el toast
    }
  };

  const handleRegistro = () => {
    history.push('/Registro'); // Redirige al registro
  };

  const handleForgotPassword = () => {
    // Lógica para olvidaste tu contraseña
    console.log('Olvidaste tu contraseña');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Iniciar Sesión</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Correo Electrónico</IonLabel>
          <IonInput 
            type="email" 
            value={email} 
            onIonInput={(e: any) => setEmail(e.target.value)}  // Actualiza el estado del correo
            placeholder="usuario@dominio.com"
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Contraseña</IonLabel>
          <IonInput 
            type="password" 
            value={password} 
            onIonInput={(e: any) => setPassword(e.target.value)}  // Actualiza el estado de la contraseña
            placeholder="123456789"
          />
        </IonItem>
        <IonButton expand="block" onClick={handleInicio}>Iniciar Sesión</IonButton>
        
        {/* Link para recuperar contraseña */}
        <IonText className="forgot-password" onClick={handleForgotPassword}>
          ¿Olvidaste tu contraseña?
        </IonText>
        
        {/* Link para registrarse */}
        <IonText className="no-tienes-cuenta">
          ¿No tienes cuenta?
          <IonText className="registro-link" onClick={handleRegistro}>
            <strong> Regístrate ahora</strong>
          </IonText>
        </IonText>

        {/* Toast para mostrar errores */}
        <IonToast
          isOpen={showToast}
          message={toastMessage}
          duration={2000}
          onDidDismiss={() => setShowToast(false)}
        />
      </IonContent>
    </IonPage>
  );
};

export default Inicio;
