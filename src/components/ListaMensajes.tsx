import { IonSearchbar, IonChip, IonLabel, IonList, IonItem, IonText } from '@ionic/react';
import { useState } from 'react';
import { Message } from '../data/Mensajes';
import { useHistory } from 'react-router-dom';
import './ListaMensajes.css';

interface ListaMensajesProps {
  mensajes: Message[];
}

const ListaMensajes: React.FC<ListaMensajesProps> = ({ mensajes }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('Todos');
  const history = useHistory();

  // Filtrar mensajes según la búsqueda y el filtro
  const mensajesFiltrados = mensajes.filter((mensaje) => {
    const matchesSearch = mensaje.fromName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mensaje.subject.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filter === 'Todos' || mensaje.category === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      {/* Barra de búsqueda */}
      <IonSearchbar
        className="barra-busqueda"
        value={searchTerm}
        onIonInput={(e: any) => setSearchTerm(e.target.value)}
        placeholder="Buscar mensajes, nombres, archivos..."
      />

      {/* Filtros con Chips */}
      <div className="filtros-chips">
        <IonChip onClick={() => setFilter('Todos')} outline={filter !== 'Todos'} color={filter === 'Todos' ? 'primary' : 'medium'}>
          <IonLabel>Todos</IonLabel>
        </IonChip>
        <IonChip onClick={() => setFilter('Promociones')} outline={filter !== 'Promociones'} color={filter === 'Promociones' ? 'primary' : 'medium'}>
          <IonLabel>Promociones</IonLabel>
        </IonChip>
        <IonChip onClick={() => setFilter('Seguridad')} outline={filter !== 'Seguridad'} color={filter === 'Seguridad' ? 'primary' : 'medium'}>
          <IonLabel>Seguridad</IonLabel>
        </IonChip>
        <IonChip onClick={() => setFilter('Recordatorios')} outline={filter !== 'Recordatorios'} color={filter === 'Recordatorios' ? 'primary' : 'medium'}>
          <IonLabel>Recordatorios</IonLabel>
        </IonChip>
        <IonChip onClick={() => setFilter('Noticias')} outline={filter !== 'Noticias'} color={filter === 'Noticias' ? 'primary' : 'medium'}>
          <IonLabel>Noticias</IonLabel>
        </IonChip>
        <IonChip onClick={() => setFilter('Actualizaciones')} outline={filter !== 'Actualizaciones'} color={filter === 'Actualizaciones' ? 'primary' : 'medium'}>
          <IonLabel>Actualizaciones</IonLabel>
        </IonChip>
        <IonChip onClick={() => setFilter('Spam')} outline={filter !== 'Spam'} color={filter === 'Spam' ? 'primary' : 'medium'}>
          <IonLabel>Spam</IonLabel>
        </IonChip>
      </div>

      {/* Lista de mensajes */}
      <IonList className="lista-mensajes">
        {mensajesFiltrados.map((mensaje) => (
          <IonItem key={mensaje.id} button onClick={() => history.push(`/vista-mensaje/${mensaje.id}`)}>
            <IonLabel>
              <h2>{mensaje.fromName}</h2>
              <h3>{mensaje.subject}</h3>
              <p>{mensaje.date}</p>
              <IonText color="medium">
                <p>{mensaje.text.substring(0, 50)}...</p>
              </IonText>
            </IonLabel>
          </IonItem>
        ))}
      </IonList>
    </div>
  );
};

export default ListaMensajes;
