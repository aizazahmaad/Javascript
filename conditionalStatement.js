//task 1:
var age = 50
if (age >= 65){
    console.log("You get your salary form pension")
} else if(age < 65 && age > 18) {
    console.log("Each month you get a salary")
} else if(age<18){
    console.log("You get and allowance")
} else {
    console.log("The value of variable is not numerical")
}

//task 2:
var day = "Tuesday"
switch(day) {
    case "Monday":
        console.log("Mon");
        break;
    case "Tuesday":
        console.log("Tue");
        break;
        case "Wednesday":
        console.log("Wed");
        break;
    case "Thursday":
        console.log("Thu");
        break;
        case "Friday":
        console.log("Fri");
        break;
    case "Saturday":
        console.log("Sat");
        break;
    case "Sunday":
            console.log("Sun");
        break;    
}