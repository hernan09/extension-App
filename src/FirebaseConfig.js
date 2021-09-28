
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBBLatUShMadZ0MOzMFZxXJpuRbu7l-yBs",
    authDomain: "prueba-27cec.firebaseapp.com",
    projectId: "prueba-27cec",
    storageBucket: "prueba-27cec.appspot.com",
    messagingSenderId: "1031605609714",
    appId: "1:1031605609714:web:a06759c14aa6b70493dc6b",
    measurementId: "G-XR5CJ0Q1QB"
}

const fire = firebase.initializeApp(firebaseConfig);

export default fire