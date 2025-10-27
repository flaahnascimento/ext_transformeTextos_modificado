window.document.addEventListener("DOMContentLoaded", function(){
    // Botão Letra Maiúscula
    window.document.querySelector("#btnMaiuscula").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value;
        
        if (!inputText.trim()) {
            document.querySelector("#result").innerText = "Digite algum texto primeiro!";
            return;
        }
        
        document.querySelector("#result").innerText = inputText.toUpperCase();
    });
    
    // Botão Letra Minúscula
    window.document.querySelector("#btnMinuscula").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value;
        
        if (!inputText.trim()) {
            document.querySelector("#result").innerText = "Digite algum texto primeiro!";
            return;
        }
        
        document.querySelector("#result").innerText = inputText.toLowerCase();
    });
    
    // Botão Capitalizar
    window.document.querySelector("#Capitalizar").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value;

        if (!inputText.trim()) {
            document.querySelector("#result").innerText = "Digite algum texto primeiro!";
            return;
        }
        
        let modifiedText = inputText.toLowerCase()
            .split(' ')
            .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
            .join(' ');
        
        document.querySelector("#result").innerText = modifiedText;
    });
    
    // Botão Limpar
    window.document.querySelector("#Limpar").addEventListener("click", function() {
        document.querySelector("#input-text").value = "";
        document.querySelector("#result").innerText = "";
    });

    // Botão Copiar
    window.document.querySelector("#Copiar").addEventListener("click", function() {  
        let textoParaCopiar = document.querySelector("#result").innerText || "";

        if(!textoParaCopiar.trim()) {
            alert("Não há texto para copiar! Processe algum texto primeiro.");
            return;
        }

        navigator.clipboard.writeText(textoParaCopiar).then(function() {
            alert("Texto copiado com sucesso!");
        }, function() {
            alert("Erro ao copiar o texto.");
        });
    });
});