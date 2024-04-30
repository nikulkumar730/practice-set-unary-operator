


var a = 10; // a is initialized to 10.
var b = a++; // b is assigned the value 10, a is then incremented to 11.
var c = ++a; // a is incremented to 12 first, then c is assigned the value 12.
var d = a + b; // d is calculated as 12 + 10 = 22.
b += (a + d); // b is updated to 10 + (12 + 22) = 44.
c *= (b * d); // c is updated to 12 * (44 * 22) = 11616.
c = c++; // The post-increment operator returns the original value of c before incrementing, so c remains 11616.
c += c++; // c is updated to 11616 + 11616 = 23232. Post-increment changes c to 23233 but after the statement is evaluated.
d += ++d; // d is incremented before addition, so d becomes 23 and then d is updated to 22 + 23 = 45.
c += (c++) + (++d); // c++ evaluates to 23232 and then c is incremented to 23233, ++d increments d to 46 and then adds 46 to c. The sum is 23232 + 23232 + 46 = 46610. c is incremented after c++ is evaluated.
console.log(c)