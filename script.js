const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');
const fundo = document.querySelector('.fundo');
const botao = document.querySelector('.botao');
const score = document.querySelector('.score');
const nuvem = document.querySelector('.nuvem');
const audio = document.querySelector('.audio');


let alreadyPlayed = false;

let alreadyJump = false;
let count = 0;

const jumpSound = new Audio('audio/pulo.mp3');
const collisionSound = new Audio('audio/morreu');

const jump = () => {
    mario.classList.add('jump');
    
    jumpSound.play();

    setTimeout(() => {
        mario.classList.remove('jump');
        
    }, 400);
}



const loop = setInterval(() => {
    
    const tuboPosition = tubo.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    
    
    
    
    
    
    count++;
    score.innerHTML = `  ${count}`;
    
   
    
    if (tuboPosition <= 120 && tuboPosition > 0 && marioPosition < 80  ) {
        nuvem.classList.add('parada');

        tubo.style.animation = 'none';
        tubo.style.left = `${tuboPosition}px`;
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
 


        mario.src = 'img/Gameover.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        fundo.src = 'img/fundo2.png'

        botao.src = 'img/Button.png'
        score.style.color = '#ff0000'
        
        audio.src = 'audio/morreu.mp3';
    
    
        
        clearInterval(loop);
        
        
        
        

    }else {
    // Se não houver colisão, a nuvem continua se movendo
    nuvem.classList.remove('parada');
  }
}, 10);






document.addEventListener('keydown', jump);