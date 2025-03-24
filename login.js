function validate(){
    let name=document.getElementById("name").value;
    name.toUpperCase();
    let pass=document.getElementById("pass").value;
    document.getElementById("error1").innerHTML=""
    document.getElementById("error2").innerHTML=""
    
   
    if(name.trim()==""){
        document.getElementById("error1").innerHTML="Name should not be empty"
        return false;
    }
    if(!isNaN(name[0])){
        document.getElementById("error1").innerHTML="Name should not start with number"
        return false;
    }
     const name1=/^[A-Z0-9]{1,30}$/
    if(!name1.test(name)){
        document.getElementById("error1").innerHTML="Name should contain alphabets and numbers only";
        return false;

    }
    if(pass.trim()==""){
        document.getElementById("error2").innerHTML="Password should not be empty"
        return false;
        
        
    }
    const passRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/;


    if(!passRegex.test(pass)){
        document.getElementById("error2").innerHTML="Incorrect password";
        return false;

    }
  return true
}
