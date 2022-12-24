const formRef = document.querySelector('.feedback-form');
const formData = {};

formRef.addEventListener('input', onInputSaveValue);

function onInputSaveValue (event) {

    formData[event.target.name] = event.target.value;
    console.log(formData);
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
