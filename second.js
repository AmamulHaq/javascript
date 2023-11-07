let a=[1,2,5,8,9]
let b=[7,8,6]
let c=a.concat(b);

console.log(c)
let compare=(a,b)=>{
    return a-b;
}
c.sort(compare)
console.log(c) 