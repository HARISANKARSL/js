let frgtcntinue=document.getElementById("frgt-continue");
let showmsg=document.querySelector(".frgt-pss");
let closemsg=document.querySelector(".close");
let showpop=document.getElementById("lognmsg");
let emailcheck=document.getElementById("frgtimput");
let reset=document.querySelector(".rset-pss");


function signup(){
   
    let name =document.getElementById("name");
    let pass =document.getElementById("pass");
    let lgn =document.getElementById("login");
    let logn=document.getElementById('notify');
    if(name.value ==="" || pass.value === ""){
      logn.style.display="block"
   
    }else{
        window.location="bootstrap.html"
    }
    setTimeout(() => {
        logn.style.display="none" 
       
    }, 4000);
    setTimeout(() => {
        name.value="";
        pass.value="";
    }, 2000);


}
let email=document.querySelector('.frgt-imput input');
    let frgtpass=document.querySelector(".frgt-pss");
function forgotPass(){
 frgtpass.style.display="block" ;
}


function frgtclose(){
showmsg.style.display="none";
 }
 function submitbtn(){
    
    if(emailcheck.value===""){
 showpop.style.display="flex";
 emailcheck.style.border="1px solid red";
 

    }
    else{
       reset.style.display="block"; 
       showmsg.style.display="none";
       function verification (){
      
        
        let verify=document.getElementById("verification").innerHTML=`We've sent a verification code to 
         your email - ${emailcheck.value}`
        console.log(output)
      }
      verification ()
    }
    setTimeout(() => {
        emailcheck.value=""
        showpop.style.display="none"
    }, 3000);
 }
 clspopup=()=>{
    let output=document.getElementById('output');
    let login = document.getElementById("logn-msg");
    
   
    if(output.value===""){
      
            login.style.display="flex"
               }  else{
                reset.style.display="none"
               }
               
    setTimeout(() => {
        output.value="";
        login.style.display="none"
    }, 4000);
 }
clspop=()=>{
    reset.style.display="none"
}
