function first_non_repeating_letter(str) {
    const len = str.length;
    for (let i = 0; i < len; i++) {
        let letter = str.charAt(i);
        if (i === str.lastIndexOf(letter)) {
            return letter
        }
        else {
            return "None"
        }

    }
}
console.log(first_non_repeating_letter('jrtjrt'));