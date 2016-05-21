var background = [
  {link: "url(images/background.jpeg)", color: "#FFFFFF", text: "Distinguished Musician"},
  {link: "url(images/background1.jpg)", color: "#FFFFFF", text: "Developing Programmer"},
  {link: "url(images/background2.jpg)", color: "#FFFFFF", text: "Quick Learner"},
  {link: "url(images/background3.jpg)", color: "#FFFFFF", text: "Individualistic"},
  {link: "url(images/background4.jpeg)", color: "#FFFFFF", text: "Disciplined"}, 
  {link: "url(images/background5.jpg)", color: "#FFFFFF", text: "Academically Qualified"},
  {link: "url(images/background6.jpg)", color: "#FFFFFF", text: "Efficient Worker"},
];
var i = 0;
var j = 0;

//Change background image to random choice every 7s
document.getElementById("banner").style.background = background[j].link + " center / cover";
setInterval(function() {
	document.getElementById("banner").style.background = background[j].link + " center / cover";
	document.getElementById("info").style.color = background[j].color;
	j++;
	if (j == 7) {
		j = 0;
	}
}, 7000);

setInterval(function() {
	document.getElementById("info").style.opacity = "0";
	setTimeout(function() {
		document.getElementById("info").innerHTML = background[i].text;
		document.getElementById("info").style.opacity = "1";
	}, 500);
	i++;
	if (i == 7) {
		i = 0;
	}
}, 3000);

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
    return false;
});

