import _ from 'lodash';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';
const parsObject = JSON.parse(localStorage.getItem(STORAGE_KEY));
const formData = {};

form.addEventListener('input', _.throttle(saveInput, 500));
form.addEventListener('submit', _.throttle(onSubmitAction, 500));

function saveInput(input) {
  formData[input.target.name] = input.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function textAreaAutoComplete() {
  if (parsObject) {
    email.value = parsObject.email || '';
    message.value = parsObject.message || '';
  }
}

textAreaAutoComplete();

function onSubmitAction(e) {
  e.preventDefault();

  console.log(formData);
  e.target.reset();
  localStorage.clear();
}
