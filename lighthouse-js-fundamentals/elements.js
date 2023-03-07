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
