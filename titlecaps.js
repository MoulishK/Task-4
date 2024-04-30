let strArray = ["apple", "banana", "cherry"];


const toTitleCase = function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
let titleCapsArray = strArray.map(toTitleCase);

console.log("Title Caps Array:", titleCapsArray);
