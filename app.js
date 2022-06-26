
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

const menus = document.querySelectorAll('.menu li')
Array.from(menus).map(item => {
    item.onclick = () => {
        item.querySelector('.sub-menu').classList.toggle('active')
    }
    window.addEventListener('click', function(e){   
      if (item.contains(e.target)){
        // Clicked in box
    
      } else{
        // Clicked outside the box
        item.querySelector('.sub-menu').classList.remove('active')
        
      }
    });
})

const navMbBtn = document.querySelector('.nav-mobile-btn')
const header = document.querySelector('.header')
const close = document.querySelector('.close-btn')
navMbBtn.onclick = () => {  
  header.classList.add('active')
}
close.onclick = () => {
  header.classList.remove('active')
}




