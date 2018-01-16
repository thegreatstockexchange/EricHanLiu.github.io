var names = [
	"the Great",
	"the Incomparable",
	"the Amazing",
	"the Fantastic",
	"the Prodigy",
	"the Infinite Source of Beauty",
];

//CODE FOR PAGE CHANGE AND TEXT TRANSITION
function navClear() {
    document.querySelector("#stats").style.color = "#FFFFFF";
	document.querySelector("#abilities").style.color = "#FFFFFF";
    document.querySelector("#home").style.color = "#FFFFFF";
}

function navColor(link) {
    document.querySelector(link).style.color = "#CF1D32";
}

//function to select the id for easier manipulation (don't have to get id for each)
function $(id){
    return document.getElementById(id); 
}

//default shows the home paragraph
$("p-home").classList.add("clicked");
generateName();

//function for page loading
function loadPage(link, pageAdd) {
    navClear();
    navColor(link);
	$("links").classList.remove("clicked");
    $("p-home").classList.remove("clicked");
	$("p-stats").classList.remove("clicked");
	$("p-abilities").classList.remove("clicked");
    setTimeout(function() {
        $(pageAdd).classList.add("clicked");
    }, 250);
};

function generateName() {
	$("h1").innerHTML = "Eric " + names[Math.floor((Math.random() * 6))];
};

window.addEventListener("hashchange", function() {
    var hash = window.location.hash;
    hash = hash.slice(1);   
	//link name, paragraph to clear, paragraph to load
    loadPage("#"+hash, "p-"+hash);
	if (hash == "abilities") {
		$("links").classList.add("clicked");
	}
});

//So the home page will load on default page load
window.dispatchEvent(new Event("hashchange"));
