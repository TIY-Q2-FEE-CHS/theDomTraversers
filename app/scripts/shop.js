$(document).ready(function() {
	var prodInfo = $("#productInfo").html();
	var prodNameOptions = _.template(prodInfo, prodNames);
	$(".products").append(prodNameOptions);
});