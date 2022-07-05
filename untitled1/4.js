function count_pairs (arr, sum) {
    let sorted_arr = arr.sort();
    let count = 0;
    let first = 0;
    let last = arr.length - 1;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == arr[i+1] && arr[i] + arr[i+1] === sum ){
                count = count + 1;
            }
        }
        return count;

}
console.log(count_pairs([4, 3, 2, 1, 4, 5], 8));
