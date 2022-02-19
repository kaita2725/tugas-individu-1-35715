import React from 'react';
import {IonGrid, IonText} from '@ionic/react';
import VdG from './VdG';
import JtT from './JtT';
import CsC from './CsC';
import './Search.css';

const Content: React.FC = () => {

  return  (
    <IonGrid>
      <IonText color="medium">
        Visual Doneness Guides
      </IonText>

      <VdG />
      <VdG />
      <VdG />

      <IonText color="medium">
        Just Time & Temp
      </IonText>

      <JtT />
      <JtT />
      <JtT />

      <IonText color="medium">
        ChefSteps.com Result
      </IonText>

      <CsC />
      <CsC />
      <CsC />
      
    </IonGrid>
  );
};
export default Content;
