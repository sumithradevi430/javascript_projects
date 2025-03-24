const display=document.getElementById("one");
function addDisplay(input){
    display.textContent+=input;
}

function calculate(){
    try{
        const res=eval(display.textContent);
        display.textContent=res;
    }
    catch(error){
        display.textContent=error;
    }
}

function clearEvery(){
    display.textContent=0;
}
function clearLast(){
    display.textContent=display.textContent.slice(0,-1);
}
