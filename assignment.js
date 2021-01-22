// https://github.com/AktabHossain/javascript-assignment




//first-problem solving


function kilometerToMeter(kilometer){
    const meter = kilometer * 1000;
 if(meter>0){

 }     
    
     else{
           console.log( "distance can not be negative")
      }
 return meter;
}
   
const tenMeter = kilometerToMeter(10);
console.log(tenMeter);



//second-problem solving


function budgetCalculator(clock,phone,laptop){
   const clocks = (clock)*50;
   const  phones = (phone)*100;
   const laptops = (laptop)*500;

   var total = clocks+phones+laptops;

   return total;

}

var budgetTotal = budgetCalculator(4,7,2);
console.log(budgetTotal);


//third-problem solving

function hotelCost(days){
   var cost = 0;
   if (days<=10){
      cost = days * 100;
   } else if (days<=20){
      var firstTenDayCost = 10 * 100;
      var remainingDay = days - 10;
      var secondTenDayCost = remainingDay * 80;
      cost = firstTenDayCost + secondTenDayCost;
   } else{
      var firstTenDayCost = 10 * 100;
      var secondTenDayCost = 10 * 80;
      var remainingDay = days - 20;
      var afterTwentyDayLaterCost = remainingDay * 50;
      cost = firstTenDayCost + secondTenDayCost + afterTwentyDayLaterCost;
   }
   return  cost;
}
 
var totalCost = hotelCost(25);
console.log(totalCost);

//fourth-problem solving
 

  var megaFriend = ["limon", "alamin", "naim","masum", "iqbal", "azad"];
    var lenght = 0;
    var largest;
    for (var i = 0; i < megaFriend.length; i++) {
      if (megaFriend[i].length > lenght) {
        var lenght = megaFriend[i].length;
        largest = megaFriend[i];
      }
    }
 
console.log(largest);