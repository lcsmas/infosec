class Caesar {
    encrypt = (plain: string, secretKey: number): string => {
        let cipher = ''
        for(let i = 0; i < plain.length; i++) {
            cipher += ALPHABET[
                mod(ALPHABET.indexOf(plain.charAt(i)) - secretKey, ALPHABET.length)
            ]
        }
        return cipher
    }
    decrypt = (cipherText: string, secretKey: number) => {
        let decipher = ''
        for(let i = 0; i < cipherText.length; i++) {
            decipher += ALPHABET[
                mod(ALPHABET.indexOf(caesarCipher.charAt(i)) + secretKey, ALPHABET.length)
            ];
        }
        return decipher
    }
    bruteForce = () => {
        //todo
    }
    frequencyAnalysis = () => {
        //todo
    }
    knuthShuffle = () => {
        //todo
    }
}

const key = 2
const caesar = new Caesar();
const caesarCipher = caesar.encrypt(plain, key)
const caesarDecipher = caesar.decrypt(caesarCipher, key)

appDiv.innerHTML += `
    <h2> Caesar cipher </h2>
    <b>plain</b> : ${plain} <br>  <br>
    <b>cipher</b> : ${caesarCipher}  <br> <br>
    <b>decipher</b> : ${caesarDecipher} <br> <br>
   `