class Affine {
    encrypt = (plain: string, key: {a: number, b: number}) => {
        let cipher = ''
        for (let index = 0; index < plain.length; index++) {
            const char = plain.charAt(index)
            const x = ALPHABET.indexOf(char)
            const y = mod(key.a * x + key.b, ALPHABET.length)
            cipher += ALPHABET[y]
        }
        return cipher;
    }
    decrypt = (cipher: string, key: {a: number, b: number}) => {
        const a_inverse = computeModularInverse(key.a, ALPHABET.length)
        let decipher = ''
        for (let index = 0; index < cipher.length; index++) {
            const char = cipher.charAt(index);
            const y = ALPHABET.indexOf(char);
            const x = mod((y-key.b)*a_inverse, ALPHABET.length)
            decipher += ALPHABET[x]
        }
        return decipher
    }
    

    bruteForce = () => {
        //todo
    }
}

const affineKey = { a: 51, b:3 }
const affine = new Affine();
const affineCipher = affine.encrypt(plain, affineKey)
const affineDecipher = affine.decrypt(affineCipher, affineKey) 


appDiv.innerHTML += `
    <h2> Affine cipher</h2>
    <b>plain</b> : ${plain} <br>  <br>
    <b>cipher</b> : ${affineCipher}  <br> <br>
    <b>decipher</b> : ${affineDecipher} <br> <br>
   `