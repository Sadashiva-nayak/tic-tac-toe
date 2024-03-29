const music= new Audio("music.mp3");
const music1= new Audio("ting.mp3");
const music2= new Audio("gameover.mp3");
let turn="X";
var gameover=false;

const change= ()=>{
    return turn=== "X"? "O":"X";
}

let boxes= document.getElementsByClassName("box");
// meaning of this line
Array.from(boxes).forEach(box => { 
    console.log(1);
    let element= box.querySelector(".text");
    box.addEventListener('click', ()=>{
        if(element.innerText==='')
        {
        element.innerText=turn;
        turn = change();
        music1.play();
        did_win();
        if(!gameover){
        document.querySelector(".player").innerText=`turn of ${turn}`;
        }
        }
    })
});
const did_win=()=>{
    let text= document.getElementsByClassName("text");
    let win=[
        [0, 1, 2, 2, 4, 0],
        [3, 4, 5, 2, 12, 0],
        [6, 7, 8, 2, 20, 0],
        [0, 3, 6, -6, 12, 90],
        [1, 4, 7, 2, 12, 90],
        [2, 5, 8, 10, 12, 90],
        [0, 4, 8, 2, 12, 45],
        [2, 4, 6, 2, 12, 135],
    ]
    win.forEach(e =>{
        if(text[e[0]].innerText===text[e[1]].innerText && text[e[2]].innerText===text[e[1]].innerText && text[e[0]].innerText!=='')
        {
            gameover=true;
            document.querySelector(".player").innerText=`${text[e[0]].innerText} `+ "won";
            document.querySelector('.image').getElementsByTagName('img')[0].style.width = "140px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
}
let button=document.getElementById("reset");
button.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.text');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    })
    turn = "X"; 
    gameover = false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("player")[0].innerText  = "Turn for " + turn;
    document.querySelector('.image').getElementsByTagName('img')[0].style.width = "0px";
})

