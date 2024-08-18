arr = [1,1,3,5,7,6,8,5,6,4,7,6,0,2,1,6,8,9,5]
arr.sort((a,b) => a - b);
let count =1;
let max =0;
let el;
for(let i = 1;i<arr.length;i++){
    if (arr[i] === arr[i-1]){
        count++;

    }
    else{
        count = 1;
    }
    if ( count>max){
        max = count;
        el = arr[i];
    }
}
console.log("the mostoccured is:" + el);