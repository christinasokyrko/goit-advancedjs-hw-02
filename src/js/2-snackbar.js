import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(form);
  const delay = Number(formData.get('delay'));
  const state = formData.get('state');

  createPromise(delay, state)
    .then(ms => {
      iziToast.success({
        //title: '✅',//
        message: `Fulfilled promise in ${ms}ms`,
        position: 'topRight',
        class: 'success-toast',
      });
    })
    .catch(ms => {
      iziToast.error({
        //title: '❌',//
        message: `Rejected promise in ${ms}ms`,
        position: 'topRight',
        class: 'custom-toast',
      });
    });
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
