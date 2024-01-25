let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumero();
let tentativas = 1;
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';
// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Digite um numero de 1 a 10';

iniciarJogo();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa';
        let frase = `Parabéns, você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        mostrarTexto('h1','Acertou!!');
        mostrarTexto('p', frase);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        chute > numeroSecreto ? mostrarTexto('p','Numero secreto é menor') : mostrarTexto('p','Numero secreto é maior');
        limparCampo()
        tentativas++;
    }
    
}
function iniciarJogo() {
    mostrarTexto('h1', 'Jogo do número secreto');
    mostrarTexto('p', `Digite um numero de 1 a ${numeroLimite}`);
}

function reiniciarJogo(){
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    iniciarJogo();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumero();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }   
}

function mostrarTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}