import React from 'react';
import {IonCard, IonCardHeader, IonCardContent,IonText} from '@ionic/react';
import './Search.css';

const VdG: React.FC = () => {

  return  (
    <IonCard class="cardList">
      <IonCardHeader class="img2">
      </IonCardHeader>
      <IonCardContent>
      <IonText class="txts1">
        Ultimate Fried Noodle <br></br>
        <IonText color="medium" class="txts2">
          VISUAL DONENESS GUIDES
        </IonText>
      </IonText>
      </IonCardContent>
    </IonCard>
  );
};
export default VdG;
