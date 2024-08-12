function formatMoney(value) {

value = Math.ceil(value * 100) / 100;



value = value.toFixed(2);
return "$" + value;



}
    
function formatSplit(value) {
if (value === "1") return value + "person";
return value + "people";




}






function update() { // essa função de click no primeiro input
let bill =  Number(document.getElementById('yourBill').value); // estou habilitando minha variavel pra quando for aumetando ou diminuindo os numeros aparecer na tela let bill = document.getElementById('yourBill').value; 
let tipPercent = document.getElementById('tipInput').value;
let split = document.getElementById('splitInput').value;

let tipValue = bill * (tipPercent / 100); // vai pegar o valor dentro do imput yourbill e calcular pra obter a porcentagem dentro do span 0%
let tipEach = tipValue / split;  // tip each eo span embaixo do tip each , o tipvalue eo span fica embaixo do tipe dividir com o split , eo split eo span embaixo do split 
let newBillEach = (bill + tipValue) / split; // aqqui vai pegar o span do billeach somar mais o span abaixo do tip , depois a porcentagem do spa label



document.getElementById('tipPercent').innerHTML = tipPercent + '%'; // vai fazer os calculos do span de porcentagem e colocar na tela 
document.getElementById('tipValue').innerHTML = formatMoney(tipValue);
document.getElementById('totalWithTip').innerHTML = formatMoney(bill + tipValue); // habilitar o total do calculo
document.getElementById('splitValue').innerHTML = formatSplit(split);
document.getElementById('billEach').innerHTML = formatMoney(newBillEach); // vai habilitar o span billeach
document.getElementById('tipEach').innerHTML = formatMoney(tipEach);
}

let conteiner = document.getElementById('conteiner'); // vai habilitar os inputs dentro da main

conteiner.addEventListener('input' , update);  // o ouvidor de eventos no botão vai habilitar qualquer evento que o botão faça dos dois inputs


