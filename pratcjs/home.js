const nomeEntrada = document.getElementById("nome-entrada");
const nomeSaida = document.getElementById("nome-saida");
const btnTroca = document.getElementById("btn-troca");
 
btnTroca.addEventListener('click', () => {
nomeSaida.textContent = nomeEntrada.value;
})
 
btnTroca.addEventListener('mouseenter', () => { nomeSaida.style.color = "#731097"});
 
btnTroca.addEventListener('mouseout', () => { nomeSaida.style.color = "#080707" });
 
// Trocando a cor da caixa
 
 
 
const btnVerde = document.getElementById("btn_verde");
const btnAmarelo = document.getElementById("btn_amarelo");
const btnAzul = document.getElementById("btn_azul");
const caixa = document.getElementById("caixa");
 
btnVerde.addEventListener('click', () => { caixa.style.backgroundColor = "green";});
 
btnAmarelo.addEventListener('click', () => { caixa.style.backgroundColor = "yellow";});
 
btnAzul.addEventListener('click', () => { caixa.style.backgroundColor = "blue";});

// Simulando adição e subtração de valor

const valorReal = document.getElementById("valor_real");
let contador = 0;

if (
document.getElementById("btn_menos").addEventListener('click', () => {
    contador --;
    valorReal.textContent = contador;
}))

document.getElementById("btn_mais").addEventListener('click', () => {
    contador ++;
    valorReal.textContent = contador;
})

//adicionadno elemento

const nomeLivro = document.getElementById("nome_livro");
const adicionarLivros = document.getElementById("lista_livro");

document.getElementById("adicionar_livro").addEventListener('click', ()=>{
    const novoLivro = document.createElement("li");
    novoLivro.textContent = nomeLivro.value;
    listaLivros.appendChild(nomeLivro);

    nomeLivro.value= "";

});