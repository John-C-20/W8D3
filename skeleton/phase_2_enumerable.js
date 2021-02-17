// Functions that are passed as an argument to another function are called callbacks.
// function logIfEven(num) {
//     if (num % 2 === 0) {
//         console.log(`${num} is an even number!`);
//     }
// }

// [1, 2, 3].forEach(logIfEven);

function callBack(params) {
    return params * 2; 
};

Array.prototype.myEach = function(callback) { 
    for (i = 0; i < this.length; i++) {
        callback(this[i]); 
    }
};
// [1,2,3].each {|ele| ele * 2} == [1,2,3].prototype.myEach  


Array.prototype.myMap = function(callback) {
    let newArr = [] 
    this.myEach(function() { ele => new_arr.push(callback(ele))})
    // x = (params) => {function body}
   
};


// regular function def
//     function funcname(ele) {
//         new_arr.push(callback(ele))
//     };

Array.prototype.myMap = function (callback) {
    let newArr = []
    this.myEach(function () { ele => new_arr.push(callback(ele)) })

};


