//alert('Hello World!')
//document.getElementById('demo').innerHTML = 'Hello World!';

/*
var nome= 21;
console.log(nome);
console.log(typeof nome);
*/

/* ********** ESERCIZIO 1 ********** */
/*
var nome = prompt("Inserisci il tuo nome:");
var eta = parseInt(prompt("Inserisci la tua eta':"));
var colorePreferito = prompt("Inserisci il tuo colore preferito:");
*/
/*
//interpolazione stringhe
console.log(`Ciao ${nome}, hai ${eta} anni e il tuo colore preferito e'; ${colorePreferito}.`);
alert(`Ciao ${nome}, hai ${eta} anni e il tuo colore preferito e'; ${colorePreferito}.`);
*/
/*
//concatenazione stringhe
console.log('Ciao ' + nome + ', hai ' + eta + ' anni e il tuo colore preferito è ' + colorePreferito + '.');
alert('Ciao ' + nome + ', hai ' + eta + ' anni e il tuo colore preferito è ' + colorePreferito + '.');
 //fine esercizio 1
*/

/* ********** ESERCIZIO 2 ********** */
/* Chiedere in input due numeri ed eseguire la somma tra i due. */

/*
var numero1 = parseInt(prompt("Inserisci il primo numero:"));  //parseInt() converte la stringa in numero intero
var numero2 = parseInt(prompt("Inserisci il secondo numero:"));

var somma = numero1 + numero2;
*/
/*
//interpolazione stringhe
console.log(`La somma tra ${numero1} e ${numero2} è ${somma}.`);
alert(`La somma tra ${numero1} e ${numero2} è ${somma}.`); 
*/
/*
//concatenazione stringhe
console.log('La somma tra ' + numero1 + ' e ' + numero2 + ' è ' + somma + '.');
alert('La somma tra ' + numero1 + ' e ' + numero2 + ' è ' + somma + '.');
*/

//fine esercizio 2


/* ********** ESERCIZIO 3 ********** */
/* Chiedere in input due numeri e far scegliere all'utente se eseguire la somma, la sottrazione, la moltiplicazione o la divisione tra i due. */


/*var numero1 = parseInt(prompt("Inserisci il primo numero:"));  //parseInt() converte la stringa in numero intero
var numero2 = parseInt(prompt("Inserisci il secondo numero:"));

var operazione = prompt("Scegli l'operazione da eseguire tra: somma, sottrazione, moltiplicazione, divisione");

var risultato;

if (operazione == 'somma') {
    risultato = numero1 + numero2;
} else if (operazione == 'sottrazione') {
    risultato = numero1 - numero2;
} else if (operazione == 'moltiplicazione') {
    risultato = numero1 * numero2;
} else if (operazione == 'divisione') {
    risultato = numero1 / numero2;
} else {
    alert('Operazione non valida!');
} //fine if

//interpolazione stringhe
/*
console.log(`Il risultato dell'operazione ${operazione} tra ${numero1} e ${numero2} è ${risultato}.`);
alert(`Il risultato dell'operazione ${operazione} tra ${numero1} e ${numero2} è ${risultato}.`); //fine esercizio 3
*/

//concatenazione stringhe
/*console.log('Il risultato dell\'operazione ' + operazione + ' tra ' + numero1 + ' e ' + numero2 + ' è ' + risultato + '.');
alert('Il risultato dell\'operazione ' + operazione + ' tra ' + numero1 + ' e ' + numero2 + ' è ' + risultato + '.'); //fine esercizio 3
*/
console.log("Il tuo peso è" + peso)
console.log("La tua altezza è" + altezza)
console.log("La tua altezza è" + eta)
var peso = parseFloat(prompt("Inserisci il tuo peso in kg:"))
var altezza = parseFloat(prompt("Inserisci la tua altezza in metri:"))
var eta = parseFloat(prompt("Inserisci la tua eta:"))
// Calcola l'IMC
var imc = peso / (altezza * altezza)  
// Arrotonda l'IMC a due decimali
imc = imc.toFixed(2)
// Visualizza l'IMC
if (imc <= 15) {
    var MSGimc = "sottopeso molto grave" 
} else if ((imc >= 15) && (imc <= 16))  {
    var MSGimc = "sottopeso grave"
} else if ((imc >= 16) && (imc <= 18.5)) {
    var MSGimc = "sottopeso"
} else if ((imc >= 18,5) && (imc <= 25)) {
    var MSGimc = "normale"
} else if ((imc >= 25) && (imc <= 30)) {
    var MSGimc = "sovrappeso"
} else if ((imc >= 30) && (imc <= 35)) {
    var MSGimc = "obeso"
} else if (imc >= 35) {
    var MSGimc = "sovrappeso grave"
} else {
    alert('Operazione non valida!')
} //fine if

if ((eta>0)&&(eta < 18)) {
    var eta = "minorenne" 
} else if (eta >= 18)  {
    var eta = "maggiorenne"
} else {
    alert('Operazione non valida!')
} //fine if
console.log("Il tuo Indice di Massa Corporea (IMC) è " + imc + ", sei in " + MSGimc + " e sei " + eta)
alert("Il tuo Indice di Massa Corporea (IMC) è " + imc + ", sei in " + MSGimc + " e sei " + eta)