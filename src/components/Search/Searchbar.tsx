import React from 'react';
import {IonHeader, IonToolbar, IonInput, IonIcon, IonButton} from '@ionic/react';
import './Search.css';
import {searchOutline} from 'ionicons/icons';

const Search: React.FC = () => {

  return  (
    <IonHeader>
      <IonToolbar>
        <div className="Search">
          <IonInput placeholder="Search">
            <IonIcon icon={searchOutline}></IonIcon>
          </IonInput>
          <IonButton routerDirection="back" href="/Home" size="small" color="medium" fill="clear" color-activated="none" class="Cb">
            Cancel
          </IonButton>
        </div>
      </IonToolbar>
    </IonHeader>
  );
};
export default Search;
