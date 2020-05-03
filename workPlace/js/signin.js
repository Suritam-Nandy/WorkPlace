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

var auth = firebase.auth();

signin.addEventListener("click", signIn);

function signIn() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("pass").value;
  console.log(email, password);
  if (email != "" && password != "") {
    console.log(email, password);

    var result = auth.signInWithEmailAndPassword(email, password);
    console.log("result=", result.prototype);

    result.then(function () {
      console.log("here");
      window.open("/html/main.html", "_top");
    });

    result.catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorCode);
      console.log(errorMessage);

      window.alert("Message : " + errorMessage);
    });
  } else {
    return window.alert("Message : ** Please fill email and password");
  }
}
