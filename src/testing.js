/* helper function to fill store form fields with data for testing */
function fillStore(form, data) {
	for (field in data) {
		// use [] notation for accessing data stored
		// in an object at variable keys, i.e. when
		// we don't know the key name up front.
		// In this case, it comes from an argument.
		form[field].value = data[field];
	}
}

/* helper function to fill book form fields with data for testing */
function fillBook(form, data){
	form.title.value = data.title
	form.author.value = data.author 
	form.price.value = data.price 
	form.imageUrl.value = data.imageUrl 
	form.inventory.value = data.inventory 
}
