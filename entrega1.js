/*  Crea una funció que mostri per consola el nom d'usuari/ària en invocar-la passant-li el nom com a paràmetre. */

const usuari = function (nom) {
    return 'Hola ' + nom;
};
console.log(usuari('Joan Carles'));

/* Mostra per consola el nom i cognoms de l'usuari/ària mitjançant template literals, guardant-los en variables i referenciant-les en la impressió del missatge. */

const nom = 'Joan Carles';
const cognom = 'Pérez Viñals';

const usuari = `Benvingut, ${nom} ${cognom}. Espero que tinguis un bon dia`;

console.log(usuari);

/* Invoca una funció que retorni un valor des de dins d'una template literal. */

function sumar(a, b) {
    let suma = a + b;
    console.log(`La suma de a y b es igual a ${suma}`);
}
sumar(3, 4)













    /* Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari/ària a rebut com a paràmetre. */

    (function (nom = 'Joan Carles') {
        console.log(nom)
    }
    )();

