let marks = [85,97,44,37,76,60];

let sum = 0;

for(let val of marks){
    sum += val;

}
// let avg = sum/marks.length;
// console.log(`avg marks of the class = ${avg}`);
// //********************************************* */
// let items =[250 ,645 ,300 ,900 ,50];
// let index=0;
// for(let index;index <items.length;index++){
//     let offer = items[i]/10;
//     items[i] -=offer;
// }
// console.log(items);
//************************************** */
let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

companies.shift();
companies.splice(2,1,"Ola");
companies.push("Amazon");
