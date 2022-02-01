https://www.jschallenger.com/javascript-objects/swap-object-keys-values/

// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object
function myFunction(obj){
 const swapped = Object.entries(obj).map(
    ([key, value]) => [value, key]
  );
  return Object.fromEntries(swapped);
}
