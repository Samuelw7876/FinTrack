import React, { useState } from 'react';
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
import './Cuenta.css';

const Cuenta: React.FC = () => {
  const [accountStatus] = useState('Cuenta Activa');
  const [membership] = useState('Premium');
  const [accountNumber] = useState('1234-1234-1234-124');
  const [lastLogin] = useState('22 de Junio, 2024');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cuenta</IonTitle>
          <IonButtons slot="end">
            <IonMenuButton autoHide={false} />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="cuenta">
        <IonBreadcrumbs>
          <IonBreadcrumb href="/Tab1">Inicio</IonBreadcrumb>
          <IonBreadcrumb>Página Actual</IonBreadcrumb>
        </IonBreadcrumbs>

        {/* Información Básica */}
        <IonCard className="cartaCuenta">
          <IonCardHeader>
            <IonCardTitle>Información Básica</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p><strong>Nombre:</strong> Samuel Catrileo</p>
            <p><strong>Correo Electrónico:</strong> samuel.catrileo@gmail.com</p>
            <p><strong>Número de Cuenta:</strong> {accountNumber}</p>
          </IonCardContent>
        </IonCard>

        {/* Estado de la Cuenta */}
        <IonCard className="cartaCuenta">
          <IonCardHeader>
            <IonCardTitle>Estado de la Cuenta</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p><strong>Estado:</strong> {accountStatus}</p>
            <p><strong>Membresía:</strong> {membership}</p>
            <p><strong>Último Inicio de Sesión:</strong> {lastLogin}</p>
          </IonCardContent>
        </IonCard>

        {/* Detalles de Suscripción */}
        <IonCard className="cartaCuenta">
          <IonCardHeader>
            <IonCardTitle>Detalles de Suscripción</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p><strong>Tipo de Suscripción:</strong> Anual</p>
            <p><strong>Fecha de Renovación:</strong> 20 de Diciembre, 2024</p>
            <p><strong>Precio de Suscripción:</strong> $120.00 USD/año</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Cuenta;
