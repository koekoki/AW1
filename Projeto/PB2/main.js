
const target = document.querySelectorAll('[data-fly]');
const animationClass = 'animate';

function animeScroll(){
    
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element){
        if ((windowTop) > element.offsetTop){
            element.classList.add(animationClass);  
        }
        else{
            element.classList.remove(animationClass);
        }
    })
}

window.addEventListener('scroll', function(){
    animeScroll();
})



    $( ".circulo" ).hover( function(){
        $(".circulo3, .circulo4, .circulo2").addClass(' hover');
    }, function(){
        $(".circulo3, .circulo4, .circulo2").removeClass(' hover');
    })


/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
    
})
}

/* mudar o header da página quando der scroll */
function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1000,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #sobre .image, #sobre .text,
  #projetos header,
  #contato .text, #contato .links,
  #home .avatar, #sobre .title-2,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* Botão voltar para o topo */
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})
