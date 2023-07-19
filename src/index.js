/* constants */
const resultsDiv = document.querySelector("#results");
const apiSearchForm = document.querySelector("#search-form");
const apiRoot = "https://api.tvmaze.com";

/*✅ 1. on tv maze api search form submit */
apiSearchForm.addEventListener("submit", (e) => {
	resultsDiv.innerHTML = ""; //🛑 clear div for next search
	e.preventDefault(); //🛑 prevent refresh on submit
	//🛑 encodeURI (%20): fxn to take in string with spaces, etc. and encode to be compatible with URL
	const query = encodeURI(e.target.search.value);

	//✅ 1a. send search value to API
	//💡 where's the variable? "singlesearch/shows?q=:query"
	// fetch(
	// 	`${apiRoot}/singlesearch/shows?q=${e.target.search.value}&embed=episodes`
	// )
	// 	.then((res) => res.json())
	// 	.then((show) => {

	// 		//✅ 1b. render title, image, summary of show
	// 		const showTitle = document.createElement("h2");
	// 		const showImg = document.createElement("img");
	// 		const showSum = document.createElement("div");

	// 		showTitle.textContent = show.name;
	// 		showImg.src = show.image.original;
	// 		showImg.width = "400";
	// 		//🛑 use innerHTML because summary has tag elements
	// 		showSum.innerHTML = show.summary;
	// 		showSum.style.width = "400px";

	// 		resultsDiv.append(showTitle, showImg, showSum);

	// 		//✅ 1c. render first episode of show
	// 		const firstEpisode = show._embedded.episodes[0];

	// 		let firstEpiSeason = document.createElement("p");
	// 		let firstEpiImage = document.createElement("img");
	// 		firstEpiSeason.textContent = `Season ${firstEpisode.season} Episode ${firstEpisode.number}: ${firstEpisode.name}`;
	// 		firstEpiImage.src = firstEpisode.image.original;
	// 		firstEpiImage.width = "400";

	// 		resultsDiv.append(firstEpiSeason, firstEpiImage);

	// 		//✅ 1d. render all episodes of show
	// 		const allEpisodes = show._embedded.episodes;
	// 		allEpisodes.forEach((epi) => {
	// 			let epiSeason = document.createElement("p");
	// 			let epiImage = document.createElement("img");
	// 			epiSeason.textContent = `Season ${epi.season} Episode ${epi.number}: ${epi.name}`;
	// 			epiImage.src = epi.image.original;
	// 			epiImage.width = "400";
	// 			resultsDiv.append(epiSeason, epiImage);
	// 		});
	// 	});

	//✅ 3b. make fetch request to google books
	//🛑 API_KEY is in scope because they were all imported into index.html
	//🐞 in dev tools > sources, check breakpoints > pause on caught exceptions; search for 'algernon'
	fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`)
		.then((res) => res.json())
		.then((data) => {
			resultsDiv.innerHTML = ''
			//✅ 3c. display data on page for one book
			//🛑 search for key/value pairs one at a time in console
			const items = data.items;
			const item = items[0];
			const h1 = document.createElement("h1");
			h1.textContent = item.volumeInfo.title;

			resultsDiv.append(h1);

			const pAuthor = document.createElement("p");
			//🛑 if we have to access deeper levels of logic you may want to have an if/else in case that key doesn't exist for other items
			pAuthor.textContent = `by ${item.volumeInfo.authors.join(", ")}`;
			results.append(pAuthor);

			const img = document.createElement("img");
			img.src = item.volumeInfo.imageLinks.thumbnail;
			img.alt = `${item.volumeInfo.title} cover`;
			resultsDiv.append(img);

			const pDes = document.createElement("p");
			pDes.textContent = item.volumeInfo.description;
			pDes.style.width = "400px"
			resultsDiv.append(pDes);

			//✅ 3d. iterate over all items and display data on page
			items.forEach((item) => {
				const h1 = document.createElement("h1");
				h1.textContent = item.volumeInfo.title;

				resultsDiv.append(h1);

				const pAuthor = document.createElement("p");
				pAuthor.textContent = `by ${item.volumeInfo.authors.join(", ")}`;
				results.append(pAuthor);

				const img = document.createElement("img");
				img.src = item.volumeInfo.imageLinks.thumbnail;
				img.alt = `${item.volumeInfo.title} cover`;
				resultsDiv.append(img);

				const pDes = document.createElement("p");
				pDes.textContent = item.volumeInfo.description;
				pDes.style.width = "400px"
				resultsDiv.append(pDes);
			});
		})
		.catch((err) => console.log(err));

	e.target.reset();
});
