/* Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres. */

(function () {
    const add = (a, b) => a + b
    console.log(add(3, 4));
})();

/* Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut. */

const meuNom = function () {
    return {
        nom: "Joan Carles",
    };
}
console.log(meuNom().nom);

const meuNom = () => ({
    nom: "Joan Carles"
});

console.log(meuNom().nom);





