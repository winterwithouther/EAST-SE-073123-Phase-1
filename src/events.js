// function to toggle classes
function toggleBookForm() {
	const bookFormHidden = bookForm.classList.toggle("collapsed");
	if (bookFormHidden) {
		toggleBookFormButton.textContent = "New Book";
	} else {
		toggleBookFormButton.textContent = "Hide Book Form";
	}
}

function toggleStoreForm() {
	const storeFormHidden = storeForm.classList.toggle("collapsed");
	if (storeFormHidden) {
		toggleStoreFormButton.textContent = "New Store";
	} else {
		toggleStoreFormButton.textContent = "Hide Store Form";
	}
}

