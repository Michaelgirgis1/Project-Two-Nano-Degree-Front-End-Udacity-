/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 *   Global Variables
 *
*/
 const header = document.querySelector(".navigation-desktop"),
  sectionIntersect = document.querySelectorAll(".section-enter"),
  scrollTopArrow = document.getElementById("scroll-top");
 let headerLinks = document.querySelectorAll(".navigation-desktop ul li"),
     mobileHeaderLinks = document.querySelectorAll( ".naviagtion-mobile .item label"),
     headerHeight = document.querySelector(".header").clientHeight,
     windowHeight = window.innerHeight,
     sectionOffSetTop= [],
     sectionHeights=[],
     sumAllSectionHeight=0

/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
    // smooth scroll to div
for(let i=0; i<sectionIntersect.length;i++){
    sectionOffSetTop.push(sectionIntersect[i].offsetTop)
    sectionHeights.push(sectionIntersect[i].clientHeight)
    sumAllSectionHeight += sectionHeights[i]
}

console.log(sectionOffSetTop, sectionHeights, sumAllSectionHeight, windowHeight)
// to change active item when scroll
window.onscroll= function(){
       let top = window.scrollY;
       for(let i=0; i<sectionIntersect.length; i++){
        if((sectionOffSetTop[i] - (windowHeight+top)) < -200 && (sectionOffSetTop[i] - (windowHeight+top)) > -300){
            // let linkValue = this.dataset.value,
            //     sectionActive = document.querySelector(`#${linkValue}`)
            headerLinks.forEach(element => element.classList.remove("active"))
            sectionIntersect.forEach(element => element.classList.remove("your-active-class"))
            sectionIntersect[i].classList.add("your-active-class")
            headerLinks[i].classList.add("active")
        }
    }
    if(top>200){
        scrollTopArrow.style.display= "flex"
    }else{
        scrollTopArrow.style.display= "none"

    }
}
console.log(mobileHeaderLinks)
// to scroll to section clicked
headerLinks.forEach(function(link) {
    link.addEventListener("click",function(event) {
        event.preventDefault();
       let linkValue = this.dataset.value
       let linkPositionTop = document.querySelector(`#${linkValue}`).offsetTop
       headerLinks.forEach(element => element.classList.remove("active"))
       this.classList.add("active")
         window.scrollTo({
            top: linkPositionTop,
            behavior:'smooth'
        });
     

    })
})
mobileHeaderLinks.forEach(function (link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        let mobileLinkValue = this.dataset.value;
        let linkPositionTop = document.querySelector(`#${mobileLinkValue}`).offsetTop
        window.scrollTo({
            top: linkPositionTop,
            behavior:'smooth'
        });
        // to skrink menu on mobile when click at menu item
        let checkItem = document.getElementById("menu")
        checkItem.checked = false;
    })
})
scrollTopArrow.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    });
})
// let navLink = document.querySelector('.header ul a')
// $('.links li a').click(function () {
//     window.scrollTo(50,0);

// 		// $('html, body').animate({

// 		// 	scrollTop: $('#' + $(this).data('value')).offset().top

// 		// }, 1000);
// 	});

//     document.getElementById("tunnel").animate([
//         // keyframes
//         { transform: 'translateY(0px)' },
//         { transform: 'translateY(-300px)' }
//       ], {
//         // timing options
//         duration: 1000,
//         iterations: Infinity
//       });
/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active


 // change color of header when scroll down



