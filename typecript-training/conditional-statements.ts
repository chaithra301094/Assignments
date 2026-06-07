//if else condition - when the condition satisfies, the execution stops. it starts from the begining of the condition
let marks : number = 50;
if (marks > 70){
    console.log ("grade A")
}else if (marks >=60){
    console.log ("grade B")
}else {
   console.log ("grade C") 
}

//switch - case statement
let env:string = "PROD";

switch(env){

    case "qa":
        console.log (`environment is ${env}`);
        break;
    case "dev":
        console.log (`environment is ${env}`);
        break;
    case "PROD":
        console.log (`environment is ${env}`);
        break;
    default:
        console.log("please provide the correct env");

}