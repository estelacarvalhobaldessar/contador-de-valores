let numero = 0;

const btnTrocaMais = document.getElementById('btnTrocaMais');
btnTrocaMais.addEventListener("click", function(){
        // calculo
        numero = numero + 1;
        // adicionar o numero na caixa
        document.getElementById('caixa').innerHTML = numero;
    
});

const btnTrocaMenos = document.getElementById('btnTrocaMenos');
btnTrocaMenos.addEventListener("click", function(){
    if( numero > 0){
        numero = numero - 1;
        document.getElementById('caixa').innerHTML = numero;
    }
})