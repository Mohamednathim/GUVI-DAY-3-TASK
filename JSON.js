const obj1 = {name:"Person 1", age:5}
const obj2 = {age:5, name:"Person 1"}

const hasSameDataObj = function(obj1, obj2){
    let obj1Keys = Object.keys(obj1);

    if (obj1Keys.length === Object.keys(obj2).length){
        return obj1Keys.every(key => obj2.hasOwnProperty(
            key) && 0bj2[key] === obj1[key]);
    };
    return false
}

console.log(hasSameDataObj(obj1, obj2));