let creditScore : number = 400;
let customerIncome : number = 50000;
let employeeStatus : string = "employeed";
let debitRation : number = 35;

if (creditScore > 750)
    {
    console.log("the loan is approved")
}
else if (creditScore >=650 && creditScore <750 )
    {
      if(customerIncome > 50000){

        if (employeeStatus === "employeed"){

            if (debitRation < 40){

                console.log(" the last if condition the loan is approved");
            }else {
                 console.log("The employee is not eligible for loan as debit ration is greater than 40");
            }
        }else {
             console.log("The employee is not eligible for loan as employee status is not enemployeed");
        }

      }else {
         console.log("The employee is not eligible for loan as employee income is not greater than 50000");
      }
} else {
    console.log("The employee is not eligible for loan");
}
