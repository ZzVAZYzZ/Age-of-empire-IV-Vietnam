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
// landmark-carousel
var slideShowGalley=[];
for(var i = 0; i<6; i ++){
    slideShowGalley[i] = document.getElementsByClassName('slide')[i];
}
var slideShowGalleyWrapperEnglish=[], slideShowGalleyWrapperFrench=[];
for(var i = 0; i<6; i ++){
    slideShowGalleyWrapperEnglish[i] = document.getElementsByClassName('slide-wrapper-english')[i];
    slideShowGalleyWrapperFrench[i] = document.getElementsByClassName('slide-wrapper-french')[i];
}

var arrowLeft = document.getElementsByClassName('arrow-left'); 
var arrowRight = document.getElementsByClassName('arrow-right');
var keyEnglish = 0,keyFrench = 0;
if(keyEnglish==0){
    slideShowGalleyWrapperEnglish[0].style.display = "block";
    slideShowGalleyWrapperFrench[0].style.display = "block";
}

arrowRight[0].onclick = function(){
    
    for(var i=0;i<6;i++){
        if(keyEnglish==i){
            slideShowGalleyWrapperEnglish[i].style.display = "none";
        }
    }
    keyEnglish++;
    if(keyEnglish>5){
        keyEnglish=0;
    }
    
    for(var i=0;i<6;i++){
        if(keyEnglish==i){
            slideShowGalleyWrapperEnglish[i].style.display = "block";
        }
    }
}

arrowLeft[0].onclick = function(){
    
    for(var i=0;i<6;i++){
        if(keyEnglish==i){
            slideShowGalleyWrapperEnglish[i].style.display = "none";
        }
    }
    keyEnglish--;
    if(keyEnglish<0){
        keyEnglish=5;
    }
    for(var i=0;i<6;i++){
        if(keyEnglish==i){
            slideShowGalleyWrapperEnglish[i].style.display = "block";
        }
    }
}
arrowRight[1].onclick = function(){
    
    for(var i=0;i<6;i++){
        if(keyFrench==i){
            slideShowGalleyWrapperFrench[i].style.display = "none";
        }
    }
    keyFrench++;
    if(keyFrench>5){
        keyFrench=0;
    }
    
    for(var i=0;i<6;i++){
        if(keyFrench==i){
            slideShowGalleyWrapperFrench[i].style.display = "block";
        }
    }
}

arrowLeft[1].onclick = function(){
    
    for(var i=0;i<6;i++){
        if(keyFrench==i){
            slideShowGalleyWrapperFrench[i].style.display = "none";
        }
    }
    keyFrench--;
    if(keyFrench<0){
        keyFrench=5;
    }
    for(var i=0;i<6;i++){
        if(keyFrench==i){
            slideShowGalleyWrapperFrench[i].style.display = "block";
        }
    }
}

