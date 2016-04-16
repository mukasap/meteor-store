Router.configure({
	layoutTemplate: 'layout'
});

var OnBeforeActions = {
	loginRequired: function(){
		if(!Meteor.userId()){
			Router.go('/');
		}else {
			this.next();
		}
	}
};

Router.onBeforeAction(OnBeforeActions.loginRequired, {
	only: ['products.create', 'products.review']
});



Router.route('home', {
	path: '/',
	data: function(){
		return {
			products: Products.find({isFeatured: true})
		};
	}
});

Router.route('products.category', {
	path: '/category/:slug',
	template: 'products',
	data: function(){
		return {
			products: Products.find({category: this.params.slug})
		};
	}
});

Router.route('products', {
	path: '/products',
	data: function(){
		return {
			products: Products.find({})
		};
	}
});

Router.route('products.create', {
	path: '/products/create',
	data: function(){
		return {
			categories: Categories.find({})
		};
	}
});

Router.route('products.show', {
	path: '/products/:_id',
	data: function(){
		return  Products.findOne(this.params._id);
	}
});

Router.route('products.review', {
	path: '/products/:_id/review',
	data: function(){
		return  Products.findOne(this.params._id);
	}
});

