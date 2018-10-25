/*teht9*/
let lukko1;
let lukko2;
let lukko3;

let ukko1;
let ukko2;
let ukko3;
let ukko4;


lukko1 = Math.random() * 9;
lukko2 = Math.random() * 9;
lukko3 = Math.random() * 9;

ukko1 = Math.random() * (6 - 1) +1;
ukko2 = Math.random() * (6 - 1) +1;
ukko3 = Math.random() * (6 - 1) +1;
ukko4 = Math.random() * (6 - 1) +1;

document.write('3 numeroinen koodi: ' + lukko1.toFixed() + lukko2.toFixed() + lukko3.toFixed() + '<br>' + '4 numeroinen koodi: ' + ukko1.toFixed() + ukko2.toFixed() + ukko3.toFixed() + ukko4.toFixed());
