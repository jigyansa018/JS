//Practice Qs1
// for(let num = 0; num<=100 ; num++)
//     {
//     if(num%2 == 0)
//         {//even number
//         console.log("num =" , num);
//     }
// }

// //Qs2
// let gameNum = 25;
// let userNum = prompt("Guess the game number:");

// while(userNum != gameNum){ //game
//      userNum =  prompt("You enterd wrong number, Guess again :")

// }
// console.log("Congratulations , you enterd the right number!!!");


let fullname = prompt("Enter your fullname without spaces:");
let username = "@" + fullname + fullname.length;
console.log(username);