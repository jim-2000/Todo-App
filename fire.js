import firebase from "firebase";
import  'firebase/firestore';

const firebaseconfig = {
    apiKey: "AIzaSyAq5TKsmftIUj4gnGS9HlWISqH2FXKmzQI",
    authDomain: "mytodos-336cc.firebaseapp.com",
    projectId: "mytodos-336cc",
    storageBucket: "mytodos-336cc.appspot.com",
    messagingSenderId: "472680818169",
    appId: "1:472680818169:web:444f2c11c423a823e50928",
    measurementId: "G-5V3K3PHC1E"
};


class Fire{
    init(){
        if (!firebase.app.length) {
            firebase.initializeApp(firebaseconfig)
        }
        firebase.auth().onAuthStateChanged(user=>{
            if (user) {
                
            }else{
                firebase.auth()
                .signInAnonymously()
                .catch(error=>{console.log(error)})
            }
        })
    }
}

export default Fire;