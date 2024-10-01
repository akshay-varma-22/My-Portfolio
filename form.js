const scriptURL = 'https://script.google.com/macros/s/AKfycbys3EN2OzrX8JUeIFEkiEsqfjWV2KIZ4Ly4l-mzR8KwhwXKba0VwGhhgSBc5lZI1PpLiw/exec'


const form = document.forms['portfolio-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
    })