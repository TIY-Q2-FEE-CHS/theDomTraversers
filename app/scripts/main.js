$(document).ready(function() {


// Product gallery with description
var galleryTemplate = $('#gallery').html();
var galleryOptions = _.template(galleryTemplate, productType);
$('.jumbotron').append(galleryOptions);



// Adding customer options together

$("form").submit(function(e) {
	e.preventDefault();
	var formData = $(this).serializeArray();
	var sum = _.reduce(formData, function(memo, num){ 
		var potNumber = Number(num.value);
		if(typeof potNumber === "number") {	
			console.log(potNumber);
			return memo + potNumber; 
		} else {
			console.log("shit is broken");
		}		
	}, 0);
	console.log(sum);
	$(".cost").html(sum);

});










});



























