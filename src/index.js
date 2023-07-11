const url = "http://localhost:3000";
fetch(`${url}/books`)
	.then((res) => res.json())
	.then((books) => books.forEach((book) => renderBook(book)));
fetch(`${url}/stores/1`)
	.then((res) => res.json())
	.then((store) => {
		renderHeader(store);
		renderFooter(store);
	})
	.catch((err) => document.querySelector("#address").textContent = "something went wrong");

//////////////////////
// render functions //
//////////////////////
function formatPrice(price) {
	return "$" + Number.parseFloat(price).toFixed(2);
}

function renderHeader(bookStore) {
	document.querySelector("#store-name").textContent = bookStore.name;
}

function renderFooter(bookStore) {
	document.querySelector("#address").textContent = bookStore.address;
	document.querySelector("#number").textContent = bookStore.number;
	document.querySelector("#store").textContent = bookStore.location;
}

const bookList = document.querySelector("#book-list");
function renderBook(book) {
	const li = document.createElement("li");
	const titleNode = document.createElement("h3");
	const authorNode = document.createElement("p");
	const priceNode = document.createElement("p");
	const imgNode = document.createElement("img");
	const deleteBtn = document.createElement("button");

	li.className = "card";
	titleNode.textContent = book.title;
	authorNode.textContent = book.author;
	priceNode.textContent = formatPrice(book.price);
	imgNode.src = book.imageUrl;

	deleteBtn.textContent = "Delete";
	deleteBtn.addEventListener("click", (e) => {
		li.remove();
	});

	bookList.append(li);
	li.append(titleNode);
	li.append(authorNode);
	li.append(priceNode);
	li.append(imgNode);
	li.append(deleteBtn);
	const pStock = document.createElement("p");
	pStock.className = "grey";
	if (book.inventory === 0) {
		pStock.textContent = "Out of stock";
	} else if (book.inventory < 3) {
		pStock.textContent = "Only a few left!";
	} else {
		pStock.textContent = "In stock";
	}
	li.append(pStock);
}

////////////////////////////////////////////////////////////////
// Event Listeners/Handlers (Behavior => Data => Display) //////
////////////////////////////////////////////////////////////////

const toggleBookFormButton = document.querySelector("#toggleForm");
const bookForm = document.querySelector("#book-form");

// function to toggle classes
function toggleBookForm() {
	const bookFormHidden = bookForm.classList.toggle("collapsed");
	if (bookFormHidden) {
		toggleBookFormButton.textContent = "New Book";
	} else {
		toggleBookFormButton.textContent = "Hide Book Form";
	}
}

// hide and show the new book form when toggle buton is clicked
toggleBookFormButton.addEventListener("click", (e) => {
	toggleBookForm();
});

// handle submitting new book form
bookForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const book = {
		title: e.target.title.value,
		author: e.target.author.value,
		price: parseFloat(e.target.price.value),
		inventory: parseInt(e.target.inventory.value),
		imageUrl: e.target.imageUrl.value,
		reviews: [],
	};
	e.target.reset();
	toggleBookForm();
	renderBook(book);
});
