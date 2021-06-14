
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDLfma4g4mcjgqDpNP-nCnvqzM5mV0qqns",
      authDomain: "fire-fox-chat.firebaseapp.com",
      databaseURL: "https://fire-fox-chat-default-rtdb.firebaseio.com",
      projectId: "fire-fox-chat",
      storageBucket: "fire-fox-chat.appspot.com",
      messagingSenderId: "445249324501",
      appId: "1:445249324501:web:5b7836d224e6b3160a695c",
      measurementId: "G-KCWMBZ7ZB8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
