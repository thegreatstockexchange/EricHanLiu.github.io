function done() {
    var password = document.getElementById("pass").value;
    if (password == "motherload") {
        location.href = "/blog/add_new_entry";
        document.getElementById("popup").style.display = "none";
    } else {
        alert("Wrong Password!");
    }
};

function showPopup() {
    document.getElementById("popup").style.display = "block";
};

function hide() {
    document.getElementById("popup").style.display = "none";
};

document.getElementsByClassName("navbar-brand")[0].style.color = "black";
window.onscroll = function () {
    var a = document.body.scrollTop;
    if (a > "0") {
        document.getElementsByClassName("navbar")[0].style.opacity = "0.6";
        document.getElementsByClassName("navbar-brand")[0].style.color = "tomato";
    }
    else {
        document.getElementsByClassName("navbar")[0].style.opacity = "1";
        document.getElementsByClassName("navbar-brand")[0].style.color = "black";
    }
};

$('.leaveComment').on('click', function() {
    var form = $(this).next();
    if (form.is(':visible')) {
        form.hide();
    } else {
        form.show();
    }
});

$(window).on('scroll', function() {
    var icon = $('#toTop');
    var dis = $(this).scrollTop();
    if (dis >= 10) {
        icon.css({opacity:1});
    } else {
        icon.css({opacity:0});
    }
});

function scrollz() {
    if ($(window).scrollTop() > 0) {
        $("html, body").animate({ scrollTop: "0px" });
    }
}