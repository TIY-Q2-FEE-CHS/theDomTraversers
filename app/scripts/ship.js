$(document).ready(function() {
	var shipInfo = $("#shipInfo").html();
	var shipNameOptions = _.template(shipInfo, shipType, 
		"price");
	$(".shipping").append(shipNameOptions);
});