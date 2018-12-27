//this for slider based - setting up slider
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
	output.innerHTML = this.value;
}

//Get time funtion - it passes time to the animation control function gettimeofday
function updatetime() {
	var now = new Date();
	gettimeofday(now.getHours());
}

//Animation control function - you could split these into rise and set funtions but I have'nt done that yet
function gettimeofday(now) {
	hour = now;
	if (hour >= 0 && hour < 5) {
		timeofdaypercent = hour - 0;
		timeofdaypercent = (timeofdaypercent / 4) * 100;
		var moon = document.getElementById('moon');
		var moonheight = (timeofdaypercent * 2.5) + 50;
		moon.style.top = moonheight + "px";
		var sun = document.getElementById('sun');
		sun.style.top = "450px";
		document.body.style.backgroundColor = "#002551";
		var world = document.getElementById('world');
		world.style.borderBottom = "5px solid #67a8f1";
		document.getElementsByClassName('simtime')[0].style.color = "#d3d3d3";

		document.getElementById('datepk').style.color = "#d3d3d3";
		setBarColor('#002551')
		document.getElementById('title').style.color='white';
	}
	if (hour >= 5 && hour < 12) {
		timeofdaypercent = hour - 5;
		timeofdaypercent = (timeofdaypercent / 7) * 100;
		var sun = document.getElementById('sun');
		var sunheight = 300 - (timeofdaypercent * 2.9);
		sun.style.top = sunheight + "px";
		var moon = document.getElementById('moon');
		moon.style.top = "400px";
		document.body.style.backgroundColor = "#f4c042";
		var world = document.getElementById('world');
		world.style.borderBottom = "5px solid #7a6021";
		document.getElementsByClassName('simtime')[0].style.color = "#7a6021";

		document.getElementById('datepk').style.color = "#7a6021";
		setBarColor('#f4c042');
		document.getElementById('title').style.color='black';
	}
	if (hour >= 12 && hour < 19) {
		timeofdaypercent = hour - 12;
		timeofdaypercent = (timeofdaypercent / 7) * 100;
		var sun = document.getElementById('sun');
		var sunheight = (timeofdaypercent * 2.9) + 50;
		sun.style.top = sunheight + "px";
		var moon = document.getElementById('moon');
		moon.style.top = "400px";
		document.body.style.backgroundColor = "#f4c042";
		var world = document.getElementById('world');
		world.style.borderBottom = "5px solid #7a6021";
		document.getElementsByClassName('simtime')[0].style.color = "#7a6021";

		document.getElementById('datepk').style.color = "#7a6021";
		setBarColor('#f4c042');
		document.getElementById('title').style.color='black';
	}
	if (hour >= 19 && hour <= 24) {
		timeofdaypercent = hour - 20;
		timeofdaypercent = (timeofdaypercent / 5) * 100;
		var moon = document.getElementById('moon');
		var moonheight = 200 - (timeofdaypercent * 2.5) + 50;
		moon.style.top = moonheight + "px";
		var sun = document.getElementById('sun');
		sun.style.top = "450px";
		document.body.style.backgroundColor = "#002551";
		var world = document.getElementById('world');
		world.style.borderBottom = "5px solid #67a8f1";
		document.getElementsByClassName('simtime')[0].style.color = "#d3d3d3";

		var dateok =document.getElementById('datepk');
		if(dateok!=null)
			datepk.style.color = "#d3d3d3";
		setBarColor('#002551');
		document.getElementById('title').style.color='white';
	}
}

function setBarColor(color) {
	if (window.plus) {
		plus.navigator.setStatusBarStyle('light');
		plus.navigator.setStatusBarBackground(color);
	} else { // 兼容老版本的plusready事件
		document.addEventListener('plusready', function() {
			plus.navigator.setStatusBarStyle('light');
			plus.navigator.setStatusBarBackground(color);
		}, false);
	}
}


//Start the loop going based of real time
updatetime();
var timeloop = setInterval(updatetime, 1000);
