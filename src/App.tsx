import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { useEffect, useState } from 'react'
import Menu from './components/Menu/Menu';
import Home from './pages/Home';
import Search from './pages/Search';
import TaT from './pages/TaT';
import HaS from './pages/HaS';
import Settings from './pages/Settings';
import SplashScreen from './components/splashScreen/SplashScreen';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {

  const [Splash, setSplash] = useState(false);

  useEffect(()=>{
    setSplash(true);
    setTimeout(() => {
      setSplash(false);
    }, 2000)
  }, [])

  return (

    <IonApp>
      {
        Splash ? <SplashScreen/> : null
      }
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/Home" />
            </Route>
            <Route path="/Home" exact={true}>
              <Home />
            </Route>
            <Route path="/Home/Search" exact={true}>
              <Search />
            </Route>
            <Route path="/Tips" exact={true}>
              <TaT />
            </Route>
            <Route path="/Help" exact={true}>
              <HaS />
            </Route>
            <Route path="/Settings" exact={true}>
              <Settings />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
