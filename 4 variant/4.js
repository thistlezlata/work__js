https://www.jschallenger.com/javascript-arrays/create-range-of-numbers/

// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max
function myFunction (min, max)
{
var ans = [];
    for (let i = min; i <= max; i++) {
        ans.push(i);
    }
    return ans;
}
