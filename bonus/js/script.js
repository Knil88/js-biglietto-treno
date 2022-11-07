// Generatore prezzo biglietto

//Chiedere quanti chilometri si vuole percorrere

let route = parseInt (prompt ("Salve e benvenuto, quanti chilometri vuole percorrere con la nostra compagnia?") );

console.log ("Lei vuole percorrere", route,"chilometri" );

//Chiedere l'età

let userAge = parseInt(prompt("Quale è la sua età?"))

console.log ("Lei ha",userAge,"anni");
//impostare prezzo base e prezzo per chilometro
const kmPrice = 0.21

console.log(kmPrice,"€ è il prezzo a chilometro");

let ticketPrice = route * kmPrice;

console.log ("Il prezzo del suo biglietto è", ticketPrice,"€");
//impostare lo sconto se l'utente ha meno di 18 anni

if(userAge < 18){

let discount = ticketPrice * 20 / 100;

let salePrice =(ticketPrice - discount).toFixed(2);

console.log(salePrice)

document.getElementById("title").innerHTML = `Lei percorrerà ${route} chilometri ed usufruendo dello sconto  under 18 il prezzo del biglietto sarà  ${salePrice}€`;


}

//impostare lo sconto se l'utente ha più di 65 anni

else if(userAge >=65){
    let oldDiscount = ticketprice * 40 / 100;
    let agePrice = (ticketPrice - oldDiscount).toFixed(2);

    console.log(agePrice)

    document.getElementById("title").innerHTML = `Lei percorrerà ${route} chilometri ed usufruendo dello sconto  over 65 il prezzo del biglietto sarà  ${agePrice} €`;

}

//output

else{
    document.getElementById("title").innerHTML = `Lei percorrerà ${route} chilometri , ma dato che non può usufruire di alcuno sconto il prezzo del biglietto sarà quello base che ammonta a ${ticketPrice}€`;
}





