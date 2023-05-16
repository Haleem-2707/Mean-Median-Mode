// How to calculate median

let list =  [1,2,3,4,5,6,7,7]
let sum = 0;

for ( let i = 0; i < list.length; i++) {
     sum += list[i] / list.length
     
}
console.log("mean:" ,sum)


// How to csalculate median 
 list.sort();
 let median;

 if (list.length % 2 === 0) {
    median = (list [list.length/ 2 - 1] + list [list.length / 2]) / 2;
    }  else {
        median = list[(sortNumbers.length - 1) / 2] ; 
    } 

console.log("Median:", median)


// How to calculate mode 



const mode = list => {
    const mode = {};
    let max = 0, count = 0;

    for(let i = 0; i < list.length; i++) {
        const item = list[i];

        if (mode[item]){
            mode[item]++
        } else {
            mode[item] = 1;
        }

        if(count < mode[item]) {
            max = item;
            count = mode[item];
        }
    }
    return max
}

console.log( mode(list) )

const input = document.getElementById("FullName")

document.addEventListener("onclick, function()")