const display=document.querySelector("#display")
const nums=[...document.querySelectorAll(".nums")]
const op=[...document.querySelectorAll(".op")]
const teclares=document.querySelector(".res")
const apar=document.querySelector("#apar")
const fpar=document.querySelector("#fpar")
const zerar=document.querySelector("#zerar")
const cop=document.querySelector("#cop")
const res=document.querySelector("#tigual")

console.log(nums)
console.log(op)

let sinal = true

nums.forEach((tec)=>{
    tec.addEventListener("click", (evt)=>{
        if(display.innerHTML == "0"){
            display.innerHTML=""
        }
        display.innerHTML += evt.target.innerHTML
        sinal=false
    })
})

op.forEach((oper, ind)=>{
    oper.addEventListener("click", (evt)=>{
        if(sinal == false){
            display.innerHTML += evt.target.innerHTML
            sinal=true
        }else{
            alert("operação não pode ser feita")
        }
    })
})
zerar.addEventListener("click", (evt)=>{
    display.innerHTML=""

})
apar.addEventListener("click", (evt)=>{
    if(display.innerHTML == ""){
        display.innerHTML = "("
    }else if(display.innerHTML != ""){
        display.innerHTML += "("
    }
})
fpar.addEventListener("click", (evt)=>{
    if(display.innerHTML == ""){
        display.innerHTML = ")"
    }else if(display.innerHTML != ""){
        display.innerHTML += ")"
    }
})
cop.addEventListener("click", (evt=>{
    if(display.innerHTML != ""){
        navigator.clipboard.writeText(display.innerHTML)
        alert("texto copiado")
    }
}))
res.addEventListener("click", (evt)=>{
    if(display.innerHTML.length >= 3){
        const resultado = eval(display.innerHTML)
        display.innerHTML=resultado
    }else{
        alert("calculo imcompleto")
    }
})

