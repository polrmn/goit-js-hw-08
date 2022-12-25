import throttle from "lodash.throttle";

const formRef = document.querySelector('.feedback-form');
const inputEmailRef = document.querySelector('input[name="email"]');
const textareaRef = document.querySelector('textarea[name="message"]');
let formData = {};

setformData();

const { email, message } = formData;

setInputEmailValue();
setTextareaMessageValue();

formRef.addEventListener('input', throttle(onInputSaveValue, 500));
formRef.addEventListener('submit', onFormSubmit);

function onInputSaveValue (event) {
    formData[event.target.name] = event.target.value;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(event) {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    event.currentTarget.reset();
    localStorage.clear();
}

function setInputEmailValue() {
  if (email !== '' && email !== undefined) {
      inputEmailRef.value = email;
  } 
}

function setTextareaMessageValue() {
  if (message !== '' && message !== undefined) {
    textareaRef.value = message;
  }
}

function setformData() {
    if (localStorage.getItem('feedback-form-state')) {
      formData = JSON.parse(localStorage.getItem('feedback-form-state'));
    }
}