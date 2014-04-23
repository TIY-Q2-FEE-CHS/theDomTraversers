$(document).ready(function() {

var bioTemplate = $('#bioInfo').html();
var theTeam = _.template(bioTemplate, bioData);
$('.marketing').append(theTeam);

});