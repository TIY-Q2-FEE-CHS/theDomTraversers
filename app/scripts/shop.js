$(document).ready(function() {
	var prodInfo = $("#productInfo").html();
	var prodNameOptions = _.template(prodInfo, productType, "price");
	$(".products").append(prodNameOptions);
});