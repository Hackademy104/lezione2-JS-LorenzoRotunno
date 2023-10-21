// CICLI E CONDIZIONI 

// es.N 1
let n = 5;
let p1 = 0;
let p2 = 0;

for (let i = 1; i <= n; i++) {
    p1 = p1 + Math.floor(Math.random() * (6 - 1) + 1);
    p2 = p2 + Math.floor(Math.random() * (6 - 1) + 1);

}
console.log(`il punteggio di p1=${p1} ||| il punteggio di p2=${p2}`);

if (p1 > p2) {
    console.log("p1 vince");
} else {
    console.log("p2 vince");
}

// es.N 2
let giorni = 7

for (let i = 1; i <= 1; i++) {
    giorni = Math.floor(Math.random() * (9 - 1) + 1);
    console.log(giorni);
}
switch (giorni) {
    case 1: console.log("oggi è lunedì'");
        break;
    case 2: console.log("oggi è martedì");
        break;
    case 3: console.log("oggi è mercoledì");
        break;
    case 4: console.log("oggi è giovedì");
        break;
    case 5: console.log("oggi è venerdì");
        break;
    case 6: console.log("oggi è sabato");
        break;
    case 7: console.log("oggi è domenica");
        break;
    case 8: console.log("errore");
        break;
    case 9: console.log("errore");
        break;
    case 10: console.log("errore");
        break;
}



// es .N 3


let bevande = prompt`scegli la tua bevanda : 1-acqua 2-coca cola 3-birra`;
while (bevande != 1 && bevande != 2 && bevande != 3) {
    bevande = prompt`scegli la tua bevanda : 1-acqua 2-coca cola 3-birra`;
}
// console.log(bevande);
if (bevande == 1) {
    console.log("hai selezionato acqua");
} else if (bevande == 2) {
    console.log("hai selezionato coca cola");
} else {
    console.log("hai selezionato birra");
}

// es.N 4

let a = "<20";
a = "non ci sono più mezze stagioni";
console.log(`${a}`);

let b = "=30";
b = "lu sule , lu mare , lu ientu";
console.log(`${b}`);

let c = "<30";
c = "mi dia una peroni sudata";
console.log(`${c}`);

let d = "0";
d = "non è tanto il freddo ma l'umidità";
console.log(`${d}`);

let e = "-10";
e = "copriti";
console.log(`${e}`);