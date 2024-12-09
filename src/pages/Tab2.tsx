import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/react';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { db } from '../firebase/firebaseConfig'; // Configuración de Firebase

const Tab2: React.FC = () => {
  const [transacciones, setTransacciones] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const obtenerTransacciones = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;

        console.log('Usuario autenticado:', user);

        if (!user) {
          setError('Usuario no autenticado.');
          return;
        }

        const uid = user.uid;

        // Obtener tarjetas del usuario
        const tarjetasSnapshot = await getDocs(collection(db, `usuarios/${uid}/tarjetas`));
        const transaccionesData: any[] = [];

        for (const tarjetaDoc of tarjetasSnapshot.docs) {
          const tarjetaID = tarjetaDoc.id;

          // Obtener transacciones de cada tarjeta
          const transaccionesSnapshot = await getDocs(
            collection(db, `usuarios/${uid}/tarjetas/${tarjetaID}/transacciones`)
          );

          transaccionesSnapshot.forEach((trans) => {
            transaccionesData.push({
              id: trans.id,
              ...trans.data(),
            });
          });
        }

        setTransacciones(transaccionesData);
      } catch (error) {
        console.error('Error al obtener las transacciones:', error);
        setError('Ocurrió un error al cargar las transacciones.');
      }
    };

    obtenerTransacciones();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Transacciones</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {error ? (
          <p>{error}</p>
        ) : transacciones.length > 0 ? (
          <IonList>
            {transacciones.map((transaccion) => (
              <IonItem key={transaccion.id}>
                <IonLabel>
                  <h2>{transaccion.tipo}</h2>
                  <p>Descripción: {transaccion.descripcion}</p>
                  <p>Fecha: {new Date(transaccion.fecha.seconds * 1000).toLocaleDateString()}</p>
                  <p>Cantidad: {transaccion.cantidad}</p>
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
