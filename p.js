
// Initialize Firebase (ADD YOUR OWN DATA)
  var config = {
    apiKey: "AIzaSyDfuAC15UWF2TxPGFx4XsIxMg3LFKV7KCU",
    authDomain: "form1908.firebaseapp.com",
    databaseURL: "https://form1908.firebaseio.com",
    projectId: "form1908",
    storageBucket: "form1908.appspot.com",
    messagingSenderId: "3898739557"
  };
  firebase.initializeApp(config);
// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var add = getInputVal('add');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, add, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, add, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    add:add,
    email:email,
    phone:phone,
    message:message
  });
}
