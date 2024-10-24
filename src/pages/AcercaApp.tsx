import React from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonBreadcrumbs, 
  IonBreadcrumb, 
  IonButtons, 
  IonMenuButton, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent
} from '@ionic/react';
import './AcercaApp.css'; // Referencia a su propio CSS

const AcercaApp: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Acerca de la App</IonTitle>
          <IonButtons slot="end">
            <IonMenuButton autoHide={false} />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding contenedorAcercaApp">
        <IonBreadcrumbs>
          <IonBreadcrumb href="/Tab1">Inicio</IonBreadcrumb>
          <IonBreadcrumb>Página Actual</IonBreadcrumb>
        </IonBreadcrumbs>

        <IonCard className="blockAcercaApp">
          <IonCardHeader>
            <IonCardTitle>¿Qué es esta App?</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Esta aplicación está diseñada para facilitar la gestión de tus finanzas. Te permite llevar un control exhaustivo
              de tus transacciones, realizar pagos y gestionar tus cuentas de manera eficiente y segura.
            </p>
          </IonCardContent>
        </IonCard>

        <IonCard className="blockAcercaApp">
          <IonCardHeader>
            <IonCardTitle>Características Clave</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <ul>
              <li>Control de cuentas y transacciones</li>
              <li>Soporte para múltiples monedas</li>
            </ul>
          </IonCardContent>
        </IonCard>

        <IonCard className="blockAcercaApp">
          <IonCardHeader>
            <IonCardTitle>Última Actualización</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Versión 2.3.5 - Actualizado el 10 de Septiembre, 2024.
            </p>
            <p>
              Incluye mejoras en la seguridad y la corrección de errores menores.
            </p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default AcercaApp;
