function filter_arr(arr){
    const result = arr.filter(elem => elem > 0 && typeof elem != "string");
    return console.log(result);
}
filter_arr(['a', 123, '123', 1234]);