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

all_.addEventListener('click', ()=>updateProjects('all'));
frontend_.addEventListener('click', ()=>updateProjects('front'));
full_stack.addEventListener('click', ()=>updateProjects('full-stack'));

function updateProjects(type){
  project_Content.innerHTML = '';
  project_Row.forEach(row=>{
    if(row.classList.contains(type))
      project_Content.appendChild(row);
  });
}
