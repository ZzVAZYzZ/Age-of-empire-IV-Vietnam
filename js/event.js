let tournament = document.getElementById('tournament_main');
let tournamentSoloText = document.getElementById('tournament_solo_name');
let tournamentTeamText = document.getElementById('tournament_team_name');
let tournamentSoloMain = document.getElementById('tournament_solo_main');
let tournamentTeamMain = document.getElementById('tournament_team_main');

tournamentSoloText.onclick = function(){
    dismain1();
    setTimeout(function(){
        fadeInDown(tournamentSoloMain)
    },2000); 
};
tournamentTeamText.onclick = function(){
    dismain2();
    setTimeout(function(){
        fadeInDown(tournamentTeamMain)
    },2000); 
};
function fadeInDown(x){
    x.style.display="block";
    x.classList.remove('fade-out-up')
    x.classList.add('fade-in-down');
}
function fadeOutUp(x){
    x.classList.remove('fade-in-down')
    x.classList.add('fade-out-up');
    setTimeout(()=>{
        x.style.display = "none";
    },2000) 
}
function dismain1(){
    tournament.classList.remove('fade-in-down');
    tournament.classList.add('box_dismain_active1');
    setTimeout(()=>{
        tournament.style.display = "none";
    },2000) 
}
function dismain2(){
    tournament.classList.remove('fade-in-down');
    tournament.classList.add('box_dismain_active2');
    setTimeout(()=>{
        tournament.style.display = "none";
    },2000) 
}
let turnBackTournament=[];
for(let i=0;i<2;i++){
    turnBackTournament[i] = document.getElementsByClassName('tournament-back')[i];
}
turnBackTournament[0].onclick = function(){
    fadeOutUp(tournamentSoloMain);
    setTimeout(()=>{
        tournament.classList.remove('box_dismain_active1')
        fadeInDown(tournament);
        tournament.style.display = "block";
    },2000)
}
turnBackTournament[1].onclick = function(){
    fadeOutUp(tournamentTeamMain);
    setTimeout(()=>{
        tournament.classList.remove('box_dismain_active2')
        fadeInDown(tournament);
        tournament.style.display = "block";
    },2000)
}