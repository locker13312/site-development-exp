// Додавання анімації на скролл до "Про нас"
document.querySelector('.button').addEventListener('click', () => {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});
