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
// build the nav for desktop
let sections = document.querySelectorAll(".section-enter"),
    navDesktop = document.querySelector(".navigation-desktop .first-level");
const navFragment = document.createDocumentFragment();
    sections.forEach(function(section, index){
        // create li for each section
        const sectionTitle = section.querySelector("h2").textContent;
        let sectionId = section.getAttribute("id")
        let li = document.createElement( "li");
        let a = document.createElement( "a");
        a.textContent = sectionTitle;
        li.setAttribute("data-value", sectionId);
        li.appendChild(a);
        li.classList.add ("first-level__item")
        a.setAttribute("href", "#")
        navFragment.appendChild(li)
        if(index == 0){
            li.classList.add("active")
        }
       
    })
    navDesktop.appendChild(navFragment)
    // build the nav for mobile 
  let navMobile = document.querySelector(".naviagtion-mobile")
  sections.forEach(function(section){
    const sectionTitle = section.querySelector("h2").textContent;
    let sectionId = section.getAttribute("id")
    let div = document.createElement( "div");
    let label = document.createElement( "label");
    div.classList.add("item")
    label.setAttribute("data-value", sectionId)
    label.textContent = sectionTitle
    div.appendChild(label)
    navFragment.appendChild(div)
  })
  navMobile.appendChild(navFragment)
/**
 *   Global Variables
 *
*/
 const header = document.querySelector(".navigation-desktop"),
  sectionIntersect = document.querySelectorAll(".section-enter"),
  scrollTopArrow = document.getElementById("scroll-top");
 let mobileHeaderLinks = document.querySelectorAll( ".naviagtion-mobile .item label"),
     headerLinks = document.querySelectorAll(".navigation-desktop ul li")
     headerHeight = document.querySelector(".header").clientHeight,
     windowHeight = window.innerHeight,
     sectionOffSetTop= [],
     sectionHeights=[],
     sumAllSectionHeight=0
/**
 * End Global Variables
 *
*/
// Scroll to anchor ID using scrollTO event
    // smooth scroll to div
for(let i=0; i<sectionIntersect.length;i++){
    sectionOffSetTop.push(sectionIntersect[i].offsetTop)
    sectionHeights.push(sectionIntersect[i].clientHeight)
    sumAllSectionHeight += sectionHeights[i]
}
// to change active item when scroll
window.onscroll= function(){
       let top = window.scrollY;
       for(let i=0; i<sectionIntersect.length; i++){
        if(((windowHeight+top) - sectionOffSetTop[i]) > 200 && ((windowHeight+top) - sectionOffSetTop[i]) < 300){
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


