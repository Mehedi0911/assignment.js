//https://github.com/Mehedi0911/assignment.js

//function 1:  kilometerToMeter

function  kilometerToMeter(kilometer){
    if(kilometer>0){
    let meter = kilometer*1000; //Converting to meter, 1km = 1000 meter.
    return meter;
    }
    else{
        return 'Caution!! Value Can not be 0 or a Negative Number.';
    }
}

//function 2:  budgetCalculator

function budgetCalculator(watch, phone, laptop){
    const watchPrice = 50;
    const phonePrice = 100;
    const laptopPrice =500;

    if( watch > 0 && phone > 0 && laptop > 0){
    
        let totalCost = watch*watchPrice + phone*phonePrice + laptop*laptopPrice; //calculating total budget.
        return totalCost;
    }
    else{
        return 'Quantity can not be 0 or Negative';
    }
}

//function 3:  hotelCost

function hotelCost(stayingDays){
    const rent10 = 100; 
    const rent20 = 80; 
    const rentElse = 50;

    if(stayingDays>0){

        if (stayingDays <=10){
            let totalRent = rent10* stayingDays;
            return totalRent;
        }
        else if(stayingDays <=20){
            let totalRent = 1000 + rent20 * (stayingDays-10); // calculating extra days from initial 10 days.
            return totalRent;
        }
        else{
            let totalRent = 1800 + rentElse * (stayingDays-20); // calculating extra days from initial 20 days.
            return totalRent;
        }
    }
    else{
        return 'Stay atleast one day to give us some money.'
    }
}


// function 4:  megaFriend

function megaFriend(friends) {
 
 if(friends != ''){

    let myMegaFriend = '';

    for (let i =0; i< friends.length; i++){
        let currentFriend = friends[i];
        if(currentFriend.length > myMegaFriend.length){
            myMegaFriend = friends[i];
        }
    }
    return myMegaFriend;
    
   }
    else{
       return 'Please put atleast something.' // if input is an empty string.
   }
 }

