// function to toggle class "collapsed" on book form
function toggleBookForm() {
	const bookFormHidden = bookForm.classList.toggle("collapsed");
	if (bookFormHidden) {
		toggleBookFormButton.textContent = "New Book";
	} else {
		toggleBookFormButton.textContent = "Hide Book Form";
	}
}

// function to toggle class "collapsed" on store form
// function toggleStoreForm() {
// 	const storeFormHidden = storeForm.classList.toggle("collapsed");
// 	if (storeFormHidden) {
// 		toggleStoreFormButton.textContent = "New Store";
// 	} else {
// 		toggleStoreFormButton.textContent = "Hide Store Form";
// 	}
// }

function toggleStoreForm() {
	if (storeFormVisible) {
	  hideStoreForm();
	} else {
	  showStoreForm();
	}
  }
  
  function hideStoreForm() {
	document.querySelector('#store-form').classList.add('collapsed');
	storeFormVisible = false;
	storeEditMode = false;
	storeForm.reset();
	toggleStoreFormButton.textContent = "New Store";
  }
  
  function showStoreForm() {
	document.querySelector('#store-form').classList.remove('collapsed');
	storeFormVisible = true;
	toggleStoreFormButton.textContent = "Hide Store form";
	storeForm.querySelector('[type="submit"]').value = storeEditMode ? "Save Store" : "Add Store";
  }
