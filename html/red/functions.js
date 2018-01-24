//EDIT THIS VARIABLE:
var numberOfPagesInThisFolder = 6;

var randomPage;
var randomPageNumber;

var pagesAvailable = new Array(numberOfPagesInThisFolder);
           
    pagesAvailable[0]="backUpFiles.html"; //EDIT ALL OF THESE TOO
    pagesAvailable[1]="regularlyScanYourDevicesFiles.html";
    pagesAvailable[2]="resetAllPasswords.html";
    pagesAvailable[3]="safeSites.html";
    pagesAvailable[4]="signsOfAPotentiallyMalwareInfestedPC.html";
    pagesAvailable[5]="updateYourOperatingSystem.html";

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

