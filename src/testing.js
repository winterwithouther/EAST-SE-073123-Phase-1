// fill in a form's with the data in an object
function fillStore(form, data) {
	for (field in data) {
		// use [] notation for accessing data stored
		// in an object at variable keys, i.e. when
		// we don't know the key name up front.
		// In this case, it comes from an argument.
		form[field].value = data[field];
	}
}

function fillBook(form, data){
	form.title.value = data.title
	form.author.value = data.author 
	form.price.value = data.price 
	form.imageUrl.value = data.imageUrl 
	form.inventory.value = data.inventory 
}
