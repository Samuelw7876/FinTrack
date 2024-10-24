import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Menu from './components/Menu';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';
import Soporte from './pages/Soporte';
import Configuracion from './pages/Configuracion';
import Cuenta from './pages/Cuenta';
import VistaMensajes from './pages/VistaMensajes';
import CambiarContraseña from './pages/CambiarContraseña';
import AcercaNosotros from './pages/AcercaNosotros';
import AcercaApp from './pages/AcercaApp';
import Inicio from './pages/Inicio';
import Bienvenida from './pages/Bienvenida';
import Registro from './pages/Registro'; 

import './theme/variables.css';
import { homeSharp, walletSharp, notificationsSharp, personCircleSharp } from 'ionicons/icons';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.system.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Menu />
      <IonRouterOutlet id="main">
        {/* Página de Bienvenida y Registro */}
        <Route exact path="/bienvenida" component={Bienvenida} />
        <Route exact path="/Inicio" component={Inicio} />
        <Route exact path="/Registro" component={Registro} />
        
        {/* Solo dentro de IonTabs estarán las pestañas */}
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/tab1" component={Tab1} />
            <Route exact path="/tab2" component={Tab2} />
            <Route exact path="/tab3" component={Tab3} />
            <Route exact path="/tab4" component={Tab4} />
            <Route exact path="/vista-mensaje/:id" component={VistaMensajes} />
            <Route exact path="/soporte" component={Soporte} />
            <Route exact path="/configuracion" component={Configuracion} />
            <Route exact path="/cuenta" component={Cuenta} />
            <Route exact path="/acerca-nosotros" component={AcercaNosotros} />
            <Route exact path="/acerca-app" component={AcercaApp} />
            <Route exact path="/cambiar-contraseña" component={CambiarContraseña} />
          </IonRouterOutlet>

          {/* Barra de Tabs */}
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon icon={homeSharp} />
              <IonLabel>Inicio</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon icon={walletSharp} />
              <IonLabel>Movimientos</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon icon={notificationsSharp} />
              <IonLabel>Notificaciones</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab4" href="/tab4">
              <IonIcon icon={personCircleSharp} />
              <IonLabel>Perfil</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>

        {/* Redirección Inicial a la página de bienvenida */}
        <Route exact path="/">
          <Redirect to="/bienvenida" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
