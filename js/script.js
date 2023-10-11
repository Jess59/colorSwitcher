const color = ["red","blue", "green","pink"];  //array, tableau en français 

function generateNumber(max) {
//Renvoie un nombre au hasard entre 0, 1 ou 24

return Math.floor(Math.random() * max);

}


function setBgColor() {

    
    const randomNumber=generateNumber(color.length); //cette constante recoit la valeur de notre fonction generateNumber
    document.getElementById("bg").style.backgroundColor = color[randomNumber];
    document.getElementById("bgcolor").innerHTML = color[randomNumber];
   
}

document.getElementById("bgbutton").addEventListener("click", setBgColor);





//const color2 = [ "red","blue", "green" ];
//let random = color2[Math.floor(Math.random() * color2.length)];
//console.log("Random:", random);



