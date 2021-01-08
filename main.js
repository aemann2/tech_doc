/* Body */
const body = document.querySelector('body');

// Main
const main = document.querySelector('main');

// Dark Mode Action
// checks if dark mode has previously been activated
let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('.dark-mode-button');

// Enable Dark Mode by adding styling classes to the appropriate DOM elements
const enableDarkMode = () => {
  body.classList.add('dark-mode');
  if (localStorage.darkMode != 'enabled') {
    main.classList.add('dark-main-transition');
    body.classList.add('dark-body-transition');
  } else {
    main.classList.remove('dark-main-transition');
    body.classList.remove('dark-body-transition');
    main.classList.add('dark-main-no-transition');
  }
  localStorage.setItem('darkMode', 'enabled');
};

// Disable Dark Mode
const disableDarkMode = () => {
  body.classList.remove('dark-mode');
  body.classList.remove('dark-body-transition');
  main.classList.remove('dark-main-transition');
  main.classList.remove('dark-main-no-transition');
  body.classList.add('normal-body-transition');
  main.classList.add('normal-main-transition');
  localStorage.setItem('darkMode', null);
};

// if dark mode is activated in storage, run enableDarkMode function
if (darkMode == 'enabled') {
  enableDarkMode();
}

// Desktop Button
darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
