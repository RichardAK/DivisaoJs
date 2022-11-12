const numerador = prompt('Digite seu numerador:'); 
const denominador = prompt('Digite seu denominador:'); 

if(denominador == 0)
{
    alert('Impossivel dividir por 0');
}

else
{
    let resultado = numerador / denominador;

    confirm(`O resultado da divisão é ${resultado.toFixed(1)}`); 
}; 