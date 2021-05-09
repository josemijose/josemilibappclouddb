let finame=document.getElementById("firstname");
let bfname=document.getElementById("bfname");
let laname=document.getElementById("lastname");
let blname=document.getElementById("blname");
let mob=document.getElementById("mobilenumber");
let bmob=document.getElementById("belowmob");
let pwd=document.getElementById("password");
let bpwd=document.getElementById("belowpass");
let pwd2=document.getElementById("password1");
let bpwd2=document.getElementById("belowpass1");

function fname(){
     if (finame.value.trim()==""||laname.value.trim()==""){
        bfname.innerHTML ="Name cannot be empty"
        bfname.style.color = "red";
        return false;
        }
    else{
        return true;
    }}

function fmob()
{
    var mobexp = /^\+?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if((mob.value.match(mobexp)))
    {
      bmob.innerHTML="Valid number";
      bmob.style.color="green";
      bmob.style.fontWeight="lighter";

      return true;
        }
      else
        {
        bmob.innerHTML="Invalid number";
        bmob.style.color="red";
        bmob.style.fontWeight="lighter";

        return false;
        }
}

function fpass(){
    let passexp=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/
    if (passexp.test(pwd.value)) {
        bpwd.innerHTML="Strong Password";
        bpwd.style.color="green";
        bpwd.style.fontWeight="lighter";

        return true;
        } 
    else {
         bpwd.innerHTML = "Weak Password";
         bpwd.style.color = "red";
         bpwd.style.fontWeight="lighter";

        return false;
    
    }}
function fpass1(){
    if((pwd.value)==(pwd2.value)){
        bpwd2.innerHTML="Password Match";
        bpwd2.style.color="green";
        bpwd2.style.fontWeight="lighter";
        return true;
    }
    else{
        bpwd2.innerHTML="Password didn't match,Try again";
        bpwd2.style.color="red";
        bpwd2.style.fontWeight="lighter";
        return false;
    }
}

