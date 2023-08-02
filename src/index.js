//✅ 1. fork and sync git

//✅ 2. Review data.js and order of script tags in HTML <head> 

function formatPrice(price) {
  return '$' + Number.parseFloat(price).toFixed(2);
}

//✅ 3. explore the debugger


//✅ 4. update the store name with "easley's technical books"

function renderHeader(store) {
  let headerTitle = document.querySelector("#store-name");
  headerTitle.innerText = store.name;
}

renderHeader(bookStore);

//✅ 5. create a function for render footer

function renderFooter(store) {
  let storeFooter = document.querySelector("#store");
  storeFooter.innerText = store.name;
  
  let phoneFooter = document.querySelector("#number");
  phoneFooter.innerText = store.number;
  
  let addressFooter = document.querySelector("#address");
  addressFooter.innerText = store.address;
}

renderFooter(bookStore);



//✅ 6. create a function called renderBook(book)

/***
function: create HTML structure for single book and append to page
input: a book object
output: none
***/

//✅ 7. iterate over all the books in data and show book on page

