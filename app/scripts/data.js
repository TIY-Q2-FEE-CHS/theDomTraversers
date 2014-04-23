var productType = [
{
	"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTehabazswYpOFaG5NyP_g-WJVcuuCPj1clJyFQJLCJevpu4g59",
	"name": "monitor1",
	"type": "20 in",
	"price": 200.00,
},
{
	"image": "http://www.gadgetreview.com/wp-content/uploads/2011/09/AOC-Razor-e2043Fk-20-Inch-LED-Monitor.jpg",
	"name": "monitor2",
	"type": "17 in",
	"price": 175.00,
},
{
	"image": "http://www.build-your-own-computer.net/image-files/keyboard-01-ergonomic.jpg",
	"name": "keyboard1",
	"type": "ergo",
	"price": 50.00,
},
{
	"image": "http://www.all-about-computer-parts.com/image-files/computer_keyboard_keys.jpg",
	"name": "keyboard2",
	"type": "standard",
	"price": 25.00,
},
{
	"image": "http://saimedhacomputers.com/wp-content/uploads/2013/09/Computer-Mouse-3.jpg",
	"name": "mouse1",
	"type": "ergo",
	"price": 30.00,
},
{
	"image": "http://www.photo-dictionary.com/photofiles/list/5202/6846optical_computer_mouse.jpg",
	"name": "mouse2",
	"type": "standard",
	"price": 20.00,
},
{
	"image": "http://www.bagswish.com/580/leather-bag-briefcase-16-inch-leather-laptop-computer-bag.jpg",
	"name": "case1",
	"type": "leather",
	"price": 75.00,
},
{
	"image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT29L8j7aZs3ZquI08R4vZkAtjx_1YuXEFX-WIEKzAMzx-iNaF-",
	"name": "case2",
	"type": "nylon",
	"price": 40.00,
}
];

var prodNames = _.pluck(productType, "name");
console.log(prodNames);

var shipType = [
{
	"name": "FedEx Overnight",
	"price": 20.00
},
{
	"name": "FedEx 2 Day",
	"price": 15.00
},
{
	"name": "FedEx Ground",
	"price": 5.00
}
];

var locationType = [
{
	"region": "South",
	"price": 10.00
},
{
	"region": "North-East",
	"price": 20.00
},
{
	"region": "Mid-West",
	"price": 30.00
},
{
	"region": "West",
	"price": 40.00
}
];

































// var monitor1 = new Monitor("20 inch", 200);
// var monitor2 = new Monitor("17 inch", 175);

// var ship1 = new Ship("next day", 20);
// var ship2 = new Ship("ground", 5);

// var location1 = new Location("east coast", 5);
// var location2 = new Location("mid west", 10);




// $(document).ready(function() {

// $("form").submit(function(e) {
// 	e.preventDefault();
// 	console.log("is this working?");

// var monitor = $(".monitorSelect").val();
// var ship = $(".shipSelect").val();
// var location = $(".locationSelect").val();


// if(monitor === "monitor1") {
// 	if(ship === "ship1") {
// 		if(location === "location1") {
// 			$(".cost").text(monitor1.cost + ship1.cost + location1.cost);
// 		}
// 	}
// }
// if(monitor === "monitor1") {
// 	if(ship === "ship1") {
// 		if(location === "location2") {
// 			$(".cost").text(monitor1.cost + ship1.cost + location2.cost);
// 		}
// 	}
// }
// if(monitor === "monitor1") {
// 	if(ship === "ship2") {
// 		if(location === "location1") {
// 			$(".cost").text(monitor1.cost + ship2.cost + location1.cost);
// 		}
// 	}
// }
// if(monitor === "monitor1") {
// 	if(ship === "ship2") {
// 		if(location === "location2") {
// 			$(".cost").text(monitor1.cost + ship2.cost + location2.cost);
// 		}
// 	}
// }
// if(monitor === "monitor2") {
// 	if(ship === "ship1") {
// 		if(location === "location1") {
// 			$(".cost").text(monitor2.cost + ship1.cost + location1.cost);
// 		}
// 	}
// }
// if(monitor === "monitor2") {
// 	if(ship === "ship1") {
// 		if(location === "location2") {
// 			$(".cost").text(monitor2.cost + ship1.cost + location2.cost);
// 		}
// 	}
// }
// if(monitor === "monitor2") {
// 	if(ship === "ship2") {
// 		if(location === "location1") {
// 			$(".cost").text(monitor2.cost + ship2.cost + location1.cost);
// 		}
// 	}
// }
// if(monitor === "monitor2") {
// 	if(ship === "ship2") {
// 		if(location === "location2") {
// 			$(".cost").text(monitor2.cost + ship2.cost + location2.cost);
// 		}
// 	}
// }




// });
// });









