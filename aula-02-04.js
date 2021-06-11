// Métodos comuns de strings

const email = 'laracroft@rogermelo.com.br'

const lastIndexOfA = email.lastIndexOf('a')// índice do último carácter escolhido

console.log(lastIndexOfA)

// Slice: corta a string no índice do último carácter escolhido
const emailSlice = email.slice(0, 9) // neste caso corta fora carácter depois do carácter 10 
console.log(emailSlice)

// const emailReplace = email.replace('l', 'y') // Substitui um carácter por outro
// console.log(emailReplace)

const emailReplace = email.replace('laracroft', 'chun-li') // Substitui caracteres por outros
console.log(emailReplace, email)
