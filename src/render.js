/* helper function to format the price of a book */
function formatPrice(price) {
	return "$" + Number.parseFloat(price).toFixed(2);
}

/* helper function to add a single store to select store dropdown */
function addSelectOptionForStore(store) {
	const option = document.createElement("option");
	// the option value will appear within e.target.value
	option.value = store.id;
	// the options textContent will be what the user sees when choosing an option
	option.textContent = store.name;
	storeSelector.append(option);
}

/* render list of stores to select from */
function renderStoreSelectionOptions(stores) {
	storeSelector.innerHTML = "";
	stores.forEach(addSelectOptionForStore);
	storeSelector.addEventListener("change", (e) => {
		getJSON(`${url}/stores/${e.target.value}`).then((store) => {
			renderHeader(store);
			renderFooter(store);
		});
	});
}

/* adds name of bookstore to header */
function renderHeader(bookStore) {
	document.querySelector("#store-name").textContent = bookStore.name;
}

/* adds details of bookstore to footer */
function renderFooter(bookStore) {
	document.querySelector("#address").textContent = bookStore.address;
	document.querySelector("#number").textContent = bookStore.number;
	document.querySelector("#store").textContent = bookStore.location;
}

/* renders one book object as card*/
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
	//✅ 2c.
	return li;
}
