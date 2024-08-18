let arr = [4,4,5,7,8];

console.log(isFirstElementPrime(arr));

function isFirstElementPrime(arr) {
    if (arr.length === 0) {
        return false; // array is empty
    }
    
    let num = arr[0];
    
    if (num <= 1) {
        return false; // 0 and 1 are not prime
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // not prime
        }
    }
    
    return true; // prime
}
