svg4everybody({
  polyfill: true
});

var navigation = document.querySelector(".main-nav");
var navigationToggle = navigation.querySelector(".main-nav__burger");

navigation.classList.remove("main-nav--nojs");

navigationToggle.addEventListener("click", function() {
  if (navigation.classList.contains("main-nav--opened")) {
    navigation.classList.remove("main-nav--opened");
    navigationToggle.classList.remove("main-nav__burger--opened");
    navigationToggle.classList.add("main-nav__burger--closed");
  } else {
    navigation.classList.add("main-nav--opened");
    navigationToggle.classList.remove("main-nav__burger--closed");
    navigationToggle.classList.add("main-nav__burger--opened");
  }
});
