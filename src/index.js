//1. RUN THROUGH GIT FORKING PROCESS (SYNC FORK TOO)

//2. Review data.js and order of script tags in HTML <head> 
//🛑 a. defer; b. script at bottom of html; c. script directly in HTML
//❔ What scope is bookStore in? (global - accessible in console) 
console.log(bookStore);

function formatPrice(price) {
  return '$' + Number.parseFloat(price).toFixed(2);
}

//3. Play with debugger - try and access test in console
//debugger
const test = "hi" 

/*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/

//4. update the store name with "easley's technical books"

//4a. hardcode it
//document.querySelector("#store-name").textContent = "Easley's Technical Books"

//4b. do it dynamically
//document.querySelector("#store-name").textContent = bookStore.name

//4c. create a reusable function
function renderHeader(bookStore){
  //🛑 in function scope therefore have to invoke for this code to run
  document.querySelector("#store-name").textContent = bookStore.name
}

//4d. invoke the function
renderHeader(bookStore)

/*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/

//5. create a function for render footer
function renderFooter(bookStore){
  //5a. target nodes to be updated 
  storeNode = document.querySelector('#store')
  numberNode = document.querySelector('#number')
  addressNode = document.querySelector('#address')
  //5b. update the text content of each node
  storeNode.textContent = bookStore.name 
  numberNode.textContent = bookStore.number 
  addressNode.textContent = bookStore.address
}
//5c. invoke the function
renderFooter(bookStore)

/*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/

//6. create a function called renderBook(book)
//6a. save target node as global variable
//❔ why would we save in global scope?
const bookList = document.querySelector('#book-list')

/***
function: create HTML structure for single book and append to page
input: a book object
output: none
***/
function renderBook(book){
  //6b. create new nodes - test as you go
  /*
    <li class="card">
      <h3>Eloquent JavaScript : A Modern Introduction to Programming</h3>
      <p>Marjin Haverbeke</p>
      <p>$10.00</p>
      <img src="https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" alt="Eloquent JavaScript cover"/>
      <button>Delete</button>
    </li>
    */
  const li = document.createElement('li')
  li.className = 'card'
  const titleNode = document.createElement('h3')
  const authorNode = document.createElement('p')
  const priceNode = document.createElement('p')
  const imgNode = document.createElement('img')
  const deleteBtn = document.createElement('button')

  titleNode.textContent = book.title 
  authorNode.textContent = book.author 
  priceNode.textContent = formatPrice(book.price)
  imgNode.src = book.imageUrl 
  deleteBtn.textContent = 'Delete'

  bookList.append(li)
  li.append(titleNode)
  li.append(authorNode)
  li.append(priceNode)
  li.append(imgNode)
  li.append(deleteBtn)
}
//🛑 run once with random book to test before iterating 
//renderBook(bookStore.inventory[2])

//7. iterate over all the books in data and show book on page
bookStore.inventory.map(book => renderBook(book))

