//EDIT THIS VARIABLE:
var numberOfPagesInThisFolder = 43;

var randomPage;
var randomPageNumber;

var pagesAvailable = new Array(numberOfPagesInThisFolder);
           
    pagesAvailable[0]="ads.html"; //EDIT ALL OF THESE TOO
    pagesAvailable[1]="adsForFreeStuff.html";
    pagesAvailable[2]="apps.html";
    pagesAvailable[3]="avoidCyberbullying.html";
    pagesAvailable[4]="inappropriateWebsites.html";
    pagesAvailable[5]="avoidCyberbullying.html";
    pagesAvailable[6]="avoidPlagarism.html";
    pagesAvailable[7]="backdoors.html";
    pagesAvailable[8]="backUpFiles.html";
    pagesAvailable[9]="beSafeOnline.html";
    pagesAvailable[10]="botNet.html";
    pagesAvailable[11]="computerWorms.html";
    pagesAvailable[12]="credit.html";
    pagesAvailable[13]="deleted.html";
    pagesAvailable[14]="DOS.html";
    pagesAvailable[15]="fakeAds.html";
    pagesAvailable[16]="fakeWebsites.html";
    pagesAvailable[17]="gamblingOnline.html";
    pagesAvailable[18]="inappropriateWebsites.html";
    pagesAvailable[19]="keyLoggers.html";
    pagesAvailable[20]="mobileThreats.html";
    pagesAvailable[21]="passwords.html";
    pagesAvailable[22]="personalInformation.html";
    pagesAvailable[23]="pharming.html"; 
    pagesAvailable[24]="phishing.html";
    pagesAvailable[25]="pictures.html";
    pagesAvailable[26]="pirating.html";
    pagesAvailable[27]="plagarism.html";
    pagesAvailable[28]="racism.html";
    pagesAvailable[29]="ransomeWare.html"; 
    pagesAvailable[30]="regularlyScanYourDevicesFiles.html";
    pagesAvailable[31]="resetAllPasswords.html";
    pagesAvailable[32]="rogueSecuritySoftware.html";
    pagesAvailable[33]="rootkits.html";
    pagesAvailable[34]="safeSites.html";
    pagesAvailable[35]="settings.html";
    pagesAvailable[36]="spamEmail.html";
    pagesAvailable[37]="spoofing.html";
    pagesAvailable[38]="spyware.html";
    pagesAvailable[39]="threatsToMobilePayment.html";
    pagesAvailable[40]="updateYourOperatingSystem.html";
    pagesAvailable[41]="WiFiEavesdropping.html";
    pagesAvailable[42]="WPA2Handshake.html";


function showDiv() {
    var divToShow = document.getElementById("moreInfo");
    if (divToShow.style.display == "none") {
        divToShow.style.display = "block";
    } else {
        divToShow.style.display = "none";
    }
}

function generateRandomNumber(){
    var randomNumber = -1;
    while (randomNumber < 0 || randomNumber > numberOfPagesInThisFolder || isNaN(randomNumber)){
        randomNumber = parseInt(Math.random()*(numberOfPagesInThisFolder+1));
    }
    return randomNumber;
}

function generateRandomPage(){
    randomPageNumber = generateRandomNumber();
    randomPage = pagesAvailable[randomPageNumber];
    return randomPage;
}

function showNewCard(){
    
    numberOfPagesInThisFolder--;
        
    document.location.href = generateRandomPage();
}

function searchFor() {
    var input, filter, ul, li, a, i;
    input = window.document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("searchOptions");
    li = ul.getElementsByTagName('li');
    
    $(ul).removeClass('hidden');
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        //li[i].style.display = "none";
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function onKonamiCode(cb) {
  var input = '';
  var key = '38384040373937396665';
  document.addEventListener('keydown', function (e) {
    input += ("" + e.keyCode);
    if (input === key) {
      return cb();
    }
    if (!key.indexOf(input)) return;
    input = ("" + e.keyCode);
  });
}

onKonamiCode(function () {alert('Sneaky!')})