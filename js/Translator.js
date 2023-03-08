// PC
// VIETNAMESE
document.getElementById("VIETNAMESE_key").onclick = vietnameLanguage;
function vietnameLanguage(){
    document.getElementById("language_key").innerHTML="VIETNAMESE";
        // NAVBAR
        document.getElementById("HOMEPAGE_key").innerHTML="TRANG CHỦ";
        document.getElementById("INTRODUCE_key").innerHTML="GIỚI THIỆU";
        document.getElementById("EVENT_key").innerHTML="GIẢI ĐẤU";
        document.getElementById("LIBRARY_key").innerHTML="THƯ VIỆN";
        // Wrappler
        document.getElementById("INTRODUCE_key1").innerHTML="GIỚI THIỆU";
        document.getElementById("EVENT_key1").innerHTML="GIẢI ĐẤU";
        document.getElementById("LIBRARY_key1").innerHTML="THƯ VIỆN";
        // Introduce_text
        document.getElementById("INTRODUCE_TEXT_key").innerHTML="Cộng đồng Đế Chế 4 lớn nhất Việt Nam được thành lập từ tháng 6 năm 2021 trên Facebook dưới tên gọi Age of Empires IV Việt Nam ,AOE4 là một tựa game chiến thuật thời gian thật giữa cuộc chiến của các nền văn minh khác nhau<br><br>AOE4VN được lập ra để kết nối đến những game thủ việt nam,tạo ra 1 cộng đồng những người yêu thích AOE4,đây là nơi để mọi người có thể chia sẻ chiến thuật và lưu trữ thông tin của AOE4.<br><br>Đế chế 4 Việt Nam luôn sẵn sàng chào đón các thành viên mới, dù là nhập môn tựa game RTS hay là lão làng từ các tựa game RTS khác chuyển sang<br><br>";
        // introduce_box_buy_text
        document.getElementById("introduce_box_buy_text").innerHTML="Nơi mua game: ";
        // library
        //civilizations
        document.getElementById("english_civ_box_key").innerHTML="Anh Quốc";
        document.getElementById("french_civ_box_key").innerHTML="Pháp";
        document.getElementById("hre_civ_box_key").innerHTML="Đức";
        document.getElementById("abbasid_civ_box_key").innerHTML="Ả Rập";
        document.getElementById("rus_civ_box_key").innerHTML="Nga";
        document.getElementById("chinese_civ_box_key").innerHTML="Trung Quốc";
        document.getElementById("mongol_civ_box_key").innerHTML="Mông Cổ";
        document.getElementById("delhi_civ_box_key").innerHTML="Ấn Độ";
        document.getElementById("ottoman_civ_box_key").innerHTML="Thổ Nhĩ Kỳ";
        document.getElementById("malian_civ_box_key").innerHTML="Mali";
        // contact
        document.getElementById("CONTACT_key").innerHTML="LIÊN HỆ";
        // civ_popup_modal
    // modal_civ_global
    var i;
    for(i=0;i<document.getElementsByClassName("modal_difficulty").length;i++){
        document.getElementsByClassName("modal_difficulty")[i].innerHTML="Độ khó: ";
    }
    for(i=0;i<document.getElementsByClassName("modal_stability").length;i++){
        document.getElementsByClassName("modal_stability")[i].innerHTML="Độ ổn định: ";
    }
    for(i=0;i<document.getElementsByClassName("modal_early_economy").length;i++){
        document.getElementsByClassName("modal_early_economy")[i].innerHTML="Kinh tế đầu game: ";
    }
    for(i=0;i<document.getElementsByClassName("modal_early_military").length;i++){
        document.getElementsByClassName("modal_early_military")[i].innerHTML="Quân sự đầu game: ";
    }
    for(i=0;i<document.getElementsByClassName("modal_late_economy").length;i++){
        document.getElementsByClassName("modal_late_economy")[i].innerHTML="Kinh tế cuối game: ";
    }
    for(i=0;i<document.getElementsByClassName("modal_late_military").length;i++){
        document.getElementsByClassName("modal_late_military")[i].innerHTML="Quân sự cuối game: ";
    }
};
// ENGLISH
document.getElementById("ENGLISH_key").onclick = englishLanguage;
 function englishLanguage(){
    document.getElementById("language_key").innerHTML="ENGLISH";
    // NAVBAR
    document.getElementById("HOMEPAGE_key").innerHTML="HOMEPAGE";
    document.getElementById("INTRODUCE_key").innerHTML="INTRODUCE";
    document.getElementById("EVENT_key").innerHTML="TOURANAMENT";
    document.getElementById("LIBRARY_key").innerHTML="LIBRARY";
    // Wrappler
    document.getElementById("INTRODUCE_key1").innerHTML="INTRODUCE";
    document.getElementById("EVENT_key1").innerHTML="TOURANAMENT";
    document.getElementById("LIBRARY_key1").innerHTML="LIBRARY";
    // Introduce_text
    document.getElementById("INTRODUCE_TEXT_key").innerHTML="The largest Age of empire 4 community in Vietnam, which was established from June 2021 on Facebook, AOE4 is a real-time strategy game between the wars of different civilizations.<br><br>AOE4VN was created to connect with AOE4 Vietnamese gamers. This website is a place for everyone to share AOE4's tactics and information to help more newbies.AOE4VN always welcome new members,whether they are beginners to RTS games or veterans from other RTS games.<br><br> ";
    // introduce_box_buy_text
    document.getElementById("introduce_box_buy_text").innerHTML="BUY GAME: ";
    // library
    //civilizations
    document.getElementById("english_civ_box_key").innerHTML="ENGLISH";
    document.getElementById("french_civ_box_key").innerHTML="FRENCH";
    document.getElementById("hre_civ_box_key").innerHTML="HRE";
    document.getElementById("abbasid_civ_box_key").innerHTML="ABBASID";
    document.getElementById("rus_civ_box_key").innerHTML="RUS";
    document.getElementById("chinese_civ_box_key").innerHTML="CHINESE";
    document.getElementById("mongol_civ_box_key").innerHTML="MONGOL";
    document.getElementById("delhi_civ_box_key").innerHTML="DELHI";
    document.getElementById("ottoman_civ_box_key").innerHTML="OTTOMAN";
    document.getElementById("malian_civ_box_key").innerHTML="MALIAN";
    // civ_popup_modal
    // modal_civ_global
    var i;
    for(i=0;i<document.getElementsByClassName("modal_difficulty").length;i++){
        document.getElementsByClassName("modal_difficulty")[i].innerHTML="Difficulty: ";
    }
    for(i=0;i<document.getElementsByClassName("modal_stability").length;i++){
        document.getElementsByClassName("modal_stability")[i].innerHTML="Stability: ";
    }
    for(i=0;i<document.getElementsByClassName("modal_early_economy").length;i++){
        document.getElementsByClassName("modal_early_economy")[i].innerHTML="Early Economy: ";
    }
    for(i=0;i<document.getElementsByClassName("modal_early_military").length;i++){
        document.getElementsByClassName("modal_early_military")[i].innerHTML="Early Military: ";
    }
    for(i=0;i<document.getElementsByClassName("modal_late_economy").length;i++){
        document.getElementsByClassName("modal_late_economy")[i].innerHTML="Late Economy: ";
    }
    for(i=0;i<document.getElementsByClassName("modal_late_military").length;i++){
        document.getElementsByClassName("modal_late_military")[i].innerHTML="Late Military: ";
    }
    // civ_English
    document.getElementById("modal_title_English_key").innerHTML="English";
    document.getElementById("modal_civ_subscribe_English_key").innerHTML="Defense, Farming";
    // contact
    document.getElementById("CONTACT_key").innerHTML="CONTACT";
};

// MOBILE
let countDown = 2;
let languageMobileKey = document.getElementsByClassName('language-mobile-key');

languageMobileKey[1].style.color= "#f1c40f";
document.getElementById('lang_mobile_menu').onclick = function(){
    if(countDown%2==0){
        englishLanguage();
        languageMobileKey[0].style.color= "#f1c40f";
        languageMobileKey[1].style.color= null;
    }else{
        vietnameLanguage();
        languageMobileKey[0].style.color= null;
        languageMobileKey[1].style.color= "#f1c40f";
    }
    countDown++;
}