/*
01 - No index.html deste diretório (exercício-02):

- Declare uma marcação HTML;
- Modifique a linguagem para português do Brasil;
- Remova as meta tags desnecessárias;
- Modifique o title para "Exercício 02";
- E linke este arquivo, app.js, antes do fechamento da tag body.
*/

/*
02 - Inicie o seu servidor local e abra o console do browser.
*/

/*
03 - Exiba a string 'Grandes poderes trazem grandes responsabilidades.' no console do browser.

Utilize os espaços entre os comentários abaixo para executar os códigos dos exercícios. Inclusive este.
*/

console.log("Grandes poderes trazem grandes responsabilidades");

/*
04 - Comente o console.log acima, e:

- Armazene a palavra 'Tom' em uma constante "tom";
- Armazene a palavra 'Hanks' em uma constante "firstTom";
- Armazene a palavra 'Cruise' em uma constante "secondTom";
- Declare uma constante "myFavoriteTom" que recebe nome, espaço, e sobrenome do Tom que você mais gosta;
- Exiba a "myFavoriteTom" no console do browser.

  
*/

const tom = "Tom";
const firstTom = "Hanks";
const secondTom = "Cruise";
const myFavoriteTom = tom + " " + secondTom;
console.log(myFavoriteTom);

// com template strings
//   `Meu artista favorito é: ${tom} ${secondTom}`;

/*
05 - Comente o console.log acima, e:

- Armazene a palavra 'JavaScript' em uma constante "programmingLanguage";
- Armazene a junção das letras "J" e "S", da programmingLanguage, em uma constante "js";
- As letras não devem ser digitadas manualmente;
- Exiba a "js" no console do browser;
*/
const programmingLanguage = "JavaScript";
const js = programmingLanguage["0"] + programmingLanguage["4"];
console.log(js);

/*
06 - Comente o console.log acima, e,

- Armazene, em uma constante "mdn", a junção das letras iniciais das 3 palavras que a constante "mozilla" armazena;
- As iniciais não devem ser digitadas manualmente;
- Exiba a "mdn" no console do browser;
*/

const mozilla = "Mozilla Developer Network";
const mdn = mozilla["0"] + mozilla[8] + mozilla[18];
console.log(mdn);

/*
07 - Comente o console.log acima, e,
- Exiba no console do browser a quantidade de caracteres que a constante "programmingLanguage" possui;
*/

console.log(programmingLanguage.length);

/*
08 - Comente o console.log acima, e,

- Exiba no console a última letra da string que a "randomWord" (abaixo) armazena, mas com a condição a seguir;
- Ao invés de inserir manualmente a posição do último caractere, faça com que a obtenção da última letra funcione para qualquer palavra que a "randomWord" receber;
- Dica: utilize a propriedade ".length".
*/

let randomWord = "Araponga";
console.log(randomWord[randomWord.length - 1]);

/*
09 - Comente o console.log acima, e,

- Exiba, no console, a string que "summerMessage" (abaixo) armazena, mas com todas as letras minúsculas;
- Não modifique a string da "summerMessage";
- Não digite a nova string manualmente.
*/

const summerMessage = "O VERÃO CHEGA NESTE FIM DE SEMANA";

console.log(summerMessage.toLowerCase());

/*
10 - Comente o console.log acima, e,

- Exiba, no console, a string que "winterMessage" (abaixo) armazena, mas com todas as letras maiúsculas;
- Não modifique a string da "winterMessage";
- Não digite a nova string manualmente.
*/

const winterMessage = "o inverno está chegando";
console.log(winterMessage.toUpperCase());

/*
11 - Comente o console.log acima, e,

- Exiba, no console, o index do caractere "v" da "winterMessage";
*/

const index = winterMessage.indexOf("v");
console.log(index);

/*
12 - Comente o console.log acima, e,

- Exiba, no console, o index da última ocorrência do caractere "n" da "winterMessage".
*/
const index1 = winterMessage.lastIndexOf("n");
console.log(index1);

/*
13 - Comente o console.log acima, e,

- Após a const "harryPotterAuthor" (abaixo), exiba no console a parte "J.K." da string "harryPotterAuthor";
- Não digite a string "J.K." manualmente;
- Slice corta parte da estrutura da frase,neste caso pode ser feita com slice
*/
const harryPotterAuthor = "J.K. Rowling";
console.log(harryPotterAuthor.slice(0, 4));

/* 
  Ou com concatenação pegando a letra pelo index
 const harryPotterAuthor = "J.K. Rowling";
 console.log(harryPotterAuthor["0"] + "." + harryPotterAuthor[2] + ".");
 */

/*
14 - Comente o console.log acima, e,

- Após a const "bestMovie" (abaixo), declare uma constante "realBestMovie";
- Atribua à "realBestMovie" a mesma string da "bestMovie", mas substituindo o nome do filme para "Moonlight";
- Exiba a "realBestMovie" no console.
- Neste caso usaremos o método replace
*/

const bestMovie = 'E o Oscar de melhor filme vai para: "La la Land"!';
const realBestMovie = bestMovie.replace("La la Land", "Moonlight");
console.log(realBestMovie);

/*
15 - Comente o console.log acima, e,

- Abaixo deste comentário, armazene o resto de 10 dividido por 3 em uma constante "reminder";
- Exiba a reminder no console. O resultado deve ser 1;
*/

const reminder = 10 % 3;
console.log(reminder);

/*
16 - Comente o console.log acima, e,

- Abaixo da let "episodes", incremente o valor dela em 1;
- Após o incremento, exiba a let "episodes" no console;
- O valor exibido no console deve ser 7.
*/

let episodes = 6;
// episodes ++ 1
// console.log(episodes)
/*
17 - Comente o console.log acima, e,

- Decremente a let "episodes" em 1;
- Após o decremento, exiba a let "episodes" no console;
- O valor exibido no console deve ser 6.
*/

// episodes -- 1
// console.log(episodes)

/*
18 - Comente o console.log acima, e,

- Utilize o operador addition assignment para atualizar o valor da let "episodes" para 10;
- Após a atribuição, exiba a let "episodes" no console.
*/

episodes += 4;
console.log(episodes);

/*
19 - Comente o console.log acima, e,

- Abaixo deste comentário, armazene a string 'O nº de episódios é: NUMERO_DE_EPISÓDIOS' em uma constante "allEpisodes";
- Insira a let "episodes" no lugar de "NUMERO_DE_EPISÓDIOS";
- Exiba a "allEpisodes" no console.
*/

const allEpisodes = `O nº de episódios é: ` + episodes;
console.log(allEpisodes);

/*
20 - Comente o console.log acima, e,

- Descomente a const "bookMessage" e o console.log abaixo;
- Encontre uma forma de incluir as aspas simples do nome do livro na string;
- Não modifique nenhuma aspas da string para aspas duplas.
- Não use template strings.
*/

// O prettier está corrigindo para aspas duplas conforme abaixo
// exercício feito com escape das aspas
// const bookMessage = '\'O Conto da Aia\' é um dos livros mais vendidos da década.';

// resultado depois da correção do prettier
const bookMessage = "'O Conto da Aia' é um dos livros mais vendidos da década.";
console.log(bookMessage);

/*
21 - Comente o console.log acima (e a const bookMessage caso não tenha descoberto a resolução), e,

- Após a const "name" (abaixo), declare uma let "newName";
- A let "newName" deverá armazenar uma string ES5 com o mesmo valor que "name" armazena;
- Só que com as letras iniciais do nome e sobrenome maiúsculas;
- Não digite a nova string manualmente.
- Não modifique a string da const "name";
- Exiba a "newName" no console;
*/

const name = "walter white";
let newName =
  name[0].toUpperCase() +
  name.slice(1, 6) +
  " " +
  name[7].toUpperCase() +
  name.slice(8);

console.log(newName);
// O slice, se não especificar o final da string, vai pegar do index indicado até o final

/*
22 - Comente o console.log acima, e,

- Atribua à "newName" uma template string;
- A template string deverá resultar no mesmo valor que a "newName" tinha anteriormente (nome e sobrenome com letras iniciais maiúsculas);
- Não digite a nova string manualmente.
- Não modifique a string da const "name";
- Exiba a "newName" no console;
- Perceber que com template strings economizamos muitas linhas de código
*/

newName = `${name[0].toUpperCase()}${name.slice(
  1,
  6
)} ${name[7].toUpperCase()}${name.slice(8)}`;
console.log(newName);
