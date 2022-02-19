import React from 'react';
import {IonCard, IonCardHeader, IonCardContent,IonText} from '@ionic/react';
import './Search.css';

const JtT: React.FC = () => {

  return  (
    <IonCard class="cardList">
      <IonCardHeader class="img4">
      </IonCardHeader>
      <IonCardContent>
      <IonText class="txts1">
        Roast Duck Fried Noodle <br></br>
        <IonText color="medium" class="txts2">
          CHEFSTEPS.COM
        </IonText>
      </IonText>
      </IonCardContent>
    </IonCard>
  );
};
export default JtT;
