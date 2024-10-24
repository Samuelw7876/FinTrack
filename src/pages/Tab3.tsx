import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import ListaMensajes from '../components/ListaMensajes'; // Importar el componente de la lista de mensajes
import { Mensajes } from '../data/Mensajes'; // Mensajes simulados
import './Tab3.css'; // Archivo de estilos

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="titulo-notificaciones">Mis Notificaciones</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="contenido-notificaciones">
        {/* Componente de lista de mensajes con búsqueda y filtros */}
        <ListaMensajes mensajes={Mensajes} />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
