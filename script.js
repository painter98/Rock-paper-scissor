let go = document.getElementById('container-1');
let player = document.getElementById('container-2');

console.log(document.getElementById('go-btn').innerText);

document.getElementById('go-btn').addEventListener('click',()=>{ //go to selection of players
    player.style.display = 'flex';
    go.style.display = 'none';
});

let container3 = document.getElementById('container-3');
let players = document.getElementById('players');
let result1 = document.getElementById('result-1');
let player1 = document.getElementById('player-1');
let result2 = document.getElementById('result-2');
let player2 = document.getElementById('player-2');
let play1, play2; 

document.getElementById('one-only').addEventListener('click',()=>{
    let play1 = prompt("Enter Player-1 Name");
    player1.innerText = 'computer';
    player2.innerText = play1;
})

document.getElementById('two-only').addEventListener('click',()=>{
    play1 = prompt("Enter Player-1 Name");
    play2 = prompt("Enter Player-2 Name");
    player1.innerText = play1;
    player2.innerText = play2;
})

document.getElementById('start').addEventListener('click',()=>{
    player.style.display = 'none';
    container3.style.display = 'flex';
    players.style.display = 'flex';
})

let output = ['Rock','Paper','Scissor'];
let counter = 0;
let rock1 = document.getElementById('first-img1');
let paper1 = document.getElementById('second-img1');
let scissor1 = document.getElementById('third-img1');
let rock2 = document.getElementById('first-img2');
let paper2 = document.getElementById('second-img2');
let scissor2 = document.getElementById('third-img2');


document.getElementById('play').addEventListener('click',()=>{
    result.innerText = '';
    let random = Math.floor(Math.random()*3);

    if(counter%2==0){
        result1.innerText = output[random];
        result1.style.backgroundColor = 'yellow';
        if(output[random]=='Rock'){
            rock1.style.display = 'block';
            paper1.style.display = 'none';
            scissor1.style.display = 'none';
        }
        else if(output[random]=='Paper'){
            paper1.style.display = 'block';
            rock1.style.display = 'none';
            scissor1.style.display = 'none';
        }
        else{
            rock1.style.display = 'none';
            paper1.style.display = 'none';
            scissor1.style.display = 'block';
        }
    }
    else{
        result2.innerText = output[random];
        result2.style.backgroundColor = 'yellow';
        if(output[random]=='Rock'){
            rock2.style.display = 'block';
            paper2.style.display = 'none';
            scissor2.style.display = 'none';
        }
        else if(output[random]=='Paper'){
            paper2.style.display = 'block';
            rock2.style.display = 'none';
            scissor2.style.display = 'none';
        }
        else{
            rock2.style.display = 'none';
            paper2.style.display = 'none';
            scissor2.style.display = 'block';
        }
    }

    counter++;

    if(result1.innerText == '' || result2.innerText == ''){
        document.getElementById('result').innerText = "Continue to Play";
    }
    else if(result1.innerText == result2.innerText){
        document.getElementById('result').innerText = "No win, No lose";
    }
    else if(result1.innerText == 'Rock' && result2.innerText == 'Paper' || result1.innerText == 'Scissor' && result2.innerText == 'Rock' || result1.innerText == 'Paper' && result2.innerText == 'Scissor'){
        document.getElementById('result').innerText = `${player2.innerText} wins`;
    }
    else{
        document.getElementById('result').innerText = `${player1.innerText} wins`;
    }

})


