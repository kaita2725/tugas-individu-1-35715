import React from 'react';
import {IonTitle, IonText} from '@ionic/react';
import './Home.css';

const TopContent: React.FC = () => {

  return  (
    <IonTitle class="TopContent">
      <IonTitle class="ContentText">
        Get your Joule. Be <br></br>happy.
        <IonText class="ContentText2">
          Explore
        </IonText>
      </IonTitle>
    </IonTitle>
  );
};
export default TopContent;
