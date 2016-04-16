//categores
Categories = new Mongo.Collection('categories');

//products
Products = new Mongo.Collection('products');

Products.allow({
	insert: function () {
		return true;
	},
	update: function () {
		return true;
	},
	remove: function () {
		return true;
	}
});

//product images
ProductsImages = new FS.Collection('ProductsImages', {
	stores: [new FS.Store.GridFS('ProductsImages')]
});

ProductsImages.allow({
	insert: function (fileId, doc) {
		return true;
	},
	download: function (fileId, doc) {
		return true;
	}	
});