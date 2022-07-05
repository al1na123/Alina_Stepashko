function sortByName_Surname(str) {
    let arr = str.toUpperCase().split(";");

    let ready_to_sort = [];

    arr.forEach((elem) => {
        const name_surname = elem.split(":");
        ready_to_sort.push({ name: name_surname[0], surname: name_surname[1] });
    });


    ready_to_sort = ready_to_sort.sort(function (a, b) {
        if (a.surname == b.surname) {
            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        } else {
            return a.surname < b.surname ? -1 : 1;
        }
    });

    let result = "";

    ready_to_sort.forEach((person) => {
        result += `(${person.surname}, ${person.name})`;
    });

    return result;
}

const s =
    "Fred:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

console.log(sortByName_Surname(s));

