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

     username= localStorage.getItem("usernameK");

document.getElementById("whatever_you_want").innerHTML= "Welcome "+ username+" !";


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("TrendingRooms").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname- "+Room_names);

      var roomDiv= '<div class="room_name" id="' + Room_names + '" onclick="goToRoom(this.id)">#' + Room_names + '</div> <hr> ';
      document.getElementById("TrendingRooms").innerHTML+=roomDiv;
      
      //End code
      });});}
getData();


function AddRoom() {
      var roomname= document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"adding room name"
      }); 
      localStorage.setItem("roomnameK", roomname);
      window.location="Page_3.html";
}


function goToRoom(RoomID) {
      console.log(RoomID);
      localStorage.setItem("RoomIDK", RoomID);
      window.location="Page_3.html";
}
 




