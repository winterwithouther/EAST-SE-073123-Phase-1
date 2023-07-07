const bookList = document.querySelector("#book-list");

function formatPrice(price) {
	return "$" + Number.parseFloat(price).toFixed(2);
}

//////////////////////////////////////
// render functions  (Data => Display)
//////////////////////////////////////

// create a function renderHeader() that takes the store name from bookStore and adds to the DOM
function renderHeader(bookStore) {
	document.querySelector("#store-name").textContent = bookStore.name;
}

// render footer
function renderFooter(bookStore) {
	document.querySelector("#store").textContent = bookStore.location;
	document.querySelector("#number").textContent = bookStore.number;
	document.querySelector("#address").textContent = bookStore.address;
}

function handleClick(e) {
	//❔ why doesn't this work?
	//🛑 li is not in scope, try debugger
	//🛑 can interact with e to get the parent card node to remove
	//li.remove()
	e.target.closest(".card");
	//❌ e.target.parentElement.parentElement...
}

// function: renderBook(book)
function renderBook(book) {
	const li = document.createElement("li");
	li.className = "card";
	const titleNode = document.createElement("h3");
	const authorNode = document.createElement("p");
	const priceNode = document.createElement("p");
	const imgNode = document.createElement("img");
	const deleteBtn = document.createElement("button");

	titleNode.textContent = book.title;
	authorNode.textContent = book.author;
	priceNode.textContent = formatPrice(book.price);
	imgNode.src = book.imageUrl;
	//1. on delete button click, remove card from DOM
	//🛑 setup diagram: 1. event type; 2. event target; 3. logic
	//❔ will it remove all the cards?
	//❔ how come this specific instance of addEventListener isn't added to all the cards
	//🛑 it's a scope thing; li is scoped to renderBook function
	//🛑 each time we invoke renderBook, 7 li variables are created and only in existance when the function is running
	//🛑 when function returns (whether it be undefined), the variables get cleaned up
	//🛑 closure
	deleteBtn.textContent = "Delete";
	//1a. attach eventListener

	deleteBtn.addEventListener("click", (e) => {
		//1b. write callback function to remove card instance
		li.remove();
	});
	//1c. define cb outside of renderBook

	bookList.append(li);
	li.append(titleNode);
	li.append(authorNode);
	li.append(priceNode);
	li.append(imgNode);
	li.append(deleteBtn);
}

//2. add an submit event listener to the form
//🛑 1. event type; 2. event target; 3. logic
//🛑 demonstrate how to access each form's input value (form.name.value) (form["this-name"].value)
//🛑 specific to forms - check MDN
//2a. save the form node as a const
const bookForm = document.querySelector('#book-form')
//2b. write a testing function to fill in the values of the form
function fillIn(form, data){
	form.title.value = data.title
	form.author.value = data.author 
	form.price.value = data.price 
	form.imageUrl.value = data.imageUrl 
	form.inventory.value = data.inventory 
}
//2c. invoke the fill in function
fillIn(bookForm, {
	title: "Designing Data Intensive Applications",
	author: "Martin Kleppmann",
	price: 20,
	imageUrl: "https://m.media-amazon.com/images/I/91YfNb49PLL._SY522_.jpg",
	inventory: 11
})
//2d. create the event listener 
//🛑 data must look exactly like what we've been passing into render book
//❔ where do we need to look to find this structure (data.js)
bookForm.addEventListener('submit', (e) => {
	e.preventDefault()
	//2e. create the new book and add to DOM
	const newBook = {
		title: e.target.title.value,
		author: e.target.author.value,
		price: e.target.price.value,
		inventory: e.target.inventory.value,
		imageUrl: e.target.imageUrl.value,
		//🛑 why isn't this in the form? what would we want to set reviews to? 
		reviews: []
	}
	//🛑 what differences are there between the new book and the values in data.js
	renderBook(newBook)
})

// 3. WE DO: recap - show the form when you click on the "add new book" button
//🛑 show css; demonstrate by manually changing class in inspector
//🛑 1. event type; 2. event target; 3. logic
// 3a. save the button in a variable
const toggleBtn = document.querySelector('#toggleForm')
// 3b. add the event listener
toggleBtn.addEventListener('click', () => {
	// 3c. hide/show the form
	// 3d. update the button text
	if(bookForm.classList.contains('collapsed')){
		bookForm.classList.remove('collapsed')
		toggleBtn.innerText = 'Hide Form'
	} else {
		bookForm.classList.add('collapsed')
		toggleBtn.innerText = 'Add New Book'
	}
	//🛑 check on MDN
	//bookForm.classList.toggle('collapsed')
})

////////////////////////////////////////////
// call render functions to populate the DOM
////////////////////////////////////////////

renderHeader(bookStore);
renderFooter(bookStore);
bookStore.inventory.forEach(renderBook);
