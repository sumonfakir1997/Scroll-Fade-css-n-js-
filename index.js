
const rowes = document.querySelectorAll('.row')
const anothers = document.querySelectorAll('.section2')
const downes = document.querySelectorAll('.section3')
const rights = document.querySelectorAll('.section4')

const leftes = document.querySelectorAll('section5')

window.addEventListener('scroll', sumon )

sumon()

function sumon () {
    const triggerBottom = window. innerHeight / 5 * 4

rowes.forEach(row => {
    const rowTop = row.getBoundingClientRect().top

    if(rowTop < triggerBottom){
       row.classList.add('active')
      //  console.log('got it ')
    } else  {
       row.classList.remove('active')
      //  console.log('yes removed it ')
    }
 })

 anothers.forEach(another => {
   const anotherTop = another.getBoundingClientRect().top

   if(anotherTop < triggerBottom){
       another.classList.add('show')
   } else {
       another.classList.remove('show')
   }
   
})
downes.forEach(down => {
   const downTop = down.getBoundingClientRect().top
   if(downTop < triggerBottom){
      down.classList.add('down')
   } else{
      down.classList.remove('down')
   }
})

rights.forEach(right => {
   const rightTop = right.getBoundingClientRect().top
   if(rightTop <triggerBottom){
      right.classList.add('right')
   } else {
      right.classList.remove('right')
   }
})

leftes.forEach(left => {
   const leftTop = left.getBoundingClientRect().top
   if(leftTop < triggerBottom){
      left.classList.add('left')
      console.log('got it')
   } else {
      left.classList.remove('left')
      console.log('removed')
   }
})
}
 



