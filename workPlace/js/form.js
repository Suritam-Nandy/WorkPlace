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

var user = document.getElementById("user");

user.addEventListener("keyup", function () {
  if (user.value == "") {
    document.getElementById("usererror").innerHTML =
      "**Please fill the Username";
  } else if (!isNaN(user.value)) {
    document.getElementById("usererror").innerHTML =
      " username must have characters";
  } else {
    if (user.value.length < 3 || user.value.length > 12) {
      document.getElementById("usererror").innerHTML =
        " username must consist of 3-20 characters";
    } else {
      document.getElementById("usererror").innerHTML = "";
    }
  }
});

var email = document.getElementById("email");

email.addEventListener("keyup", function () {
  if (email.value == "") {
    document.getElementById("emailerror").innerHTML = "**Please fill Email";
  } else {
    document.getElementById("emailerror").innerHTML = "";
  }
});

var pass = document.getElementById("pass");
pass.addEventListener("keyup", function () {
  if (pass.value == "") {
    document.getElementById("passerror").innerHTML = "**Please fill Password";
  } else if (pass.value.length < 8) {
    document.getElementById("passerror").innerHTML =
      " Password must consist of at least 8 characters";
  } else {
    document.getElementById("passerror").innerHTML = "";
  }
});

var conpass = document.getElementById("conpass");

conpass.addEventListener("keyup", function () {
  if (conpass.value == "") {
    document.getElementById("conpasserror").innerHTML =
      "**Please fill Confirm Password";
  } else if (conpass.value.length < 8) {
    document.getElementById("conpasserror").innerHTML =
      " Password must consist of at least 8 characters";
  } else if (conpass.value != pass.value) {
    document.getElementById("conpasserror").innerHTML = " Confirm Password";
  } else {
    document.getElementById("conpasserror").innerHTML = "";
  }
});

var number = document.getElementById("number");
number.addEventListener("keyup", function () {
  if (number.value == "") {
    document.getElementById("numbererror").innerHTML = "**Please fill Number";
  } else if (isNaN(number.value)) {
    document.getElementById("numbererror").innerHTML = " Requires only number";
  } else if (number.value.length != 10) {
    document.getElementById("numbererror").innerHTML =
      " Mobile Number must be of 10 digits";
  } else {
    document.getElementById("numbererror").innerHTML = "";
  }
});

var flag = 1;
function validation() {
  if (user.value == "") {
    document.getElementById("usererror").innerHTML =
      "**Please fill the Username";
    flag++;
  }

  if (email.value == "") {
    document.getElementById("emailerror").innerHTML = "**Please fill the Email";
    flag++;
  }

  if (pass.value == "") {
    document.getElementById("passerror").innerHTML =
      "**Please fill the Password";
    flag++;
  }

  if (conpass.value == "") {
    document.getElementById("conpasserror").innerHTML =
      "**Please fill the Confirm Password";
    flag++;
  }

  if (number.value == "") {
    document.getElementById("numbererror").innerHTML =
      "**Please fill the Number";
    flag++;
  }

  return flag;
}

var auth = firebase.auth();

signup.addEventListener("click", signUp);

function signUp() {
  flag = 1;
  var check = validation();
  var email = document.getElementById("email");
  var pass = document.getElementById("pass");
  var name = document.getElementById("user");
  var num = document.getElementById("number");
  console.log(check);
  if (check === 1) {
    var result = auth.createUserWithEmailAndPassword(email.value, pass.value);
    result.then(function () {
      window.alert("signed up");
      window.location.href = "/html/signin.html";
    });
  }
}

// var database = firebase.database().ref('messages');

// registrationForm.addEventListener('submit', submitForm);

// function submitForm(e) {

//     e.preventDefault();

//     var name = getInputVal('user');
//     var email = getInputVal('email');
//     var num = getInputVal('number');
//     saveData(name , email , num);

// }
// function getData(id) {

//     return document.getElementById(id).value;
// }

// function saveData(name , email , num) {
//     var newData = databse.push();
//     newData.set({
//         name: name,
//         email: email,
//         number: num

//     });

// }
