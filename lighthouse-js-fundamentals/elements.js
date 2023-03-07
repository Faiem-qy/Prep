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
