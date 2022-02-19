import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonToolbar, IonText} from '@ionic/react';
import React from 'react';
import TopContent from '../components/Home/TopContent'
import Search from '../components/Home/Search'
import SearchByType from '../components/Home/SbT'
import CookingGuides from '../components/Home/CG'
import SearchForJoule from '../components/Home/SfJ'
import Qrcode from '../components/Home/Qrcode'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader >
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <Search />
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <TopContent />
          <IonText><p className="hr-line">Search by Type</p></IonText>
        <SearchByType />
          <IonText><p className="hr-line">Cooking Guides</p></IonText>
        <CookingGuides />
        <SearchForJoule />
        <Qrcode />
      </IonContent>
    </IonPage>
  );
};
export default Home;
