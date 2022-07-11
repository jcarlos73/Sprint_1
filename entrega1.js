/*  Crea una funció que mostri per consola el nom d'usuari/ària en invocar-la passant-li el nom com a paràmetre. */

function usuari(nom) {
    return "Benvingut " + nom;
}
console.log(usuari('Joan Carles'));


/* Mostra per consola el nom i cognoms de l'usuari/ària mitjançant template literals, guardant-los en variables i referenciant-les en la impressió del missatge. */

const nom = 'Joan Carles';
const cognom = 'Pérez Viñals';

const usuari = `Benvingut, ${nom} ${cognom}. Espero que tinguis un bon dia`;

console.log(usuari);

/* Invoca una funció que retorni un valor des de dins d'una template literal. */

function sumar(a, b) {
    let suma = a + b;
    return suma;
}
let resultat = sumar(3, 4);
console.log(`La suma de a y b es igual a ${resultat}`);

/* Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 per la consola. Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades. */
















/* Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari/ària a rebut com a paràmetre. */

(function (nom = 'Joan Carles') {
    console.log(nom)
}
)();

