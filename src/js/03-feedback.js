import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

textAreaAutoComplete();

form.addEventListener('input', throttle(saveInput, 500));
form.addEventListener('submit', throttle(onSubmitAction, 500));

function saveInput(input) {
  formData[input.target.name] = input.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function textAreaAutoComplete() {
  let autoComObject = localStorage.getItem(STORAGE_KEY);

  if (autoComObject) {
    autoComObject = JSON.parse(autoComObject);
    Object.entries(autoComObject).forEach(([name, value]) => {
      formData[name] = value;
      form.elements[name].value = value;
    });
  }
}

function onSubmitAction(e) {
  e.preventDefault();
  console.log(formData);
  e.target.reset();
  formData = {};
  localStorage.removeItem(STORAGE_KEY);
}
