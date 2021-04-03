let shape = {
    type: 'shape',
    getType: function() { return this.type; }
};


function Triangle(a, b, c) {
    this.type = 'triangle';
    this.a = a;
    this.b = b;
    this.c = c;
}

Triangle.prototype = shape;
Triangle.prototype.getPerimeter = function() {
    return this.a + this.b + this.c;
};
Triangle.prototype.constructor = Triangle;


let getKeys = function(obj){
    for(let key in obj){
        if (obj.hasOwnProperty(key)) {
            console.log(`${key} : ${obj[key]}`)
        }
    }
}


let t = new Triangle(1,2,3);


console.log(t.constructor === Triangle);
console.log(shape.isPrototypeOf(t));
console.log(t.getPerimeter());
console.log(t.getType());
console.log(getKeys(t));



Object.defineProperty(Array.prototype, 'shuffle', {
    value: function() {
        for (let i = this.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this[i], this[j]] = [this[j], this[i]];
        }
        return this;
    }
});

[1,2,3,4,5,6,7,8,9,0].shuffle();
