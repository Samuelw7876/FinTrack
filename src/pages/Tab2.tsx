import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import {
  IonList,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonItem, 
  IonLabel, 
  IonIcon
} from '@ionic/react';
import './Tab2.css';
import { cashOutline } from 'ionicons/icons';

const Tab2: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chartDom = chartRef.current!;
    const myChart = echarts.init(chartDom);

    const option = {
      title: {
        text: 'Ganancias Semanales',
        left: 'center',
        textStyle: {
          color: '#fff',
        },
      },
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        left: '10%',    // Aumenta los márgenes para evitar que el gráfico se vea comprimido
        right: '10%',   
        bottom: '15%',  // Ajusta este valor para que el gráfico tenga más espacio vertical
        top: '15%',     // Ajusta este valor si el título está muy cerca de la gráfica
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],  // Puedes expandir los días si es necesario
        axisLabel: {
          color: '#fff', // Color de las etiquetas del eje X
        },
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: '#fff', // Color de las etiquetas del eje Y
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.1)',  // Líneas horizontales más suaves
          },
        },
      },
      series: [
        {
          name: 'Ganancia',
          type: 'bar',
          data: [500, 700, 600, 800, 900, 1000, 1100],
          itemStyle: {
            color: '#7824ff',
          },
          barWidth: '50%',  // Ajusta el ancho de las barras para evitar que se vean muy delgadas o gruesas
        },
      ],
    };

    myChart.setOption(option);

    // Asegurar que el gráfico sea responsivo
    const resizeChart = () => {
      myChart.resize();
    };

    window.addEventListener('resize', resizeChart);

    return () => {
      window.removeEventListener('resize', resizeChart);
      myChart.dispose();
    };
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mis Transacciones</IonTitle>
          <IonButtons slot="end">
            <IonMenuButton autoHide={false} />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {/* Contenedor del gráfico */}
        <div ref={chartRef} id="gananciasChart" style={{ width: '100%', height: '300px' }}></div>

        {/* Tarjetas de transacciones */}
        <IonList className="listaTarjetas">
          <IonCard className="tarjeta">
            <IonCardHeader>
              <IonCardTitle>Tarjeta de Crédito</IonCardTitle>
              <IonCardSubtitle>Banco XXX</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <p>**** **** **** 6473</p>
              <p>Saldo Disponible: $5.500.000</p>
            </IonCardContent>
          </IonCard>

          <IonCard className="tarjeta">
            <IonCardHeader>
              <IonCardTitle>Tarjeta USD</IonCardTitle>
              <IonCardSubtitle>Banco XXX</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <p>**** **** **** 8315</p>
              <p>Saldo Disponible: $2.500</p>
            </IonCardContent>
          </IonCard>

          <IonCard className="tarjeta">
            <IonCardHeader>
              <IonCardTitle>Tarjeta EUR</IonCardTitle>
              <IonCardSubtitle>Banco XXX</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <p>**** **** **** 9764</p>
              <p>Saldo Disponible: €4.280</p>
            </IonCardContent>
          </IonCard>
        </IonList>

        {/* Lista de ejemplos de Movimientos */}
        <IonList className="listaTransaciones">
        <IonItem className="transacion">
            <IonIcon icon={cashOutline} slot="start" />
            <IonLabel>
              <h2>Depósito</h2> 
              <p>27 / 09 / 2024</p>
              <p>$600.000</p>
            </IonLabel>
          </IonItem>
          <IonItem className="transacion">
            <IonIcon icon={cashOutline} slot="start" />
            <IonLabel>
              <h2>Depósito</h2> 
              <p>26 / 09 / 2024</p>
              <p>$600.000</p>
            </IonLabel>
          </IonItem>
          <IonItem className="transacion">
            <IonIcon icon={cashOutline} slot="start" />
            <IonLabel>
              <h2>Depósito</h2> 
              <p>22 / 09 / 2024</p>
              <p>$600.000</p>
            </IonLabel>
          </IonItem>
          <IonItem className="transacion">
            <IonIcon icon={cashOutline} slot="start" />
            <IonLabel>
              <h2>Depósito</h2> 
              <p>18 / 09 / 2024</p>
              <p>$600.000</p>
            </IonLabel>
          </IonItem>
          <IonItem className="transacion">
            <IonIcon icon={cashOutline} slot="start" />
            <IonLabel>
              <h2>Depósito</h2> 
              <p>12 / 09 / 2024</p>
              <p>$600.000</p>
            </IonLabel>
          </IonItem>
          <IonItem className="transacion">
            <IonIcon icon={cashOutline} slot="start" />
            <IonLabel>
              <h2>Depósito</h2> 
              <p>10 / 09 / 2024</p>
              <p>$600.000</p>
            </IonLabel>
          </IonItem>
          
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
