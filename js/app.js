function comprar() {
    let ingresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    let pista = parseInt(document.getElementById('qtd-pista').textContent);
    let superior = parseInt(document.getElementById('qtd-superior').textContent);
    let inferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if( ingresso == 'pista' && pista >= quantidade) {
        pista = pista - quantidade;
        alert('Compra realizada');
        document.getElementById('qtd-pista').textContent = pista;

    } else if(ingresso == 'superior' && superior >= quantidade) {
        superior = superior - quantidade;
        alert('Compra realizada');
        document.getElementById('qtd-superior').textContent = superior;

    } else if(ingresso == 'inferior' && inferior >= quantidade) {
        inferior = inferior - quantidade;
        alert('Compra realizada');
        document.getElementById('qtd-inferior').textContent = inferior;
    }


}