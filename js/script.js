let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');

};

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })

    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');
};

function addNavbarBorderOnScroll() {
    const header = document.querySelector('header');
    const scrollTop = window.pageYOffset;
  
    if (scrollTop > 0) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  }
  
  window.addEventListener('scroll', addNavbarBorderOnScroll);