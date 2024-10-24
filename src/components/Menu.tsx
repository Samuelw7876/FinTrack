import {
    IonMenu,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonMenuToggle,
    IonIcon,
    IonFooter
  } from '@ionic/react';
  import { helpCircleSharp, settingsSharp, personSharp,informationCircleSharp } from 'ionicons/icons'; // Importamos los íconos
  import './Menu.css';
  
  const Menu: React.FC = () => {
    return (
      <IonMenu contentId="main" type="overlay" side="end">
        <IonContent>
          <div className="menu-header">
            <h2 className="nombrePerfil">Nombre del Perfil</h2>
            <p className="nombreCorreo">correo@gmail.com</p>
            <div className="separator"></div>
          </div>
          <IonList className="menu-list">
            <IonMenuToggle autoHide={false}>
              <IonItem button routerLink="/soporte">
                <IonIcon icon={helpCircleSharp} slot="start" />
                <IonLabel>Soporte Tecnico</IonLabel>
              </IonItem>
              <IonItem button routerLink="/configuracion">
                <IonIcon icon={settingsSharp} slot="start" />
                <IonLabel>Configuración</IonLabel>
              </IonItem>
              <IonItem button routerLink="/cuenta">
                <IonIcon icon={personSharp} slot="start" />
                <IonLabel>Cuenta</IonLabel>
              </IonItem>
            </IonMenuToggle>
  
          </IonList> 
        </IonContent>
        <IonFooter>
          <IonList>
            <IonMenuToggle autoHide={false}>
              <IonItem button routerLink="/acerca-nosotros">
                <IonIcon icon={informationCircleSharp} slot="start" />
                <IonLabel>Acerca de Nosotros</IonLabel>
              </IonItem>
              <IonItem button routerLink="/acerca-app">
                <IonIcon icon={informationCircleSharp} slot="start" />
                <IonLabel>Acerca de la App</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonFooter>
      </IonMenu>
    );
  };
  
  export default Menu;
  