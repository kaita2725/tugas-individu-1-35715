import { IonContent, IonHeader, IonPage, IonGrid, IonText} from '@ionic/react';
import React from 'react';
import Searchbar from '../components/Search/Searchbar';
import Segment from '../components/Search/Segment';
import VdG from '../components/Search/VdG';
import JtT from '../components/Search/JtT';
import CsC from '../components/Search/CsC';
import {useState} from "react";

const Search: React.FC = () => {
  const [segment, setSegment] = useState<'all'| 'jouleApp' | 'chefSteps'>('all');

  const changeSegment = () => {
    if(segment === 'all'){
      return (
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
      </IonGrid>);
    } else if(segment === 'jouleApp'){
      return (
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
      </IonGrid>);
    } else if(segment ==='chefSteps'){
      return (
      <IonGrid>
        <IonText color="medium">
          ChefSteps.com Result
        </IonText>
        <CsC />
        <CsC />
        <CsC />
      </IonGrid>);
    }
  }

  const selectSegmentHandler = (selectedValue: 'all'| 'jouleApp' | 'chefSteps') => {
    setSegment(selectedValue);

  }

  return (
    <IonPage>
    <IonHeader>
      <Searchbar />
      <Segment selectedValue={segment} onSelectValue={selectSegmentHandler}/>
    </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        </IonHeader>
        {changeSegment()}
      </IonContent>
    </IonPage>
  );
};

export default Search;
