import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
} from '@ionic/react';
import { useEffect, useState } from 'react';
import { collection, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { db } from '../firebase/firebaseConfig';

const Tab2: React.FC = () => {
  const [tarjeta, setTarjeta] = useState<any>(null);
  const [transacciones, setTransacciones] = useState<any[]>([]);
  const [monto, setMonto] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const escucharCambios = () => {
      try {
        console.log('Iniciando el listener para tarjeta y transacciones...');
        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) {
          console.error('Error: Usuario no autenticado.');
          setError('Usuario no autenticado.');
          return;
        }

        const uid = user.uid;
        console.log('UID del usuario autenticado:', uid);

        // Listener en tiempo real para la tarjeta
        const tarjetaRef = collection(db, `usuarios/${uid}/tarjetas`);
        const unsubscribeTarjeta = onSnapshot(tarjetaRef, (snapshot) => {
          if (!snapshot.empty) {
            const tarjetaDoc = snapshot.docs[0];
            const tarjetaData = tarjetaDoc.data();
            if (!tarjetaData.numeroTarjeta || !tarjetaData.titular || tarjetaData.saldo === undefined) {
              console.error('Tarjeta inválida: Falta información requerida.');
              return;
            }

            setTarjeta({ id: tarjetaDoc.id, ...tarjetaData });

            // Listener en tiempo real para las transacciones
            const transaccionesRef = collection(db, `usuarios/${uid}/tarjetas/${tarjetaDoc.id}/transacciones`);
            const unsubscribeTransacciones = onSnapshot(transaccionesRef, (transSnapshot) => {
              const transaccionesData = transSnapshot.docs.map((trans) => {
                const transData = trans.data();

                if (
                  !transData.tipo ||
                  !transData.descripcion ||
                  transData.monto === undefined ||
                  !transData.fecha
                ) {
                  console.error(`Transacción inválida (ID: ${trans.id}): Falta información requerida.`);
                  return null;
                }

                return {
                  id: trans.id,
                  ...transData,
                };
              }).filter(Boolean);

              setTransacciones(transaccionesData);
            });

            // Cleanup del listener de transacciones
            return () => {
              unsubscribeTransacciones();
            };
          } else {
            console.warn('No se encontraron tarjetas para el usuario.');
            setTarjeta(null);
            setTransacciones([]);
          }
        });

        // Cleanup del listener de tarjeta
        return () => {
          unsubscribeTarjeta();
        };
      } catch (error) {
        console.error('Error al configurar el listener:', error);
        setError('Ocurrió un error al configurar el listener.');
      }
    };

    escucharCambios();
  }, []);

  const handleDeposito = async () => {
    try {
      const montoNum = parseFloat(monto);
      if (isNaN(montoNum) || montoNum <= 0) {
        console.warn('El monto debe ser un número mayor a 0.');
        setError('El monto debe ser un número mayor a 0.');
        return;
      }

      if (!tarjeta) {
        console.error('Error: No hay tarjeta seleccionada.');
        setError('No hay tarjeta seleccionada.');
        return;
      }

      console.log(`Realizando depósito de ${montoNum} en la tarjeta ID: ${tarjeta.id}`);
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        console.error('Error: Usuario no autenticado.');
        setError('Usuario no autenticado.');
        return;
      }

      const uid = user.uid;
      const tarjetaRef = doc(db, `usuarios/${uid}/tarjetas`, tarjeta.id);

      const nuevoSaldo = tarjeta.saldo + montoNum;

      await updateDoc(tarjetaRef, { saldo: nuevoSaldo });
      console.log('Saldo actualizado:', nuevoSaldo);

      setMonto(''); // Limpiar el monto después del depósito
    } catch (error) {
      console.error('Error al realizar el depósito:', error);
      setError('Ocurrió un error al realizar el depósito.');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tarjeta y Transacciones</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {error ? (
          <p>{error}</p>
        ) : tarjeta ? (
          <div>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>{tarjeta.numeroTarjeta}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>Titular: {tarjeta.titular}</p>
                <p>Saldo: {tarjeta.saldo}</p>
                <input
                  type="number"
                  placeholder="Monto a depositar"
                  value={monto}
                  onChange={(e) => setMonto(e.target.value)}
                />
                <IonButton expand="block" onClick={handleDeposito}>
                  Depositar
                </IonButton>
              </IonCardContent>
            </IonCard>

            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Transacciones</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                {transacciones.length > 0 ? (
                  <IonList>
                    {transacciones.map((transaccion, index) => (
                      <IonItem key={transaccion.id || index}>
                        <IonLabel>
                          <h2>{transaccion.tipo}</h2>
                          <p>Descripción: {transaccion.descripcion}</p>
                          <p>Monto: {transaccion.monto}</p>
                          <p>
                            Fecha:{' '}
                            {transaccion.fecha
                              ? new Date(transaccion.fecha.seconds * 1000).toLocaleDateString()
                              : 'Sin fecha'}
                          </p>
                        </IonLabel>
                      </IonItem>
                    ))}
                  </IonList>
                ) : (
                  <p>No hay transacciones para esta tarjeta.</p>
                )}
              </IonCardContent>
            </IonCard>
          </div>
        ) : (
          <p>No se encontró tarjeta asociada.</p>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
