import React, { useState } from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonBreadcrumb, 
  IonBreadcrumbs, 
  IonButtons, 
  IonMenuButton, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonButton, 
  IonTextarea, 
  IonIcon, 
  IonAlert 
} from '@ionic/react';
import { mailOutline, callOutline } from 'ionicons/icons';
import './Soporte.css';

const Soporte: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);  // Estado para controlar la alerta

  const handleEnviarMensaje = () => {
    setShowAlert(true);  // Muestra la alerta al hacer clic en el botón
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Soporte Técnico</IonTitle>
          <IonButtons slot="end">
            <IonMenuButton autoHide={false} />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding soporte-content">
        <IonBreadcrumbs>
          <IonBreadcrumb href="/Tab1">Inicio</IonBreadcrumb>
          <IonBreadcrumb>Página Actual</IonBreadcrumb>
        </IonBreadcrumbs>

        <h2 className="soporte-title">Contactar Soporte Técnico</h2>

        <IonItem className="input-item">
          <IonLabel position="floating">Correo Electrónico</IonLabel>
          <IonInput type="email"></IonInput>
        </IonItem>

        <IonItem className="input-item">
          <IonLabel position="floating">Asunto</IonLabel>
          <IonInput></IonInput>
        </IonItem>

        <IonItem className="input-item">
          <IonLabel position="floating">Mensaje</IonLabel>
          <IonTextarea rows={6}></IonTextarea>
        </IonItem>

        <IonButton expand="block" color="primary" onClick={handleEnviarMensaje}>
          Enviar Mensaje
        </IonButton>

        <div className="soporte-contact-info">
          <h3>Otros Métodos de Contacto:</h3>
          <IonItem lines="none">
            <IonIcon icon={mailOutline} slot="start" />
            <IonLabel>soporte.correo@.com</IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonIcon icon={callOutline} slot="start" />
            <IonLabel>+56912332190</IonLabel>
          </IonItem>
        </div>

        {/* Alerta de confirmación de envío */}
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}  // Cierra la alerta cuando se hace clic en "OK"
          header={'Mensaje Enviado'}
          message={'Tu mensaje ha sido enviado correctamente.'}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default Soporte;
