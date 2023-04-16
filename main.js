import './style.css'

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get values of form inputs
  const ngoName = document.querySelector('input[type="text"]').value;
  const weight = document.querySelector('input[type="number"]').value;
  const comments = document.querySelector('textarea').value;
  const color = document.querySelector('input[type="color"]').value;
  const acceptTerms = document.querySelector('input[type="checkbox"]').checked;

  // Do something with the form values, e.g., send to server, show message, etc.
  console.log({ ngoName, weight, comments, color, acceptTerms });
});
