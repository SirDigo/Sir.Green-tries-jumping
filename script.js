const character = document.querySelector("#character");
const block = document.querySelector("#block");
const game = document.querySelector("#game");
const startBtn = document.querySelector("#startBtn"); 
const score = document.querySelector("#score");
const image = document.querySelector("#image");
const bounce = document.querySelector("#bounce");

function jump() {
    if(character.classList !== "animate") {
        character.classList.add("animate")
    }
    setTimeout(() => {
        character.classList.remove("animate")
    }, 500);
}

startBtn.addEventListener("click", () => {
    block.classList.add("blockMove")
    startBtn.remove();
    character.src = "./assets/IDK Run.gif"
})

document.addEventListener('keydown', event => {
    memeChanger(parseInt(score.innerHTML))
    if (event.code === 'Space' && startBtn !== document.querySelector("#startBtn")) {
        bounce.play();
        jump();
        score.innerHTML ++;
    }

})

const checkDead = setInterval(() => {
    const charTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<5 && blockLeft>0 && charTop>=110 ) {
        block.style.animation ="none";
        block.style.display = "none";
        if(alert(`You Lose! Score: ${score.innerHTML}`)){}
        else window.location.reload();
    }
}, 10);

function memeChanger(img) {
    switch(img) {
        case 4:
            image.src = "https://c.tenor.com/DSG9ZID25nsAAAAC/hello-there-general-kenobi.gif";
            break;
        case 9:
            image.src = "https://c.tenor.com/xzjlrhYq_lQAAAAj/cat-nyan-cat.gif";
            break;
        case 14:
            image.src = "https://c.tenor.com/pxVwfnJMCx4AAAAM/hey-boy-heheheheh.gif";
            break;
        case 19:
            image.src = "https://c.tenor.com/CyXKqKwAupUAAAAM/idubbbz-hey-thats-pretty-good.gif";
            break;
        case 24:
                image.src = "https://c.tenor.com/WkhfbOjHMbYAAAAM/oh-my-god-scream.gif";
                break;            
    }
}