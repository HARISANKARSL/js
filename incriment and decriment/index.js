const buttons= document.querySelectorAll(".counterbtn");
let values=0;
buttons.forEach(function(button){
button.addEventListener("click",function(){
    if(button.classList.contains("prev")){
        values--
        console.log(values)
    }
    if(button.classList.contains("next")){
        values++
        console.log(values)
    }
    const count = document.querySelector(".value");
    count.textContent=values;
    if(values<0){
     count.style.color="red"
    }else if(values>0){
        count.style.color="green"
    }else{
        count.style.color="black"
    }
})
})