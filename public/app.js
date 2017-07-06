(function() {

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBozXx3IVZk5Ks794vX1RzmHwdcxrl16tE",
    authDomain: "betadb-7d7a0.firebaseapp.com",
    databaseURL: "https://betadb-7d7a0.firebaseio.com",
    projectId: "betadb-7d7a0",
    storageBucket: "betadb-7d7a0.appspot.com",
    messagingSenderId: "131728015575"
  };
  firebase.initializeApp(config);	

  //Get elements
  const preObject = document.getElementById('object');
  const ulList = document.getElementById('list');

  //Create references
  const dbRefObject = firebase.database().ref().child('object');
  const dbRefList = dbRefObject.child('hobbies');

  //Sync object changes
  dbRefObject.on('value', snap => {
    preObject.innerText = JSON.stringify(snap.val(), null, 3);
  });

  //Sync list changes
  dbRefList.on('child_added', snap => console.log(snap.val()))

  /*var playersRef = firebase.database().ref("players/");

playersRef.set({
   John: {
      number: 1,
      age: 30
   },
  
   Amanda: {
      number: 2,
      age: 20
   }
});*/
	
}());