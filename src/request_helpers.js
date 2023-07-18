/* function to return a promise for GET request */
function getJSON(url) {
	return fetch(url).then((res) => res.json());
}

/* function to return a promise for a POST request */
function postJSON(url, body) {
	return fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	}).then((res) => res.json());
}
