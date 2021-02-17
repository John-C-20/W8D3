Array.prototype.uniq = function(){
    newArr = []
    let i 
    for (i = 0; i < this.length; i++) {
        if (!newArr.includes(this[i])) { 
            let currEle = this[i]
            newArr.push(currEle);
        }
    }
    return newArr;
};
    
Array.prototype.twoSum = function() {
    pairs = [] 
    for (i = 0; i < this.length; i++) { 
        for (j = i+1; j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                pairs.push([i, j]);
            }
        }
    } 
    return pairs; 
};

Array.prototype.transpose = function() { 
    let outer = [] 
    for (i = 0; i < this.length; i++) {
        let inner = []
        for (j = 0; j < this.length; j++) {
            let subArr = this[j] 
            inner.push(subArr[i])
        }
        outer.push(inner)
    }
    return outer; 
};

Array.prototype.transpose = function() {
    let outer = []
    for (i = 0; i < this.length; i++) {
        let inner = []
        this.forEach (subArr => inner.push(subArr[i]))
        outer.push(inner)
    }
    return outer;
};
