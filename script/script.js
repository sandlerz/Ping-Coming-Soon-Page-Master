const form = document.getElementById('form');
const email = document.getElementById('email');
const error = document.getElementById('error');

form.addEventListener('submit', x => {
  let regEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(email.value === '' || email.value == null){
    x.preventDefault()
    error.style.display = 'block';
    email.style.borderColor = 'hsl(354, 100%, 66%)';
    email.placeholder = 'Provie a email address';
  }
  if(!(regEx.test(email.value))){
    x.preventDefault()
    error.style.display = 'block';
    email.style.borderColor = 'hsl(354, 100%, 66%)';
    email.value = '';
  }
  if(regEx.test(email.value)) {
    x.preventDefault()
    error.innerHTML = 'Send';
    error.style.display = 'block';
    error.style.color = 'green';
    email.value = '';
    email.placeholder = 'Email Send';
  }
})

email.onclick = () => {
  email.style.borderColor = 'hsl(223, 100%, 88%)';
  error.style.display = 'none';
}