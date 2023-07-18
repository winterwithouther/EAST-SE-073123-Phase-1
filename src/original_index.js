/* constants */
const bookList = document.querySelector("#book-list")

/* get requests for loading store */
getJSON("http://localhost:3000/stores/1")
	.then((store) => {
		renderHeader(store);
		renderFooter(store);
	})
	.catch((e) => console.error(e));