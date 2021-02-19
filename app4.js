/**
 * Here, we create a for loop that incrimentally increases until it is equal to 10. 
 * CHECK: Functioning as intended.
 */

for(var i = 1; i <= 10; i++)
{
    console.log(i);
}


/**
 * Here, we create a While loop that is always true - therefor it will continue to print to console unless broken.
 * CHECK: Functioning as intended. 
 */
while(true){
    console.log("Curiouser and curiouser!");
    break;
}


/**
 * Here, we create a for loop that counts down from 99. 
 * If the integer is not equal to 1, than it prints plural. If it is equal to one, singular.
 */
for(var i=99; i >= 1; i--)
{
    if(i !== 1)
    console.log(i + " beers on the wall.");
    
    if(i === 1)
    console.log(i + " beer on the wall.");
}

var bools = [true, true, false, true, false, true, true, true];
for (i = 0; i < bools.length; i++)
{
    if (bools[i] === true)
    {
    console.log(bools[i]);
    }
}


/**
 * Here, we check our string for vowels. If the string has any vowels, it will print that to console.
 * CHECK: Functioning as intended. 
 */
var str = "apples";
for(var i = 0; i < str.length; i++)
{
    if(str[i] === 'a')
    {
        console.log(str[i]);
    }
    else if(str[i] === 'e')
    {
        console.log(str[i]);
    }
    // else if(str[i] === 'i')
    // {
    //     console.log(str[i]);
    // }
    // else if(str[i] === 'o')
    // {
    //     console.log(str[i]);
    // }
    // else(str[i] === 'u')
    // {
    //     console.log(str[i]);
    // }
}
