const btnTrocaCor = document.getElementById("trocaCor");
btnTrocaCor.addEventListener("click", () => {
    let caixaTexto = document.getElementById('caixa');

    if(caixaTexto.className === "verde" ){
        caixaTexto.classList.remove('verde');
        caixaTexto.classList.remove('amarelo');
        caixaTexto.classList.add('amarelo');
        
    }else{
        caixaTexto.classList.remove('verde');
        caixaTexto.classList.remove('amerelo');
        caixaTexto.classList.add('verde');
        
    }

    console.log(caixaTexto.className);
});

const btnTrocaTexto = document.getElementById("trocaTexto");
btnTrocaTexto.addEventListener("click", () => {
    let caixaTexto = document.getElementById('caixa');

    if(caixaTexto.innerText === "Banana"){
        document.getElementById("caixa").innerHTML = "Limão";
    }else{
        document.getElementById("caixa").innerHTML = "Banana";
    }
});