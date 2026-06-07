// for loop - it is used to iterate when you know how many times to iterate

for (let i:number = 1;i<=5; i++){
    console.log("welcome to Ts training " + i);
}

//while loop --> when you do not know how many times to iterate, so iterate when the condition satisfies
let j:number = 1;
let isPageload: boolean = true;

while (j>0){

    if (isPageload === true || j>0){
        console.log("page is loaded");
        break;
    }
}
j++;

//spacial loops
//for .. in loop > it is used to iterate through  objects 
//for .. of loop > it is used to iterate through every value of array 
// do while loop

let fruits: (string|number)[] = ["Apple",10,"Mango",20,"payaya",30];

for (let fruitsPrice of fruits){
    console.log (fruitsPrice);
}

interface empInfo {
  name : string;
  id : number;
  address : string;

}


let empDetails :empInfo = {
  "name" : "chaithra",
  "id" : 26,
  "address" : "bengaluru"
}

for (let key in empDetails){
    console.log(key);
    console.log(empDetails[key as keyof empInfo])
}


