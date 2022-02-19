import { IonContent, IonHeader, IonPage} from '@ionic/react';
import React from 'react';
import Searchbar from '../components/Search/Searchbar';
import Segment from '../components/Search/Segment';
import Content from '../components/Search/Content';

const Search: React.FC = () => {

  return (
    <IonPage>
    <IonHeader>
      <Searchbar />
      <Segment />
    </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        </IonHeader>
        <Content />
      </IonContent>
    </IonPage>
  );
};

export default Search;
