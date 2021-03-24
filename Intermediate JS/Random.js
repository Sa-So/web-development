var n = Math.random();
//0 - 0.9999999999...9
//16 decimal place no.
//so billion random no.s can be generated
n*=6;
//0-5.99999...94
n=Math.floor(n)+1;
//pseudo random no
//khan academy video : https://www.khanacademy.org/computing/computer-science/cryptography/crypt/v/random-vs-pseudorandom-number-generators
if(n<=10){
  console.log("you hate her")
  alert("try again bro")
}
else{
  console.log("idk bro")
}
// comparators
if(a===b)
{
  //typeof(a)==typeof(b) && a==b
  console.log("type check and char check")
}
if(a==b)
{
  console.log("no type check")
  // 1 == "1" is true
}
// combiners && || !
