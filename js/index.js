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

function sendEmail() {
    var link = document.getElementById('send_email');
    var name = document.getElementById('floatingName').value;
    var subject = document.getElementById('floatingSubject').value;
    var message = "Hello my name is " + name + " -- " + document.getElementById('floatingMessage').value;
    var email = "cynmuy@gmail.com";
    var href = "mailto:" + email + "?subject=" + subject + "&body=" + message;
    console.log(href);
    link.setAttribute("href", href);
  }


