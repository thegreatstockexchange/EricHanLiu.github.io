var background = [
  {link: "url(images/background.jpeg)", color: "#FFFFFF", text: "Distinguished Musician"},
  {link: "url(images/background1.jpg)", color: "#FFFFFF", text: "Developing Programmer"},
  {link: "url(images/background2.jpg)", color: "#FFFFFF", text: "Quick Learner"},
  {link: "url(images/background3.jpg)", color: "#FFFFFF", text: "Individualistic"},
  {link: "url(images/background4.jpeg)", color: "#FFFFFF", text: "Disciplined"}, 
  {link: "url(images/background5.jpeg)", color: "#FFFFFF", text: "Academically Qualified"},
];

//Change background image to random choice every 7s
setInterval(function() {
	document.getElementById("banner").style.background = background[1].link + " center / cover";
	document.getElementById("info").style.color = background[1].color;
	document.getElementById("info").style.opacity = "0";
	setTimeout(function() {
		document.getElementById("info").innerHTML = background[1].text;
		document.getElementById("info").style.opacity = "1";
	}, 1000);
	background.push(background.shift());
}, 7000);


$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
    return false;
});

