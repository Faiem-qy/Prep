// Timeout
const sayHello = function () {
  alert("Hello");
};
setTimeout(sayHello, 3000);

// Interval
const sayHello = function () {
  alert("Hello");
};
const timer = setInterval(sayHello, 3000);

clearInterval(timer);
