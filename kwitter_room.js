var firebaseConfig = {
  apiKey: "AIzaSyAe-8KJCgVdqcGRyTpC-8KE2179kR3Ile4",
  authDomain: "lets-chat-31490.firebaseapp.com",
  databaseURL: "https://lets-chat-31490-default-rtdb.firebaseio.com",
  projectId: "lets-chat-31490",
  storageBucket: "lets-chat-31490.appspot.com",
  messagingSenderId: "451640322379",
  appId: "1:451640322379:web:b1f80a935231bc050660ce"
};

// done
firebase.initializeApp(firebaseConfig);
  
function addRoom(){
user_name = document.getElementById("User_Name").value;
firebase.database().ref("/").child(user_name).update({ 
purpose: "adding user"
});
}

var username = localStorage.getItem("USERNAME");

document.getElementById("User_Name").innerHTML = "welcome" + username;

function addRoom() {
  room_name = document.getElementById("Room_Name").value ;
  firebase.database().ref("/").child(room_name).update({
  purpose:"Adding room name" 
  });

  localStorage.setItem("ROOM_NAME",room_name);

  window.location = ("kwitter_page.html");
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;

  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;

  });});}
getData();

function redirectToRoomName(name) {
  localStorage.setItem("NAME",name);
  window.location = ("kwitter_page.html");
}
