const email = document.getElementById('email')
const form = document.getElementById('form')
const error = document.getElementById('error')
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const input = document.getElementsByClassName('input')
console.log(input)
console.log(input)
form.addEventListener('submit', (e) => {
  
  if (email.value === '' || email.value == null) {
    e.preventDefault()
    error.innerText = 'Valid email required'
    email.style.borderColor = 'red'
    email.style.backgroundColor = '#ed626228'
  }
  if (!email.value.match(emailRegex)) {
    e.preventDefault()
    error.innerText = 'Valid email required'
    email.style.border('red')
  }
})






// document.getElementById("myButton").addEventListener("click", (e) => {
//   console.log("Button was clicked!");
//   console.log(e); // Logs the full event object
// });
