import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDiMJPeT3hwpvnBgmI6axEHOjBY5weiW_M",
    authDomain: "crwn-db-900a8.firebaseapp.com",
    databaseURL: "https://crwn-db-900a8.firebaseio.com",
    projectId: "crwn-db-900a8",
    storageBucket: "crwn-db-900a8.appspot.com",
    messagingSenderId: "948518864776",
    appId: "1:948518864776:web:4b24fa2b12e24b12af9c3d",
    measurementId: "G-TXVXGKE9E4"
  };

  export const createUserProfileDocument = async (userAuth, ...additionalData) => {
        if(!userAuth) return;

        //Kullanici Almak Get Yapmak Yoksa existing false doner
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const snapShot = await userRef.get();
        if(!snapShot.exists) {
            const { displayName, email } = userAuth;
            const createdAt = new Date();
            try {
                //Eger snapshot false donerse yani user collections'da yani veritabaninda auth yapan kullanicinin olusturulan id si eslesmezse birisiyle
                //Kullanici yaratma ve await le yaratilan kullaniciyi yakalama
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })
            } catch (error) {
                console.error('Error creating user', error.message);
            }
        }

        return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;