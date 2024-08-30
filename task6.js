var ticketPrice = 800;
var age = 80;
var students = false;

if (age < 10) {
  // 100% discount
  console.log("Awsome Tumar vara free");
} else if (students == true) {
  // 50% discount
  const discount = (ticketPrice * 50) / 100;
  const studentDiscountedPrice = ticketPrice - discount;
  console.log(studentDiscountedPrice + " taka tumi 50% discount paiso");
} else if (age >= 60) {
  // 15% discount
  const discount = (ticketPrice * 15) / 100;
  const seniorDiscountedPrice = ticketPrice - discount;
  console.log(seniorDiscountedPrice + " taka apni sir 15% discount paisen ");
  
} else {
  console.log(ticketPrice);
}
