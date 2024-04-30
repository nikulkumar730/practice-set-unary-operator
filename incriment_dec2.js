let a=11 
let b=22 
let c;
         
        c = a + b + a++ + b++ + ++a + ++b;
 // c =11 + 22 + (11++) + (22++) + (1+12) + (++23) // in unary operators ++,-- having first priority for perform

    // a=13
    // b=34
    // c= 
         
     console.log("a="+a);//here + sing concate the number and string 
     console.log("b="+b);
     console.log("c="+c);