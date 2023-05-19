const coffeeMenu = require("./coffee_data.js");


// PRINT ARRAY OF COFFEE MENU
// console.log(coffeeMenu)


// PRINTS ALL ITEMS $5 AND UNDER
// for (const keyItem in coffeeMenu) {
//     if (coffeeMenu[keyItem].price <= 5) {
//         console.log(coffeeMenu[keyItem])
//     }
// }


// PRINT ALL DRINKS WITH PRICES THAT ARE EVEN NUKBERS
// for(const keyItem in coffeeMenu) {
//     if(coffeeMenu[keyItem].price % 2 === 0) {
//         console.log(coffeeMenu[keyItem])
//     }
// }

// PRINT TOTAL OF ALL DRINK PRICES COMBINED
// let total = 0
// function addCost(prevNum, currentNum){
//     total = prevNum + currentNum
//     return total
// }
// for(const keyItem in coffeeMenu) {
//     addCost(total, coffeeMenu[keyItem].price)
// }
// console.log(total)


// PRINTS ALL SEASONAL ITEMS
// for(const keyItem in coffeeMenu) {
//     if(coffeeMenu[keyItem].seasonal === true) {
//         console.log(coffeeMenu[keyItem])
//     }
// }



// PRINTS ALL SEASONAL ITEMS WITH IMPORTED BEANS
// for(const keyItem in coffeeMenu) {
//     if(coffeeMenu[keyItem].seasonal === true && coffeeMenu[keyItem].name == "") {
//         console.log(coffeeMenu[keyItem])
//     }
// }
// Couldnt figure it out :(

