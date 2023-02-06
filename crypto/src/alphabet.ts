const ALPHABET = `
abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ _-':,.0123456789`

const computeAffinePossibleKeys = () => {
    const keys = [];
    for (let i = 1; i < ALPHABET.length; i++) {
        if(gcd(i, ALPHABET.length) === 1) {
            keys.push(i)
        }
    }
    return keys 
}

const affinePossibleKeys = [
    1,
    3,
    9,
    11,
    13,
    17,
    19,
    23,
    27,
    29,
    31,
    33,
    37,
    39,
    41,
    43,
    47,
    51,
    53,
    57,
    59,
    61,
    67,
    69
]

