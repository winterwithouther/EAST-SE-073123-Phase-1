const bookList = document.querySelector('#book-list')

function formatPrice(price) {
  return '$' + Number.parseFloat(price).toFixed(2);
}

//////////////////////////////////////
// render functions  (Data => Display)
//////////////////////////////////////

// create a function renderHeader() that takes the store name from bookStore and adds to the DOM
function renderHeader(bookStore) {
  document.querySelector('#store-name').textContent = bookStore.name;
}

// render footer
function renderFooter(bookStore) {
  document.querySelector('#store').textContent = bookStore.location;
  document.querySelector('#number').textContent = bookStore.number;
  document.querySelector('#address').textContent = bookStore.address;
}

function handleClick(e) {
  //❔ why doesn't this work?
  //🛑 li is not in scope, try debugger
  //🛑 can interact with e to get the parent card node to remove
  //li.remove()
  e.target.closest('.card')
  //❌ e.target.parentElement.parentElement...
}

// function: renderBook(book)
function renderBook(book){
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
  //1. on delete button click, remove card from DOM
  //🛑 pseudocode, follow setup diagram
  //❔ will it remove all the cards?
  //❔ how come this specific instance of addEventListener isn't added to all the cards
  //🛑 it's a scope thing; li is scoped to renderBook function
  //🛑 each time we invoke renderBook, 7 li variables are created and only in existance when the function is running
  //🛑 when function returns (whether it be undefined), the variables get cleaned up
  //🛑 closure
  deleteBtn.textContent = 'Delete'
  //1a. attach eventListener

  deleteBtn.addEventListener('click', (e) => {
    //1b. write callback function to remove card instance
    li.remove();
  })
  //1c. define cb outside of renderBook

  bookList.append(li)
  li.append(titleNode)
  li.append(authorNode)
  li.append(priceNode)
  li.append(imgNode)
  li.append(deleteBtn)
}

//2. add an submit event listener to the form
//🛑 demonstrate how to access each form's input value (form.name.value) (form["this-name"].value)
//🛑 specific to forms - check MDN
//////////////////////////////////////////// 
// call render functions to populate the DOM
////////////////////////////////////////////

renderHeader(bookStore);
renderFooter(bookStore);
bookStore.inventory.forEach(renderBook);

