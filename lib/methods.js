Meteor.methods({
	addProduct: function(file, name, category, description, isFeatured){
		if(file){
			fsFile = new FS.File(file);
			ProductsImages.insert(fsFile, function(err, result){
				if(!err){
					var productImage = '/cfs/files/ProductsImages/' + result._id;
					Products.insert({
						name: name,
						category: category,
						description: description,
						image: productImage,
						isFeatured: isFeatured,
						createdAt: new Date()
					});
				}
			});
		}else{
			var productImage = '/images/noimage.png';
					Products.insert({
						name: name,
						category: category,
						description: description,
						image: productImage,
						isFeatured: isFeatured,
						createdAt: new Date()
					});
		}
	},
	addReview: function(id, rating, body){
		Products.update({_id: id}, 
						{$push: {
							reviews: {rating: rating, body: body, createdAt: new Date()}
						}});
	}
});