const mod = (n: number, m: number): number => {
    return ((n % m) + m) % m; 
}

// Algorithme d'Euclide (https://fr.wikipedia.org/wiki/Algorithme_d%27Euclide)
const gcd = (a: number, b: number): number => {
    a = Math.abs(a);
    b = Math.abs(b);
    if(b > a) {
        const tmp = a;
        a = b;
        b = tmp;
    }
    while(true) {
        const remainder = mod(a, b)
        if(remainder === 0) {
            return b;
        }
        a = b;
        b = remainder;
    }
}

// Algorithme d'Euclide étendu (https://fr.wikipedia.org/wiki/Algorithme_d%27Euclide_%C3%A9tendu)
const computeModularInverse = (a: number, b: number) => {
    let [r, r_prime, u, u_prime] = [a, b, 1,  0]
    let q : number;
    while(r_prime !== 0) {
        q = Math.floor(r/r_prime);
        [r, u,  r_prime, u_prime] = [r_prime, u_prime,  r - q*r_prime, u - q*u_prime]
    }
    return u;
}