import React from 'react';
import {IonFab, IonButton, IonText} from '@ionic/react';
import './Home.css';

const SfJ: React.FC = () => {

  return  (
    <IonFab vertical="bottom" horizontal="center" slot="fixed" >
      <IonButton color="light" shape="round" type="button" size="small" class="button1">
        <IonText color="primary">Search for Joule</IonText>
      </IonButton>
    </IonFab>
  );
};
export default SfJ;
