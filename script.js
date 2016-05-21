var background = [
  {link: "url(images/background.jpeg)", color: "#FFFFFF"},
  {link: "url(images/background1.jpg)", color: "#FFFFFF"},
  {link: "url(images/background2.jpg)", color: "#FFFFFF"},
  {link: "url(images/background3.jpg)", color: "#FFFFFF"},
  {link: "url(images/background4.jpeg)", color: "#FFFFFF"}, 
  {link: "url(images/background5.jpeg)", color: "#FFFFFF"},
];

//Change background image to random choice every 7s
setInterval(function() {
  var chosenImage = Math.floor(Math.random() * 5);
  document.getElementById("banner").style.background = background[chosenImage].link + " center / cover";
  document.getElementById("info").style.color = background[chosenImage].color;
}, 7000);


$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
    return false;
});