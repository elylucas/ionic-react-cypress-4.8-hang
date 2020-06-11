import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

interface DetailsProps {
}

const Details: React.FC<DetailsProps> = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="label">Details</div>
      </IonContent>
    </IonPage>
  );
};

export default Details;