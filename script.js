function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
let result = '';

for (let i = 0; i < Object.keys(obj).length; i++) {
let currentNum = num;
while (currentNum >= obj[i][1]) {
result += obj[i][0];
currentNum -= obj[i][1];
}
num = currentNum;
}

// handle special cases for 4 and 9
result = result.replace("IIII", "IV").replace("VIIII", "IX").replace("XXXX", "XL").replace("LXXXX", "XC").replace("CCCC", "CD").replace("DCCCC", "CM");

return result;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
