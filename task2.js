var weight = prompt('enter your weight') ;
var height = prompt('enter your height (m)') ;

var BMI = weight  / (height * height);

console.log(BMI.toFixed(1));

if(BMI < 18.5){
    console.log('you are under weight.');

}else if(BMI >= 18.5 && BMI <= 24.9){

    console.log('congragulation you are normal.');
    
}else if(BMI >= 24.9 && BMI <= 29.9){

    console.log('you are over weight');

}else {
    console.log('you are obese');
    
}
