var btnCivArray = [document.getElementById("myBtnEnglish"),document.getElementById("myBtnFrench"),document.getElementById("myBtnHRE"),document.getElementById("myBtnRus"),document.getElementById("myBtnAbbasid"),document.getElementById("myBtnMongol"),document.getElementById("myBtnDelhi"),document.getElementById("myBtnChinese"),document.getElementById("myBtnOttoman"),document.getElementById("myBtnMali")];
var myModalArray = [document.getElementById("myModalEnglish"),document.getElementById("myModalFrench"),document.getElementById("myModalHRE"),document.getElementById("myModalRus"),document.getElementById("myModalAbbasid"),document.getElementById("myModalMongol"),document.getElementById("myModalDelhi"),document.getElementById("myModalChinese"),document.getElementById("myModalOttoman"),document.getElementById("myModalMali")];
// open modal
btnCivArray[0].onclick = function() {
    myModalArray[0].style.display = "block";
}
btnCivArray[1].onclick = function() {
  myModalArray[1].style.display = "block";
}
btnCivArray[2].onclick = function() {
  myModalArray[2].style.display = "block";
}
btnCivArray[3].onclick = function() {
  myModalArray[3].style.display = "block";
}
btnCivArray[4].onclick = function() {
  myModalArray[4].style.display = "block";
}
btnCivArray[5].onclick = function() {
  myModalArray[5].style.display = "block";
}
btnCivArray[6].onclick = function() {
  myModalArray[6].style.display = "block";
}
btnCivArray[7].onclick = function() {
  myModalArray[7].style.display = "block";
}
btnCivArray[8].onclick = function() {
  myModalArray[8].style.display = "block";
}
btnCivArray[9].onclick = function() {
  myModalArray[9].style.display = "block";
}

// close modal
window.onclick = function(event){
  for(var i=0;i<10;i++){
    if (event.target == myModalArray[i]) {
      myModalArray[i].style.display = "none";
    }
  }
}
window.onkeydown = function(event){
  switch(event.which){
    case 27:
      for(var i=0;i<10;i++){
        myModalArray[i].style.display="none";
      }
      break;
  }
}
