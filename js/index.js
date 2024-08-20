 import { public_key } from "./config.js";

(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: public_key,
      template_id: 'template_exf5zr4'
    });
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        
        emailjs.sendForm('service_aoe529e', 'contact_form', this)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}

emailjs.send("service_aoe529e","template_exf5zr4",{
    to_name: "cynthia",
    from_name: "Lubasi",
    message: "Testing",
    reply_to: "muyundacynthia@gmail.com",
    });

// $(document).ready(function () {
//     $('#contact-form').submit(function (e) {
//     const form = document.querySelector('form[id="contact-form"]');
//     const username = form.elements['user_name'].value;
//     const userMail = form.elements['user_email'].value;
//     const subject = form.elements['subject'].value;
//     const message = "email — " + userMail + '<br>' + "Summary:" + form.elements['message'].value;
//     e.preventDefault();
//     var data = {
//     service_id: 'service_aoe529e',
//     template_id: 'template_exf5zr4',
//     public_key: public_key,
//     template_params: {
//     from_name: username,
//     to_name: 'Cynthia',
//     subject: subject,
//     message_html: message
//     }
//     };
//     $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
//     type: 'POST',
//     data: JSON.stringify(data),
//     contentType: 'application/json'
//     }).done(function() {
//     alert('Your mail is sent!');
//     }).fail(function(error) {
//     alert('Oops… ' + JSON.stringify(error));
//     })
//     })
//     })