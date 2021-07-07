// Arrays

let heroes = ["Batman", "Catwoman", "Iron Man"];

console.log(heroes); // busca todos os ítens
console.log(heroes[3 - 2]); //busca a posição solicitada
console.log(heroes.length); // quantidade de ítens no array

//troca o ítem 2 pela nova string
heroes[2] = "Spider-Man";
console.log(heroes);

// busca de ítem na posição indicada
const ages = [31, 25, 39, 40, 25];
console.log(ages[2]);

// Arrays com diferentes tipos
const randomArray = ["Parker", "Diana", 19, 18];
console.log(randomArray);

// mostra os ítens do array separados por virgulas
const joinHeroes = heroes.join("-");
console.log(joinHeroes);

//mostra a primeira posição do ítem 25
const indexOf25 = ages.indexOf(25);
console.log(indexOf25);

//mostra a última posição do ítem 25
const lastIndexOf25 = ages.lastIndexOf(25);
console.log(lastIndexOf25);

// método concat junta os arrays selecionados com o array indicado antes dele
const moreHeroes = heroes.concat(["Superman", "Wolverine"]);
console.log(moreHeroes);

// acrescenta ao array principal os itens novos
const pushToHeroes = heroes.push("Cyclops", "Hulk");
console.log(heroes);

// exclui o último ítem do array
const popHeroes = heroes.pop();
console.log(heroes);
