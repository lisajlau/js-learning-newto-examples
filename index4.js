//'use strict';

// (function(){
//   var a = b = 3; c =5; var d = 4; 
// })();

// console.log("a defined? " + (typeof a !== 'undefined'));
// console.log("b defined? " + (typeof b !== 'undefined'));

var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    },
    foo:'456'
};
myObject.func();
var object = {foo: "bar", foo: "baz"};


function sum(x) {
   if(arguments.length == 2) {
       return x + arguments[1];
   }
    else {
        return function(y) {
            return x + y;
        }
    }
}

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3)); 

for (var i = 0; i < 5; i++) {
        
      var btn = document.createElement('button');
      btn.appendChild(document.createTextNode('Button ' + i));
      btn.addEventListener('click', 
    (function(i) {return function(){ console.log(i); }})(i));
      document.body.appendChild(btn);
}