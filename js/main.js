// creating Object
var details={
name:"Apssdc",
age:5,
courses:["webdesign using ReactJs","python","data analysis"]
}



// for loop syntax and working

// for (var i = 0; i < details.courses.length; i++) {
// 	document.writeln(details.courses[i]+"<br>");
// }

// for-in functionality

// for (var i in details){
// 	document.write(details[i]+"<br>");
// }


// we need to use for-of only strings,arrays not objects/

// var name = "APSSDC ReactJs"
// for(var i of name){
// 	document.write(i);
// }

// var a=25;
// if(a<=21){
// document.write("success");
// }
// else if(a==25){
// 	document.write("your age is "+a);
// }
// else{
// 	document.write("failed");
// }

// function addd(a,b) {
// 	document.write(a+b,"<br>");
// }
// addd(6,8)

// adddd=(a,b)=>{
// 	document.write(a+b);
// }
// adddd(10,20);

var a=10;
{
	var a=20
	document.write(a,"<br>");
}
document.write(a,"<br>")

let b=10;
{
	let b=20;
	document.write("let",b,"<br>");//20
}
document.write("let",b);//10

