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

for (var i in details){
	document.write(details[i]+"<br>");
}


// we need to use for-of only strings,arrays not objects/

var name = "APSSDC ReactJs"
for(var i of name){
	document.write(i);

}

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

// var a=10;
// {
// 	var a=20
// 	document.write(a,"<br>");
// }
// document.write(a,"<br>")

// let b=10;
// {
// 	let b=20;
// 	document.write("let",b,"<br>");//20
// }
// document.write("let",b);//10
// function add(a,b){
// 	window.alert(a+b);
// }
// add(5,6)
// arrow function

// var add=(a,b)=>{
// 	window.confirm(a+b);
// }
// add(5,6);

// var, let and const
// var a=10;
// var a=40;
// document.write(a,"<br")
// {
// 	var a = 20;
// 	document.write(a,"<br>")
// }
// document.write(a,"<br>")

// let a=10;
// {
// 	let a = 20;
// 	document.write(a,"<br>")
// }
// document.write(a,"<br>")

// const a=10;
// {
// 	const a = 20;
// 	document.write(a,"<br>")
// }
// document.write(a,"<br>")

// class Square{
// 	constructor(height,width){
//         this.h=height;
//         this.w=width;
// 	}
// }
// var a=new Square("40cm","40cm");
// document.write(a.h);

// var s=["sai","swami","gauthami","Rajesh"]
// var[name1,name2,name3,name4]=s
// document.write(name1)

// Rest parameter(...paramname)
// function addition(p1,p2,...t){
// 	document.write(p1+p2,"<br>");
// 	document.write(t[3])
// }
// addition(1,2,3,4,5,77,567)

// spread parameter(...paramname)

// const array1=[1,2,3];
// const array2=[...array1]
// array2.push(4,5,6,7);
// document.write(array2)

// interpolation
var n=[1,2,3];
var m=`i have the number ${n}`;
document.write(m);