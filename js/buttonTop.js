window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    var button = document.getElementById("TopButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 322) {
         button.style.display = "block";
    } else {
         button.style.display = "none";
    }
}
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
}
