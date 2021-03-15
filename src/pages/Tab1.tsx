import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonButton, IonIcon, IonRow, IonCol, IonText } from '@ionic/react';
import { search } from 'ionicons/icons';
// import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

// import { type } from 'os';


const Tab1: React.FC = () => {

  const [dreams, setDreams] = useState([]);
  const [mydream, setMyDream] = useState(null);
  const [show, setShow] = useState(false);
  const [textshow, setTextShow] = useState('');


  useEffect(() => {
    // fetchDream();
  }, []);

  function fetchDream() {
    axios.post('https://vapi.realtime.co.th/api/use/mydream/collection/Dream/find/like', {
      "field": "Dream",
      "word": "^" + mydream,
      "option": "i",
      "sort": { "DreamID": 1 },
      "limit": 0,
      "skip": 0,
      "select": { "_id": 1, "Dream": 1, "DetailDream": 1, "Number": 1 }
    })
      .then(res => {
        setDreams(res.data.documents);
        // console.log(res.data.documents);
        setShow(true);
        setTextShow('ไม่พบข้อมูล !!');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ค้นฝัน</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle className="large-title" size="small">ค้นฝัน</IonTitle>
          </IonToolbar>
        </IonHeader>
        <br />
        <br />
        <IonItem>
          <IonLabel position="stacked" color="secondary">ฝันเห็น, ฝันว่า, ฝันถึง</IonLabel>
          <IonIcon slot="start" icon={search} />
          {/* <IonInput onIonInput={(e: any) => setmydream(e.target.value)} onIonChange={fetchDream}></IonInput> */}
          <IonInput onIonInput={(e: any) => setMyDream(e.target.value.replace(/[^ก-๏\s]/gi, null))} clearInput={true} ></IonInput>
        </IonItem>
        <br />
        <IonRow>
          <IonCol></IonCol>
          <IonCol>
            <div className="wallet-button">
              <IonButton size="default" onClick={fetchDream}><IonIcon slot="start" icon={search} />ค้นฝัน</IonButton>
            </div>
          </IonCol>
          <IonCol></IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <div className="text-center">
              ทำนายว่า:
              {show && dreams.length > 0 ? (
                <IonText color="secondary">

                  {dreams.map(x => {
                    return (
                      <p key={x['_id']}>
                        {x['DetailDream']}<br /><br />
                        {' '}<IonText color="warning">เลขที่เสี่ยงโชค:</IonText>{' '}<IonText color="danger">{x['Number']}</IonText>
                      </p>
                    );
                  })}
                </IonText>) : (<IonText color="secondary"><p>{textshow}</p></IonText>)}
            </div>
          </IonCol>
        </IonRow>

        <IonRow>
          {/* <IonCol>
            <div className="text-center">
              {show === true && dreams.length > 0 && (
                <IonText color="secondary">
                  เลขที่เสี่ยงโชค:
                  {dreams.map(x => {
                    return (
                      <p key={x['_id']}>
                        {x['Number']}
                      </p>
                    );
                  })}
                </IonText>
              )}
            </div>
          </IonCol> */}
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
