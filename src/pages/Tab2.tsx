import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonButton, IonIcon, IonRow, IonCol, IonText, IonRouterLink } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Tab2: React.FC = () => {
  const [dreams, setDreams] = useState([]);

  useEffect(() => {
    fetchDream();
  }, []);

  function fetchDream() {
    axios.post('https://vapi.realtime.co.th/api/use/mydream/collection/Dream/find/like', {
      "field": "Dream",
      "word": "",
      "option": "",
      "sort": { "Dream": 1 },
      "limit": 0,
      "skip": 0,
      "select": { "_id": 1, "Dream": 1, "DetailDream": 1, "Number": 1 }
    })
      .then(res => {
        setDreams(res.data.documents);
        // console.log(res.data.documents);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ฝันทั้งหมด</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle className="large-title" size="small">ฝันทั้งหมด</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRow>
          <IonCol>
            <div>
              {dreams.map(x => {
                return (
                  <IonRouterLink href="#" key={x['_id']}>
                    {x['Dream']}<br />
                  </IonRouterLink>
                );
              })}
            </div>
          </IonCol>
        </IonRow>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
