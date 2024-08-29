var age = 25;
var price = 500;

if (age <= 12){
    console.log( 'tumi free khaite parba');
    
}
else if (age >= 60){
    // 50% discount 
    const discount = price *50 / 100;
    const finalPrice = price - discount;
    console.log('apni sir 50% discount paisen' + finalPrice);
    
}
else if (age >= 50){
    // 40% discount 
    const discount = price * 40 / 100;
    const finalPrice = price - discount;
    console.log('tumi 40% discount paiso' + finalPrice);
}
else if (age >= 40 ){
    // 30% discount 
    const discount = price * 30 / 100;
    const finalPrice = price - discount;
    console.log('tumi 30% discount paiso' + finalPrice);
}
else if (age >= 30){
    // 20% discount 
    const discount = price * 20 / 100;
    const finalPrice = price - discount;
    console.log('tumi 20% discount paiso' + finalPrice);
}
else if(age <= 20){
    // 5% discount 
    const discount = price * 5 /100;
    const finalPrice = price - discount;
    console.log('tumi 5% discount paiso' + finalPrice);
    
}
else{
    console.log(price);
    
}

