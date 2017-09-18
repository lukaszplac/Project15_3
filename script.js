//ZADANIA PODSTAWOWE
//Zadanie 1
let p_zad1 = function(...words) {
  return words.join('-');
}

//Zadanie 2
let multiply = (a = 1, b = 1) => {return a * b};

//Zadanie 3
let average = (...args) => { return args.reduce((a, b) => {return (a + b)}) / args.length }

//ZADANIA DODATKOWE Codewars
//Zadanie 1 - rozwiazanie (przeszlo testy na Codewars)
function buildString(...template){
  return `I like ${template.join(', ')}!`;
}

//Zadanie 2 - rozwiazanie (przeszlo testy na Codewars)
function shuffleIt(arr, ...arrays){ //rest
  arrays.forEach(indices => { //arrow
    arr = swap(arr, ...indices); //spread
  });
  return arr;
}

function swap(arr, i1, i2) { //destr
  h = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = h;
  return arr;
}

//Zadanie 3 - rozwiazanie(przeszlo testy na Codewars)
//juz wczesniej w zadaniach podstawowuch tez uzywalem funkcji reduce do liczenia sredniej
var Sum = 'sum = function(arr){ return arr.reduce((a,b)=> {return a + b} ); }'; 

//Zadanie 4 - rozwiazanie(przeszlo testy na Codewars)
function spread(func, args) {
  return func(...args);
}


//Simple tests
//Zad1
console.log("Podstawowe zad1 simple tests");
console.log(p_zad1("psczolka", "maja", "se", "latala"));

//Zad2 - multiply
console.log("Podstawowe zad2 simple tests");
console.log(multiply(1,5));
console.log(multiply(1));

//Zad3 - average
console.log("Podstawowe zad3 simple tests");
console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

//Zad4 - grades
console.log("Podstawowe zad4 simple tests");
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

//Zad5 - destruct
console.log("Podstawowe zad5 simple tests");
const tab = [1, 4, 'Iwona', false, 'Nowak'];
const [, ,firstName, ,lastName] = tab;
console.log(firstName);
console.log(lastName);