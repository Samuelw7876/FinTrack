import { 
    IonCard, 
    IonCardContent, 
    IonButton, 
    IonImg, 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar, 
    IonButtons, 
    IonMenuButton, 
    IonAlert, 
    IonInput,
    IonItem,
    IonLabel 
  } from '@ionic/react';
  import React, { useState } from 'react';
  import './Tab4.css';
  
  const Tab4: React.FC = () => {
    const [showLogoutAlert, setShowLogoutAlert] = useState(false);
    const [showEditAlert, setShowEditAlert] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState('Samuel Catrileo');
    const [email, setEmail] = useState('correo.usuario@gmail.com');
  
    const handleLogout = () => {
      setShowLogoutAlert(true);
    };
  
    const handleEditProfile = () => {
      setEditMode(true);
    };
  
    const handleSaveChanges = () => {
      setEditMode(false);
      setShowEditAlert(true);
    };
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Mi Perfil</IonTitle>
            <IonButtons slot="end">
              <IonMenuButton autoHide={false}/>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
  
        <IonContent className="ion-padding">
          <IonCard>
            <IonImg src="https://cdn-icons-png.flaticon.com/512/711/711769.png" className="profile-img" /> 
            <IonCardContent>
              <br />
              {editMode ? (
                <>
                  <IonItem className="edit-item-tab4">
                    <IonLabel position="floating">Nombre</IonLabel>
                    <IonInput value={name} onIonChange={e => setName(e.detail!.value!)} />
                  </IonItem>
                  <IonItem className="edit-item-tab4">
                    <IonLabel position="floating">Correo</IonLabel>
                    <IonInput value={email} onIonChange={e => setEmail(e.detail!.value!)} />
                  </IonItem>
                  <IonButton expand="block" color="success" onClick={handleSaveChanges}>Guardar Cambios</IonButton>
                </>
              ) : (
                <>
                  <h1>Nombre de Usuario</h1>
                  <h2>{name}</h2>
                  <br />
                  <h1>Correo</h1>
                  <h2>{email}</h2>
                </>
              )}
            </IonCardContent>
          </IonCard>
  
          {!editMode && (
            <div className="tab4-buttons">
              <IonButton expand="block" color="primary" onClick={handleEditProfile}>Editar Perfil</IonButton>
              <IonButton expand="block" color="danger" onClick={handleLogout}>Cerrar Sesion</IonButton>
            </div>
          )}
  
          {/* Alerta de cierre de sesión */}
          <IonAlert
            isOpen={showLogoutAlert}
            onDidDismiss={() => setShowLogoutAlert(false)}
            header={'Sesión Cerrada'}
            message={'Has cerrado sesión correctamente.'}
            buttons={['OK']}
          />
  
          {/* Alerta de cambios guardados */}
          <IonAlert
            isOpen={showEditAlert}
            onDidDismiss={() => setShowEditAlert(false)}
            header={'Perfil Actualizado'}
            message={'Los cambios en tu perfil se han guardado correctamente.'}
            buttons={['OK']}
          />
        </IonContent>
      </IonPage>
    );
  };
  
  export default Tab4;
  