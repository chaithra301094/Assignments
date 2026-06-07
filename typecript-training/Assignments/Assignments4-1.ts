//let creditValues : number [] = [50000,3000,4000];
// let debitValues : number [] =  [-2000,-15000,-200,-300,-3000]

let transactionAmt: number [] = [50000,-2000,3000,-15000,-200,-300,4000,-3000];
let totalCredit:number = 0;
let totalDebit:number = 0;
let totalBalance:number ;
let count:number = 0;


for (let totalTrans1 of transactionAmt ) {

    if (totalTrans1>0){
        totalCredit += totalTrans1;
       
    }
    else{
        totalDebit += totalTrans1;

    }
     if(totalTrans1>10000 || totalTrans1 < -10000 ){
            console.log("suspicous transaction"+totalTrans1);
            count = count +1 ;
            console.log(count);
        }
    
}
console.log(totalCredit);
console.log(totalDebit);

totalBalance = totalCredit + totalDebit;
console.log (totalBalance);

