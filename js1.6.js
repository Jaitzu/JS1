/*teht6*/

let leiviska;
let naula;
let luoti;
let kilo;
let gramma;
let kokogramma;
leiviska = + prompt('leivisk‰t ');
naula = + prompt('Naulat');
luoti = + prompt('Luodit');

kokogramma = (luoti *13.3 ) + (naula * 425.6) + (leiviska * 8512);
kilo = Math.floor(kokogramma/1000);
gramma = Math.ceil((kokogramma) - kilo *1000);

document.write('Massa nykymittojen mukaan: ' + '<br>' + kilo + ' kilogrammaa ' + 'ja n. ' + gramma + ' grammaa.'   );

