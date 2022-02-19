import React from 'react';
import {IonButton, IonIcon} from '@ionic/react';
import './Home.css';
import {searchOutline} from 'ionicons/icons';

const Search: React.FC = () => {

  return  (
      <IonButton routerDirection="forward" href="/Home/Search" color="dark" fill="clear" color-activated="none" class="Sb">
        Search<IonIcon icon={searchOutline}></IonIcon>
      </IonButton>
  );
};
export default Search;
