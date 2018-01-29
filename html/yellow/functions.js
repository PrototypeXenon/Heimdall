//EDIT THIS VARIABLE:
var numberOfPagesInThisFolder = 23;

var randomPage;
var randomPageNumber;

var pagesAvailable = new Array(numberOfPagesInThisFolder);
           
    pagesAvailable[0]="adsForFreeStuff.html"; //EDIT ALL OF THESE TOO
    pagesAvailable[1]="apps.html";
    pagesAvailable[2]="backdoors.html";
    pagesAvailable[3]="botNet.html";
    pagesAvailable[4]="computerViruses.html";
    pagesAvailable[5]="computerWorms.html";
    pagesAvailable[6]="DOS.html";
    pagesAvailable[7]="fakeAds.html";
    pagesAvailable[8]="keyLoggers.html";
    pagesAvailable[9]="mobileThreats.html";
    pagesAvailable[10]="pharming.html";
    pagesAvailable[11]="phishing.html";
    pagesAvailable[12]="pirating.html";
    pagesAvailable[13]="ransomeWare.html";
    pagesAvailable[14]="rogueSecuritySoftware.html";
    pagesAvailable[15]="rootkits.html";
    pagesAvailable[16]="spamEmail.html";
    pagesAvailable[17]="spoofing.html";
    pagesAvailable[18]="spyware.html";
    pagesAvailable[19]="threatsToMobilePayment.html";
    pagesAvailable[20]="trojanNames.html";
    pagesAvailable[21]="WiFiEavesdropping.html";
    pagesAvailable[22]="WPA2Handshake.html";
    

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

