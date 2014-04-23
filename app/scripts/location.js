$(document).ready(function() {
var locInfo = $("#locationInfo").html();
var locationNameOptions = _.template(locInfo,locationType, "price");
$(".location").append(locationNameOptions);

});	