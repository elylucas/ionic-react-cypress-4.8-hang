import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { useHistory } from 'react-router'

const Tab1: React.FC = () => {
  const router = useHistory();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton routerLink="/tab1/details">Go to details via ion-button</IonButton>
        <br />
        <br />
        <button onClick={() => router.push('/tab1/details')}>Go to details via regular button</button>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
