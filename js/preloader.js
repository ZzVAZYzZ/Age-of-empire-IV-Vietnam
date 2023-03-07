var preloader = document.getElementById("preloader");

window.addEventListener("load",function(){
    preloader.style.display="none";
    window.scrollTo(0, 0);
})

document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, document.body.scrollHeight);
});
