let name="SUMITHRA";
const arr1=name.split('');
arr1.sort(()=>Math.random()-0.5);
const arr3=arr1.join('');
console.log(arr3);
document.getElementById('one').value = arr3;

let c=Math.floor(Math.random()*6789)+2981;
console.log(c);
document.getElementById('two').value = c;

let name2="SUMI";
const arr=name2.charAt(Math.floor(Math.random()*name2.length));
console.log(arr);