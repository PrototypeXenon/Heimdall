//EDIT THIS VARIABLE:
var numberOfPagesInThisFolder = 3;

var randomPage;
var randomPageNumber;

var pagesAvailable = new Array(numberOfPagesInThisFolder);
           
    pagesAvailable[0]="card1.html"; //EDIT ALL OF THESE TOO
    pagesAvailable[1]="card2.html";
    pagesAvailable[2]="card3.html";
    
    

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

