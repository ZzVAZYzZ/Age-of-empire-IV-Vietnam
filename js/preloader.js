var preloader = document.getElementById("preloader");

window.addEventListener("load",function(){
    preloader.style.display="none";
})

document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, document.body.scrollHeight);
});