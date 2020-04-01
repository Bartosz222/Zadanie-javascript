
function sprawdz(){
    var napis = document.getElementById("x").value;
    if(napis.match(/[A-Z]{1}[a-z]+[ ][A-Z]{1}[a-z]+/)){
        console.log(napis+" jest "+"Dobrze");
        alert(napis+" "+"Dobrze");
    }
    else{
        console.log(napis+" jest "+"źle");
        alert(napis+" jest "+"źle");
    }
}