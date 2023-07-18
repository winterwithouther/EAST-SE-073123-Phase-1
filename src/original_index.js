/* constants */
const bookForm = document.querySelector("#book-form");

/* book form submit */
bookForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const book = {
		title: e.target.title.value,
		author: e.target.author.value,
		price: e.target.price.value,
		reviews: [],
		inventory: Number(e.target.inventory.value),
		imageUrl: e.target.imageUrl.value,
	};
  //helper function from request_helpers.js
	postJSON("http://localhost:3000/books", book).then((book) => {
		renderBook(book);
		e.target.reset();
	});
});

/* get requests for loading store and book data */
getJSON("http://localhost:3000/stores/1")
	.then((store) => {
		renderHeader(store);
		renderFooter(store);
	})
	.catch((e) => console.error(e));

getJSON("http://localhost:3000/books")
	.then((books) => books.forEach(renderBook))
	.catch((e) => console.error(e));
