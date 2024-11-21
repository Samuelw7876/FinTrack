import React, { useState, useEffect } from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonMenuButton, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonSelect, 
  IonSelectOption, 
  IonButton,
  IonRefresher,
  IonRefresherContent,
  IonAlert
} from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [currencyFrom, setCurrencyFrom] = useState('CLP');
  const [currencyTo, setCurrencyTo] = useState('USD');
  const [result, setResult] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Estados para manejar las alertas
  const [showConversionAlert, setShowConversionAlert] = useState(false);
  const [showAdviceAlert, setShowAdviceAlert] = useState(false);

  const carouselItems = [
    {
      img: "https://www.investopedia.com/thmb/CVRgQs9s0QO5u_Cgj1FI2w_Pj_Q=/600x320/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/INV_FedChairmanJeromePowell_GettyImages-2099861242-e74e0ee8d973459bab7b69469c5f658e.jpg",
      title: "What To Expect in the Markets This Week",
      link: "https://www.investopedia.com"
    },
    {
      img: "https://lat.xtb.com/hs-fs/hubfs/Packshot%20xS%20desktop@2x.png?width=1458&height=1156&name=Packshot%20xS%20desktop@2x.png",
      title: "UNA PLATAFORMA, MUCHAS POSIBILIDADES",
      link: "https://lat.xtb.com/value-proposition-v2-lp-cl-whyxtb?utm_source=google&utm_medium=cpc&utm_campaign=search_new_whyxtb&utm_content=whyxtb2&utm_term=plataforma%20para%20invertir%20y%20ganar%20dinero&gad_source=1&gclid=CjwKCAjw9eO3BhBNEiwAoc0-jX43l4alO_tBqR0Tn9LEJg3FOqOwdxB6WNAfo6LecQjFJK_zAtQceBoCXjIQAvD_BwE"
    },
    {
      img: "https://static.tradingview.com/static/bundles/trading.e16f508e01e6d1c08156.webp",
      title: "Su galaxia de mercados",
      link: "https://www.tradingview.com"
    }
  ];

  // Cambiar imagen cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  const handleCurrencyChange = () => {
    const conversionRates: { [key: string]: number } = {
      'CLPtoUSD': 0.0012,
      'CLPtoEUR': 0.0011,
      'CLPtoJPY': 0.16,
      'USDtoCLP': 850,
      'EURtoCLP': 930,
      'JPYtoCLP': 6
    };

    const key = `${currencyFrom}to${currencyTo}`;
    const rate = conversionRates[key];
    if (rate && amount) {
      setResult(parseFloat(amount) * rate);
      setShowConversionAlert(true);  // Mostrar alerta después de la conversión
    } else {
      setResult(null);
    }
  };

  const doRefresh = (event: CustomEvent) => {
    setTimeout(() => {
      event.detail.complete();
    }, 2000);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Fin Track</IonTitle>
          <IonButtons slot="end">
            <IonMenuButton autoHide={false} />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent />
        </IonRefresher>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Gráfico Financiero</IonCardTitle>
          </IonCardHeader>
          <img src="https://static.tradingview.com/static/bundles/trading.e16f508e01e6d1c08156.webp" alt="Gráfico Financiero" className="financial-chart" />
        </IonCard>


        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Cambio de Moneda</IonCardTitle>
          </IonCardHeader>
          <IonItem>
            <IonLabel>De</IonLabel>
            <IonSelect value={currencyFrom} onIonChange={e => setCurrencyFrom(e.detail.value!)}>
              <IonSelectOption value="CLP">Pesos Chilenos (CLP)</IonSelectOption>
              <IonSelectOption value="USD">Dólares (USD)</IonSelectOption>
              <IonSelectOption value="EUR">Euros (EUR)</IonSelectOption>
              <IonSelectOption value="JPY">Yenes (JPY)</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>A</IonLabel>
            <IonSelect value={currencyTo} onIonChange={e => setCurrencyTo(e.detail.value!)}>
              <IonSelectOption value="USD">Dólares (USD)</IonSelectOption>
              <IonSelectOption value="EUR">Euros (EUR)</IonSelectOption>
              <IonSelectOption value="JPY">Yenes (JPY)</IonSelectOption>
              <IonSelectOption value="CLP">Pesos Chilenos (CLP)</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>Valor: </IonLabel>
            <IonInput value={amount} placeholder="  Ingrese monto" onIonChange={e => setAmount(e.detail.value!)}></IonInput>
          </IonItem>
          <IonButton expand="block" onClick={handleCurrencyChange}>
            Convertir
          </IonButton>
          {result && (
            <IonItem>
              <IonLabel>Resultado: {result.toFixed(2)} {currencyTo}</IonLabel>
            </IonItem>
          )}
        </IonCard>

        {/* Inversiones y Seguridad */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Inversiones Seguras</IonCardTitle>
          </IonCardHeader>
          <IonItem>
            <IonLabel>Asegura tu inversión con nuestros consejos de seguridad.</IonLabel>
          </IonItem>
          <IonButton 
            expand="block" 
            color="tertiary" 
            onClick={() => setShowAdviceAlert(true)} // Mostrar alerta al hacer clic
          >
            Ver Consejos
          </IonButton>
        </IonCard>

        {/* Carrusel de Noticias con Redirección */}
        <div className="Carrusel">
          <h2>Noticias Financieras</h2>
          <div className="fotosCarrusel">
            {carouselItems.map((item, index) => (
              <div key={index} className={`itemCarrusel ${index === activeIndex ? 'active' : ''}`}>
                <img src={item.img} alt={item.title} />
                <p><a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a></p>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de Video */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Video de Finanzas</IonCardTitle>
          </IonCardHeader>
          <div className="video">
            <iframe 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Video de Finanzas"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </IonCard>

        {/* Alerta para Conversión de Moneda */}
        <IonAlert
          isOpen={showConversionAlert}
          onDidDismiss={() => setShowConversionAlert(false)}
          header={'Conversión Realizada'}
          message={`El monto convertido es ${result?.toFixed(2)} ${currencyTo}.`}
          buttons={['OK']}
        />

        {/* Alerta para Consejos de Inversión */}
        <IonAlert
          isOpen={showAdviceAlert}
          onDidDismiss={() => setShowAdviceAlert(false)}
          header={'Consejos de Inversión'}
          message={'Aquí puedes encontrar consejos para asegurar tus inversiones'}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
