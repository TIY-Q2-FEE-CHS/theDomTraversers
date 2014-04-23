
// function Monitor(size, cost) {
// 	this.size = size;
// 	this.cost = cost;
// }

// function Ship(time, cost) {
// 	this.time = time;
// 	this.cost = cost;
// }

// function Location(area, cost) {
// 	this.area = area;
// 	this.cost = cost;
// }



// finally, this comment is better
// this is a comment

// for product gallery on shop page			
$(document).ready(function() {

var galleryTemplate = $('#gallery').html();
var galleryOptions = _.template(galleryTemplate, productType);
$('.jumbotron').append(galleryOptions);

});



