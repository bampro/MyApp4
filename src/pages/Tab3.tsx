import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol, IonText } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';


const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>เกี่ยวกับ</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle className="large-title" size="small">เกี่ยวกับ</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRow>
          <IonCol>
            <br />
            <IonText color="secondary">
              <pre><i>การทำนายฝันตามตำราโบราณนั้น</i></pre>

              <p><i>สามารถบ่งบอกถึงการเปลี่ยนแปลงในชีวิตที่จะเกิดขึ้น
              ซึ่งความฝันจะเป็นจริงหรือไม่ขึ้นอยู่กับโชคชะตาและวาสนาของแต่ละบุคคล
              บางคนก็นำความฝันมาตีเป็นตัวเลขแล้วนำไปเสี่ยงโชค
              ซึ่งผลจะออกมาอย่างไรขึ้นอยู่กับโชควาสนาและความเชื่อของแต่ละคน</i></p><br /><br />
              <h6 className="ion-text-center">Credit by</h6>
              <h6 className="ion-text-center">Realtime Development Team</h6>
              <h6 className="ion-text-center">Email: support@realtime.co.th</h6>
            </IonText>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
