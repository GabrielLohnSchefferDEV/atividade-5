

//FUNÇÃO LETRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

function ehLetra(caracter) {
  const ehLetraMinuscula = caracter >= `a` && caracter <= `z`
  const ehLetraMaiuscula = caracter >= `A` && caracter <= `Z`

  return ehLetraMinuscula || ehLetraMaiuscula
}

function saoLetras(caracteres) {
  for (let i = 0; i < caracteres.length; i++) {
      if (!ehLetra(caracteres[i])) {
          return false
      }
  }

  return true
}

function pegarLetra(mensagemDoPrompt) {
  let letra

  do {
    letra = prompt(mensagemDoPrompt)[0];
  } while (!ehLetra(letra));
 
  return letra;
}

function pegarPalavra(mensagemDoPrompt) {
  let letras

  do {
    letras = prompt(mensagemDoPrompt);
    if(!saoLetras(letras)){
      alert('[ERRO] digite um valor valido')
    }
  } while (!saoLetras(letras));
 
  return letras;
}

// function validaNumero function validaNumero function validaNumero function validaNumero //

function validaNumero(mensagemDoPrompt) {
    let numero
    do {
      numero = Number(prompt(mensagemDoPrompt));
      if (isNaN(numero)) {
        alert('O input deve ser um número válido. Tente novamente.');
     }
    } while (isNaN(numero));

   
    return numero;
  }

// function validaNumero function validaNumero function validaNumero function validaNumero //

/*▄██████░▄█████░█████▄░▄████▄░█████▄░▄████▄░██████▄░▄█████▄░█████▄
  ██░░░░░░██░░░░░██░░██░██░░██░██░░██░██░░██░██░░░██░██░░░██░██░░██
  ▀█████▄░█████░░█████▀░██░░██░█████▀░██░░██░██░░░██░██░░░██░█████▀// lista 4
  ░░░░░██░██░░░░░██░░░░░██████░██░░██░██████░██░░░██░██░░░██░██░░██
  ██████▀░▀█████░██░░░░░██░░██░██░░██░██░░██░██████▀░▀█████▀░██░░██
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ */

function MediaListaNumeros(){
  let input = prompt("Digite a lista de números separados por espaços:");


  let numerosStr = input.split(' ');
  
 
let numeros = numerosStr.map(function(numStr) {
return parseInt(numStr);
});

  numeros.sort(function(a, b) {
      return b - a;
  });
  

  alert("Números ordenados em ordem decrescente:");
  alert(numeros);
}

//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões
//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões

function OrdenarOrdemDecrescente(){
alert('Lista: 23, 2, 1, 6, 5')
  const numeros = [23, 2, 1, 6, 5]
  for (let x = 0; x < numeros.length; x++) { 
  for (let y = 0; y < numeros.length; y++) { 
    if (numeros[x] > numeros[y]) {
       let backupDoX = numeros[x]
      numeros [x] = numeros[y]
      numeros [y] = backupDoX
        }
    }
  }
  alert (numeros)
  
}

//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões
//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões

function PiramideCincoNiveis(){
  const tamanho = validaNumero('Digite o tamanho da piramide');
  for(let a = 1; a <= tamanho; a++){
    let linhaA = '';
    
    for(let b = tamanho - a; b > 0; b--){
       linhaA += ' ';
    }
    for(let b = 1; b <= a; b++){
        linhaA += b + ' '
    }
    console.log(linhaA);
  }
alert('Aperte f12 para ver a Impresão')
}

//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões
//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões

function OrdenarOrdemCrescente(){
  alert ('lista 23, 2, 1, 6, 5')
const numeros = [23, 2, 1, 6, 5]
for (let x = 0; x < numeros.length; x++) { 
for (let y = 0; y < numeros.length; y++) { 
	if (numeros[x] < numeros[y]) {
 		let backupDoX = numeros[x]
		numeros [x] = numeros[y]
		numeros [y] = backupDoX
      }
	}
}
alert (numeros)
}

//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões
//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões

function PrimoOuNao(){

 
  let numero = parseInt(prompt("Digite um número:"));
  let resultado;
  

  if (isNaN(numero)) {
      resultado = "Por favor, digite um número válido.";
  } else {

      if (numero < 2) {
          resultado = `${numero} não é um número primo.`;
      } else {
          let primo = true;
          for (let i = 2; i <= numero / 2; i++) {
              if (numero % i === 0) {
                  primo = false;
                  break;
              }
          }
          if (primo) {
              resultado = `${numero} é um número primo.`;
          } else {
              resultado = `${numero} não é um número primo.`;
          }
      }
  }
  
  console.log(resultado);
  alert(resultado);

}

//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões
//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões

function InverterString(){
let string = pegarPalavra('digite a palavra que você quer inverter');
let stringInvertida = ''

for (let i = string.length - 1; i >= 0; i--) { 
  stringInvertida += string[i];
}
alert(stringInvertida);
}

//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões
//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões

function NumerosUmACemFizzBuzz(){
alert('Aperte f12 para ver a Impresão')
  for (let i = 1; i <= 100; i++) {

    if ( i % 3 === 0 ){
      console.log('Fizz')
    } else if ( i % 5 === 0 ) {
      console.log('Buzz')
    } else {
      console.log (i)
    }
    }	
}

//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões
//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões

function CalcularFatorial(){
  let num = validaNumero(' digite o algoritmo que voce quer calcular o fatorial ');
  let resultado = 1;
  
  for (let i = 1; i <= num; i++) {
      resultado = resultado * i;
  }
  
  alert("O fatorial de " + num + " é " + resultado);  
} 

/*▄██████░▄█████░█████▄░▄████▄░█████▄░▄████▄░██████▄░▄█████▄░█████▄
  ██░░░░░░██░░░░░██░░██░██░░██░██░░██░██░░██░██░░░██░██░░░██░██░░██
  ▀█████▄░█████░░█████▀░██░░██░█████▀░██░░██░██░░░██░██░░░██░█████▀// LISTA 3
  ░░░░░██░██░░░░░██░░░░░██████░██░░██░██████░██░░░██░██░░░██░██░░██
  ██████▀░▀█████░██░░░░░██░░██░██░░██░██░░██░██████▀░▀█████▀░██░░██
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ */

function MaiorNumeroEmUmaLista(){

  var numeros = [ 8, 8989, 55, 75, 400, 34 ];
alert ('lista 8, 8989, 55, 75, 400, 34')
  for(let x = 0; x < numeros.length; x++) {
  for (let y = 0; y < numeros.length; y++) { 
    if (numeros[y] < numeros[x]) {
       let backupDoY = numeros[y];
      numeros [y] = numeros[x];
      numeros [x] = backupDoY;
  }
    }
      }
alert (numeros[0] + ' é o maior elemento da lista');
  
}

function ElementosVetor(){
  var lista = [1, 77, 3, 4, 7, 6];
for (let i = 0; i < lista.length; i++) {
console.log ( lista[i] );
}
alert('Aperte f12 para ver a Impresão')
}

//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões
//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões

function AnagramaDeOutra(){
let palavraInteira = pegarPalavra('digite a palavra, de preferencia minuscula') 
let palavraVetor1 = [];

for(let x = 0; x < palavraInteira.length; x++){
  palavraVetor1[x] = palavraInteira[x]
}

for(let x = 0; x < palavraVetor1.length; x++){
  for(let y = 0; y < palavraVetor1.length; y++){
    if(palavraVetor1[x] < palavraVetor1[y]){
       let backup = palavraVetor1[x]
            palavraVetor1[x] = palavraVetor1[y]
            palavraVetor1[y] = backup
    }
  }
}

let palavraOrdenada1 = '';

for(let i = 0; i < palavraVetor1.length; i++){
  palavraOrdenada1 += palavraVetor1[i];
}


let palavraInteira2 = pegarPalavra('digite a outra palavra, de preferencia minuscula')
let palavraVetor2 = [];

for(let x = 0; x < palavraInteira2.length; x++){
  palavraVetor2[x] = palavraInteira2[x]
}

for(let x = 0; x < palavraVetor2.length; x++){
  for(let y = 0; y < palavraVetor2.length; y++){
    if(palavraVetor2[x] < palavraVetor2[y]){
       let backup = palavraVetor2[x]
            palavraVetor2[x] = palavraVetor2[y]
            palavraVetor2[y] = backup
    }
  }
}

let palavraOrdenada2 = '';

for(let i = 0; i < palavraVetor2.length; i++){
  palavraOrdenada2 += palavraVetor2[i];
}

if (palavraOrdenada1 == palavraOrdenada2) {
    alert('As palavras são anagramas')
} else {
    alert('As palavras não são anagramas ')
}
}

//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões
//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões

function SomaNumerosZeroCem(){
let soma = 0
for(let i = 0; i <= 100; i++){
    soma = soma + i
}
resultado = soma
alert (resultado + ' é o resultado da soma de todos os numeros de 0 a 100')
}

//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões
//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões

function ImprimirNumerosZeroCemPar(){
for(let i = 100; i >= 1; i--){
  if (i % 2 === 0) {
  console.log (i);
}  
}
alert('Aperte f12 para ver a Impresão')
}

//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões
//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões

function ImprimirNumerosZeroCem(){
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
alert('Aperte f12 para ver a Impresão')
}

//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões
//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões

function QualNumeroMaiorEntreTres(){
  const num1 = validaNumero('digite o primeiro numero');
const num2 = validaNumero('digite o segundo numero');
const num3 = validaNumero('digite o terceiro numero');

if (num1 > num2 && num1 > num3) {
	alert ('numero '+num1+' é maior que '+num2+' e '+num3);
} else if (num2 > num1 && num2 >num3) {
	alert ('numero '+num2+' é maior que '+num1+' e '+num3);
} else {
	alert ('numero '+num3+' é maior que '+num1+' e ' +num2);
}
}

//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões
//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões

function QuantosNumerosParImpar (){
  const num1 = validaNumero('Digite o primeiro número inteiro');
const num2 = validaNumero('Digite o segundo número inteiro');

if (num1 % 2 === 0) {
    alert ('o primeiro número ' + num1 + ' é par');
} else {
    alert ('o primeiro número ' + num1 + ' é ímpar');
}

if (num2 % 2 === 0) {
    alert ('o segundo número ' + num2 + ' é par');
} else {
    alert ('o segundo número ' + num2 + ' é ímpar');
}
}

//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões
//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões

  function EnesimoNumero () {
    const enesimo = validaNumero('digite o enesimo numero requerido');
  let resultado = 1;
  let antecessor = 1;
  let sucessor = 1;
  if(enesimo == 1 || enesimo == 2 ) {
    alert('O enesimo numero é 1')
  } else {
  for (let i = 2; i < enesimo; i++) {
    resultado = antecessor + sucessor;
    antecessor = sucessor;
    sucessor = resultado;
  }
  alert(`O enesimo numero é ${resultado}`)
  }
  }

/*▄██████░▄█████░█████▄░▄████▄░█████▄░▄████▄░██████▄░▄█████▄░█████▄
  ██░░░░░░██░░░░░██░░██░██░░██░██░░██░██░░██░██░░░██░██░░░██░██░░██
  ▀█████▄░█████░░█████▀░██░░██░█████▀░██░░██░██░░░██░██░░░██░█████▀// lista 2
  ░░░░░██░██░░░░░██░░░░░██████░██░░██░██████░██░░░██░██░░░██░██░░██
  ██████▀░▀█████░██░░░░░██░░██░██░░██░██░░██░██████▀░▀█████▀░██░░██
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ */

  function DadosDeDoisNumeros(){
  const codigo = validaNumero(' digite o código do produto 1 sem letras');
  const nomeproduto = pegarPalavra(' digite o nome do produto 1 ');
  const valor =  validaNumero(' valor do produto 1 em reais ' );
  
  const codigo2 = validaNumero(' digite o código do produto 2 sem letras ');
  const nomeproduto2 = pegarPalavra(' digite o nome do produto 2 ');
  const valor2 =  validaNumero(' valor do produto 2 em reais ' );
  
  
  if (valor > valor2) {
   alert ('produto com o nome de ' + nomeproduto + ' com codigo ' + codigo + ' e valor de ' + valor + ' reais é maior');
    alert ('produto com o nome de ' + nomeproduto2 + ' com codigo ' + codigo2 + ' e valor de ' + valor2 + ' reais é menor');
  } else if (valor < valor2) {
    alert ('produto com o nome de ' + nomeproduto2 + ' com codigo ' + codigo2 + ' e valor de ' + valor2 + ' reais é maior');
   alert ('produto com o nome de ' + nomeproduto + ' com codigo ' + codigo + ' e valor de ' + valor + ' reais é menor');
  } else {
    alert ('os dois produtos tem o mesmo valor');
  } 
}

//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões
//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões

function MediaDeDuasNotas(){
const nota1 = validaNumero('Nota da primeira prova'); 
const nota2 = validaNumero('Nota da segunda prova'); 

const media = (nota1 + nota2) / 2; 

if (media >= 7) { 
    alert("Aprovado"); 
} else if (media < 3) { 
    alert("Reprovado"); 
} else if (media >= 3 && media < 7) { 
    var notaNovaProva = parseFloat(prompt('Digite a nova nota')); 
    var novaMedia = (media + notaNovaProva) / 2; 

    if (novaMedia < 5) { 
        alert("Reprovado"); 
    } else { 
        alert("Aprovado"); 
    } 
}


}

//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões
//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões

function DescontoComformeQuantidadeVendida(){
  const valorTotalCompra = validaNumero('Digite o valor total da compra');
let valorDesconto = 0;
let valorComDesconto = 0;

if (valorTotalCompra <= 200) {
    valorDesconto = valorTotalCompra * 0.05;
} else if (valorTotalCompra > 200 && valorTotalCompra < 450) {
    valorDesconto = valorTotalCompra * 0.08;
} else if (valorTotalCompra >= 450) {
    valorDesconto = valorTotalCompra * 0.10;
}
valorComDesconto = valorTotalCompra - valorDesconto;

alert('Valor integral da compra: R$ ' + valorTotalCompra.toFixed(2));
alert('Valor do desconto: R$ ' + valorDesconto.toFixed(2));
alert('Valor com desconto: R$ ' + valorComDesconto.toFixed(2));
}

//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões
//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões

function MultiploDeTresECinco(){
  let n1 = validaNumero("Digite um número")
  if (n1 % 3 === 0 && n1 % 5 === 0) {
    alert("múltiplo de 3 e de 5")
  } else if (n1 % 3 === 0) {
    alert("múltiplo de 3")
  } else if (n1 % 5 === 0) {
    alert("múltiplo de 5")
  } else {
    alert("Ele não é múltiplo de nenhum número")
  }
}

//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões
//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões

function TempoParaPercorrerDistancia(){
  var distancia = validaNumero('Distância em quilômetros'); 
  var velocidade = validaNumero('Velocidade em km/h'); 
  var tempoEmHoras = distancia / velocidade; 
alert('Tempo necessário para percorrer ' + distancia + ' km ' + 'na velocidade de ' + velocidade + ' km/h é ' + tempoEmHoras.toFixed(2) + ' hora(s)');
}

//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões
//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões

  function PalindromoOuNao(){
  let palavra = pegarPalavra("digite uma palavra: ");
  let palavrainvertida = "";
  
  for(let i = palavra.length - 1; i >= 0; i--){
    palavrainvertida += palavra[i]
  }
  if(palavrainvertida == palavra ){
   alert("a sua palavra é um palindromo")
  }
  else{
   alert("a sua palavra não é um palindromo")
  }
}

//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões
//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões

function ConverterGrausEmMedidasDiferentes(){
  const opção = validaNumero(`Digite a opção desejada:
    digite 1 = C para K;
    digite 2 = K para C;
    digite 3 = C para F;
    digite 4 = F para C;
    digite 5 = F para K;
    digite 6 = K para F;
    `);
    
    let result;
    const valor = validaNumero('Digite o valor em graus para transformar: ');
    
    switch (opção) {
      case 1:
        result = valor + 273.15;
      alert(result);
      break;
     case 2:
      result = valor - 273.15;
      alert(result);
      break;
     case 3:
      result = valor * 9/5 + 32;
      alert(result);
      break
     case 4: 
      result = (valor - 32) * 5/9
      alert(result);
        break
     case 5:
       result = (valor - 32) * 5/9 + 273.15;
      alert(result);
        break
      case 6:
       result = (valor - 273,15) * 9/5 + 32
        alert(result);
        break
    }    
}

/*▄██████░▄█████░█████▄░▄████▄░█████▄░▄████▄░██████▄░▄█████▄░█████▄
  ██░░░░░░██░░░░░██░░██░██░░██░██░░██░██░░██░██░░░██░██░░░██░██░░██
  ▀█████▄░█████░░█████▀░██░░██░█████▀░██░░██░██░░░██░██░░░██░█████▀// lista 1
  ░░░░░██░██░░░░░██░░░░░██████░██░░██░██████░██░░░██░██░░░██░██░░██
  ██████▀░▀█████░██░░░░░██░░██░██░░██░██░░██░██████▀░▀█████▀░██░░██
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ */

function ConversaoParaEuros(){
var valorEmReais = validaNumero('Digite o valor em reais');  
var taxaDeConversao = validaNumero('Digite a cotação do euro');  
var valorEmEuros = valorEmReais / taxaDeConversao;  
 
alert( valorEmReais + ' reais equivalem a ' + valorEmEuros.toFixed(2) + ' euros' ); 
}



function MaiorEntreTres(){
  var nu1 = validaNumero("digite o primeiro número")
var nu2 = validaNumero("digite o segundo número")
var nu3 = validaNumero("digite o terceiro número")

if (nu1 > nu2 && nu1 > nu3) {
alert ("número "+ nu1 +" e maior que número "+ nu2 +" e número "+ nu3)

} else if (nu2 > nu1 && nu2 > nu3) {
alert ("número "+ nu2 +" e maior que número "+ nu1 +" e número "+ nu3)

} else {
alert ("número "+ nu3 +" e maior que número "+ nu2 +" e número "+ nu1)
}
}

//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões
//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões

function ConversãoReaisParaDolares(){
var valorEmReais = validaNumero('Digite o valor em reais');  

var taxaDeConversao = validaNumero('Digite a cotação do dolar');  
  
var valorEmDolars = valorEmReais / taxaDeConversao;  
   
alert( valorEmReais + ' reais equivalem a ' + valorEmDolars.toFixed(2) + ' dolars' );   
}

//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões
//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões

function CaluloAreaTriangulo (){
var base = validaNumero("digite a base do triangulo")
var altura = validaNumero("digite a altura do triangulo")

var fórmula = ( base * altura )/2
alert ("a área do triangulo é " + fórmula )
}

//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões
//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões

function NumeroParOuImpar (){
var numero1 = validaNumero(" digite um número inteiro")
var numero2 = validaNumero(" digite outro número inteiro")

if (numero1 % 2===0) {
alert ("o primeiro número é par")
} else {
alert ("o primeiro número é ímpar")
}

if (numero2 % 2===0) {
alert ("o segundo número é par")
} else {
alert ("o segundo número é ímpar")
}
}

//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões
//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões

function ConversãoFahrenheitsParaCelsius (){
  var grausFahrenheits = validaNumero('temperatura em graus Fahrenheits'); 
var conversao = (grausFahrenheits -  32) / 1.8; 
 
alert (  grausFahrenheits + ' graus Fahrenheits é igual a ' + conversao.toFixed(2) + ' graus celsius' ); 
}

//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões
//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões

function CalcularIMC(){
  var peso = validaNumero("informe o seu peso em (kg)");
  var altura = validaNumero("informe a sua altura em (m)");
 
var imc = peso/ ( altura*altura );
alert( "seu IMC é " + imc.toFixed(2) );

}

//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões
//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões

function DescobrirSeLetrasIguais() {
  let arrayl = pegarPalavra("digite 4 letras ");
  if (arrayl[0] === arrayl[1] && arrayl[2] === arrayl[3]){
      alert("são iguais")
  }
  else{
  alert("Não são iguais")
  }
}

//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões
//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões

function DescobrirMaiorDesconto(){
var produto1 = validaNumero('Valor do produto 1');
var desconto1 = validaNumero('Desconto do produto 1 (%)');
var produto2 = validaNumero('Valor do produto 2');
var desconto2 = validaNumero('Desconto do produto 2 (%)');

var valorComDesconto1 = produto1 * (desconto1 / 100);
var valorComDesconto2 = produto2 * (desconto2 / 100);

if (valorComDesconto1 > valorComDesconto2) {
   alert('O Produto 1 tem o desconto maior');
} else if (valorComDesconto2 > valorComDesconto1) {
   alert('O Produto 2 tem o desconto maior');
} else {
   alert('Ambos produtos têm o mesmo desconto');
}
}


//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões
//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões

function CalcularVelocidadeAceleração(){
    const kminicial = validaNumero("insira o km inicial");
const kmfinal = validaNumero("insira o km final");
const tempo = validaNumero("tempo da distância percorrida em Horas");
 
const distancia = kmfinal - kminicial;
const velocidade = distancia / tempo;
const aceleracao = velocidade / tempo;
 
 alert ( "sua aceleração é de " + aceleracao.toFixed(2) + " km/h² " + "e sua velocidade é de " + velocidade.toFixed(2) + " km/h" );

}

//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões
//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões

function CalcularComissãoSobreProduto(){
    var venda = validaNumero("insira o valor do produto vendido");
 
    var comissão = venda * 0.05
    alert ("sua comissão sobre o produto com o valor de " + venda + " reais é de " + comissão + " reais" );    
}


//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões
//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões

function MaiorNumeroDeDois (){

    let num1 = validaNumero("digite um número ")
    let num2 = validaNumero("digite mais outro número ")
 
if (num1 > num2) {
        alert ( "o primeiro numero " + "'" + num1 + "'" + " é maior" );
} else {
        alert ( "o segundo numero " +  "'" + num2 + "'" +  " é maior" );

}

}

//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões
//separador entre questões//separador entre questões//separador entre questões//separador entre questões//separador entre questões

function MediaSeisNumeros(){
    var n1 = validaNumero ("primeiro numero")
    var n2 = validaNumero ("segundo numero")
    var n3 = validaNumero ("terceiro numero")
    var n4 = validaNumero ("quarto numero")
    var n5 = validaNumero ("quinto numero")
    var n6 = validaNumero ("sexto numero")
     
    const resultado = ( n1 + n2 + n3 + n4 + n5 + n6 )/6;
    alert ("A media é " + resultado.toFixed(2));
}



/* ███╗░░░███╗ ███████╗ ███╗░░██╗ ██╗░░░██╗
   ████╗░████║ ██╔════╝ ████╗░██║ ██║░░░██║
   ██╔████╔██║ █████╗░░ ██╔██╗██║ ██║░░░██║
   ██║╚██╔╝██║ ██╔══╝░░ ██║╚████║ ██║░░░██║
   ██║░╚═╝░██║ ███████╗ ██║░╚███║ ╚██████╔╝
   ╚═╝░░░░░╚═╝ ╚══════╝ ╚═╝░░╚══╝ ░╚═════╝░*/

var escolhaDoUsuario =  Number(prompt(`escolha uma lista:
1) lista 1
2) lista 2
3) lista 3
4) lista 4`))


if (escolhaDoUsuario == 1) {
  let l1 = prompt(`
digite um numero:
1) Atividade 1 (media de seis numeros) Lista 1
2) Atividade 2 (maior numero entre dois) Lista 1
3) Atividade 3 (calcular comissão de 5% sobre produto) Lista 1
4) Atividade 4 (calcular a velocidade e a aceleração de um veículo) Lista 1
5) Atividade 5 (descobrir qual dos 2 produtos tem o maior desconto) Lista 1
6) Atividade 6 (descobrir se 4 letras são iguais) Lista 1
7) Atividade 7 (calcular IMC) Lista 1
8) Atividade 8 (converter fahrenheits para celsius) Lista 1
9) Atividade 9 (quantos números são pares e quantos são ímpares) Lista 1
10) Atividade 10 (calcular area do triangulo) Lista 1
11) Atividade 11 (conversão de reais para dolares) Lista 1
12) Atividade 12 (maior numero entre 3 numeros) Lista 1
13) Atividade 13 (conversão de reais para euros) Lista 1`)
    switch(l1){
      case `1`:
        MediaSeisNumeros()
        break ;
    case `2`:
        MaiorNumeroDeDois()
        break;
    case `3`:
        CalcularComissãoSobreProduto()
        break;
    case `4`:
        CalcularVelocidadeAceleração()
        break;
    case `5`:
        DescobrirMaiorDesconto()
        break;
    case `6`:
        DescobrirSeLetrasIguais()
        break;
    case `7`:
        CalcularIMC()
        break;
    case `8`:
        ConversãoFahrenheitsParaCelsius()
        break;
    case `9`:
        NumeroParOuImpar()
        break;
    case `10`:
        CaluloAreaTriangulo()
        break;
    case `11`:
        ConversãoReaisParaDolares()
        break;
    case `12`:
        MaiorEntreTres()
        break;
    case `13`:
        ConversaoParaEuros()
        break;

    default:
    alert('Escolha invalida!')
    }
}
  


       
else if(escolhaDoUsuario == 2){
  let l2 = prompt(`
digite um numero:
1) Atividade 1 (converter graus em medidas diferentes:) Lista 2
2) Atividade 2 (palindromo ou não) Lista 2
3) Atividade 3 (tempo levado para percorrer a distância informada na velocidade indicada.) Lista 2
4) Atividade 4 (múltiplo de 3 e 5 ao mesmo tempo, ou apenas de 3 ou apenas de 5 ou de nenhum deles.) Lista 2
5) Atividade 5 (desconto de uma loja, conforme a quantidade vendida Compras até R$ 200,00: 5% de desconto; b. Compras acima R$ 200 e abaixo de R$ 450: 8%; c. Compras acima de R$ 450: 10 % de desconto.) Lista 2
6) Atividade 6 (média de Duas notas de um aluno. Para saber se ele reprovou ou irá fazer uma recuperação (menor que 7 e maior que 3 = recuperação) ) Lista 2
7) Atividade 7 (mostrando os dados de dois produtos, onde o programa devera mostrar primeiro o produto com maior valor) Lista 2`)
        switch(l2){
          case `1`:
            ConverterGrausEmMedidasDiferentes()
            break;
        case `2`:
            PalindromoOuNao()
            break;
        case `3`:
            TempoParaPercorrerDistancia()
            break;
        case `4`:
            MultiploDeTresECinco()
            break;
        case `5`:
            DescontoComformeQuantidadeVendida()
            break;
        case `6`:
            MediaDeDuasNotas()
            break;
        case`7`:
            DadosDeDoisNumeros()
            break;

      default:
      alert('Escolha invalida!')
          }
  
        }
else if (escolhaDoUsuario == 3){
  let l3 = prompt(`
digite um numero:
1) Atividade 1 (calcular o enésimo termo da sequência de Fibonacci) Lista 3
2) Atividade 2 (entre dois numeros quantos são pares e quantos são ímpares) Lista 3
3) Atividade 3 (entre três números qual deles é o maior) Lista 3
4) Atividade 4 (Imprimir números de 1 a 100) Lista 3
5) Atividade 5 (Imprimir números pares de 100 a 1) Lista 3
6) Atividade 6 (Calcular a soma dos números de 1 a 100) Lista 3
7) Atividade 7 (verificar se uma string é um anagrama de outra) Lista 3
8) Atividade 8 (Imprimir os elementos de um vetor um por um) Lista 3
9) Atividade 9 (algoritmo para encontrar o maior elemento em uma lista de números.) Lista `)

    switch(l3){
      case `1`:
        EnesimoNumero()
        break ;
    case `2`:
        QuantosNumerosParImpar()
        break;
    case `3`:
        QualNumeroMaiorEntreTres()
        break;
    case `4`:
        ImprimirNumerosZeroCem()
        break;
    case`5`:
        ImprimirNumerosZeroCemPar()
        break;
    case`6`:
        SomaNumerosZeroCem()
        break;
    case`7`:
        AnagramaDeOutra()
        break;
    case`8`:
        ElementosVetor()
        break;
    case`9`:
        MaiorNumeroEmUmaLista()
        break;
    default:
    alert('Escolha invalida!')
    }
}

else if (escolhaDoUsuario == 4){
  let l4 = prompt(`
digite um numero:
1) Atividade 1 (algoritmo para calcular o fatorial de um número inteiro) Lista 4
2) Atividade 2 (números de 1 a 100, substituindo múltiplos de 3 por "Fizz" e múltiplos de 5 por "Buzz") Lista 4
3) Atividade 3 (Inverter uma string) Lista 4
4) Atividade 4 (determine se um número é primo ou não) Lista 4
5) Atividade 5 (ordenar uma lista de números em ordem crescente.) Lista 4
6) Atividade 6 (Imprimir uma pirâmide de números com 5 níveis) Lista 4
7) Atividade 7 (algoritmo para ordenar uma lista de números em ordem decrescente.) Lista 4
8) Atividade 8 (algoritmo para calcular a média de uma lista de números) Lista 4
`)

switch(l4){
  case `1`:
    CalcularFatorial()
    break ;
case `2`:
    NumerosUmACemFizzBuzz()
    break;
case `3`:
    InverterString()
    break;
case `4`:
    PrimoOuNao()
    break;
case `5`:
    OrdenarOrdemCrescente()
    break;
case `6`:
    PiramideCincoNiveis()
    break;
case `7`:
    OrdenarOrdemDecrescente()
    break;
case `8`:
    MediaListaNumeros()
    break;
default:
alert('Escolha invalida!')
  }
}

else{
  alert('Escolha invalida!')

}


