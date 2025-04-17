import numeral from 'numeral';

export function fCurrency(number) {
    return numeral(number).format(Number.isInteger(number) ? '0,0' : '0,0.00');
}

export function getRandomNumber(digit) {
    return Math.random().toFixed(digit).split('.')[1];
}
