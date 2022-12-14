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
    roomName = localStorage.getItem("roomName");
    function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(roomName).push({
      name:userName,
      message:msg,
      like:0
      });
      document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
//Início do código
console.log(firebaseMessageId);
console.log(messageData);
name = messageData["name"];
message = messageData["message"];
like = messageData["like"];
nameWithTag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
messageWithTag = "<h4 class='message_h4'> "+ message +"</h4>";
like_button = "<button class='btn btn-warning' id="+ firebaseMessageId +" value="+ like +" onclick='updateLike(this.id)'>";
spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = nameWithTag + messageWithTag + like_button + spanWithTag;
document.getElementById("output").innerHTML +=row;

//Fim do código
      } });  }); }
getData();
function updateLike(messageId){
  console.log("like pressionado "+ messageId);
  buttonId = messageId;
  likes = document.getElementById(buttonId).value;
  updateLikes = Number(likes)+1;
  console.log(updateLikes);
  firebase.database().ref(roomName).child(messageId).update({
    like:updateLikes
  });
}
function logout(){
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
  window.location = "index.html";
}