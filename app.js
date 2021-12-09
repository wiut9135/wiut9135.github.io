// declaring variables
let contactForm = document.getElementById('contact-form-container');
let inputName = document.getElementById('contact-form-name');
let inputEmail = document.getElementById('contact-form-email');
let inputSubject = document.getElementById('contact-form-subject');
let inputMessage = document.getElementById('contact-form-message');

// form submission
contactForm.addEventListener('submit', function() {
    let outputMessage = `Name: ${inputName.value}\nEmail: ${inputEmail.value}\nSubject: ${inputSubject.value}\nMessage: ${inputMessage.value}`;
    alert(outputMessage);
});