// Inteiros e decimais

const radius = 10
const pi = 3.14


// Operadores aritméticos
console.log(radius * pi)

console.log(radius / pi)


const reminder = 5 % 2 // resto da operação
console.log(reminder)


const area = pi * radius ** 2 // area do circulo
console.log(area)


// Ordem das operações

      // 1º Parenteses
      // 2º Expoentes ou raízes
      // 3º Multiplicação e divisão
      // 4º adição e subtração

const crazyOperation = 5 * (10 - 3) ** 2
console.log(crazyOperation)

// operadores de incremento e decremento

let postLikes = 10

postLikes = postLikes + 1

console.log(postLikes)

postLikes++

console.log(postLikes)



// Operadores addition, subtraction, multiplication e division

postLikes = postLikes + 10
console.log(postLikes)

postLikes += 10
console.log(postLikes)

postLikes -= 5
console.log(postLikes)

postLikes *= 3
console.log(postLikes)

postLikes /= 2 // short hands
console.log(postLikes)


// NaN not a number

console.log(7 / 'oi')


// Concatenação de string com number

const likesMessage = 'O post tem ' + postLikes + ' likes.'
console.log(likesMessage)