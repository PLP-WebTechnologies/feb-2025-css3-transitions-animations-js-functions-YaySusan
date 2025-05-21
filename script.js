// Store the user's preference
localStorage.setItem('prefersAnimation', 'true');

// Retrieve the preference
const prefersAnimation = localStorage.getItem('prefersAnimation');

// Trigger the animation
document.getElementById('animate-btn').addEventListener('click', function() {
  if (prefersAnimation === 'true') {
    document.getElementById('box').classList.toggle('animate');
  }
});