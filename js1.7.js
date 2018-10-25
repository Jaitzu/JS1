/*teht7*/

let saldo;
let korko;
let vuosikorko;
let loppusaldo;
saldo = + prompt('Anna tilin saldo.');
korko = + prompt('Anna korko prosentteina.');
vuosikorko = saldo * (korko / 100);
loppusaldo = saldo + vuosikorko ;

document.write('Kasvanut saldo = ' + loppusaldo.toFixed(2) + '€ ja korko = ' + vuosikorko.toFixed(2) + '€ .' );
