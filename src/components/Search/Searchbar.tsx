import React from 'react';
import {IonToolbar, IonInput, IonIcon, IonButton} from '@ionic/react';
import './Search.css';
import {searchOutline} from 'ionicons/icons';

const Searchbar: React.FC = () => {

  return  (
    <IonToolbar>
      <div className="Search">
        <IonInput placeholder="Search" onIonChange={input => console.log('toggle Search', input.detail.value)}>
          <IonIcon icon={searchOutline}></IonIcon>
        </IonInput>
        <IonButton routerDirection="back" href="/Home" size="small" color="medium" fill="clear" color-activated="none" class="Cb">
          Cancel
        </IonButton>
      </div>
    </IonToolbar>
  );
};
export default Searchbar;
