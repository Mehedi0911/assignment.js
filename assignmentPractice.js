function kilometerTOMeter(kilometer){
    var  toMeter = Math.abs(kilometer*1000); // Making the input positive , if the user puts negatine input.
    return toMeter; 
}

var result = kilometerTOMeter(-8);
console.log(result);



// // 2nd problem

// function budgetCalculator(watch, phone, laptop){
//     var watchPrice = 50;
//     var phonePrice = 100;
//     var laptopPrice =500;
//     var totalCost = watch*watchPrice + phone*phonePrice + laptop*laptopPrice;
//     return totalCost;
// }

// var result = budgetCalculator(1,2,3);
// console.log(result);


// Third Function

// function hotelCost(stayingDays){
//     const fair10 = 100; 
//     const fair20 = 80; 
//     const fairElse = 50;


//     if (stayingDays <=10){
//         var totalfair = fair10* stayingDays;
//         return totalfair;
//     }
//     else if(stayingDays <=20){
//         var totalfair = 1000 + fair20 * (stayingDays-10); // deducting extra days from initial 10 days.
//         return totalfair;
//     }

//     else{
//         var totalfair = 1800 + fairElse * (stayingDays-20); 
//         return totalfair;
//     }
// }

// var result =  hotelCost(11);
// console.log(result);

// var friendsName = ['sara', 'etu', 'aahmatullah', 'tajul', 'rakibul', 'faruk','rrahmatullah','habibullahh'];

// function megaFriend(names) {
 
//  let myMegaFriend = '';
//  for (let i =0; i< names.length; i++){
//      let currentFriend = names[i];
//      if(currentFriend.length > myMegaFriend.length){
//          myMegaFriend = names[i];
//      }
//  }
//  return myMegaFriend;
 
// }


// console.log(megaFriend(friendsName));


