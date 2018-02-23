var config = {
    apiKey: "AIzaSyCdeJXNUrdbgnc8txfg8ODNHTkI9jxUMOY",
    authDomain: "contact-form-8e9ed.firebaseapp.com",
    databaseURL: "https://contact-form-8e9ed.firebaseio.com",
    projectId: "contact-form-8e9ed",
    storageBucket: "",
    messagingSenderId: "597507543008"
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
