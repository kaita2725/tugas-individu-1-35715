import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonText
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { homeOutline, discOutline, helpCircleOutline, settingsOutline, openOutline} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/Home',
    iosIcon: homeOutline,
    mdIcon: homeOutline
  },
  {
    title: 'Tips & Tricks',
    url: '/Tips',
    iosIcon: discOutline,
    mdIcon: discOutline
  },
  {
    title: 'Help & Support',
    url: '/Help',
    iosIcon: helpCircleOutline,
    mdIcon: helpCircleOutline
  },
  {
    title: 'Settings',
    url: '/Settings',
    iosIcon: settingsOutline,
    mdIcon: settingsOutline
  }
];


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="home-list">
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList class="bg" >
          <IonText class="bubble-Text">
            Get your Claws around <br></br> Joule today! <br></br>
            <IonText class="txt-link">Check it out </IonText> <IonIcon color="primary" icon={openOutline}></IonIcon>
          </IonText>
          <div className="pointer"></div>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
