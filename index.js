function inverteInput(string) {
    let array = [];
    for (let i = 0; i < string.length; i++) {
        array.unshift(parseInt(string[i]));
    }
    return array;
}

function multiplicaIndicesPares(arr) {
    for (let i = 1; i < arr.length; i += 2) {
        let resultado = arr[i] * 2;
        if (resultado >= 10) {
            arr[i] = resultado - 9;
        } else {
            arr[i] = resultado;
        }
    }
    return arr;
}

function somaArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

module.exports = function cardValidator(string) {

    let stringReversa = inverteInput(string);
    let indicesParesMultiplica = multiplicaIndicesPares(stringReversa);
    let somaTotal = somaArray(indicesParesMultiplica);
    if (somaTotal % 10 === 0) {
        return "true";
    } else {
        return "false";
    }
};