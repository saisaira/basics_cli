// anonomous function

// (function(){

// 	})

// XMLHttpRequest(AJAX call)
 
// function getJSON(file,callback){
// 	var xhr=new XMLHttpRequest();
// 	xhr.overrideMimeType("application/json");
//     xhr.open("GET",file,true);
//     xhr.onreadystatechange = ()=>{
//     	if (xhr.readyState =="4" && xhr.status ===200) {
//           callback(xhr.responseText);
//     	}
//     }
//    xhr.send(); 
// }

// calling the function
// getJSON("./data.json",(text)=> {
// 	var d = JSON.parse(text);
// 	console.log(d);
// 	basic_details(d.details);
// 	trainers_details(d.trainers);
// })

//fetch and promises 
function getJSON(file) {
	return new Promise((resolve,reject)=>{
	return fetch(file).then(response=>{
		if (response.ok) {
			resolve(response.json());
		}else{
			reject(new Error('error'));
		}
	})
	})
}
//calling the function

getJSON("./data.json").then(d=>{
	console.log(d)
	basic_details(d.details);
    trainers_details(d.trainers);
})

var main=document.querySelector(".parent-div");

function basic_details(SDC) {
	var img = document.createElement("img");
    img.src=SDC.photo;
    main.appendChild(img);

	var n = document.createElement("h1");
	n.textContent=SDC.name;
	main.appendChild(n);
var a = document.createElement("p");
a.classList.add("age");
a.setAttribute("id","age-id");
a.textContent=SDC.age;
main.appendChild(a);

var h = document.createElement("h1");
h.textContent="Courses in Apssdc";
main.appendChild(h);
h.appendChild(document.createElement("hr"));

var ul= document.createElement("ul");
for (var i = 0; i <SDC.courses.length; i++) {
	var li = document.createElement("li");
	li.textContent=SDC.courses[i];
	ul.appendChild(li);
}
main.appendChild(ul);
}

function trainers_details(t) {
var h = document.createElement("h1");
h.textContent="Trainers details in Apssdc";
main.appendChild(h);
h.appendChild(document.createElement("hr"));	

var table = document.createElement("table");
var row="";
for(var i in t){
row +="<tr><td>"+t[i].name+"</td><td>"+t[i].phone+"</td><td>"+t[i].email+"</td></tr>";	
}
table.innerHTML=row;
main.appendChild(table);
}