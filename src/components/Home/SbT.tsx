import React from 'react';
import {IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardContent} from '@ionic/react';

const SbT: React.FC = () => {

  return  (
      <IonGrid>
        <IonRow>
            <IonCol size="4">
              <IonCard class="card">
                <IonCardHeader class="bg-card icon1">
                </IonCardHeader>
                <IonCardContent>
                Beef
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="4">
              <IonCard class="card">
                <IonCardHeader class="bg-card icon2">
                </IonCardHeader>
                <IonCardContent>
                Seafood
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="4">
              <IonCard class="card">
                <IonCardHeader class="bg-card icon3">
                </IonCardHeader>
                <IonCardContent>
                Poultry
                </IonCardContent>
              </IonCard>
            </IonCol>
        </IonRow>
        <IonRow>
            <IonCol size="4">
              <IonCard class="card">
                <IonCardHeader class="bg-card icon4">
                </IonCardHeader>
                <IonCardContent>
                Pork
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="4">
              <IonCard class="card">
                <IonCardHeader class="bg-card icon5">
                </IonCardHeader>
                <IonCardContent>
                Lamb
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="4">
              <IonCard class="card">
                <IonCardHeader class="bg-card icon6">
                </IonCardHeader>
                <IonCardContent>
                Game
                </IonCardContent>
              </IonCard>
            </IonCol>
        </IonRow>
        <IonRow>
            <IonCol size="4">
              <IonCard class="card">
                <IonCardHeader class="bg-card icon7">
                </IonCardHeader>
                <IonCardContent>
                Vegetables
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="4">
              <IonCard class="card">
                <IonCardHeader class="bg-card icon8">
                </IonCardHeader>
                <IonCardContent>
                Desserts
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="4">
              <IonCard class="card">
                <IonCardHeader class="bg-card icon9">
                </IonCardHeader>
                <IonCardContent>
                Other
                </IonCardContent>
              </IonCard>
            </IonCol>
        </IonRow>
      </IonGrid>
  );
};
export default SbT;
