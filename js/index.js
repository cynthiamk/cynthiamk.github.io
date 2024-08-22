import { public_key, template_id, service_id } from "./config.js";

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// sending email using EmailJS

(function(){
    emailjs.init(PUBLIC_KEY: ${{secrets.PUBLIC_KEY}}); // Replace with your EmailJS user ID
 })();

 document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
 
    // Collect the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
 
    // Define the email parameters
    const templateParams = {
       from_name: name,
       from_email: email,
       subject: subject,
       message: message
    };
 
    // Send the email using EmailJS
    emailjs.send(SERVICE_ID: ${{secrets.SERVICE_ID}}), TEMPLATE_ID: ${{secrets.TEMPLATE_ID}}), templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert('Your message has been sent!');
    }, function(error) {
       console.log('FAILED...', error);
       alert('Sorry, there was an error sending your message. Please try again later.');
    });
 });
 
