var monitor1 = new Monitor("20 inch", 200);
var monitor2 = new Monitor("17 inch", 175);

var ship1 = new Ship("next day", 20);
var ship2 = new Ship("ground", 5);

var location1 = new Location("east coast", 5);
var location2 = new Location("mid west", 10);




$(document).ready(function() {

$("form").submit(function(e) {
	e.preventDefault();
	console.log("is this working?");

var monitor = $(".monitorSelect").val();
var ship = $(".shipSelect").val();
var location = $(".locationSelect").val();

if(monitor === "monitor1") {
	if(ship === "ship1") {
		if(location === "location1") {
			$(".cost").text(monitor1.cost + ship1.cost + location1.cost);
		}
	}
}
if(monitor === "monitor1") {
	if(ship === "ship1") {
		if(location === "location2") {
			$(".cost").text(monitor1.cost + ship1.cost + location2.cost);
		}
	}
}
if(monitor === "monitor1") {
	if(ship === "ship2") {
		if(location === "location1") {
			$(".cost").text(monitor1.cost + ship2.cost + location1.cost);
		}
	}
}
if(monitor === "monitor1") {
	if(ship === "ship2") {
		if(location === "location2") {
			$(".cost").text(monitor1.cost + ship2.cost + location2.cost);
		}
	}
}
if(monitor === "monitor2") {
	if(ship === "ship1") {
		if(location === "location1") {
			$(".cost").text(monitor2.cost + ship1.cost + location1.cost);
		}
	}
}
if(monitor === "monitor2") {
	if(ship === "ship1") {
		if(location === "location2") {
			$(".cost").text(monitor2.cost + ship1.cost + location2.cost);
		}
	}
}
if(monitor === "monitor2") {
	if(ship === "ship2") {
		if(location === "location1") {
			$(".cost").text(monitor2.cost + ship2.cost + location1.cost);
		}
	}
}
if(monitor === "monitor2") {
	if(ship === "ship2") {
		if(location === "location2") {
			$(".cost").text(monitor2.cost + ship2.cost + location2.cost);
		}
	}
}









});
});
