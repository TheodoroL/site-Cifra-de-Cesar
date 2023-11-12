import {converteParaCesar, converteParaTexto} from './src/funcao.js'

const button1 = document.querySelector(".cesar"); 
const text = document.querySelector("#texto"); 
const button2 = document.querySelector(".texto"); 
const text2 = document.querySelector("#cesar"); 

button1.addEventListener("click", ()=>{
    let texto = converteParaCesar(text2.value.toUpperCase());
    text.value = texto
    text2.value = ""

})


button2.addEventListener("click", ()=>{
    let texto = converteParaTexto(text.value.toUpperCase());
    text2.value = texto
    text.value = ""
})