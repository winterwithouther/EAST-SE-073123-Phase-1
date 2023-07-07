// 🛑 1. RUN THROUGH GIT FORKING PROCESS (SYNC FORK TOO)

// 🛑 2. Review data.js and order of script tags in HTML <head> 
// a. defer; b. script at bottom of html; c. script directly in HTML
// ❔ What scope is bookStore in? (global - accessible in console) 
console.log(bookStore);

function formatPrice(price) {
  return '$' + Number.parseFloat(price).toFixed(2);
}

// 3. Play with debugger - try and access test in console
//debugger
const test = "hi" 

//4. update the store name with "easley's technical books"
//4a. hardcode it
document.querySelector("#store-name").textContent = "Easley's Technical Books"
//4b. do it dynamically
document.querySelector("#store-name").textContent = bookStore.name

// create a function called renderBook(book)
// it will take a book object as an argument
// and create the html struture for rendering 
// that book and insert it into our webpage!

// function renderBook(book) {
// should create an li element that looks something like this:
  // <li class="list-li">
  //   <h3>Eloquent JavaScript : A Modern Introduction to Programming</h3>
  //   <p>Marjin Haverbeke</p>
  //   <p>$10.00</p>
  //   <img src="https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" alt="Eloquent JavaScript cover"/>
  //   <button>Delete</button>
  // </li>

  