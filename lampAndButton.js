function lampAndButton(num) {
    let lampIsOn = false;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            lampIsOn = !lampIsOn;
        }
    }
    if (lampIsOn) {
        return "Lampu Hidup";
    } else {
        return "Lampu Mati";
    }
}
console.log(lampAndButton(102));
