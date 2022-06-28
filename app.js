


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

const navMbBtn = document.querySelectorAll('.nav-mobile-btn')
const header = document.querySelectorAll('.header')
const close = document.querySelectorAll('.close-btn')
console.log(navMbBtn);
Array.from(navMbBtn).map((item,index) => {
  item.onclick = () => {
    header[index].classList.add('active')

  }
})
Array.from(close).map((item,index) => {
  item.onclick = () => {
    header[index].classList.add('active')

  }
})






