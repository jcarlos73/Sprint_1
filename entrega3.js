/* Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no. */

let x = 10;

const p = new Promise((resolve, reject) => {
    if (x == 10) {
        resolve('la variable es igual a 10');
    } else {
        reject('la variable no es igual a 10');
    }
});

p
    .then(res => {
        console.log('done:' + res);
    })
    .catch(error => {
        console.log('error:' + error);
    })


/* Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut. */

const temps = 'fred'
let clima = temps => {
    if (temps === 'calor') {
        console.log(`Avui fa ${temps}.Quina xafogor`)
    } else {
        console.log(`Avui fa ${temps}. Abrigat que fa fred!!`)
    }
}
const message = (temps, cb) => {
    cb(temps)
}
message(temps, clima)



