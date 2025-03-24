const name=prompt("Enter your name")
const wel="Welcome "
document.getElementById("name").innerHTML=wel+name

const can=document.getElementById("gameboard");
const context=gameboard.getContext('2d');
const scores=document.getElementById("score")
const unit=25;
const width=500;
const height=500;
let gameover=false;
const snake=[
    {x:unit*3,y:0},
    {x:unit*2,y:0},
    {x:unit*1,y:0},
    {x:0,y:0},
]
let xvel=25;
let yvel=0;
let food={}
let score=0

startgame();
createFood();
drawFood();
gameLoop();
const setIn=setInterval(gameLoop,100)
function gameLoop() {
    if (gameover) {
        gameOver(); 
        clearInterval(setIn) // Display Game Over message
        return;  // Stop the game loop
    }
   
        clearBoard();
        moveSnake();
        drawFood();
        drawSnake();
        
       
       
    // 10 frames per second
}


function startgame(){
    context.fillStyle='green';
    context.fillRect(0,0,500,500);
}
function clearBoard(){//snake will grown without clearing
    context.fillStyle='green';
    context.fillRect(0,0,500,500);
   
}
function createFood(){
    const foodx=Math.floor(Math.random()*width/unit)*unit;
    const foody=Math.floor(Math.random()*width/unit)*unit;
    food={x:foodx,y:foody};
}
function drawFood(){
    
    context.fillStyle='yellow';
    context.fillRect(food.x,food.y,unit,unit);
}

function drawSnake(){
    context.fillStyle='red';

    snake.forEach((snakepart)=>{
        
        context.fillRect(snakepart.x,snakepart.y,unit,unit);
        context.strokeRect(snakepart.x,snakepart.y,unit,unit);
    })
}

function moveSnake(){
    console.log("jiii",snake[0].x,snake[0].y)
    const head={
        x:snake[0].x+xvel,
        y:snake[0].y+yvel
    };
    if (head.x === food.x && head.y === food.y) {
        
        snake.unshift(head);
        score+=1
        scores.textContent=score
        createFood()
        
        
    } else {
       
        snake.unshift(head);
        snake.pop(); 
    }
    if(head.x<0 || head.x>=width || head.y<0 || head.y>=height){
        gameover=true
    }
    console.log("hiii",snake[0].x,snake[0].y)

}


function gameOver(){
    context.fillStyle = 'black';
    context.fillRect(0,0,500,500)
    context.fillStyle='white'
    context.font = '50px Arial';
    context.fillText('Game Over!!', width/4, height/2); 
}


const up = 38;
const down = 40;
const left = 37;
const right = 39;

function keypress(event) {
    switch (event.keyCode) {
        case left: 
            if (xvel === 0) {  
                xvel = -unit;
                yvel = 0;
            }
            break;
        case up: 
            if (yvel === 0) { 
                xvel = 0;
                yvel = -unit;
            }
            break;
        case right: 
            if (xvel === 0) {  
                xvel = unit;
                yvel = 0;
            }
            break;
        case down: 
            if (yvel === 0) {  
                xvel = 0;
                yvel = unit;
            }
            break;
    }
}


document.addEventListener('keydown', keypress);
