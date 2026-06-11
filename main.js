
let arr = tiraIlDado(Number(prompt('Scegli il numero di volte che volete tirare i dadi')));

let win;
let lose;

if (arr[0] > arr[1]) {

    win = 1;
    lose = 2;
}
else if (arr[0] < arr[1]) {

    arr.reverse()

    win = 2;
    lose = 1;
} else {

    win = 1;
    lose = 1;
}


if (win == lose) {
    console.log(`La partita è pari, il giocatore 1 ha ottenuto ${arr[0]} il giocatore 2 ha ottenuto ${arr[1]}`);
}
else {
    console.log(`Il giocatore ${win} ha vinto totalizzando ${arr[0]}, il giocatore ${lose} ha ottenuto ${arr[1]}`);
}



function tiraIlDado(nTiri) {

    if (Number.isNaN(nTiri) || nTiri === undefined) {
        nTiri = 1
    }

    let dado1 = 0
    let dado2 = 0

    for (let i = 0; i < nTiri; i++) {

        dado1 += Math.floor(Math.random() * (6 - 1) + 1);

        dado2 += Math.floor(Math.random() * (6 - 1) + 1);

        console.log(dado1, dado2);
    }

    let arr = [dado1, dado2]

    return arr
}