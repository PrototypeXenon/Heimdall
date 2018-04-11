var numberOfPagesInThisFolder = 41;

var randomPage;
var randomPageNumber;

var pagesAvailable = new Array(numberOfPagesInThisFolder);
           
    pagesAvailable[0]="apps.html";
    pagesAvailable[1]="avoidCyberbullying.html";
    pagesAvailable[2]="avoidingPlagarism.html";
    pagesAvailable[3]="backdoors.html";
    pagesAvailable[4]="backUpFiles.html";
    pagesAvailable[5]="botNet.html";
    pagesAvailable[6]="computerViruses.html";
    pagesAvailable[7]="computerWorms.html";
    pagesAvailable[8]="creditDebitBanking.html";
    pagesAvailable[9]="deltedFiles.html";
    pagesAvailable[10]="DOSAttacks.html";
    pagesAvailable[11]="fakeAds.html";
    pagesAvailable[12]="fakeWebsites.html";
    pagesAvailable[13]="gamblingOnline.html";
    pagesAvailable[14]="inappropriatePictures.html";
    pagesAvailable[15]="inappropriateWebsite.html";
    pagesAvailable[16]="keyLoggers.html";
    pagesAvailable[17]="mobileThreats.html";
    pagesAvailable[18]="passwords.html";
    pagesAvailable[19]="personalInformation.html";
    pagesAvailable[20]="pharming.html";
    pagesAvailable[21]="phishing.html";
    pagesAvailable[22]="pirating.html";
    pagesAvailable[23]="plagarism.html"; 
    pagesAvailable[24]="racism.html";
    pagesAvailable[25]="ransomWare.html";
    pagesAvailable[26]="regularlyScanYourDevicesFiles.html";
    pagesAvailable[27]="resetAllPasswords.html";
    pagesAvailable[28]="rogueSecuritySoftware.html";
    pagesAvailable[29]="rootkits.html"; 
    pagesAvailable[30]="safeSites.html";
    pagesAvailable[31]="settings.html";
    pagesAvailable[32]="spamEmail.html";
    pagesAvailable[33]="spoofing.html";
    pagesAvailable[34]="spyware.html";
    pagesAvailable[35]="stayingSafeOnline.html";
    pagesAvailable[36]="threatsToMobilePayment.html";
    pagesAvailable[37]="trojanNames.html";
    pagesAvailable[38]="updateYourOperatingSystem.html";
    pagesAvailable[39]="WiFiEavesdropping.html";
    pagesAvailable[40]="WPA2Handshake.html";


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