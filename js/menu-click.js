let nav=document.getElementById("nav-toggle");
let open_icon=document.getElementById("open_icon");
let close_icon=document.getElementById("close_icon");



document.addEventListener('click', (event) => {
    if (event.target == open_icon) {
        nav.style.display= "block";
        open_icon.style.display="none";
        close_icon.style.display="block";
    }
    if (event.target == close_icon){
        nav.style.display= "none";
        open_icon.style.display="block";
        close_icon.style.display="none";
    }
});