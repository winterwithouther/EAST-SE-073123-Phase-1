/* constants */
const resultsDiv = document.querySelector("#results");
const apiSearchForm = document.querySelector("#search-form");
const apiRoot = "https://api.tvmaze.com";

/*✅ 1. on api search form submit */
apiSearchForm.addEventListener("submit", (e) => {
	resultsDiv.innerHTML = '' //🛑 clear div for next search
	e.preventDefault(); //🛑 prevent refresh on submit
	//🛑 encodeURI (%20): fxn to take in string with spaces, etc. and encode to be compatible with URL
	const query = encodeURI(e.target.search.value);
	console.log(query);

	//✅ 1a. send search value to API
	//💡 where's the variable? "singlesearch/shows?q=:query"
	fetch(
		`${apiRoot}/singlesearch/shows?q=${e.target.search.value}&embed=episodes`
	)
		.then((res) => res.json())
		.then((show) => {
			
			//✅ 1b. render title, image, summary of show
			const showTitle = document.createElement("h2");
			const showImg = document.createElement("img");
			const showSum = document.createElement("div");

			showTitle.textContent = show.name;
			showImg.src = show.image.original;
			showImg.width = "400";
			//🛑 use innerHTML because summary has tag elements
			showSum.innerHTML = show.summary;
			showSum.style.width = "400px";

			resultsDiv.append(showTitle, showImg, showSum);

			//✅ 1c. render first episode of show
			const firstEpisode = show._embedded.episodes[0];

			let firstEpiSeason = document.createElement("p");
			let firstEpiImage = document.createElement("img");
			firstEpiSeason.textContent = `Season ${firstEpisode.season} Episode ${firstEpisode.number}: ${firstEpisode.name}`;
			firstEpiImage.src = firstEpisode.image.original;
			firstEpiImage.width = "400";

			resultsDiv.append(firstEpiSeason, firstEpiImage);

			//✅ 1d. render all episodes of show
			const allEpisodes = show._embedded.episodes;
			allEpisodes.forEach((epi) => {
				let epiSeason = document.createElement("p");
				let epiImage = document.createElement("img");
				epiSeason.textContent = `Season ${epi.season} Episode ${epi.number}: ${epi.name}`;
				epiImage.src = epi.image.original;
				epiImage.width = "400";
				resultsDiv.append(epiSeason, epiImage);
			});
		});

	e.target.reset();
});
