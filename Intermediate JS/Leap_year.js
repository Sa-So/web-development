function isLeap(year) {
    
/**************Don't change the code above****************/    
    
    //Write your code here.    
if(year%100===0){
    if(year%400===0){
        return "Leap year."  ;
        }
        else{
            return "Not leap year."
        }
}
else{
    if(year%4===0){
    return "Leap year."  ;
    }
    else{
       return "Not leap year."
    }
}

    

/**************Don't change the code below****************/    

}
