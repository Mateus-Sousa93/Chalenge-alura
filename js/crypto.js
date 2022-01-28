


// botão criptografar mensagem//
const btnCripto = document.querySelector("#btn-cripto");

    btnCripto.addEventListener("click", function(e){

        e.preventDefault();

        const name = document.querySelector("#texto-digitado");

        const value = name.value;

        var resultado = value;
        
        resultado = resultado.replace(/e/g, "enter");
        resultado = resultado.replace(/i/g, "imes");
        resultado = resultado.replace(/a/g, "ai");
        resultado = resultado.replace(/o/g, "ober");
        resultado = resultado.replace(/u/g, "ufat");

        document.getElementById("msg").value = resultado;
        

})

// botão descriptografar mensagem//
const btnDescripto = document.querySelector("#btn-descrip");

    btnDescripto.addEventListener("click", function(e){

        e.preventDefault();

        const name = document.querySelector("#texto-digitado");

        const value = name.value;

        var  resultado = value;

        resultado = resultado.replace(/enter/g, "e");
        resultado = resultado.replace(/imes/g, "i");
        resultado = resultado.replace(/ai/g, "a");
        resultado = resultado.replace(/ober/g, "o");
        resultado = resultado.replace(/ufat/g, "u");

        document.getElementById("msg").value = resultado;
                
})

//botão  copiar para zona de transferência//

let btnCopy = document.querySelector("#btn-copy");
    btnCopy.addEventListener("click", function(e){
    e.preventDefault();

        let textArea = document.querySelector("#msg");
        textArea.select();
        textArea.setSelectionRange(0, 99999)
        document.execCommand("copy");
        

})


//função para bloquear caracteres especiais 
const brandInput = document.querySelector ("#texto-digitado")
brandInput.addEventListener("keypress", function(e) {

    if(!checkChar(e)){
    e.preventDefault();

}

});

function checkChar(e){

    const char = String.fromCharCode(e.keyCode);

    const pattern = '[a-z]';

    if(char.match(pattern)) {
        console.log(char);
    return true;
}

}
    

