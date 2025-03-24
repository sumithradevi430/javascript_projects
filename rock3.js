const first=prompt("Shall we play? yes or no");
var first1=first.toLowerCase();
if (first1=="no"){
    console.log("May be next time");
    document.getElementById("hii").innerHTML="OOps... May be the next time";
}
else if(first1=="yes"){
    document.getElementById("hii").innerHTML="Hurrey! Start Playing";
    console.log("Start playing");
    let userIn=prompt("Enter a gesture:");
    const arr1=["paper","rock","scissors"];
    let index=Math.floor(Math.random()*3);
    let com=arr1[index];
    document.getElementById("one1").value="User:"+userIn+" "+"Computer:"+com;
    if ((userIn!="paper")&&(userIn!="rock")&&(userIn!="scissors")){
        console.log("error");
    }
    else{
        let result="";
        if ((com==userIn)){
            result="draw";
        }
        // else if(((com=="paper")&&(userIn=="rock"))||((com=="scissors")&&(userIn=="paper"))||((com=="rock")&&(userIn=="scissors"))){
        //     result="Comp";
        // }
        // else{
        //     result="You"
        // }
        // switch (result){
        //     case 'draw':
        //         document.getElementById("one").value="Match draw";
        //     case 'Comp':
        //         document.getElementById("one").value="Computer wins";
        //     case 'You':
        //          document.getElementById("one").value="You won";
                   
            
        // }
       else{
            result=((com=="paper")&&(userIn=="rock"))||((com=="scissors")&&(userIn=="paper"))||((com=="rock")&&(userIn=="scissors"))?"Computer wins":"you loss"
            document.getElementById("one").value=result;
       }
    }
}
else{
    console.log("Error");
}