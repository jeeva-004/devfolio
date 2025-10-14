// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})


// filter

const filter_ = document.querySelector('.filter');

filter_.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    filter_.querySelectorAll('button').forEach(btn => {
      btn.classList.remove('active');
    })
    btn.classList.add('active');
  })
})

const all_ = filter_.querySelector('.all');
const frontend_ = filter_.querySelector('.frontend');
const full_stack = filter_.querySelector('.full-stack');
const project_Content = document.querySelector('.projects__content');
const project_Row = project_Content.querySelectorAll('.projects__row');

all_.addEventListener('click', () => updateProjects('all'));
frontend_.addEventListener('click', () => updateProjects('front'));
full_stack.addEventListener('click', () => updateProjects('full-stack'));

function updateProjects(type) {
  project_Content.innerHTML = '';
  project_Row.forEach(row => {
    if (row.classList.contains(type))
      project_Content.appendChild(row);
  });
}


// form validate
const form_ = document.querySelector('form');
const name_ = form_.querySelector('#name');
const email_ = form_.querySelector('#email');
const message_ = form_.querySelector('#message');

form_.addEventListener('submit', (e) => {
  if (!validateForm())
    e.preventDefault();
  else {
    name_.value = '';
    email_.value = '';
    message_.value = '';
    alert("Your message has been sent successfully!");
  }
})

function validateForm() {
  const name_Val = name_.value.trim();
  const email_Val = email_.value.trim();
  const message_Val = message_.value.trim();
  let isRight = true;

  if (name_Val == '') {
    setError(name_, `This field required!`);
    isRight = false;
  }
  else
    setSuccess(name_);

  if (email_Val == '') {
    setError(email_, `This field required!`)
    isRight = false;
  }
  else if (checkEmail()) {
    setError(email_, `Enter a valid email!`);
    isRight = false;
  }
  else
    setSuccess(email_);

  if (message_Val == '') {
    setError(message_, `This field required!`);
    isRight = false;
  }
  else
    setSuccess(message_);

  return isRight;
}

function setError(el, msg) {
  let parent = el.closest('.contact__form-field');
  let label_ = parent.querySelector('label');
  el.style.border = '1px solid red';
  label_.style.color = 'red';
  let error_ = parent.querySelector('.error');
  error_.innerHTML = msg;
}

function setSuccess(el) {
  let parent = el.closest('.contact__form-field');
  let label_ = parent.querySelector('label');
  let error_ = parent.querySelector('.error');
  el.style.border = '1px solid #0062b9';
  label_.style.color = '#666';
  error_.innerHTML = '';
}

function checkEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}
