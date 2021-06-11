// Template Strings

const postTitle = 'É bolacha ou biscoito'
const postAuthor = 'Matheus Saad'
const postComments = 15


// Usando concatenação
const postMessage1 = 'O post "' + postTitle + '" , do ' + postAuthor + ', tem ' + postComments + ' comentários.'
console.log(postMessage1)


// Usando Template strings
const postMessage = `O post "${postTitle}", do ${postAuthor}, tem ${postComments} comentários.`
console.log(postMessage)

// Criando templates HTML

const html = `

      <h2>${postTitle}</h2>
      <p>Author: ${postAuthor}</p>
      <span>Este post tem ${postComments} comentários</span>

`

console.log(html)