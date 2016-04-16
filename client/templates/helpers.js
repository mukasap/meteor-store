//Truncate text
UI.registerHelper('truncate', function(text, length){
	var output = text.substring(0, length);
	output = output.substr(0, Math.min(output.length, output.lastIndexOf(" ")));
	return new Spacebars.SafeString(output);
});

UI.registerHelper('stars', function(length){
	var html='';	
	for (var i = 0; i < length; i++) {
		html += '<i class="glyphicon glyphicon-star"></i>';
	}
	var b = 5 - length; //5 is total number of stars minus lenghth = empty stars
	if(b > 0){
		for (var j = 0; j < b; j++) {
			html += '<i class="glyphicon glyphicon-star-empty"></i>';
		}
	}
	return new Spacebars.SafeString(html);
});

UI.registerHelper('getAvg', function(reviews){
	
	if(reviews){
		var sum = 0;
		for (var i = 0; i < reviews.length; i++) {
			sum += parseInt(reviews[i].rating, 10);
		}
		var avg = sum / reviews.length;
		// return ;
		var html='';	
		for (var j = 0; j < Math.round(avg); j++) {
			html += '<i class="glyphicon glyphicon-star"></i>';
		}
		var b = 5 - Math.round(avg); //5 is total number of stars minus lenghth = empty stars
		if(b > 0){
			for (var k = 0; k < b; k++) {
				html += '<i class="glyphicon glyphicon-star-empty"></i>';
			}
		}
	}else{
		var html='';	
		for (var i = 0; i < 5; i++) {
			html += '<i class="glyphicon glyphicon-star-empty"></i>';
		}
	}
	
	return new Spacebars.SafeString(html);
});

UI.registerHelper('total', function(total){
	if(total > 0){
		return total;
	}else{
		return 0;
	}
});

UI.registerHelper('prettyDate', function(time, type) {
  switch(type){
  	case 'fromNow':
  		return moment(time).fromNow();
  	//TODO: Add other types long etc
    default:
    	return moment(time).format("ll");

  }
});