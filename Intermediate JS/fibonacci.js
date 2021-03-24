// everytime she says flowchart in 2x feels like she is saying bl*wj*b
function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    var out=[];
    var sum1=0;
  var f=0;
  var s=0;
    //Write your code here:
    for(var i=0;i<n;i++){
      sum1=f+s;
      if(i==0)
        s++;
      f=s
      s=sum1
      out.push(sum1)
    }
    return out;
    // can also use output.length - 2 and - 1 and sum them and push
    
    
    
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}
