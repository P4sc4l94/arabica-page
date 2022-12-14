function openShop() {
  // document.getElementById("topNav").style.height = "100%";
  let menu = document.getElementById("shop-menu");
  let otherA = document.getElementById("location-menu");
  let otherB = document.getElementById("about-menu");
  menu.classList.toggle("top-nav__menu-overlay-open");
  otherA.classList.remove("top-nav__menu-overlay-open");
  otherB.classList.remove("top-nav__menu-overlay-open");
}
function closeShop() {
  document.getElementById("shop-menu").classList.toggle("top-nav__menu-overlay-open");
}

function openLocation() {
  // document.getElementById("topNav").style.height = "100%";
  let menu = document.getElementById("location-menu");
  let otherA = document.getElementById("shop-menu");
  let otherB = document.getElementById("about-menu");

  menu.classList.toggle("top-nav__menu-overlay-open");
  
  otherA.classList.remove("top-nav__menu-overlay-open");
  otherB.classList.remove("top-nav__menu-overlay-open");
}
function closeLocation() {
  document.getElementById("location-menu").classList.toggle("top-nav__menu-overlay-open");
}

function openAbout() {
  // document.getElementById("topNav").style.height = "100%";
  let menu = document.getElementById("about-menu");
  let otherA = document.getElementById("shop-menu");
  let otherB = document.getElementById("location-menu");

  menu.classList.toggle("top-nav__menu-overlay-open");
  otherA.classList.remove("top-nav__menu-overlay-open");
  otherB.classList.remove("top-nav__menu-overlay-open");
}
function closeAbout() {
  document.getElementById("about-menu").classList.toggle("top-nav__menu-overlay-open");
}

function openContact() {
  // document.getElementById("topNav").style.height = "100%";
  let menu = document.getElementById("contact-menu");
  let otherA = document.getElementById("shop-menu");
  let otherB = document.getElementById("location-menu");
  let otherC = document.getElementById("about-menu");

  menu.classList.toggle("top-nav__menu-overlay-open");
  otherA.classList.remove("top-nav__menu-overlay-open");
  otherB.classList.remove("top-nav__menu-overlay-open");
  otherC.classList.remove("top-nav__menu-overlay-open");
}
function closeContact() {
  document.getElementById("contact-menu").classList.toggle("top-nav__menu-overlay-open");
}

function toggleSearch(){
  let search = document.getElementById("searchBar");

  let otherA = document.getElementById("shop-menu");
  let otherB = document.getElementById("location-menu");
  let otherC = document.getElementById("about-menu");
  let otherD = document.getElementById("contact-menu");

  search.classList.toggle("top-nav__searchbar--open");
  otherA.classList.remove("top-nav__menu-overlay-open");
  otherB.classList.remove("top-nav__menu-overlay-open");
  otherC.classList.remove("top-nav__menu-overlay-open");
  otherD.classList.remove("top-nav__menu-overlay-open");
}


// FOR MOBILE NAVIGATION
function openMobile() {
  document.getElementById("mobileMenu").style.width = "100%";
}

function closeMobile() {
  document.getElementById("mobileMenu").style.width = "0%";
}