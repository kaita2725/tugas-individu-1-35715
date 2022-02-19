import React from 'react';
import {IonFab, IonFabButton, IonIcon} from '@ionic/react';
import {qrCodeOutline} from 'ionicons/icons';
import './Home.css';

const Qrcode: React.FC = () => {

  return  (
    <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton color="light">
            <IonIcon icon={qrCodeOutline} />
          </IonFabButton>
        </IonFab>
  );
};
export default Qrcode;
