let inter=null;
let hr=0;
let min=0;
let sec=0;
let am="Am";
function display(){
    let date=new Date();
    
    let hr=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    document.getElementById("hr").innerHTML=pad(hr);
    document.getElementById("min").innerHTML=pad(min);
    document.getElementById("sec").innerHTML=pad(sec);
  if(hr>12){
    hr=hr-12;
    document.getElementById("pm").innerHTML="PM";
  }
  function pad(n){
    return n>10?n: "0"+n;
  }
}
setInterval(display,500);



