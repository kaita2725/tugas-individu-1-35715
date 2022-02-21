import React from 'react';
import {IonToolbar, IonSegment, IonSegmentButton} from '@ionic/react';
import './Search.css';

const Segment: React.FC <{
  selectedValue: 'all'| 'jouleApp' | 'chefSteps';
  onSelectValue: (value: 'all'| 'jouleApp' | 'chefSteps') => void
}> = props => {


  const inputChangeHandler = (event:CustomEvent) => {
    props.onSelectValue(event.detail.value);
  };

  return  (
    <IonToolbar>
      <IonSegment color="dark" value={props.selectedValue} onIonChange={inputChangeHandler}>
        <IonSegmentButton  value="all">
          All
        </IonSegmentButton>
        <IonSegmentButton value="jouleApp">
          Joule App
        </IonSegmentButton>
        <IonSegmentButton value="chefSteps">
          ChefSteps.com
        </IonSegmentButton>
      </IonSegment>
    </IonToolbar>
  );
};
export default Segment;
