// Initialize Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyCHnUiHvKhU4UxpMB1PolAWX5IS0Zxlh7w",
    authDomain: "contact-form-17ba9.firebaseapp.com",
    databaseURL: "https://contact-form-17ba9.firebaseio.com",
    projectId: "contact-form-17ba9",
    storageBucket: "contact-form-17ba9.appspot.com",
    messagingSenderId: "846185062485",
    appId: "1:846185062485:web:d491f9cffbb4f549"
  };

  firebase.initializeApp(firebaseConfig);

// Reference messages collection

var messagesRef = firebase.database().ref('messages');


// Listen for form submit

document.getElementById('contactForm').addEventListener('submit', submitForm);


// Submit form
function submitForm(e){
    e.preventDefault();
    
    // Get Values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
    
    // Save message
    saveMessage(name, company, email, phone, message);
    
    // Show alert
    document.querySelector('.alert').style.display = 'block';
    
    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);
    
    //Clear form
    document.getElementById('contactForm').reset();

}

// Function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

// Save the message to firebase

function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}