import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import './Home.css'; // Asegúrate de importar el archivo de estilos

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Degradado y Botones</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="gradient-background">
          <h2 className="title">Bienvenido a mi App con Degradado</h2>
          <div className="button-container">
            <IonButton className="custom-button" expand="full">
              Botón 1
            </IonButton>
            <IonButton className="custom-button" expand="full">
              Botón 2
            </IonButton>
            <IonButton className="custom-button" expand="full">
              Botón 3
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
