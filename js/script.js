const entradaTexto = document.getElementById('entradaTexto');
const criptografarBtn = document.getElementById('criptografarBtn');
const descriptografarBtn = document.getElementById('descriptografarBtn');
const copiarBtn = document.getElementById('copiarBtn');
const msgFinal = document.getElementById('msgFinal');
const boneco = document.getElementById('boneco');
const rightInfo = document.getElementById('rightInfo');
const right = document.getElementById('right');


//e - enter
//o - ober 
//i - imes
//a - ai
//u - ufat

let substituir = [
    ["e","enter"],
    ["o","ober"],
    ["i","imes"],
    ["a","ai"],
    ["u","ufat"]
]

const remplace = (novoValor) =>{

    
    boneco.classList.add("oculto");
    msgFinal.innerHTML = novoValor;
    boneco.classList.add("oculto");
    rightInfo.style.display = "none";
    copiarBtn.style.display = "block";
    right.classList.add("ajustar");
    msgFinal.classList.add("ajustar");

}

const reset= () =>{
    msgFinal.innerHTML = "";
    boneco.classList.remove("oculto");
    rightInfo.style.display = "block";
    copiarBtn.style.display = "none";
    right.classList.remove("ajustar");
    msgFinal.classList.remove("ajustar");
    entradaTexto.focus();
}

criptografarBtn.addEventListener('click', () => {

    const texto = entradaTexto.value.toLowerCase();
    if(texto != ""){
        function codificar(recebeTexto){
        for (let i = 0; i<substituir.length; i++){
            if(recebeTexto.includes(substituir[i][0])){
                recebeTexto = recebeTexto.replaceAll(substituir[i][0],substituir[i][1]); //Todos do indice [0] serão substituidos pelo indicie [1], ex: e (inidice [0]) será substituido por enter (inidicie [1])
                
            }
        };
        return recebeTexto
        
    } 

    
    } else {
        return
    }
    
    remplace(codificar(texto));
    
   
})


descriptografarBtn.addEventListener('click', () => {
    const texto = entradaTexto.value.toLowerCase();
    if( texto != ""){
        function descodificar(recebeTexto){
        for(let i = 0; i<substituir.length; i++){
            if(recebeTexto.includes(substituir[i][1])){
                recebeTexto = recebeTexto.replaceAll(substituir[i][1],substituir[i][0])
            }
        };
        return recebeTexto
    } 

    } else{
        return
    }
    

    remplace(descodificar(texto));
    
})


copiarBtn.addEventListener("click", ()=> {
    let texto = msgFinal;
    texto.select();
    document.execCommand('copy')
    alert("Texto Copiado!")

    reset();   
    entradaTexto.value = ""; 
})