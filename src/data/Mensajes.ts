export interface Message {
    fromName: string;
    subject: string;
    date: string;
    text: string;
    category: string; 
    id: number;
  }
  
  export const Mensajes: Message[] = [
    {
      id: 1,
      fromName: "Banco Central",
      subject: "Promoción de inversión: Tasas mejoradas",
      date: "10:00 AM",
      text: "Aprovecha nuestras nuevas tasas de interés mejoradas para tus inversiones a largo plazo. Ahora es el momento perfecto para hacer crecer tus ahorros y obtener mejores rendimientos. Consulta con tu asesor financiero para más detalles sobre cómo empezar.",
      category: "Promociones",
    },
    {
      id: 2,
      fromName: "Banco Seguro",
      subject: "Intento sospechoso de inicio de sesión",
      date: "8:00 AM",
      text: "Hemos detectado un intento sospechoso de inicio de sesión en tu cuenta desde una ubicación desconocida. Si no reconoces esta actividad, te recomendamos que cambies tu contraseña inmediatamente y habilites la autenticación de dos factores para mayor seguridad.",
      category: "Seguridad",
    },
    {
      id: 3,
      fromName: "Proveedor de Servicios",
      subject: "Recordatorio: Pago de factura pendiente",
      date: "Hace 2 días",
      text: "Tienes una factura pendiente de $50 que vence mañana. Recuerda hacer el pago a tiempo para evitar cargos adicionales o interrupciones en el servicio. Puedes realizar el pago a través de nuestra plataforma en línea de forma rápida y segura.",
      category: "Recordatorios",
    },
    {
      id: 4,
      fromName: "Mercado Global",
      subject: "Noticias del mercado: Caída en las bolsas",
      date: "Hace 1 semana",
      text: "Las bolsas mundiales han sufrido una caída debido a la incertidumbre en los mercados internacionales. Los analistas recomiendan precaución en las inversiones a corto plazo y sugieren considerar opciones más conservadoras para los próximos meses.",
      category: "Noticias",
    },
    {
      id: 5,
      fromName: "Desarrolladores de FinTrack",
      subject: "Nueva actualización disponible: V2.0",
      date: "Hoy",
      text: "La nueva actualización de la app incluye mejoras en la interfaz, mayor seguridad en las transacciones y nuevas funcionalidades para gestionar tus finanzas de forma más eficiente. Descárgala ahora para disfrutar de todas estas mejoras.",
      category: "Actualizaciones",
    },
    {
      id: 6,
      fromName: "Correo Basura",
      subject: "Gana dinero fácil con esta inversión",
      date: "Hace 3 días",
      text: "Aprovecha esta increíble oportunidad para hacerte rico rápido con nuestro esquema de inversión. Prometemos rendimientos sin precedentes con un riesgo mínimo. No pierdas esta oportunidad única para aumentar tu patrimonio rápidamente.",
      category: "Spam",
    },
    {
      id: 7,
      fromName: "Banco Financiero",
      subject: "Tu crédito pre-aprobado está disponible",
      date: "9:00 AM",
      text: "¡Felicidades! Tu crédito pre-aprobado por $5,000 ya está disponible. Aprovecha esta oferta exclusiva para financiar tus proyectos personales o consolidar deudas. La tasa de interés es fija y competitiva. Visita nuestra oficina o utiliza la banca en línea para activarlo.",
      category: "Promociones",
    },
    {
      id: 8,
      fromName: "Seguridad Financiera",
      subject: "Actualización de políticas de seguridad",
      date: "Ayer",
      text: "Debido a recientes amenazas de ciberseguridad, hemos actualizado nuestras políticas de protección de datos. Te recomendamos revisar los nuevos lineamientos para mantener la seguridad de tu información. La autenticación de dos factores ahora es obligatoria para todas las cuentas.",
      category: "Seguridad",
    },
    {
      id: 9,
      fromName: "Proveedor de Internet",
      subject: "Recordatorio de mantenimiento programado",
      date: "Hace 4 días",
      text: "Este sábado se realizará un mantenimiento programado en tu área, lo que puede afectar la conectividad durante el día. Te pedimos disculpas por los inconvenientes y agradecemos tu comprensión mientras trabajamos para mejorar nuestro servicio.",
      category: "Recordatorios",
    },
    {
      id: 10,
      fromName: "Noticias Financieras",
      subject: "Los bonos del tesoro aumentan en valor",
      date: "Hace 3 días",
      text: "Los bonos del tesoro han experimentado un aumento significativo en valor debido a la alta demanda en los mercados internacionales. Los expertos recomiendan considerar este activo como una opción segura para diversificar tu portafolio durante los próximos meses.",
      category: "Noticias",
    },
    {
      id: 11,
      fromName: "Desarrolladores de FinTrack",
      subject: "Parche de seguridad crítico disponible",
      date: "Hoy",
      text: "Hemos lanzado un parche de seguridad crítico para solucionar una vulnerabilidad en la versión anterior de la app. Te recomendamos actualizar a la versión más reciente de inmediato para asegurar la protección de tus datos personales y financieros.",
      category: "Actualizaciones",
    },
    {
      id: 12,
      fromName: "Promoción Especial",
      subject: "Gana $100 con nuestra encuesta rápida",
      date: "Hace 5 días",
      text: "Participa en nuestra encuesta rápida y gana $100 por solo 5 minutos de tu tiempo. ¡Es fácil y rápido! Completa la encuesta en línea y estarás participando automáticamente en el sorteo mensual de increíbles premios.",
      category: "Spam",
    }
  ];
  