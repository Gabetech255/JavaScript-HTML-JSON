function speeding() 
{
	var userSpeed = prompt("What is your current speed?");
	var speedLimit = 80;

	if (userSpeed > speedLimit) {
		var msg = "Your doing " + userSpeed + " in an 80 zone. Slow Down";
		return msg;
	}
	else{
		var msg = "Your speed is fine continue";
		return msg;
	}
}

//this calls the function and prints the returned value to the screen in html
document.write(speeding());
