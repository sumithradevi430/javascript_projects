const section=document.querySelector("#section");
const main=section.querySelector("#main")
const btn=section.querySelector("#btn")
const head=main.querySelector("#h2")
const color=head.querySelector("#color")
console.log(main)
function selecting(){
    
    let colors='#'

    let letters='0123456789ABCDEF'
     for(let i=0;i<6;i++){
        colors+=Math.floor(Math.random()*letters.length)
        
     }
     return colors
}
btn.addEventListener('click',()=>{
    let color1=selecting()
    section.style.backgroundColor=color1
    color.textContent=color1
    let coloring1=second()
    btn.style.backgroundColor=coloring1
})
function second(){
    let coloring=["red","pink","orange"];
    let coloring2=Math.floor(Math.random()*coloring.length);
    console.log(coloring2)
   let random=coloring[coloring2]
    return random
}


