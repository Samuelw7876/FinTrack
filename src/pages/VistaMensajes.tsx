import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonText } from '@ionic/react';
import { useParams, useHistory } from 'react-router-dom';
import { Mensajes } from '../data/Mensajes';
import { personCircleOutline, trashBin, arrowBackOutline } from 'ionicons/icons';
import './VistaMensajes.css';

const VistaMensajes: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const mensaje = Mensajes.find(m => m.id === parseInt(id));

  if (!mensaje) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Error</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <p>No se encontró el mensaje.</p>
        </IonContent>
      </IonPage>
    );
  }

  const handleDelete = () => {
    const mensajeIndex = Mensajes.findIndex(m => m.id === parseInt(id));
    Mensajes.splice(mensajeIndex, 1);
    history.push('/tab3');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonIcon icon={arrowBackOutline} slot="start" className="icono-volver" onClick={() => history.goBack()} />
          <IonTitle className="titulo-mensaje">Mensaje</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="contenido-detalle-mensaje">
        <div className="detalle-cabecera">
          <IonIcon icon={personCircleOutline} className="icono-detalle" />
          <div className="info-detalle">
            <h2 className="remitente-nombre">{mensaje.fromName}</h2>
            <p className="mensaje-fecha">{mensaje.date}</p>
          </div>
        </div>
         {/* Título del mensaje */}
          <h2 className="titulo-detalle-mensaje">{mensaje.subject}</h2>

        {/* Contenido del mensaje envuelto en un div */}
        <div className="mensaje-contenido">
          <IonText>
            <p>{mensaje.text}</p>
          </IonText>
        </div>
        <div className="botones-acciones">
          <IonButton expand="block" color="danger" onClick={handleDelete}>
            <IonIcon icon={trashBin} slot="start" />
            Eliminar
          </IonButton>
          <IonButton expand="block" color="primary" onClick={() => history.push('/tab3')}>
            Volver a Notificaciones
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default VistaMensajes;
