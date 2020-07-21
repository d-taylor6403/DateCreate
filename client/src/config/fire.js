import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDdsz5is-L5j5n_QWqkSqSldCAEIyI5zzw",
    authDomain: "datecreate-2020.firebaseapp.com",
    databaseURL: "https://datecreate-2020.firebaseio.com",
    projectId: "datecreate-2020",
    storageBucket: "datecreate-2020.appspot.com",
    messagingSenderId: "132043051864",
    appId: "1:132043051864:web:84b7e97c2b6cca991ecb2d"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;