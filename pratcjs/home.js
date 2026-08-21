const nomeEntrada = document.getElementById("entrada-nome");
const nomeSaida = document.getElementById("nome-saida");
const btnTroca = document.getElementById("btn-troca");

btnTroca.addEventListener('click', () =>{
    nomeSaida.textContent = nomeEntrada.value;
})

js- btnTroca.addEventListener('mouseenter', () => { nomeSaida.style.color = "#731097"});
 
btnTroca.addEventListener('mouseout', () => { nomeSaida.style.color = "#080707" });