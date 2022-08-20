const navMenu = document.getElementById('navMenu'),
    navToggle = document.getElementById('navToggle'),
    navClose = document.getElementById('navClose')



    if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('showMenu')
        } )

    }

    if(navClose){
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('showMenu')
        })

    }

//remove mobile menu

const navLink = document.querySelectorAll('.navLink')

function linkAction(){
    const navMenu = document.getElementById('navMenu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('showMenu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



//skills section

const skillsContent = document.getElementsByClassName('skillsContent'), 
skillsHeader = document.querySelectorAll('.skillsHeader')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skillsContent skillsClose'

    }
    if(itemClass === 'skillsContent skillsClose'){
        this.parentNode.className = 'skillsContent skillsOpen' 
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener('click', toggleSkills)
})

//swiper part

let swiper = new Swiper('.portfolioContainer', {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

  