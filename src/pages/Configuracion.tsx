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
  IonToggle, 
  IonList, 
  IonButton, 
  IonSelect, 
  IonSelectOption, 
  IonAlert 
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Configuracion.css';

const Configuracion: React.FC = () => {
  const history = useHistory(); // Para redirigir a otra página
  const [showAlert, setShowAlert] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState('es');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const handleGuardarCambios = () => {
    setShowAlert(true); // Muestra la alerta de confirmación
  };

  const handleNavigateToChangePassword = () => {
    history.push('/cambiar-contraseña');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Configuración</IonTitle>
          <IonButtons slot="end">
            <IonMenuButton autoHide={false} />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding configuracion-content">
        <IonBreadcrumbs>
          <IonBreadcrumb href="/Tab1">Inicio</IonBreadcrumb>
          <IonBreadcrumb>Página Actual</IonBreadcrumb>
        </IonBreadcrumbs>

        <IonList className="config-list">
          {/* Notificaciones */}
          <IonItem>
            <IonLabel>Notificaciones</IonLabel>
            <IonToggle 
              checked={notificationsEnabled}
              onIonChange={e => setNotificationsEnabled(e.detail.checked)}
            />
          </IonItem>

          {/* Modo oscuro */}
          <IonItem>
            <IonLabel>Modo Oscuro</IonLabel>
            <IonToggle 
              checked={darkModeEnabled}
              onIonChange={e => setDarkModeEnabled(e.detail.checked)}
            />
          </IonItem>

          {/* Botón para redirigir a Cambiar Contraseña */}
          <IonItem button onClick={handleNavigateToChangePassword}>
            <IonLabel>Cambiar Contraseña</IonLabel>
          </IonItem>

          {/* Seguridad de la Cuenta */}
          <IonItem>
            <IonLabel>Autenticación en dos pasos</IonLabel>
            <IonToggle 
              checked={twoFactorEnabled}
              onIonChange={e => setTwoFactorEnabled(e.detail.checked)}
            />
          </IonItem>

          {/* Preferencias de la Aplicación */}
          <IonItem>
            <IonLabel>Idioma</IonLabel>
            <IonSelect value={selectedLanguage} onIonChange={e => setSelectedLanguage(e.detail.value)}>
              <IonSelectOption value="es">Español</IonSelectOption>
              <IonSelectOption value="en">Inglés</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Moneda</IonLabel>
            <IonSelect value={selectedCurrency} onIonChange={e => setSelectedCurrency(e.detail.value)}>
              <IonSelectOption value="USD">USD</IonSelectOption>
              <IonSelectOption value="EUR">EUR</IonSelectOption>
              <IonSelectOption value="CLP">CLP</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>

        <IonButton expand="block" color="primary" onClick={handleGuardarCambios}>
          Guardar Cambios
        </IonButton>

        {/* Alerta de confirmación de guardado */}
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Cambios Guardados'}
          message={'Los cambios en la configuración han sido guardados correctamente.'}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default Configuracion;
