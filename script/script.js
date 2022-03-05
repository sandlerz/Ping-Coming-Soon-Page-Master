const form = document.getElementById('form');
const email = document.getElementById('email');
const error = document.getElementById('error');

form.addEventListener('submit', x => {
  let regEx = /\w+\@{1}[a-zA-Z1-9]+\.\w+$/;

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
  }
})

email.onclick = () => {
  email.style.borderColor = 'hsl(223, 100%, 88%)';
  error.style.display = 'none';
}