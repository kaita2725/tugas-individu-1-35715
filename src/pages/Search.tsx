import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import React from 'react';
import Searchbar from '../components/Search/Searchbar'

const Search: React.FC = () => {

  return (
    <IonPage>
    <Searchbar />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>

          </IonToolbar>
        </IonHeader>
        heyyyyyyyyy
      </IonContent>
    </IonPage>
  );
};

export default Search;
