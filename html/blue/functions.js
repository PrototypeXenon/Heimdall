//EDIT THIS VARIABLE:
var numberOfPagesInThisFolder = 9;

var randomPage;
var randomPageNumber;

var pagesAvailable = new Array(numberOfPagesInThisFolder);
           
    pagesAvailable[0]="ads.html"; //EDIT ALL OF THESE TOO
    pagesAvailable[1]="credit.html";
    pagesAvailable[2]="deleted.html";
    pagesAvailable[3]="fakeWebsites.html";
    pagesAvailable[4]="passwords.html";
    pagesAvailable[5]="personalInformation.html";
    pagesAvailable[6]="pictures.html";
    pagesAvailable[7]="racism.html";
    pagesAvailable[8]="settings.html";

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

