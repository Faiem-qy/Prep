{
  /* <p id="intro">
  Hello World!
</p>

<p id="info">
  JavaScript on The DOM
</p> */
}

const paragraphs = document.getElementsByTagName("p");
alert(paragraphs[0].innerHTML);
alert(paragraphs[1].innerHTML);

/* console.log(paragraphs[0,1].innerHTML) */

let elm = document.getElementsByTagName("p");
/* console.log(elm) */
//Above is the Object
let arr = [];

for (let i = 0; i < elm.length; i++) {
  arr.push(elm[i].innerHTML);
}
console.log(arr);

// get elements by name
/*
<h2>
  List of People:
</h2>


// HTML
<ul class='people'>
  <li class='name'>
    Clara
  </li>
  <li class='name'>
    James
  </li>
  <li class='name'>
    Sara
  </li>
</ul>
*/

// 1. Create an empty array, `names`
// 2. Find all the paragraph elements using `getElementsByClassName`
// 3. For each element found
// Add the element's text to the array of names
// 4. Alert the final result

/*
let names = [];
let p = document.getElementsByClassName('name');

for (let i = 0;i<p.length; i++){
names.push(p[i].innerHTML)
}
console.log(names)
*/

//changing content with inner.HTML
/*
<p id="intro">
  Hello World!
</p>

<p id="info">
  JavaScript on The DOM
</p>
*/
/*
	TODO:
  
  	1. Create an empty variable, `elm`
  	2. Find an element with the ID `info` and set the variable `elm` with its value
    3. Change the contents of that elements to say `JavaScript Rocks!`
*/
/*
let elm = document.getElementById('info');
elm.innerHTML = 'JavaScript Rocks!';
*/

//Changing attributes
/*
<img id='lhl-logo' src='https://cl.ly/2O3Y2w1R2j0v/Image%202016-07-20%20at%201.16.13%20PM.png' width='400' />
*/

// TODO:
// 1. Select the element who's attributes you'd like to change and set it to a variable
// 2. Change the width attribute of that element to 200 instead of the default 400 that it starts with in the HTML
// 3. Set a 1 second delay, then change it back to 400
/*
document.getElementById('lhl-logo').width = '100';

setTimeout(function(){
document.getElementById('lhl-logo').width = '500'
}, 1000)
*/

// Adding New Attributes

{
  /* <input id="name" />; */
}

// TODO:
// 1. Find the input element by the ID using the `querySelector` DOM method
// 2. Set the `placeholder` attribute to some text value

// document.querySelector('#name').setAttribute('placeholder','Jane Doe');
