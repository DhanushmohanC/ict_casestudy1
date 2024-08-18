console.log(sum_sq([1,2,3,4,5]));
function sum_sq(arr){
    var sum = 0;
    i = arr.length;
while(i--)
    sum += Math.pow(arr[i],2);
return sum;

}

