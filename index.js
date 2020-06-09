let isHotOutside = true;
let isWeekday = true;
let hasMoneyInPocket = true;

costOfMilk= 5
moneyInWallet=20
thirstLevel= 8

if (isHotOutside && hasMoneyInPocket == true){
    console.log("Yes you can have icecream")
       
} else {
        console.log("You cant have icecream")
    }

ShouldbuyIcecream = isHotOutside && hasMoneyInPocket;
    console.log(ShouldbuyIcecream +" to have icecream")

willGoSwimming = isHotOutside && !isWeekday;
    console.log(willGoSwimming + " to go swimming!")

isAGoodDay = isHotOutside && hasMoneyInPocket && !isWeekday;
console.log(willGoSwimming + " to having good day!")

willBuyMilk = isHotOutside && (thirstLevel >=3) && (moneyInWallet>=(2*costOfMilk));
console.log(willBuyMilk + " to buying milk!")



    








