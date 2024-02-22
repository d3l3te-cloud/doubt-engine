document.addEventListener("scroll", function() {
    var scrollTop = window.scrollY;
    var parallaxElements = document.querySelectorAll(".parallax");

    parallaxElements.forEach(function(element) {
        var parallaxDistance = scrollTop - element.offsetTop;
        element.style.backgroundPositionY = parallaxDistance * 0.5 + "px";
    });
});