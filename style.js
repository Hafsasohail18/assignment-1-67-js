

// CHAPTER # 01: ALERTS

// TASKS 1-5

/*alert("Assalam O Alaikum!");
alert("Error! PLease enter a valid password.");
alert("Welcome to JS World...\nHappy Coding!");
alert("Welcome to JS World...");
alert("Hello...I can run JS through my web browser's console.");*/

 // CHAPTER # 02: VARIABLES FOR STRINGS

 // TASKS 1-9

/*var username;
var myName = "Hafsa Sohail";
var message = "Hello World";
alert(message);
var studentName = "Jhone Doe";
alert(studentName);
var studentAge = "15 year old";
alert(studentAge);
var subject = "Certified Mobile Application Development";
alert(subject);
alert("PIZZA\nPIZZ\nPIZ\nPI\nP");
var email;
email = "shafsa187@gmail.com";
alert(" the email address is " + email);
var book;
book = "The smarter way to learn Javascript";
alert(" I am trying to learn from a book " + book);
var text = "Yah! I can write HTML content through Javascript."; 
document.write(text+"<br>"); 
alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");*/

  // CHAPTER # 03: VARIABLES FOR NUMBER

  // TASKS 1
/*var age;
age = "18 years old";
alert(" I am " + age);

// TASKS 2
var i = 14;
alert(" You have visited this site " + i + " times. ");

// TASKS 3
var birthYear;
birthYear = "2001";
document.write("My birth year is " + birthYear +  " Datatype of my declared variable is number."+"<br>");

// TASKS 4
var visitorName;
visitorName = "John Doe";
var productTitle;
productTitle = "T-shirt(s)";
var quantity;
quantity = 5;
document.write(visitorName + " ordered " + quantity + productTitle + " on XYZ clothing store");*/


   // CHAPTER # 04: LEGAL AND ILLEGAL VARIABLES

   // TASKS 1
/*var name = "Hafsa", age = 18 , education = "Intermediate";
 var = "userName","Symbolic_code","int_next","hello1","Hafsa";           //LEGAL VARIABLES
 var = "1user",".hafsa","1stname","hello&bye","5disk"; */                 //ILLEGAL VARIABLES


 // TASKS 2
 /*document.write("<h1>RULES FOR NAMING JS VARIABLES</h1>");
 document.write(" Variable names can only contain numbers,$,_.For example $my_1stVariable " + "<br>");
 document.write(" Variables must begin with a letter, $ or _. For example $name, _name or name" + "<br>");
 document.write(" Variable names are case sensitive." + "<br>");
 document.write(" Variable names should not be JS keywords. " + "<br>");*/

  // CHAPTER # 05: MATH EXPRESSIONS

  // TASKS 1
/*var num1 = 203;
var num2 = 786;
var totalNum = num1+num2;
document.write(" The sum of "+ num1 + " and " + num2 + " is " + totalNum + "<br>");
var num1 = 203;
var num2 = 786;
var totalNum = num1-num2;
document.write(" The subtraction of "+ num1 + " and " + num2 + " is " + totalNum + "<br>" );
var num1 = 2;
var num2 = 6;
var totalNum = num1*num2;
document.write(" The multiplication of "+ num1 + " and " + num2 + " is " + totalNum  + "<br>");
var num1 = 2;
var num2 = 6;
var totalNum = num1/num2;
document.write(" The division of "+ num1 + " and " + num2 + " is " + totalNum + "<br>" );
var i = 22 ;
document.write(" The value after variable declaration is: " + i  + "<br>" );
let a = 5;
document.write(" Initial value is: " + a  + "<br>");
let b = ++a ;
document.write(" The value after increment is: " + b + "<br>" );
var c = 7 ;
var d = b+c ;
document.write(" Value after addition is: " + d + "<br>");
let e = --d;
document.write(" The value after decrement is: " + e + "<br>");
var f = e/3;
document.write(" The remainder is: " + f + "<br>");

// TASKS 2
var ticPrice = 600;
var num = 5 ;
var cost = ticPrice*num ;
document.write(" Total cost of " + num + " tickets " + " of a  movie " + cost + " PKR ");
for( var y = 1; y <= 10 ; y++){
    document.write("4" + "X" + y + "=" + 4*y + "<br>");
}*/

// TASKS 3
/*var C = 29 ;
var F = (C * 9/5 )+32 ;
document.write(C + "oC" + " is " + F + "oF" + "<br>");
var f = 77;
var c = (f-32)/1.8 ;
document.write(f + "oF" + " is " + c + "oC" + "<br>" );*/

// TASKS 4
/*document.write("<h1>Shopping Cart</h1>");
var price1 = 650 ;
document.write(" The price of item 1 is " + price1 + "<br>"  );
var price2 = 100 ;
document.write(" The price of item 2 is " + price2 + "<br>" );
var quan1 = 3 ;
document.write(" The quantity of item 1 is " + quan1 + "<br>");
var quan2 = 7 ;
document.write("The quantity of item 2 is " + quan2 + "<br>");
var charges = 100 ;
document.write(" Shipping Charges is " + charges + "<br>" );
var amount = price1*quan1 + price2*quan2 +charges;
document.write(" Total cost of your is " + amount);*/


// TASKS 5
/*document.write("<h1>Marksheet</h1>");
var t = 980 ;
document.write(" Total marks: "+ t  + "<br>");
var o = 804 ;
document.write(" Obtained marks: "+ o+ "<br>" );
var p = o*100/t;
document.write(" Percentage : " + p + "%" + "<br>");*/


// TASKS 6
/*document.write("<h1>Currency in PKR</h1>");
var d = 10 ;
var r = 25 ; 
var tcurrency = 10*104.80+25*28;
document.write(" Total Currency in PKR : " + tcurrency);*/


// TASK 7
/*var i = 22 ;
var x = i+5*10/2 ;
document.write(" Total Calculation: " + x );*/

/*document.write("<h1>Age Calculator</h1>");
var Cyear = 2020;
document.write(" Current Year : " + Cyear + "<br>");
var Byear = 2001;
document.write(" Birth Year : " + Byear + "<br>" );
var age = Cyear-Byear ;
document.write(" Your Age : " + age + "<br>" );*/


// TASK 8
/*document.write("<h1>The Geometrizer</h1>");
var r = 5 ;
document.write(" The radius of circle : " + r + "<br>");
var circum = 2*3.14*r ;
document.write(" The circumference of circle : " + circum + "<br>");
var area = 3.14*r*r;
document.write(" The area of circle : " + area+ "<br>" );*/

// TASK 9
/*document.write("<h1>The Lifetime supply Calculator</h1>");
var s = "tacos" ;
document.write(" Favourite Snack : " + s + "<br>");
var age = 18 ;
document.write(" The current age : " + age + "<br>");
var maxAge = 65 ;
document.write(" The estimated maximum age : " + maxAge + "<br>" );
var d  = 2 ;
document.write(" The amount of snack per day : " + d + "<br>");
var t = age*d;
document.write(" You will need " + t + s + " to last  you until the ripe old age of " + maxAge + "<br>");*/



 // CHAPTER # 06-09: MATH EXPRESSIONS


 // TASK 1
/*var a =prompt("Enter a number : ");
document.write("<h2>Result</h2>");
document.write(" The value of a is :" + a + "<br>" );

document.write(" The value of ++a is :" + ++a + "<br>");
document.write(" Now the value of a is :" + a + "<br>" );

document.write(" The value of a++ is :" + a++ + "<br>" );
document.write(" Now the value of a is :" + a + "<br>");

document.write(" The value of --a is :" + --a + "<br>" );
document.write(" Now the value of a is :" + a + "<br>");

document.write(" The value of a-- is :" + a-- + "<br>" );
document.write(" Now the value of a is :" + a + "<br>");*/


// TASK 2
/*var a= 2; b = 1;
var r = --a - --b + ++b + b-- ;
document.write(" a is : " + a + "<br>");
document.write(" b is : " + b + "<br>" );
document.write(" The result is : " + r + "<br>" );*/

// TASK 3

/*var Uname =prompt(" Enter your Name :");
alert(" Hello " + Uname);*/

// TASK 4

/*var number = prompt(" Enter a Number :");
for(let i = 1; i <= 10 ;i++){
    document.write(number + "x" + i + "=" + number*i + "<br>");
}*/


// TASK 5
/*var subject1 = prompt("Enter first subject : ");
var subject2 = prompt("Enter second subject : ");
var subject3 = prompt("Enter third subject : ");
var Tmarks = 100 ;
var Omarks1 = prompt(" Enter obtained marks for " + subject1);
var Omarks2 = prompt(" Enter obtained marks for " + subject2);
var Omarks3 = prompt(" Enter obtained marks for " + subject3);*/


//CHAPTER # 09-11: USER INPUT AND CONDITIONAL STATEMENT


// TASK 1
/*var x=prompt("Enter city name :");
if(x === "Karachi"){
    alert("Karachi is the city of lights.");
}*/


// TASK 2
/*var g = prompt("Enter your gender:");
        if(g === "Male"){
        alert("Good Morning Sir!");
        }
        else{
            alert("Good Morning Madam!");
        }*/

        /*var c = prompt("Enter colour of road traffic signal :");
        if(c === "red"){
        alert("Must Stop!");
        }
        else if (c === "yellow"){
        alert("Ready to Move");
        }
        else{
            alert("Move Now");
        }*/

        /*var f =prompt("Enter remaining fuel in car :");
        if(f <= 0.25){
            alert("Please refill the fuel in your car");
        }*/


        // TASK 3
   /* var a = 4;
if (++a === 5){                                          //alert is displayed.
alert("given condition for variable a is true");                
}*/

/*var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");        //alert is not displayed.
}*/

/*var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");                              //alert is displayed.
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}*/

/*var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;                //alert is displayed.
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}*/


// TASK 4
/*document.write("<h1>Marksheet</h1>");
var Omarks1 = +prompt(" Enter obtained marks in first subjects" );
var Omarks2 = +prompt(" Enter obtained marks in second subject" );
var Omarks3 = +prompt(" Enter obtained marks in third subject" );
var Tmarks1 = +prompt("Enter total marks of first subject :");
var Tmarks2 = +prompt("Enter total marks of second subject : ");
var Tmarks3 = +prompt("Enter total marks of  third subject : ");
var totalO= Omarks1+Omarks2+Omarks3;
document.write(" Obtained marks : " + totalO + "<br>" );
var totalT= Tmarks1+Tmarks2+Tmarks3;
document.write(" Total Marks : " + totalT + "<br>" );
var per = totalO*100/totalT ;
document.write(" Percentage : " + per + "%" + "<br>");
if(per >= 80){
    document.write(" Grade : " + " A-one " + "<br>");
    document.write(" Remarks: Excellent! ");
}
else if (per >= 70) {
    document.write(" Grade : " + "A" + "<br>");
    document.write(" Remarks: Good! ");
} 
else if (per >= 60) {
    document.write(" Grade : " + "B" + "<br>");
    document.write(" Remarks: You need to improve. ");
}
else{
    document.write(" Grade : " + "F" + "<br>");
    document.write(" Remarks: Fail. ");
}*/


// TASK 5

/*var s = 2;
var x = prompt(" Guess the secret number: ");
if ( x == s){
    alert(" Bingo! Correct answer. ");
}
else if (x == s+1) {
    alert(" Close enough to the correct answer. "); 
} else {
    alert(" Try again. ");
}*/


/*var num = prompt(" Enter any number to check whether it is divisible by 3 or not ");
if(num % 3 == 0){
    alert(" The number is divisible by 3 .");
}
else{
    alert(" It is not divisible by 3. ");
}*/


/*var num=prompt(" Enter any Number: ");
if(num % 2 == 0){
    alert(" The number is even. ");
}
else{
    alert(" The number is odd. ");
}*/


/*var temp =prompt(" Enter temperature: ");
if( temp >= 40){
    alert(" It is too hot outside. ");
}
else if (temp >= 30) {
    alert(" The Weather is Normal. ");
} else if (temp >= 20) {
    alert("  Weather is cool" );
} else {
    alert(" OMG! weather is so Cool. ");
}*/



/*var num1=+prompt(" Enter first number: ");
var num2=+prompt(" Enter second number: ");
var sign=prompt(" enter operator: ");
var add= num1+num2;
var sub=num1-num2;
var multi=num1*num2;
var divide=num1/num2;
var mod= num1%num2;
if(sign === "+"){
alert(add);
}
else if(sign === "-"){
    alert(sub);
}
else if(sign === "*"){
    alert(multi);
}
else if( sign === "/"){
    alert(divide);
}
else{
    alert(mod);
}/*


 //CHAPTER 12-13: IF...ELSE AND ELSE IF STATEMENTS;TESTING SET OF CONDITIONS


 // TASK 1
/* var char = prompt(" Enter any character: ");
var x = char.charCodeAt();
if(x >= 65 && x <=90){
    alert(" It is an Uppercase letter. ");
}
else if(x >= 97 && x <= 122){
    alert(" It is Lowercase letter. ");
}
else{
    alert( " It is a Number. ");
}*/


// TASK 2
 /*var int1  = +prompt("Enter first number :");
 var int2 = +prompt(" Enter second number :");
 if(int1 <= int2){
     document.write(" The larger number is : " + int2);
 }
     else{
         document.write(" The larger number is : " + int1);
     }*/

     /*var num= +prompt(" Enter any Number :");
     if(num < 1){
         document.write(" The number is Negative. ");
     }
     else if (num >= 1) {
         document.write(" The number is Positve. ");
     } else {
         document.write( " The number is Zero. ");
     }*/


     // TASK 3
    /*var char =prompt(" Enter any letter :");
     if( char == "a" || char == "e" || char == "i" || char == "o" || char == "u" ||  char == "A" || char == "E" || char == "I" || char == "O" || char == "U"  ){
         alert( " TRUE ");
     }
     else{
         alert( " FALSE ");
     }*/


     // TASK 4
     /*var pas = "hafsa187";
     var pas1 =prompt( " Enter your Password : ");
     if(pas1 == pas){
         alert(" Correct! The password you entered matches the original password. ");
     }
     else if (pas1 == "") {
         alert(" Please enter your password. ");
     } else {
        alert(" Incorrect password. ");
     }*/


    // TASK 5

 /*var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}
document.write(greeting);*/



// TASK 6
/*var time= prompt(" Enter time in 24 hours format Eg:1900=7pm : ");
if( time >= 0000 && time < 1200){
    alert(" Good Morning!");
}
else if (time >= 1200 && time < 1200) {
    alert(" Good Afternoon! ");
}
 else if (time >= 1700 && time < 2100) {
    alert(" Good Evening! ");
} 
else {
    alert(" Good Night! ");
}*/

 //CHAPTER # 14-16: ARRAYS

// TASK 1-2
//var myArray = [];
//var myArray = new Array();

// TASK 3-6
 /*var stringarr = ["Honda", "Volvo", "BMW","Suzuki"];

 var numberarr= [2001,22,18,12];

 var mixedarr = [2001,"hafsa","Sohail",18,12,"october"];*/

 // TASK 7

/* var eduQua = ["SSC", "HSC","BCS","BS","B.COM","MS","M.Phil","PhD"];
 document.write(eduQua + "<ol>");*/


 // TASK 8
 /*var stuName = ["Hafsa Sohail","Zainab Shoaib","Hazika Farooq"];
 var stuScore = [380,465,439];
 var total = 500;
 var per1 = stuScore[0]*100/total;
 var per2 = stuScore[1]*100/total;
 var per3 = stuScore[2]*100/total;
 document.write(" Score of " + stuName[0] + " is " + stuScore[0] + "." + " Percentage: " + per1 +"%" + "<br>");
 document.write(" Score of " + stuName[1] + " is " + stuScore[1] + "." + " Percentage: " + per2 +"%" + "<br>");
 document.write(" Score of " + stuName[2] + " is " + stuScore[2] + "." + " Percentage: " + per3 +"%" + "<br>");*/


// TASK 9
 /*var colorarr=["brown","black","baby pink","yellow","white","blue","green","orange","pink"];
 document.write(colorarr + "<br>" );*/

 /*var color1=prompt(" Which color do you like to add to the beginning?");
 colorarr.unshift(color1);                                                              //(a)
 document.write(colorarr  + "<br>" );*/

 /*var color2=prompt(" Which color do you like to add to the end?");
colorarr.push(color2);                                                                 //(b)
 document.write(colorarr + "<br>");*/

 /*var color3=prompt(" Enter two more colors to the beginning:");
 var color4=prompt(" Second Color:");                                                   //(c)
colorarr.unshift(color3,color4);
 document.write(colorarr  + "<br>" );*/

/*colorarr.shift();                                                                     //(d)
document.write(colorarr);*/

/*colorarr.pop();                                                                         //(e)
document.write(colorarr);*/

/*var colour=prompt(" At which index do you want to add a color? ");
var colour1=prompt(" Which color do you want to add? ");                                   //(f)
colorarr.splice(colour,colour1);
document.write(colorarr);*/

// TASK 10
/*var score = [201,318,480,180];
document.write(" Scores of Stiudents: " + score + "<br>" );                               
score.sort();
document.write(" Ordered Scores of Students: " + score + "<br>" );*/


// TASK 11
/*var cities = ["Karachi","Ankara","Islamabad","Lahore","Berlin","Quetta"];
document.write(" Cities List: " + cities + "<br>" );
var sel= cities.slice(0,3);
document.write(" Selected Cities List: " + sel);*/


// TASK 12
/*var array = [" This "," is "," my "," cat "];
document.write(array + "<br>" );
 var join =array.join(" ");
document.write(join);*/


// TASK 14
/*array =[];
array.push("keyboard");
array.push("mouse");
array.push("monitor");
array.push("printer");

document.write(" Devices: " + array + "<br>");

document.write(array.pop() + "<br>");
document.write(array.pop() + "<br>");
document.write(array.pop() + "<br>");
document.write(array.pop() + "<br>");*/


// TASK 15
/*var mob=["Samsung", "Motorola", "Nokia", "Sony","Haier","Lenovo","Apple"];
document.write("<select>");
document.write("<option>" + mob[0] + "</option>");
document.write("<option>" + mob[1] + "</option>");
document.write("<option>" + mob[2] + "</option>");
document.write("<option>" + mob[3] + "</option>");
document.write("<option>" + mob[4] + "</option>");
document.write("<option>" + mob[5] + "</option>");
document.write("<option>" + mob[6] + "</option>");
document.write("</select>");*/

  //CHAPTER # 17-20 : ARRAYS AND LOOP

// TASK 1
 /* let accessories = [
    [''],
    [''],
    [''],
    [''],
    [''],
];*/

// TASK 2
  /*var matrix = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
  document.write(matrix);*/

// TASK 3
 /*for (var i=1; i<=10; i++){
     document.write(i + "<br>");
 }*/


 // TASK 4
 /*var x = prompt("Enter any number to show its multiplication table: ");
 var y = prompt(" Enter length of multiplication table: ");
 document.write("<h1>Multiplication table:</h1>");
 for(let i = 1; i <= y ;i++){
    document.write(x + "x" + i + "=" + x*i + "<br>");
}*/

// TASK 5
/*var fruits = new Array("Apple", "Orange", "Mango", "Banana");

var leng = fruits.length;	

for (var i = 0; i < leng; i++) {
	document.write(fruits[i] + "<br>");
}
document.write(" Element at index 0 is " + fruits[0] + "<br>" );
document.write(" Element at index 1 is " + fruits[1]  + "<br>");
document.write(" Element at index 2 is " + fruits[2]  + "<br>");
document.write(" Element at index 3 is " + fruits[3]  + "<br>");*/


// TASK 6
/*document.write("<h1>Counting</h1>");
for(count = 1 ; count <= 15 ; count++){
    document.write(count + ",");
}*/



/*document.write("<h1>Reverse Counting</h1>");
for(count = 10 ; count >= 1 ; count--){
    document.write(count + ",");
}*/



/*document.write("<h1>Even Numbers</h1>");
for(count = 0 ; count <= 20 ; count=count+2){
    document.write(count + ",");
}*/


/*document.write("<h1>Odd Numbers</h1>");
for(count = 1 ; count <= 20; count=count+2){
    document.write(count + ",");
}*/


/*document.write("<h1>Even Numbers</h1>");
for(count = 2 ; count <= 20 ; count=count+2){
    document.write(count + "k,");
}*/


// TASK 7
/*var a = prompt(" Welcome to Hafsa's Bakery. What do you want to order? ");
if(a == "cake"|| a == "donuts" || a == "cookie" || a == "chips" || a =="patties" || a == "samosay"){
    alert(a + " is available in our bakery. " );
}
else{
    alert( " We are sorry, " + a + " is not available in our bakery. ");
}*/


// TASK 8
/*var A = [24, 53, 78, 91, 12];
document.write(" Array items: " + A + "<br>");
var max= Math.max.apply(null,A);
document.write(" The largest number: " + max);*/


// TASK 9
/*var A = [24, 53, 78, 91, 12];
document.write(" Array items: " + A + "<br>");
var max= Math.min.apply(null,A);
document.write(" The smallest number: " + max);*/


// TASK 10
/*for(var f = 5; f <= 100 ; f=f+5 ){
    document.write(f + ",");
}*/


// CHAPTER # 21-25: STRINGS METHODS


// TASK 1
 /*var fname=prompt(" Enter your first name: ");
 var lname=prompt(" Enter your last name: ");
 var FullName=fname + " " + lname;
 alert(" Good Morning! " + FullName);*/

 // TASK 2
 /*var FavMob= prompt(" Enter your favourite mobile : ");
 var length= FavMob.length;
 document.write(" My favourite mobile is: " + FavMob + "<br>");
 document.write(" Length of string: " + length);*/

 //TASK 3
 /*var word="Pakistani";
 var index=word.indexOf("n");
 document.write(" String: " + word + "<br>");
 document.write(" Index of n is : " + index);*/

 // TASK 4
/*var word="Hello World";
var index=word.lastIndexOf("l");
document.write(" String: " + word + "<br>");
document.write(" Index of l is : " + index);*/


//TASK 5
 /*var word="Pakistani";
 var index=word.indexOf("i");
 document.write(" String: " + word + "<br>");
 document.write(" Index of i is : " + index);*/

 //TASK 6
 /*var fname=prompt(" Enter your first name: ");
 var lname=prompt(" Enter your last name: ");
 var string= fname.concat(" " + lname);
 alert(" Good Morning! " + string);*/

 //TASK 7
 /*var city = "Hyderabad";
 document.write(" city: " + city + "<br>");
 var replace = city.replace("Hyder","Islam");
 document.write(" After replacement: " + replace);*/

 // TASK 8
 /*var message = "Ali and Sami are best friends. They play cricket and football together.";
 document.write(message + "<br>");
 var replace = message.replace(/and/g,"&");
 document.write(" After replacement: " + replace);*/

 // TASK 9
 /*var string= 472;
 document.write(" Value : " + string + "<br>");
 document.write(" Type : " + " string " + "<br>" );
 var num = parseInt(string);
 document.write(" Value : " + num + "<br>" );
 document.write(" Type : " + " Number "  + "<br>");*/

 // TASK 10
 /*var input = prompt(" Enter any text: ");
 document.write(" User input : " + input  + "<br>");
 var upper = input.toUpperCase();
 document.write(" Upper case : " + upper);*/

 // TASK 11
/*var input = prompt(" Enter any text: ");
 document.write(" User input : " + input  + "<br>");
 var upper = input.toLowerCase();
 document.write(" Upper case : " + upper);*/

 // TASK 12
 /*var num = 35.36;
 document.write(" Number : " + num);
 var string = num.toString();
 document.write(" String : " + string);*/

 //TASK 13
 /*var UserName= prompt(" Enter Username: ");
 for( var i = 0; i< UserName.length; i++) {
     var Uname = UserName.charCodeAt(i);
 if( Uname === 33 || Uname === 44 || Uname === 46 || Uname === 64){
     alert( " Please enter your valid Username.");
     break;
 }
}*/

 // TASK 14
/*var str = ("cake","apple pie","cookie", "chips", "patties");
 str.toUpperCase();
var user = prompt(" Welcome to Hafsa's Bakery. What do you want to order? ");
if(user === str){
    alert(" It is available");
}
else{
    alert(" Not available");
}*/

// TASK 15
/*var pass= prompt(" Enter your Password: ");
document.write(" Entered password: " + pass + "<br>");
for (var i = 0; i < pass.length ;i++){
    var char= pass.charCodeAt(i);
    if (char >=33 && char <=47 || char == 64){
    document.write(" Please enter only numbers and letters " + "<br>" + " Please enter a valid password ");
    break;
}
else if( parseInt(pass)){
    document.write(" Password should not start with numbers " + "<br>" + " Please enter a valid password");
    break;
}
 else if (pass.length <=6 ){
    document.write(" Password should be 6 characters long " + "<br>" + " Please enter a valid password ");
}
else{
    document.write(" Perfect! Your password is correct");
    break;
}
}*/

// TASK 16
/*var uni = "University of Karachi";
var split= uni.split();
document.write(split);*/

// TASK 17
/*var input= prompt(" Enter any word: ");
document.write(" User input: " + input + "<br>");
var LWord=input.charAt(input.length-1);
document.write( " Last cahracter of input: " + LWord);*/

// TASK 18
/*var string = "The quick brown fox jumps over the lazy dog";
var occur = string.indexOf("the");
document.write(occur);*/

// CHAPTER # 26-30: MATHS METHODS

// TASK 1
/*var num = prompt(" Enter any positive floating value : ");
document.write(" Number: " + num + "<br>" );
var round= Math.round(num);
document.write(" Round off value: " + round + "<br>");
var floor = Math.floor(num);
document.write(" Floor value: " + floor + "<br>" );
var ceil = Math.ceil(num);
document.write(" Ceil number: " + ceil + "<br>");*/

// TASK 2
/*var negNum= prompt(" Enter any negative floating number: ");
document.write(" Number: " + negNum + "<br>");
var round= Math.round(negNum);
document.write(" Round off value: " + round + "<br>");
var floor = Math.floor(negNum);
document.write(" Floor value: " + floor + "<br>" );
var ceil = Math.ceil(negNum);
document.write(" Ceil number: " + ceil + "<br>");*/

// TASK 3
/*var input= prompt(" Enter a number: ");
document.write(" The number is:" + input + "<br>");
var abs= Math.abs(input);
document.write(" The absolute value is : " + abs);*/

// TASK 4
/*var dice= Math.floor(Math.random()*6+1);
document.write(" Random dice value: " + dice);*/

// TASK 5
/*var toss = Math.floor(Math.random()*2+1);
document.write(toss + "<br>");
if(toss === 1){
    document.write(" Random coin value: " + "Tails");
}
else{
    document.write(" Random coin value: " + "Heads");
}*/

//TASK 6
/*var RanNum=Math.floor(Math.random()*100+1);
document.write(" The random number between 1 to 100: " + RanNum);*/

// TASK 7
/*var weight = prompt(" Enter your weight: ");
document.write(" The weight of the user is: " + weight + " kilograms ");*/

// TASK 8
/*var num= Math.floor(Math.random()*10+1);
var user= prompt(" Enter any number between 1 to 10: ");
if(num === user){
    alert(" Congratulation! You guessed the number correct:");
}
else{
    alert(" Try again.");
}*/

// CHAPTER 31-34:DATE METHODS
// TASK 1
/*var current= new Date();
document.write(current);*/

//TASK 2
/*var months= ['January','February','March','April','May','June','July','August','September','October','November','December'];
var A = new Date();
var current = months[A.getMonth()];
document.write(current);*/

// TASK 3
/*var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var A= new Date();
var current=days[A.getDay()];
document.write(current);*/

// TASK 4
/*var date=new Date();
var day= date.getDay();                                                        
if(day === 6 || day === 0){
    document.write(" It's fun day.");
} 
else{
    document.write("");
}*/

// TASK 5
/*var date= new Date();
if(date <= 16){
    document.write(" First fifteen days of month. ");
}
else{
    document.write(" Last days of month. ");
}*/

// TASK 6
/*var current= new Date();
document.write(" Current Date: " + current + "<br>");
var sec = current.getTime();
document.write(" Elapsed  milliseconds since January 1,1970 : " + sec + "<br>");
var min = sec/60000;
document.write(" Elapsed  minutes since January 1,1970 : " + min);*/

// TASK 7
/*var current = new Date();
var time = current.getHours();                                                // IT NEEDS TO CHECK.
document.write(time);
if(time <= 12){
    alert(" It's A.M");
}
else{
    alert(" It's P.M");
}*/

// TASK 8
/*var date = new Date();
date.setDate(11);
document.write(date);*/                                         // NOT DONE

// TASK 9
/*var date = new Date();
var FirstRam= new Date(" April 24,2020");
var cal = 24*60*60*1000;
var diff = Math.round(Math.abs(FirstRam-date)/cal);
document.write(diff + " days have passed since 1st Ramazan,2020 ");*/

// TASK 10
/*var curDate= new Date();
var RefDate= curDate.setDate("December 22,2001");
var diff = (curDate.getSeconds()-RefDate.getSeconds())*1000 ;
document.write(diff);*/

// TASK 11
/*var date= new Date();
date.setHours(date.getHours()-1);
document.write(date);*/

// TASK 12
/*var date= new Date();
date.setFullYear(date.getFullYear()-100);
document.write(date);*/

// TASK 13
/*var age= prompt(" Enter your age: ");
document.write(" Your age is " + age + "<br>");
var date= new Date();
date.getFullYear(date.getFullYear()-age);
document.write(date);*/


// TASK 14
/*document.write("<h1>K-Electric Bill</h1>")
var name= prompt(" Enter your name: ")
document.write("Customer name: " + name + "<br>");
document.write(" Month: June" + "<br>");
var unit= prompt(" Enter units: ");
document.write(" Number of Units : " + unit + "<br>");
var charges= prompt(" Enter unit charges: ");
document.write(" Charges per units :" + charges + "<br>");
var net = unit * charges;
document.write(" Net Amount Payable (within Due Date): "+ net + "<br>");+
document.write(" Late payment surcharge: 350 " + "<br>");
var gross = net + 350;
document.write(" Gross amount payment ( after due date): " + gross + "<br>");*/


// CHAPTER 35-38: FUNCTION

// TASK 1
/*function currentDate(date) {
    document.write(date)
}
currentDate(new Date());*/                

// TASK 2
/*var FirstName=prompt(" Enter your first name: ");
var LastName= prompt(" Enter your last name: ");

function greeting(greet){
    alert(greet)
}
greeting(" Hello " + FirstName + " " +  LastName + "!");*/

// TASK 3
/*var num1= +prompt(" Enter first number: ");
var num2=+prompt(" Enter second number: ");

function addition(add){
    var a= num1+num2;
    return a;
}
document.write(addition());*/

// TASK 4
/*var num1= +prompt(" Enter first number: ");
var num2=+prompt(" Enter second number: ");
var sign= +prompt(" Enter operator: ");

function calculator(cal){
    if(sign === "+"){
        var res= num1+num2;
        document.write(" Result: " + res);
    }
    else if(sign === "-"){
        var res=num1-num2;
        document.write(" Result: " + res);
    }
    else if(sign === "*"){
        var res = num1*num2;
        document.write(" Result: " + res);
    }
    else{
        var res = num1/num2;
        document.write(" Result: " + res);
}
calculator();*/

// TASK 5
/*function sqrt(a,b){
  var c = Math.pow(a,b);
  return c;
}
 document.write(sqrt(2,2));*/


// TASK 6
/*function Factorial(n) { 
    var ans=1; 
      for (var i = 2; i <= n; i++) 
        ans = ans * i; 
    return ans; 
}
  alert( Factorial(5) );*/

// TASK 7
/*var input1=prompt(" Enter start number: ");
var input2=prompt(" Enter last number: ");
function counting(count){
    for(var i=input1; i <= input2;i++){
        document.write(i + "<br>");
    }
}
counting();*/

// TASK 8
/*var base=prompt(" Enter base of right angle triangle: ");
var per= prompt(" Enter perpendicular of right angle triangle: ");
function calculatehypo(){
    function calculatebase(){
        var a= base*base;
        var b= per*per;
        document.write(a,b);
    }
    var c= a+b;
}
calculatebase();
calculatehypo();*/

// TASK 9
/*function RectangleArea(width,height){
var area=width*height;
return area;
}
document.write(RectangleArea(20,40));*/

/*function RectangleArea(){
    var area= 20*40;
    return area;
}
document.write(RectangleArea());*/


// TASK 10
/*var string=prompt(" Enter any word: ");*/

// TASK 11
/*function uppercase(string){
  var array1 = string.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
document.write(uppercase("the quick brown fox"));*/

// TASK 12
/*function LongestWord(string){
 var Word=string.split(" ");
 Word.sort(function(a, b){return b.length - a.length});
 return Word[0];
}
document.write(LongestWord("Web Development Tutorials"));*/

// TASK 13
/*var a = prompt(" Enter any string : ");
var b = prompt(" Enter any letter: ");
function occurence(){
    var c = a.indexOf(b);
    return c; 
}
document.write(occurence());*/

// TASK 14
/*function Circumference(radius) {
    var y = (Math.PI * radius) * 2;
  document.write("The circumfrence of circle is " + y + "." + "<br>");
  }
  function Area(radius) {
    var x = (Math.PI * radius) * radius;
  document.write("The area of circle is " + x + ".");
  }
  
  Circumference(50);
  Area(30);*/


// CHAPTER # 38-42 : FUNCTIONS;SWITCH STATEMENTS;WHILE ... DO WHILE LOOPS


// TASK 1

/*var a = prompt(" Enter first number: ");
var b = prompt(" Enter second number: ");

function power(){
    var pow = Math.pow(a,b);
   return pow;
}
document.write(power());*/

// TASK 2

/*function leapYear(){
    var inputYear = prompt(" Enter any year: ");
   if((inputYear % 100 === 0) && (inputYear % 400 === 0) || (inputYear % 4 === 0)){
       document.write("This is leap year.");
   }
       else{
           document.write(" Not a leap year.");
       }
    }
       leapYear();*/



// TASK 3

/*function peri(a,b,c){
    var s = (a+b+c)/2;
    return s;
}

function area(){
    var area = s*(s-a)(s-b)(s-c);
    return area;
}
document.write(peri(4,5,2));
document.write(area());*/

// TASK 4

/*function mainFunction(){
    var marks1 = prompt(" Enter your marks in first subject: ");
    var marks2 = prompt(" Enter your marks in second subject: ");
    var marks3 = prompt(" Enter your marks in third subject: ");
}
mainFunction();

function percentage(){
    var total = mark1+mark2+mark3;
    var per = total*100/300;
    return per;
}
document.write(percentage());*/

// TASK 5

/*function indexOf(a,b){
    var index ;
    for(var i = 0; i < a.length ; i++){
        if(a[i] == b){
            index = i ; 
            break;
        }
    }
    document.write(index);
}
indexOf("Hafsa Sohail" , "s");*/

// TASK 6

/*var sentence = "My name is Hafsa Sohail";
document.write(sentence);

function removeVowels(){
    if(sentence == "a" || "e" || "i" || "o" || "u"){
        sentence.replace(" ");
    }
}
document.write(removeVowels());*/



// TASK 7

// TASK 8

/*var input = prompt(" Enter the distance between two cities in kilometre.");
function meter(){
    var m = input*1000;
    return m ;
}
document.write(" The distance between two cities in meter: " + meter() + " m " + "<br>");

function feet(){
    var f = input*3281;
    return f ;
}
document.write(" The distance between two cities in feet: " + feet() + " feet " + "<br>");

function inches(){
    var inch = input*39370;
    return inch ;
}
document.write(" The distance between two cities in inches: " + inches() + " inches " + "<br>");

function centimetre(){
    var cm = input*100000;
    return cm;
}
document.write(" The distance between two cities in cm: " + centimetre() + " cm " + "<br>");*/

// TASK 9

/*var workedHours = prompt(" Enter total worked hours: ");
function overTime(){
    if(workedHours >= 40){
        overtime = workedHours-40;
        overtimePay = 12*overtime;
}
else{
    document.write(" ");

}
return overtimePay;
}
document.write(" the total overtime pay of employee is: " + overTime());*/

// TASK 10

/*var amount = prompt("Please enter amount for withdraw :");

function withdraw(){
    var a = amount/100;
    var b= (amount%100)/50;
    var c = (((amount%100)%50)/10);
    return a,b,c;
}
document.write(withdraw());*/


// CHAPTER # 43-48 : EVENTS

// TASK 1
// In Html

// TASK 2
/*function alert(){
    alert("Thank you for purchasing mobile from us.");
}*/

// TASK 3
/*function Delete1(){
    var del1 = document.getElementById("delete1");
    del1.remove();
}
function Delete2(){
    var del2 = document.getElementById("delete2");
    del2.remove();
}
function Delete3(){
    var del3 = document.getElementById("delete3");
    del3.remove();
}
function Delete4(){
    var del4 = document.getElementById("delete4");
    del4.remove();
}
function Delete5(){
    var del5 = document.getElementById("delete5");
    del5.remove();
}*/

// TASK 4
/*function after(){
    document.getElementById("flower").src = "images/b.jpg";
}
function before(){
    document.getElementById("flower").src = "images/a.jpg";
}*/

// TASK 5

/*var a = document.getElementById("input");
var counter = 1;

function increase(){
    a.innerHTML = counter.toString();
    counter++;
    return counter;
}

function decrease(){
    a.innerHTML = counter.toString();
    counter--;
    return counter;
}*/

// CHAPTER # 49-52: EVENTS

// TASK 1
 /*function submission(){
     var name = document.getElementById("name");
     document.write(name.value);
     var email = document.getElementById("e-mail");
     document.write(email.value);
 }*/

 // TASK 2
/*function readMore(){
    var para = "This study was a preliminary study of high school student value changes because of the terrorist attack on the U.S. The major limitations of this study were that the student population was from California and might not truly represent all high school students in the U.S. Further, this study could not be considered a truly longitudinal study because of privacy issues that prevented the researchers from identifying all the students who returned surveys before the attack. In addition, the senior class had graduated the previous year, and a much larger freshman class entered the school. These issues not only made the samples similar, but also different in their composition. The researchers will conduct periodic studies to explore whether these value changes are permanent and continue into adulthood. We do not know what if any changes will take place in their values as they grow older, and we will continue to explore their values in our longitudinal studies of the impact of the 9/11 terrorist attacks.";
    document.getElementById("paragraph").innerHTML = para;
}*/

// TASK 3

// CHAPTER # 53-57: 

// TASK 1

/*var modal = document.getElementById("myModal");                             // I just set a modal on first picture as I don't understand how to do this.

var img = document.getElementById("img1");
var modalImg = document.getElementById("myimg");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}*/



// TASK 2
/*function zoomIn(){
    var para1= document.getElementById("paragraph").style.fontSize= "30px";
}
function zoomOut(){
    var para2 = document.getElementById("paragraph").style.fontSize = "15px";
}*/

//CHAPTER # 58-67: DOM

// TASK 1

// (i)
/*var mainContent = document.getElementById("main-content");
console.log(mainContent);*/

// (ii)
/*var elements = document.getElementById("main-content").childNodes;
console.log(elements);*/

// (iii)
/*var ren = document.getElementsByClassName("render");
for(var i = 0;i< ren.length ;i++){
    document.write(ren[i].innerHTML + "<br>");
}*/

//(iv)
/*document.getElementById("first-name").value = "Hafsa";

// (v)

document.getElementById("last-name").value = "Sohail";
document.getElementById("email").value = "shafsa187@gmail.com";*/

// TASK 2

// (i)
 /*var form = document.getElementById("form-content").nodeType;
 document.write(form + "<br>");*/

 // (ii)
 /*var lname = document.getElementById("lastName").nodeType;
 document.write(lname + "<br>");

var nodeList = document.getElementById("lastName").childNodes;
for (var index = 0; index < nodeList.length; index++) {
    document.write(nodeList[index]);
}*/

// (iv)
/*var first = document.getElementById("main-content").firstChild;
document.getElementById("demo").innerHTML = first;

var last = document.getElementById("main-content").lastChild;
document.getElementById("demo").innerHTML = last;
console.log(last);*/

// (v)
/*var next = document.getElementById("lastName").nextSibling.innerHTML;
document.getElementById("demo").innerHTML = next ;*/
