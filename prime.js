function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (i === num - 1 && num % i !== 0) {
            return "Bilangan prima";
        }
        if (num % i === 0) {
            return "Bukan bilangan prima";
        }
    }
}

console.log(isPrime(77));
