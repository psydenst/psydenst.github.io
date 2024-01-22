const contactForm = document.getElementById('contact-form');
const contactStatus = document.getElementById('contact-status');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Fetch form data
  const formData = new FormData(contactForm);
  
  // Create an object from the form data
  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });
  
  // Simulate form submission (replace with your own logic)
  setTimeout(() => {
    contactStatus.textContent = 'Message sent successfully!';
    contactForm.reset();
  }, 2000);
});