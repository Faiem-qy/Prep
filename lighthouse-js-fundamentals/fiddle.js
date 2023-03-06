/*
	TODO:
  
  	1. Create an empty variable, `elm`
  	2. Find an element with the ID `info`
    3. Set `elm` to the variable that you found
    4. Alert the inner text of the element with `alert` function, it should alert the text "JavaScript on The DOM"
*/
let elm = document.getElementById('info');

//GET ALL text inside that ID
/* alert(elm.textContent); */

//GET First text inside
alert(elm.firstChild.textContent); 
//WHY doesnt childNodes[0].innerHTML work above but works for the rest below?

//GET text of nexted element
/* alert(elm.childNodes[1].innerHTML); */

//GET text of nexted element
/* alert(elm.childNodes[3].innerHTML); */  
//WHY is this childNodes[3] and not childNodes[2]?
