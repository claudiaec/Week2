/* WHILE loop: all even numbers from 0 to 100 */
let a= 0
while (a <= 100){
  a +=2;
  console.log(a)
}

/* WHILE loop: every 3d number going backwards from 100 t0 0  */
let b=100;
while (b>0){
    b -= 3;
    console.log (b);
}

/* FOR loop: every other number from 1 to 100  */

for( i = 0; i<= 100; i++){
    if(i% 3 == 0)continue; console.log(i)
}

/* FOR loop: every number from 0 to 100 but if divisible by 3, print Hello, if divisible by 5 print 'World' and if divisible between 3 and 5 'Hello World' */
for( i = 0; i<= 100; i++)
    {
       if(i % 3 == 0 )
         console.log(i + "Hello");
      else if(i % 5 == 0 )
         console.log(i + "World");
      else (i % 3 == 0 + i % 5 == 0 )
         console.log(i + "Hello World"); continue; console.log(i)
       
    }

 