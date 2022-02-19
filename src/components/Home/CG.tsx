import React from 'react';
import {IonGrid, IonCard, IonCardHeader, IonCardContent,IonText, IonIcon} from '@ionic/react';
import {squareOutline} from 'ionicons/icons';

const CG: React.FC = () => {
  return  (
    <IonGrid>

      <IonCard class="cardList">
        <IonCardHeader class="imagecontainer img1">
        </IonCardHeader>
        <IonCardContent>
        <IonText class="icon10"></IonText>
        <IonText class="txt">
          Get Started: Basic Guides
        </IonText>
        <IonIcon class="icon-square" icon={squareOutline} />
        </IonCardContent>
      </IonCard>

      <IonCard class="cardList">
        <IonCardHeader class="img1">
        </IonCardHeader>
        <IonCardContent>
        <IonText class="icon10"></IonText>
        <IonText class="txt">
          Quick & Easy
        </IonText>
        <IonIcon class="icon-square" icon={squareOutline} />
        </IonCardContent>
      </IonCard>

      <IonCard class="cardList">
        <IonCardHeader class="img1">
        </IonCardHeader>
        <IonCardContent>
        <IonText class="icon10"></IonText>
        <IonText class="txt">
          Cook in a jar-- No Bag Required!
        </IonText>
        <IonIcon class="icon-square" icon={squareOutline} />
        </IonCardContent>
      </IonCard>

      <IonCard class="cardList">
        <IonCardHeader class="img1">
        </IonCardHeader>
        <IonCardContent>
        <IonText class="icon10"></IonText>
        <IonText class="txt">
          All the Guides
        </IonText>
        <IonIcon class="icon-square" icon={squareOutline} />
        </IonCardContent>
      </IonCard>

      <IonCard class="cardList">
        <IonCardHeader class="img1">
        </IonCardHeader>
        <IonCardContent>
        <IonText class="icon10"></IonText>
        <IonText class="txt">
          Joule Ready (Available in the US)
        </IonText>
        <IonIcon class="icon-square" icon={squareOutline} />
        </IonCardContent>
      </IonCard>

    </IonGrid>
  );
};
export default CG;
