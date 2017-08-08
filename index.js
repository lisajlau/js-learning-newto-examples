
function sum(x) {
  if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  } else {
    return function(y) { 
        console.log(y);
        return x + y; 
    };
  }
}

function addListener(i) { 
      return console.log(i); 
}

for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
    (function(i) {
        btn.addEventListener('click', function(){console.log(i)});
    })(i);
  document.body.appendChild(btn);
}

for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', ((j) => { return () => console.log(j) })(i));
  document.body.appendChild(btn);
}


var globalVar = "xyz";

(function outerFunc(outerArg, test) {
  var outerVar = 'a';
    console.log(
    "outerArg = " + outerArg + "\n" +
      "outerVar = " + outerVar + "\n" +
      "globalVar = " + globalVar);
  
  (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
      "outerArg = " + outerArg + "\n" +
      "innerArg = " + innerArg + "\n" +
      "outerVar = " + outerVar + "\n" +
      "innerVar = " + innerVar + "\n" +
      "globalVar = " + globalVar);
    
  })();
})(123,20);

globalVar = "xyzefg";

(function(){
  var a = b = 3;
    c =5;

console.log("inner a defined? " + a);
console.log("inner b defined? " + b);
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
console.log("c defined? " + c + " " + (typeof c !== 'undefined'));