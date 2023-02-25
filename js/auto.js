tournament = document.getElementsByClassName('tournament_text');


function tournamentColor(i){
    if(i==0){
        tournament[0].style.textShadow = "0 0 10px #e67e22, 0 0 20px #e67e22, 0 0 40px #e67e22, 0 0 80px #e67e22, 0 0 120px #e67e22";
    }
    if(i==1){
        tournament[0].style.textShadow = "0 0 10px #8e44ad, 0 0 20px #8e44ad, 0 0 40px #8e44ad, 0 0 80px #8e44ad, 0 0 120px #8e44ad";
    }
    if(i==2){
        tournament[0].style.textShadow = "0 0 10px #e74c3c, 0 0 20px #e74c3c, 0 0 40px #e74c3c, 0 0 80px #e74c3c, 0 0 120px #e74c3c";
    }
    if(i==3){
        tournament[0].style.textShadow = "0 0 10px #333, 0 0 20px #333, 0 0 40px #333, 0 0 80px #333, 0 0 120px #333";
    }
    if(i==4){
        tournament[0].style.textShadow = "0 0 10px #be2edd, 0 0 20px #be2edd, 0 0 40px #be2edd, 0 0 80px #be2edd, 0 0 120px #be2edd";
    }
}
var bt = 0;
setInterval(function(){

    tournamentColor(bt);
    bt++;
    if(bt==5){
        bt=0;
    }
},800)

scrolll = document.getElementsByClassName('scrollTo');
scrolll[0].onclick = function(){
    var element = document.getElementById('start');
    element.scrollIntoView({behavior: "smooth"});
};
scrolll[1].onclick = function(){
    var element = document.getElementById('introduce_wrapper');
    element.scrollIntoView({behavior: "smooth"});
};
scrolll[2].onclick = function(){
    var element = document.getElementById('event_wrapper');
    element.scrollIntoView({behavior: "smooth"});
};
scrolll[3].onclick = function(){
    var element = document.getElementById('library_wrapper');
    element.scrollIntoView({behavior: "smooth"});
};

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if(entry.isIntersecting){
//             entry.target.classList.add("show");
//         }else{
//             entry.target.classList.remove("show");
//         }
//     });
// });

// const hiddenEl = document.querySelectorAll('.hidden');
// hiddenEl.forEach((el) => observer.observe(el));