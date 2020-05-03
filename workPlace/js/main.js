// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCqxv4zAHDS-6vaDVHOn3gxWzX18crBeMA",
  authDomain: "registeration-d5710.firebaseapp.com",
  databaseURL: "https://registeration-d5710.firebaseio.com",
  projectId: "registeration-d5710",
  storageBucket: "registeration-d5710.appspot.com",
  messagingSenderId: "957891890622",
  appId: "1:957891890622:web:c79a6ff2255a83f5e47def",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

signout.addEventListener("click", signOut);

function signOut() {
  firebase.auth().signOut();

  window.alert(" signed out");
}
