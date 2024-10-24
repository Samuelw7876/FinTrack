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
import './AcercaNosotros.css'; // Referencia a su propio CSS

const AcercaNosotros: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Acerca de Nosotros</IonTitle>
          <IonButtons slot="end">
            <IonMenuButton autoHide={false} />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding acerca-nosotros-content">
        <IonBreadcrumbs>
          <IonBreadcrumb href="/Tab1">Inicio</IonBreadcrumb>
          <IonBreadcrumb>Página Actual</IonBreadcrumb>
        </IonBreadcrumbs>

        <IonCard className="nosotros-card">
          <IonCardHeader>
            <IonCardTitle>¿Quiénes Somos?</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Somos una compañía dedicada a proporcionar soluciones financieras innovadoras. Con más de 10 años en el mercado,
              nuestra misión es ayudar a nuestros clientes a manejar sus finanzas de manera eficiente y segura.
            </p>
          </IonCardContent>
        </IonCard>

        <IonCard className="nosotros-card">
          <IonCardHeader>
            <IonCardTitle>Nuestra Visión</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Buscamos ser líderes en la industria financiera, ofreciendo herramientas que permitan a las personas gestionar sus 
              recursos con total transparencia y confianza.
            </p>
          </IonCardContent>
        </IonCard>

        <IonCard className="nosotros-card">
          <IonCardHeader>
            <IonCardTitle>Nuestro Equipo</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Contamos con un equipo altamente capacitado, comprometido con el desarrollo de productos de alta calidad 
              que se adaptan a las necesidades del mercado actual.
            </p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default AcercaNosotros;
