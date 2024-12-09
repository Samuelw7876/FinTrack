import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

// Función para registrar usuarios
export const registrarUsuario = async (
  correo: string,
  contraseña: string,
  nombre: string,
  apellido: string // Nuevo parámetro
): Promise<void> => {
  try {
    // Validación de los datos ingresados
    if (!correo || !contraseña || !nombre || !apellido) {
      throw new Error('Todos los campos son obligatorios.');
    }

    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, correo, contraseña);
    const uid = userCredential.user.uid;

    // Crear documento del usuario en Firestore
    await setDoc(doc(db, 'usuarios', uid), {
      nombre,
      apellido,
      correo
    });

    console.log('Usuario registrado correctamente.');
  } catch (error: any) {
    if (error.code) {
      console.error(`Error de Firebase: ${error.message}`);
    } else {
      console.error(`Error general: ${error.message}`);
    }
    throw error;
  }
};

// Función para iniciar sesión
export const iniciarSesion = async (correo: string, contraseña: string): Promise<void> => {
  try {
    // Validación de los datos ingresados
    if (!correo || !contraseña) {
      throw new Error('Todos los campos son obligatorios.');
    }

    const auth = getAuth();
    await signInWithEmailAndPassword(auth, correo, contraseña);

    console.log('Inicio de sesión exitoso.');
  } catch (error: any) {
    if (error.code) {
      console.error(`Error de Firebase: ${error.message}`);
    } else {
      console.error(`Error general: ${error.message}`);
    }
    throw error;
  }
};
