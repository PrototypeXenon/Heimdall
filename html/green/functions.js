//EDIT THIS VARIABLE OR YOUR WEBSITE WILL BREAK:
var numberOfPagesInThisFolder = 6;

var randomPage;
var randomPageNumber;

var pagesAvailable = new Array(numberOfPagesInThisFolder);
           
    pagesAvailable[0]="avoidCyberbullying.html"; //EDIT ALL OF THESE TOO, IDIOT
    pagesAvailable[1]="avoidPlagarism.html";
    pagesAvailable[2]="beSafeOnline.html";
    pagesAvailable[3]="gamblingOnline.html";
    pagesAvailable[4]="inappropriateWebsites.html";
    pagesAvailable[5]="plagarism.html";

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

