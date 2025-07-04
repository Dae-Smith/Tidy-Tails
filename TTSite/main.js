// main.js - Tidy Tails

// Quote form functionality
const quoteForm = document.querySelector('.quote-form');
if (quoteForm) {
  quoteForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const zip = this.querySelector('input').value.trim();
    if (zip === '') {
      alert('Please enter your zip code.');
    } else {
      alert(`Thank you! We're checking availability in ${zip}. We'll be in touch soon!`);
      this.reset();
    }
  });
}

// Smooth scroll for Watch Video link
const watchLink = document.querySelector('.watch-video');
if (watchLink) {
  watchLink.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  });
}

// Footer year auto-update (if you add a span with id="year" in footer)
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}