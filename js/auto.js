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
var slideShowGalleyWrapperEnglish=[], slideShowGalleyWrapperFrench=[], slideShowGalleyWrapperHre=[],slideShowGalleyWrapperRus=[], slideShowGalleyWrapperChinese=[], slideShowGalleyWrapperMongol=[];
for(var i = 0; i<6; i ++){
    slideShowGalleyWrapperEnglish[i] = document.getElementsByClassName('slide-wrapper-english')[i];
    slideShowGalleyWrapperFrench[i] = document.getElementsByClassName('slide-wrapper-french')[i];
    slideShowGalleyWrapperHre[i] = document.getElementsByClassName('slide-wrapper-hre')[i];
    slideShowGalleyWrapperRus[i] = document.getElementsByClassName('slide-wrapper-rus')[i];
    slideShowGalleyWrapperChinese[i] = document.getElementsByClassName('slide-wrapper-chinese')[i];
    slideShowGalleyWrapperMongol[i] = document.getElementsByClassName('slide-wrapper-mongol')[i];
}

var arrowLeft = document.getElementsByClassName('arrow-left'); 
var arrowRight = document.getElementsByClassName('arrow-right');
var keyEnglish = 0,keyFrench = 0,keyHre = 0,keyRus = 0,keyChinese = 0,keyMongol=0;
if(keyEnglish==0){
    slideShowGalleyWrapperEnglish[0].style.display = "block";
    slideShowGalleyWrapperFrench[0].style.display = "block";
    slideShowGalleyWrapperHre[0].style.display = "block";
    slideShowGalleyWrapperRus[0].style.display = "block";
    slideShowGalleyWrapperChinese[0].style.display = "block";
    slideShowGalleyWrapperMongol[0].style.display = "block";
}

// English
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
// french
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
// Hre
arrowRight[2].onclick = function(){
    
    for(var i=0;i<6;i++){
        if(keyHre==i){
            slideShowGalleyWrapperHre[i].style.display = "none";
        }
    }
    keyHre++;
    if(keyHre>5){
        keyHre=0;
    }
    
    for(var i=0;i<6;i++){
        if(keyHre==i){
            slideShowGalleyWrapperHre[i].style.display = "block";
        }
    }
}

arrowLeft[2].onclick = function(){
    
    for(var i=0;i<6;i++){
        if(keyHre==i){
            slideShowGalleyWrapperHre[i].style.display = "none";
        }
    }
    keyHre--;
    if(keyHre<0){
        keyHre=5;
    }
    for(var i=0;i<6;i++){
        if(keyHre==i){
            slideShowGalleyWrapperHre[i].style.display = "block";
        }
    }
}
// Rus
arrowRight[3].onclick = function(){
    
    for(var i=0;i<6;i++){
        if(keyRus==i){
            slideShowGalleyWrapperRus[i].style.display = "none";
        }
    }
    keyRus++;
    if(keyRus>5){
        keyRus=0;
    }
    
    for(var i=0;i<6;i++){
        if(keyRus==i){
            slideShowGalleyWrapperRus[i].style.display = "block";
        }
    }
}

arrowLeft[3].onclick = function(){
    
    for(var i=0;i<6;i++){
        if(keyRus==i){
            slideShowGalleyWrapperRus[i].style.display = "none";
        }
    }
    keyRus--;
    if(keyRus<0){
        keyRus=5;
    }
    for(var i=0;i<6;i++){
        if(keyRus==i){
            slideShowGalleyWrapperRus[i].style.display = "block";
        }
    }
}
// chinese
arrowRight[4].onclick = function(){
    
    for(var i=0;i<6;i++){
        if(keyChinese==i){
            slideShowGalleyWrapperChinese[i].style.display = "none";
        }
    }
    keyChinese++;
    if(keyChinese>5){
        keyChinese=0;
    }
    
    for(var i=0;i<6;i++){
        if(keyChinese==i){
            slideShowGalleyWrapperChinese[i].style.display = "block";
        }
    }
}

arrowLeft[4].onclick = function(){
    
    for(var i=0;i<6;i++){
        if(keyChinese==i){
            slideShowGalleyWrapperChinese[i].style.display = "none";
        }
    }
    keyChinese--;
    if(keyChinese<0){
        keyChinese=5;
    }
    for(var i=0;i<6;i++){
        if(keyChinese==i){
            slideShowGalleyWrapperChinese[i].style.display = "block";
        }
    }
}
// mongol
arrowRight[5].onclick = function(){
    
    for(var i=0;i<6;i++){
        if(keyMongol==i){
            slideShowGalleyWrapperMongol[i].style.display = "none";
        }
    }
    keyMongol++;
    if(keyMongol>5){
        keyMongol=0;
    }
    
    for(var i=0;i<6;i++){
        if(keyMongol==i){
            slideShowGalleyWrapperMongol[i].style.display = "block";
        }
    }
}

arrowLeft[5].onclick = function(){
    
    for(var i=0;i<6;i++){
        if(keyMongol==i){
            slideShowGalleyWrapperMongol[i].style.display = "none";
        }
    }
    keyMongol--;
    if(keyMongol<0){
        keyMongol=5;
    }
    for(var i=0;i<6;i++){
        if(keyMongol==i){
            slideShowGalleyWrapperMongol[i].style.display = "block";
        }
    }
}