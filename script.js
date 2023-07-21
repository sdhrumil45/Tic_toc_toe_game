let player = "X";
let background = new Audio("background.mp3");
let move = new Audio("move.mp3");
let gameover = new Audio("gameover.wav");
let box = Array.from(document.getElementsByClassName("box"));
let gamewiner = [[0,1,2,-305,72,0],[3,4,5,-305,160,0],[6,7,8,-305,252,0],[0,3,6,160,410,90],[1,4,7,160,320,90],[2,5,8,160,230,90],
                    [0,4,8,-110,340,45],[2,4,6,-340,-110,-45]];
let boxtext = document.getElementsByClassName("boxtext");
let button = document.getElementById("button");
let img = document.querySelector("img");

console.log("start");

function changeturn(){
    return player === "X"?"0":"X";
}

function gamewin(){
    gamewiner.forEach(e =>{
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.getElementById("turn").innerText =  boxtext[e[0]].innerText + " won game";
            document.querySelector(".line").style.transform = `translate(${e[3]}px,${e[4]}px)`;
            document.querySelector(".line").style.rotate =`${e[5]}deg`;
            document.querySelector(".line").style.height ="3px";
            gameover.play();
            img.style.width = "200px";
        }
    }
    )
}



box.forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click",() =>{
        if (boxtext.innerText === ""){
            boxtext.innerHTML = player;
            player = changeturn();
            move.play();
            document.getElementById("turn").innerText = "Turn of :- " + player;
            gamewin();
        }
    })
});

    
button.addEventListener("click",()=> {
    window.location.reload();
})


