var box1=document.getElementById("box1")
var box2=document.getElementById("box2")
    box2.style.display="none"
    box1.style.display="none"
function calc(){
    box2.style.display="block"
    box1.style.display="block"
}
function cls(){
     box2.style.display="none"
    box1.style.display="none"
}
var btton=document.getElementById("btn")
var goldv=document.getElementById("goldv")
var cash=document.getElementById("cashv")
var propv=document.getElementById("propv")
var savv=document.getElementById("savv")
btton.addEventListener("click",function getvalue(){
    var i1=Number(goldv.value)
    var i2=Number(cashv.value)
    var i3=Number(propv.value)
    var i4=Number(savv.value)
    var total=(i1+i2+i3+i4)*(2.5/100)
    var answer=document.querySelector(".ans")
    answer.textContent="Your zakat value is"+ " "+total
    var result=answer.textContent
    box2.style.display="none"
    box1.style.display="none"
})
