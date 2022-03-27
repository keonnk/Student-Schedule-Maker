function RevealCard(cardNum) {
    console.log("Event taken with" + cardNum);
    switch(cardNum) {
        case 2:
            document.getElementById("classCard2").style.display = "block";
            break;
        
        case 3:
            document.getElementById("classCard3").style.display = "block";
            break;

        case 4:
            document.getElementById("classCard4").style.display = "block";
            break;
        
        case 5:
            document.getElementById("classCard5").style.display = "block";
            break;
    }
}

document.getElementById("btnCard1").addEventListener("click", function(){RevealCard(2)}, "once");
document.getElementById("btnCard2").addEventListener("click", function(){RevealCard(3)}, "once");
document.getElementById("btnCard3").addEventListener("click", function(){RevealCard(4)}, "once");
document.getElementById("btnCard4").addEventListener("click", function(){RevealCard(5)}, "once");
