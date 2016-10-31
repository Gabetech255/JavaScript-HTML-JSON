
//this opens a dialog box at the top of a browser and props the user ok or cancel
confirm("Would you like to continue with the program");

// prompt opens a dialog box at thee top of the browser and prompts the user to enter something

//creates a variable and saves a string to it
var userName = prompt("What is your name?");
var userAge = prompt("What is your age?"); //ints do not have to be in quotations


//the console.log function prints to screen 
console.log("So your name is " + userName);
console.log("Your age is " + userAge);

//.subtring searches a string for a specific slot in memory
//this particular line changes the value of userName to only the first 3 letters of the name
userName = userName.substring(0,3);

//if-else combined with confirm and prompt
if (confirm("would you like to start the second part of the program?") === true){
  var myName = prompt("What is your name?");
  console.log(myName); 
}
else
    console.log("The program either failed or you hit cancel");


