// var cross = document.querySelector(".cross-par")
// var cross2 = document.querySelector(".cross-par2")
// var cross3 = document.querySelector("#skill-cross")
// var cross4 = document.querySelector("#project-cross")
// var cross5 = document.querySelector("#task-cross")
// var submit = document.querySelector(".sent")
// var input = document.querySelector("#inp")
// var input2 = document.querySelector("#inp2")
// var input3 = document.querySelector("#inp3")


// cross.addEventListener("click" , function (){
//     window.location= "#about"
// })

// cross2.addEventListener("click" , function (){
//     window.location= "#skills"
// })

// cross3.addEventListener("click" , function (){
//     window.location= "#projects"
// })

// cross4.addEventListener("click" , function (){
//     window.location= "#tasks"
// })

// cross5.addEventListener("click" , function (){
//     window.location= "#contact"
// })

// submit.addEventListener("click", function(){
//     alert("the data was sent sucessfuly"),
//     input.value = "",
//     input2.value = "",
//     input3.clear()
// })

var myName = "Mahmoud Sobh";
var index = 1;
var Name = document.querySelector(".name")

function writeText(){
    Name.textContent = myName.slice(0,index)
    index++

    if(index>myName.length){
        index = 1;
    }
}

setInterval(function(){
    writeText()
} , 300)