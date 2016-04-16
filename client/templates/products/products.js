//Create Product
Template.productsCreate.events({
	'submit .create': function (e, tpl) {
		var name = e.target.name.value;
		var category = e.target.category.value;
		var description = e.target.description.value;
		var isFeatured = e.target.isFeatured.value;
		if(isFeatured == "1"){
			isFeatured = true;
		}else{
			isFeatured = false;
		}

		var file = $('#productImage').get(0).files[0];
		
		Meteor.call('addProduct', file, name, category, description, isFeatured);

		//clear form
		e.target.name.value = "";
		e.target.category.value = "";
		e.target.description.value = "";
		e.target.isFeatured.value = "";

		FlashMessages.sendSuccess('Product Added');
		Router.go('/');

		return false;
	}
});

//Review
Template.productsReview.events({
	'submit .review': function(e, tpl){
		var rating = e.target.rating.value;
		var body = e.target.body.value;

		Meteor.call('addReview', this._id, rating, body);

		FlashMessages.sendSuccess('Review Added'); 
		Router.go('products.show', {_id: this._id}); //refactor change to product page
		return false;
	}
});
