// in browser only ?
var out=[]
var cnt=1;
function f(){
  out.push(cnt);
  cnt++;
  console.log(out);
}
//version1
let x = [];
function fizzBuzz() {
    for (let i = 1; i <=100; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            x.push("Fizz");
        } 
        else if (i%3 !==0 && i%5 ===0) {
            x.push("Buzz");
        }
        else if (i%3 ===0 && i%5 ===0) {
            x.push("FizzBuzz");
        }
        else {
            x.push(i);
 
        }  
    }
    return x;  
} 
   
console.log(fizzBuzz());
