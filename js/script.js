const numKm = prompt('Scrivi km da percorrere');

const eta = prompt('Scrivi la tua età');

const prcKm = 0.21;

let prcTot = numKm * prcKm;

console.log(prcTot);

if(eta < 18){
  prcDis = prcTot / 100 * 20;
}else if(eta > 65){
  prcDis = prcTot / 100 * 40;
}else{
  prcDis = prcTot
}

let s = prcTot.toFixed(2);
let n = prcDis.toFixed(2);

console.log(n);

document.getElementById('output').innerHTML = `
<hr>
Benvenuto utente, <br> 
ecco il tuo riepilogo: <br>
<hr>
Km da percorrere: ${numKm} <br>
Età passeggero: ${eta} <br>
Prezzo stimato: ${s}€ <br>
<hr>
Prezzo totale: ${n}€ <br>
<hr>
`