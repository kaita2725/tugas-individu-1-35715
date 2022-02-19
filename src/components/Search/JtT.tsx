import React from 'react';
import {IonCard, IonCardHeader, IonCardContent,IonText} from '@ionic/react';
import './Search.css';

const JtT: React.FC = () => {

  return  (
    <IonCard class="cardList">
      <div className = "container">
        <IonCardHeader class="img3">
        <IonText color="medium"  >
          RANGE<br></br>
        </IonText>
        <IonText color="light">
          212°F<br></br>
          212°F
        </IonText>
        </IonCardHeader>
      </div>
      <IonCardContent>
      <IonText class="txts1">
        Ultimate Fried Noodle <br></br>
        <IonText color="medium" class="txts2">
          2 Minutes - 5 Minutes
        </IonText>
      </IonText>
      </IonCardContent>
    </IonCard>
  );
};
export default JtT;
