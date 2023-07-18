/* constants */
const resultsDiv = document.querySelector("#results");
const apiSearchForm = document.querySelector("#api-Search");

/* on api search form submit */
apiSearchForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const query = encodeURI(e.target.search.value);
	console.log(query);
});
