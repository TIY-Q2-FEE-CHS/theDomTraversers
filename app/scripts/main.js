$(document).ready(function() {


// Product gallery with description
var galleryTemplate = $('#gallery').html();
var galleryOptions = _.template(galleryTemplate, productType);
$('.jumbotron').append(galleryOptions);



// Adding customer options together


$("form").submit(function(e) {
	e.preventDefault();
var costTotal = "1,000,000";
	$(".cost").append(costTotal);



});










});



























