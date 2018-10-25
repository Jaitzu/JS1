/*teht4*/
'use strict';
let kanta;
let korkeus;
let piiri;
let pintaala;

kanta = prompt('Anna suorakulmion kanta');
korkeus = prompt('Anna suorakulmion korkeus');
pintaala = kanta * korkeus;
piiri = kanta * 2 + korkeus * 2 ;


document.write('Suorakulmion piiri = ' + piiri + ' ja pinta-ala = ' + pintaala);
