var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');

var products = [

new Product({
	imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png',
	title: 'The Gothic Game',
	description: 'Sexy Features!!',
	price: 10

}),
new Product({
	imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/65/Contra_cover.jpg/220px-Contra_cover.jpg',
	title: 'The Contra Game',
	description: 'The Childhood favorite',
	price: 10

}),
new Product({
	imagePath: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNDg0NzcyMV5BMl5BanBnXkFtZTcwNjg4MjQyMw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
	title: 'The Prince of Persia Game',
	description: 'The Princess looks cute',
	price: 20

}),
new Product({
	imagePath: 'https://cdns.kinguin.net/media/category/1/-/1-1024_844.jpg',
	title: 'The Counter Strike Game',
	description: 'The best game of the decade',
	price: 15

}),
new Product({
	imagePath: 'http://sm.ign.com/t/ign_in/cover/e/ea-sports-/ea-sports-fifa-for-nintendo-switch_4gau.250.jpg',
	title: 'The Fifa from EA Sports',
	description: 'Awesome Graphics',
	price: 19

}),
new Product({
	imagePath: 'https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcPtB7yoM7YK7A6apJBrPMegD8P2blNMraGLQbUdWTEHRXR7OCwpY0JAwdc1rRxRlfYhNIZGZ0sFeJFOJ2oID2EIs.7ojB9huGIxdKvnEqU0TvtCHWigh91tnXYEPR8KZnmfB6d3RZGxmJcW8tfX4_zSBw6P5z8WKzxrdwuEUs9PA-&w=200&h=300&format=jpg',
	title: 'The Mortal Combat Game',
	description: 'Amazing fights!!',
	price: 28

})
];

var done=0;

for (var i=0; i< products.length; i++){

	products[i].save(function(err,result){
		done++;
		if(done=== products.length){

			exit();
		}
	});
}

function exit(){
	mongoose.disconnect();
}