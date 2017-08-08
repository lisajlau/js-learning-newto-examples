function factorial(n) {
    if(n === 0 || n === 1) {
        return 1;
    }
    else {
        return (n * factorial(n - 1))
    }
}

console.log("factorial:" + factorial(5));

function fibonacci(n) {
    if(n === 0 || n === 1) {
        return 1;
    }
    else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

console.log("fib for 5: " + fibonacci(5));

function checkLeapYear(year) {
    if(year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log("2012 is leap year:" + checkLeapYear(2012));
console.log("2013 is leap year:" + checkLeapYear(2013));

function getMinAndMax(a) {
    var max = Math.max.apply(null, a); 
    console.log(max);
    var min = Math.min(...a); 
    console.log(min);
    var min2 = a.reduce(
        (a,b) => Math.min(a,b)
    );
    console.log("min2:" + min2);
}

getMinAndMax([4,34,20,2,5]);

String.prototype.repeatify = String.prototype.repeatify || function(n) {
    let tmp = '';
    for (let i = 0; i < n; i++) {
        tmp += this
    }
    
    return tmp;
}

console.log('hello'.repeatify(3));


/* binary tree*/

inputList = new Array();
inputList[0] = 'E';
inputList[1] = 'I';
inputList[2] = 'O';
inputList[3] = 'P';
inputList[4] = 'Q';
inputList[5] = 'R';
inputList[6] = 'T';
inputList[7] = 'U';
inputList[8] = 'W';
inputList[9] = 'Y';

var binarySearch = (input, lookup) => {
    let left = 0;
    let right = input.length - 1;
    
    while(left <= right) {
        let mid = parseInt((left + right)/2);
        
        if(input[mid] == lookup) {
            return mid;
        }
        else if (input[mid] < lookup) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
        
    }
    
    return 'Not found'
}

console.log(binarySearch(inputList, 'E'));
console.log(binarySearch(inputList, 'T'));
console.log(binarySearch(inputList, 'Z'));



var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

add();
add();

function sum(x) {
  if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  } else {
    return function(y) { return x + y; };
  }
}
