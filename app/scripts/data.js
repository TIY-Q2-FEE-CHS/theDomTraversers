var screen1 = new Screen("20 inch", 200);
var screen2 = new Screen("17 inch", 175);

var ship1 = new Ship("next day", 20);
var ship2 = new Ship("ground", 5);

var location1 = new Location("east coast", 5);
var location2 = new Location("mid west", 10);




$(document).ready(function() {

var screen = $(".screenSelect").val();
var ship = $(".shipSelect").val();
var location = $(".locationSelect").val();

if(screen === "screen1") {
	if(ship === "ship1") {
		if(location ==="location1"){
			$(".cost").text(screen1.cost + ship1.cost + 
				location1.cost);

		}

	}
}





















});
