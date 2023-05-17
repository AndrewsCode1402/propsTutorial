import React from 'react';
import { IonContent, IonPage, IonImg, IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCardContent } from '@ionic/react';
import { ListAllPaintings } from '../components/listAllPaintings';

const HomePage = () => (

  <IonPage>
    <IonContent>
      <h1>This is the home page</h1>

      <ListAllPaintings></ListAllPaintings>

    </IonContent>
  </IonPage>
);

export default HomePage;