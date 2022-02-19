import React from 'react';
import {IonToolbar, IonSegment, IonSegmentButton} from '@ionic/react';
import './Search.css';

const Search: React.FC = () => {

  return  (
    <IonToolbar>
      <IonSegment color="dark" onIonChange={c => console.log('Segment selected', c.detail.value)}>
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
export default Search;
