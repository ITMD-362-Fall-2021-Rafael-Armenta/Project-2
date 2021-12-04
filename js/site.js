// Splide Image Slider
window.addEventListener('load', function() {
  var splide = new Splide( '.splide', {
    height: '20em' ,
    width: '80%',
    trimSpace: true,
    cover: true,
    heightRatio: 0.5,
    type: 'fade',
    autoplay: true,
    rewind: true,
  });
  splide.mount();
});

// Signup Button
var signBtn = document.getElementById("signupBtn");

signBtn.addEventListener('click', function() {
  location.href = "http://example.com/"
})

// Accordion
var acc = document.getElementsByClassName("accordion");
var i;
  
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}