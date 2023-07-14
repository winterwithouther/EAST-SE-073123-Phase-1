const bookList = document.querySelector("#book-list");
const toggleBookFormButton = document.querySelector("#toggle-form");
const bookForm = document.querySelector("#book-form"); 
const toggleStoreFormButton = document.querySelector("#toggle-store-form");
const storeSelector = document.querySelector('#store-selector'); 
const storeForm = document.querySelector("#store-form"); 
const url = "http://localhost:3000";


/* event listeners for toggling forms */
toggleStoreFormButton.addEventListener('click', toggleStoreForm);
toggleBookFormButton.addEventListener('click', toggleBookForm);


/* get requests for loading store and book data */
getJSON('http://localhost:3000/stores')
  .then((stores) => {
    renderStoreSelectionOptions(stores);
    renderHeader(stores[0])
    renderFooter(stores[0])
  })
  .catch(err => {
    console.error(err);
  });
getJSON("http://localhost:3000/books")
  .then((books) => {
    books.forEach(renderBook)
  })
  .catch(renderError);


//////////////////////////////////////////////////////////
// START HERE
//////////////////////////////////////////////////////////

// New Function to populate the store form with a store's data to update 
function populateStoreEditForm(store) {
  const form = document.querySelector('#store-form');
  fillIn(form, store);
  showStoreForm();
}

/* book form submit */
bookForm.addEventListener('submit', (e) => { 
  e.preventDefault();
  // pull the info for the new book out of the form
  const book = {
    title: e.target.title.value,
    author: e.target.author.value,
    price: e.target.price.value,
    reviews: [],
    inventory: Number(e.target.inventory.value),
    imageUrl: e.target.imageUrl.value
  }
    
  // pessimistic rendering here:
  postJSON("http://localhost:3000/books", book)
    .then(book => {
      renderBook(book)
      e.target.reset();
    })
    .catch(renderError);  
})

/* store form submit */

// Store Form button
let storeFormVisible = false;

function toggleStoreForm() {
  if (storeFormVisible) {
    hideStoreForm();
  } else {
    showStoreForm();
  }
}

function hideStoreForm() {
  document.querySelector('#store-form').classList.add('collapsed');
  storeFormVisible = false;
  storeEditMode = false;
  storeForm.reset();
  toggleStoreFormButton.textContent = "New Store";
}

function showStoreForm() {
  document.querySelector('#store-form').classList.remove('collapsed');
  storeFormVisible = true;
  toggleStoreFormButton.textContent = "Hide Store form";
  storeForm.querySelector('[type="submit"]').value = storeEditMode ? "SAVE STORE" : "ADD STORE";
}

toggleStoreFormButton.addEventListener('click', toggleStoreForm);


storeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const store = {
    name: e.target.name.value,
    address: e.target.address.value,
    number: e.target.number.value,
    hours: e.target.hours.value,
    location: e.target.location.value
  };
  
  if (storeEditMode) {
    // ✅ write code for updating the store here
    
  } else {
    postJSON("http://localhost:3000/stores", store)
    .then(addSelectOptionForStore)
    .catch(renderError);
  }
  hideStoreForm()
  e.target.reset();
})

// edit store button
const editStoreBtn = document.querySelector('#edit-store');
let storeEditMode = false;

editStoreBtn.addEventListener('click', (e) => {
  const selectedStoreId = document.querySelector('#store-selector').value;
  storeEditMode = true;
  getJSON(`http://localhost:3000/stores/${selectedStoreId}`)
    .then(populateStoreEditForm)
})

