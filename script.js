var background = [
  /*"url(/css/1.png)", // uncomment to use subtle patterns alongside background images
  "url(/css/2.png)", // would need to add respective name colours
  "url(/css/3.png)",
  "url(/css/4.png)",*/
  {link: "url(/css/background.jpg)", color: "#894264"},
  {link: "url(/css/background1.jpg)", color: "#93B6CC"},
  {link: "url(/css/background2.jpg)", color: "#9FAFBF"},
  {link: "url(/css/background3.jpg)", color: "#916852"},
  {link: "url(/css/background4.jpeg)", color: "#6D8893"}, 
  {link: "url(/css/background5.jpeg)", color: "#8A8A8A"},
  {link: "url(/css/background6.jpeg)", color: "#636363"},
  {link: "url(/css/background7.jpeg)", color: "#BBCAD0"},
];

//Change background image to random choice every 7s
setInterval(function() {
  var chosenImage = Math.floor(Math.random() * 8);
  document.body.style.backgroundImage = background[chosenImage].link;
  document.getElementById("name").style.color = background[chosenImage].color;
  document.getElementsByClassName("border")[0].style.borderColor = background[chosenImage].color;
  document.getElementsByClassName("border")[1].style.borderColor = background[chosenImage].color;
}, 7000);



function showP(hash) {
  hidePages();
  document.querySelector("#page-" + hash).classList.remove("hidden");
}

function navClear() {
  document.querySelector("#aboutLink").style.color = "#FFFFFF";
  document.querySelector("#homeLink").style.color = "#FFFFFF";
}

function navColor(link) {
  document.querySelector(link).style.color = "#9FAFBF";
}

var hidePages = function() { 
    var container = document.querySelector(".container");
    for (var i = 0; i < container.children.length; i++) {
        var child = container.children[i];
        child.classList.add("hidden");
    }
};

var pages = {
  "about": function(hash) { 
    showP(hash);
    navClear();
    navColor("#aboutLink");
  },
  "" : function(hash) { 
    showP(hash);
    navClear();
    navColor("#homeLink");
  } 
};

window.addEventListener("hashchange", function() {
  var hash = window.location.hash;
  hash = hash.slice(1); // Removes the # at the start of the hash to fit with function names
  
  pages[hash](hash);
});

window.dispatchEvent(new Event("hashchange"));


