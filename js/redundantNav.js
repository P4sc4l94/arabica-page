$(document).ready(function(){
  $("#shop").click(function(){
    $(".shop-panel").slideToggle("slow");
  });
  $("#location").click(function(){
    $(".location-panel").slideToggle("slow");
  });
  $("#about").click(function(){
    $(".about-panel").slideToggle("slow");
  });
  $("#contact").click(function(){
    $(".contact-panel").slideToggle("slow");
  });
});


var acc = document.getElementsByClassName("footer-nav__btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    // var panel = this.nextElementSibling;
    // if (panel.style.maxHeight) {
    //   panel.style.maxHeight = null;
    // } else {
    //   panel.style.maxHeight = panel.scrollHeight + "px";
    // } 
  });
}