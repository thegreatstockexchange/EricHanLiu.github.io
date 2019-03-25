// background images to be slideshowed
// color specifies the text list's color, unused right now
let background = [ 
  {link: "url(/assets/images/bg1.jpg)", color: "white"},
  {link: "url(/assets/images/bg2.jpg)", color: "white"},
  {link: "url(/assets/images/bg3.jpg)", color: "white"},
  {link: "url(/assets/images/bg4.jpg)", color: "white"}, 
  {link: "url(/assets/images/bg5.jpg)", color: "white"}, 
];
// text that displays on background images on main window
let text = [
	"Professional Software Developer",
    "Distinguished & Accredited Musician"
];

// randomize background on page load
function mainPageTransitions()
{
	shuffle(background);
	let imgDuration = 8000; // time between image transition (ms)
	let info = document.getElementById("main-text-container"); // div to target
	let banner = document.getElementById("banner");
	// initialized on page load
	info.innerHTML = text[0];
	banner.style.background = background[0].link + " center / cover";
	setInterval(() => {
		// change background image
		document.getElementById("banner").style.background = background[1].link + " center / cover";
		document.getElementById("main-text-container").style.color = background[1].color;
		background.push(background.shift());
		// change text
		info.style.opacity = "0";
		setTimeout(() => {
			info.innerHTML = text[0];
			info.style.opacity = "1";
		}, 500);
		text.push(text.shift()); // rotate array
	}, imgDuration);
}

function attachTopBarListeners()
{
	//change info header opacity on scroll 
	window.addEventListener("scroll", () => 
	{
		let a = document.body.scrollTop;
		let top = document.getElementById("top");
		let back = document.getElementById("back");
		if (a > "20") {
			top.style.opacity = "0.5";
		} else {
			top.style.opacity = "0.8";
		}
		if (a > "400") {
			back.style.opacity = "1";
			back.style.position = "fixed";
			back.style.pointerEvents = "auto";
		}
		else {
			back.style.opacity = "0";
			back.style.pointerEvents = "none";
		}
	});

	document.getElementById("top").addEventListener("mouseover", () =>
	{
		document.getElementById("top").style.opacity = 0.8;	
	});

	document.getElementById("top").addEventListener("mouseleave", () =>
	{
		if (document.body.scrollTop > "20")
			document.getElementById("top").style.opacity = 0.5;	
	});
}

function shuffle(a) 
{
    let j, x, i;
    for (i = a.length; i; i -= 1) 
    {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function main()
{
	attachTopBarListeners();
	mainPageTransitions();
}

main();