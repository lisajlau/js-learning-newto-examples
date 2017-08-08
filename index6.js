'use strict';
function func() {
    var myVariable=25;
//    console.log("in" + myVariable);
}

func();
//console.log(myVariable);

var obj =  {
    val: 'Hello from 1',
    printVal: function() {
        console.log(this);
        console.log(this.val);
    }
};


var obj2 =  {
    val: 'whats up'
};

var print = obj.printVal.bind(obj2);
print();

function isAnagram(a,b) {
    return (a.split('').sort().join('')) === (b.split('').sort().join(''));
}

function isPalindrom(a,b) {
    return b === a.split('').reverse().join('')
}


function checkParentheses(str) {
    var parentheses = '[]{}()',
        stack = [];
    
    for (var i = 0; i < str.length; i++) {
        var ind = parentheses.indexOf(str[i])
        if(ind !== -1) {
            if(ind%2 === 0) {
                stack.push(ind + 1);
            }
            else {
                if(stack.length === 0) {
                    return false;
                }
                if(stack.pop() !== ind) {
                    return false;
                }
            }
        }
    }
    return stack.length === 0;
}