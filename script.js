const cardButton = document.querySelector('.card-button');
cardButton.addEventListener('click', function() {
  alert('You clicked the button!');
});


// Get the card element
const card = document.querySelector('.contact-card');

// Add a click event listener to the card
card.addEventListener('click', () => {
  // Open the user's email client with the email address as the recipient
  window.location.href = 'mailto:m05918833@gmail.com';
});
