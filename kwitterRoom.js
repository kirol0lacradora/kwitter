
const firebaseConfig = {
  apiKey: "AIzaSyBtxPcq4BkJ3lYVejrT-RTmt9BViBShtus",
  authDomain: "kwitter-69342.firebaseapp.com",
  databaseURL: "https://kwitter-69342-default-rtdb.firebaseio.com",
  projectId: "kwitter-69342",
  storageBucket: "kwitter-69342.appspot.com",
  messagingSenderId: "448998038511",
  appId: "1:448998038511:web:93468f8abfb0ca5773f41a"
};
firebase.initializeApp(firebaseConfig);

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });
localStorage.setItem("roomName", roomName);
window.location="kwitterPage.html"
}
function getData(){
  firebase.database().ref("/").on('value', function(snapshot)
  { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot)
   { childKey  = childSnapshot.key;
roomNames = childKey;
console.log("nome da sala: "+ roomNames);
row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)'>#"+roomNames+"</div><hr>";
document.getElementById("output").innerHTML+=row;
});
});
}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("roomName",name);
  window.location="kwitterPage.html";
}
function logout(){
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
  window.location = "index.html";
}