//Assignment 1
let temperature : number = 36.6;
console.log(`temperature of the bangalore city ${temperature}`);

let orderPlaced : boolean = true;
console.log(orderPlaced);

let orderPlaced1 : boolean = false;
console.log(orderPlaced1);

let orderPlaced3 : boolean | boolean;
orderPlaced3  = true;
console.log(orderPlaced3);
orderPlaced3 = false;
console.log(orderPlaced3);

interface completePersondetails {
    personPhoneNumber : string;
    personEmailAddress : string;
    personOccupation : string;
    personFavColor : string;
    personBloodType : string;
    personEyeColor : string;
    personBirthPlace : string;

}

let personDeatils : completePersondetails =  {
    "personPhoneNumber" : "123-456-7890",
    "personEmailAddress" : "chaithrar@gmail.com",
    "personOccupation" : "softwareEngineer",
    "personFavColor" : "blue",
    "personBloodType" : "A+",
    "personEyeColor" : "Brown",
    "personBirthPlace": "NewYorkCity"
}

console.log(personDeatils.personPhoneNumber);
console.log(personDeatils.personEmailAddress);
console.log(personDeatils.personOccupation);

function accountBalance(): number{
    let balance = 1000.05;
    return balance;
}

let balance1 = accountBalance();
console.log(`print the person account balance ${balance1}`);

let todaysDate:Date = new Date();
console.log(todaysDate);

let currentYear:number = todaysDate.getFullYear();
console.log(currentYear);

let currentMonth:number = todaysDate.getMonth();
console.log(currentMonth+1);

let timeOfEvent: number = todaysDate.getTime();
console.log(timeOfEvent);


