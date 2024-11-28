import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel } from '@ionic/react';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Asegúrate de que este archivo esté configurado correctamente
import './Tab2.css';

const Tab2: React.FC = () => {
  const [movimientos, setMovimientos] = useState<any[]>([]);

  useEffect(() => {
    const obtenerMovimientos = async () => {
      try {
        const movimientosRef = collection(db, 'usuarios', 'user1', 'tarjetas', 'tarjeta1', 'movimientos');
        const snapshot = await getDocs(movimientosRef);
        const movimientosData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setMovimientos(movimientosData);
      } catch (error) {
        console.error('Error al obtener los movimientos:', error);
      }
    };

    obtenerMovimientos();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lista de Transacciones</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {movimientos.length > 0 ? (
          <IonList>
            {movimientos.map(movimiento => (
              <IonItem key={movimiento.id}>
                <IonLabel>
                  <h2>{movimiento.tipo}</h2>
                  <p>Fecha: {new Date(movimiento.fecha.seconds * 1000).toLocaleDateString()}</p>
                  <p>Monto: {movimiento.monto} {movimiento.moneda}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        ) : (
          <p>No se encontraron transacciones.</p>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
