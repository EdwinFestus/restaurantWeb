const menu = document.querySelector('.menu');
// select all the icons
const icons = document.querySelectorAll('.section-1-icons i');
// define a counter 
let i = 2;


menu.addEventListener('click', ()=> {
    const target = document.querySelectorAll('.target');
    target.forEach((item)=>{
        item.classList.toggle('change')
    })
})
//  Animate slidders
setInterval(() => {
    i++

    // acces the class: change
    const icon = document.querySelector('.section-1-icons .change');

    // Remove the class
    icon.classList.remove('change');
    
    //  Display and hide the rest icon in Order
    if(i > icons.length){
        icons[0].classList.add('change');
        i = 1;
    }   else{
        icon.nextElementSibling.classList.add('change');
    }
    

}, 4000);

