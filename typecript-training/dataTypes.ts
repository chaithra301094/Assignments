let num1:number = 123;
console.log(num1);

let name:string = "chaithra";
console.log(name);

let firstName: string = "Rajendran";
console.log (`my complete name is ${name} ${firstName} `);

let visaStatus : boolean = true;
console.log(visaStatus);

let age : undefined ;
console.log(age);

let cloth : any = {

    "clothLength": 123,
    "clothMaterial":"Silk"

}
console.log(cloth);

// non - primitive data type:

//object represnts key value pair
const originOfState = Symbol("originOfState");
interface personInfo {

    name : string;
    age : number;
    maritialStatus : string;
    hasVisa : boolean;
    [originOfState]: string;
}

let person : personInfo = {

    "name":"chaithra",
    "age" : 31,
    "maritialStatus": "unmarried",
    "hasVisa": true,
    [originOfState] : "india"
}

console.log(person[originOfState]);
console.log(person);


/*let empeDetails: personInfo = {

    "name":"savithri",
     "age" : 31,
    "maritialStatus": "married",
    "hasVisa": true

}*/
//console.log(empeDetails.name)

//Array
let fruits: string[] = ["apple","Mango","Payaya"];
let price : number[] = [10,20,30];
let fruitsPrice: (string | number)[] = ["apple",10,"Mango",20,"Payaya",30];

console.log(fruits[1]);
console.log(price[1]);
console.log(fruitsPrice[1]);

//tuple
let empDetails : [string,number,boolean] = ["chaithra",20,true]
console.log(empDetails[1]);


// functions
function sum(a:number,b:number): number
{
    return a+b;

}
console.log(sum(5,6));

//set
let empDetails1:Set<string | number> = new Set();

empDetails1.add("chaithra");
empDetails1.add(30);
console.log(empDetails1);

//Map - unique key and duplicate value
let empInformation : Map<number , string| number> = new Map ();

empInformation.set(123,"lali");
empInformation.set(345,"manj");
empInformation.set(345,89);

console.log (empInformation);

let curDate1 : Date = new Date();
console.log(curDate1);

