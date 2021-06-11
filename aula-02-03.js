//       Strings: Encadeamento de caracteres envolvidos por aspas
console.log('Hello, world')

const email = 'leon@rogermelo.com.br'

console.log(email)

//       Concatenação de strings feitas com o sinal +
const firstName = 'Nathan'
const lastName = 'Drake'
const fullName = firstName + ' ' + lastName
console.log(fullName)

//       Acessando caracteres

console.log(fullName[0])

//     Length método para medir o tamanho de uma string

console.log(fullName.length)

//       Métodos de string: pedaços de códigos embutidos na string para executar determinados conteúdos

console.log(fullName.toUpperCase())//Parenteses indica que é método e precisa ser chamado

const result = fullName.toLowerCase()// Não modificam a string original
console.log(result)

const index = email.indexOf('@') // indexOf vai encontrar o carácter indicado nos parenteses

console.log(index)
// 