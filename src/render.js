/* helper function to format the price of a book */
function formatPrice(price) {
	let formattedPrice = Number(price).toFixed(2);
	return `$${formattedPrice}`;
}

/* adds name of bookstore to header */
function renderHeader(store) {
	document.querySelector("#store-name").textContent = store.name;
}

/* adds details of bookstore to footer */
function renderFooter(store) {
	const footerDivs = document.querySelectorAll("footer div");
	footerDivs[0].textContent = store.name;
	footerDivs[1].textContent = store.number;
	footerDivs[2].textContent = store.address;
}

/* renders one book object as card*/
function renderBook(book) {
	const li = document.createElement("li");
	const titleNode = document.createElement("h3");
	const authorNode = document.createElement("p");
	const priceNode = document.createElement("p");
	const imgNode = document.createElement("img");
	const deleteBtn = document.createElement("button");
	const pInventory = document.createElement("input");

	li.className = "card";
	titleNode.textContent = book.title;
	authorNode.textContent = book.author;
	priceNode.textContent = formatPrice(book.price);
	imgNode.src = book.imageUrl;
	pInventory.type = "number";
	pInventory.value = book.inventory;

	deleteBtn.textContent = "Delete";
	deleteBtn.addEventListener("click", (e) => {
		fetch(`${url}/books/${book.id}`, {
			method: "DELETE",
		})
			.then((res) => {
				if (res.ok) {
					li.remove();
				} else {
					renderError("no delete :(");
				}
			})
			.catch((err) => console.log(err));
	});

	pInventory.addEventListener("change", (e) => {
		const newInventoryCount = parseInt(e.target.value);
		fetch(`${url}/books/${book.id}`, {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ inventory: parseInt(newInventoryCount) }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log("yay");
			})
			.catch((err) => console.log("sad"));
	});

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
	bookList.append(li);
	li.append(titleNode);
	li.append(authorNode);
	li.append(priceNode);
	li.append(imgNode);
	li.append(pInventory);
	li.append(deleteBtn);

	return li;
}


/*
*
* Below helper functions will create an element with properties
* Usage: 
*
* createElement("img", {
* 	src: firstEpisode.image.original,
*	width: "400",
* })
*
*/

/* helper function to iterate over key value pairs or properties and assign to element */
function assignElementProperties(element, properties) {
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
	for (const [property, value] of Object.entries(properties)) {
		assignPropertyValue(element, property, value);
	}
}

/* helper function to assign one property to one value for element */
function assignPropertyValue(element, property, value) {
	if (isEventListener(property)) { //if onSomeEvent, its an event listener
		element.addEventListener(extractEventType(property), value);
		return;
	}
	element[property] = value;
}

/* returns true if property starts with 'on' (therefore it is an event listener) */
function isEventListener(property) {
	return property.slice(0, 2) === "on";
}

/* extracts event string from property (e.g. onSomeEvent => someevent) */
function extractEventType(property) {
	return property.slice(2).toLowerCase();
}

/* create an element based on tagName with properties (e.g. name, placeholder, etc) */
function createElement(tagName, properties) {
	const el = document.createElement(tagName);
	assignElementProperties(el, properties);
	return el;
}



