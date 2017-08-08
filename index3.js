'use strict';

function test(id) {
    this.id = id;
}

test.prototype.getId = function() {
    return this.id;
}

let test1 = new test('test1');
let test2 = new test('test2');
console.log('test1:' + test1.getId());
console.log('test2:' + test2.getId());

var newtest2 = function(id) {
    var root = null;
    
    return {
        getId: function() {
            return id;
        }
    }
}

let test3 = new newtest2('test3');
let test4 = new newtest2('test4');
console.log('test3:' + test3.getId());
console.log('test4:' + test4.getId());

var newtest3 = function(id) {
    
    return {
        getId: function() {
            return 123;
        }
    }
}()

console.log('test5:' + newtest3.getId());


function gizmo(id, secret) {
    secret = secret || {};
    secret.id = id;
    return {
        toString: function() {
            return "gizmo" + secret.id;
        }
    }
}

function hoozit(id) {
    var secret = {}
    var that = gizmo(id, secret);
    that.test = function(testid) {
        return testid === secret.id;
    }
    that.getSecret = function() {
        return secret;
    }
    return that;
}

//Functional inheritance
function Shape(width, height) {
  var shape = {};
  shape.width = width;
  shape.height = height;
  return shape;
}

function Square(width, height) {
  var shape = Shape(width, height);
  shape.size = width * height;
  return shape;
}
var square = Square(100, 100);
var square2 = Square(200, 100);


//psuedoclassical inheritance

function Fruit(sweetness, freshness, organic) {
  this.sweetness = sweetness;
  this.freshness = freshness;
  this.organic = organic;
}

function Apple(sweetness, freshness, organic) {
  Fruit.call(this, sweetness, freshness, organic);
  this.color = freshness;
  this.name = "apple";
}

function Gizmo2(id) {
    this.id = '456';
    this.newid = '123';
}

Gizmo2.prototype.toString = function() {
    return "giszmo" + this.id + " " + this.newid;
}

function Hoozit2(id) {
    this.id = id;
}

Hoozit2.prototype = new Gizmo2();
Hoozit2.prototype.test = function() {
    return this.newid;
}

function foo(){
    function bar() {
        return 3;
    }
    return bar();
    function bar() {
        return 8;
    }
}
