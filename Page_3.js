// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDl1xMjH5mIXfBtLe0yHz5t5QTG7qWscdQ",
    authDomain: "doing-ok.firebaseapp.com",
    projectId: "doing-ok",
    storageBucket: "doing-ok.appspot.com",
    messagingSenderId: "1009234030691",
    appId: "1:1009234030691:web:2d6902b856a54223c00856"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var user_name= localStorage.getItem("usernameK");
  var room_name= localStorage.getItem("roomnameK");

  function send() {
    var usermsg= document.getElementById("msg_input").value;
    firebase.database().ref(roomname).push({
          namekey:username,
          messagekey:usermsg,
          likekey:0
    });
  };


  
    function logout() {
        localStorage.removeItem("usernameK");
        localStorage.removeItem("roomnameK");
        window.location="Page_1.html"
  }
  



  