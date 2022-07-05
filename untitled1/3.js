function digital_root(n){
    let sum = 0;
    while (n > 0) {
        sum += n % 10
        n = Math.floor(n/10)
    }
    if (sum >= 10){
        return ( Math.floor(sum/10) + sum % 10)

    }
    else {
        return console.log(sum);
    }

}
console.log(digital_root(8796));