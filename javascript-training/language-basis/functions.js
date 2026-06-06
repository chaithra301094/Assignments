function add(a,b){
    return a+b;
}

 let sumOfNum=add(5,6);

 console.log(sumOfNum);

 let personInfo = {

    "name":"chaithra",
    "id": 12345,
    "address" : {
        "city" : "bangalore",
        "state" : "karnataka"    }
 }

 console.log(personInfo.name);
 console.log(personInfo["name"]);

// set is the colloection of unique value of any data type

let marksStudent = new Set();
marksStudent.add("chaithra");
marksStudent.add(989879);
marksStudent.add(true);

console.log(marksStudent);
console.log(typeof marksStudent[0]);
console.log(typeof marksStudent[1]);
console.log(typeof marksStudent[2]);


//Map is colection of key value pair, key should be unique , but value can be duplicate

let empDetails = new Map();

empDetails.set(1234,"chaithra");
empDetails.set(1235,"lalithya");
empDetails.set(1234,"pavithra");

console.log(empDetails)

let curDate = new Date();
console.log(curDate);

let curYear = curDate.getFullYear();
console.log(curYear);

let curMonth = curDate.getMonth();
console.log(curMonth+1);

let curDay = curDate.getDay();
console.log(curDay);

let time = curDate.getTime();
console.log(time);

let timeOfMinutes = curDate.getMinutes();
console.log(timeOfMinutes);

let timeZone = curDate.getTimezoneOffset();
console.log(timeZone);
