let studentsName: string[] = ["Suresh","Mahesh" , "Naresh"];
let studentsMark: number[] =  [75,80,82];

let sum: number = 10;
let studentsTotalMarksArray: number [] = [];
let totalMarks : number = 0;
for ( let i:number = 0; i<=2; i++)
{
  studentsTotalMarksArray[i] =  sum+ studentsMark[i]! ;
   totalMarks = totalMarks + studentsTotalMarksArray[i]!;
   
}

let avarageMarks: number = totalMarks/studentsMark.length ;

console.log(studentsTotalMarksArray);
console.log(totalMarks);
console.log(avarageMarks);

