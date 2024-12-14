/*
    Problem: Two Sum

    #1 => Create a Function which takes two arguments (an array of numbers and a target number)
    #2 => Create two nested "for" Loops 
    #3 => Check if the current index array plus the next index array is equal to the target number
    #4 => If the above condition is true, then return the index of them within an array
*/


const twoSum = (nums: number[], target: number): number[] => {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }

    return [];
}

// nums = [2,7,11,15], target = 9 👉🏻 [0,1]
twoSum([2,7,11,15], 9); 

// nums = [3,2,4], target = 6 👉🏻 [1,2]
twoSum([3,2,4], 6);

// nums = [3,3], target = 6 👉🏻 [0,1]
twoSum([3,3], 6); 


// Big-O
// Time Complexity: O(n^2) => O of N squared
// Space Complexity: O(n^2) => O of N squared










/*
function fizzBuzz(n: number): string[] {
    let result: string[] = [];

    for(let i = 1; i <= n; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            result.push("FizzBuzz");
        }
        else if (i % 3 === 0) {
            result.push("Fizz");
        }
        else if (i % 5 === 0) {
            result.push("Buzz");
        }
        else {
            result.push(`${i}`);
        }
    }

    return result;
};


// n = 3 => ["1","2","Fizz"]
console.log(fizzBuzz(3)); 

// n = 5 => ["1","2","Fizz","4","Buzz"]
console.log(fizzBuzz(5));

// n = 15 => ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
console.log(fizzBuzz(15)); 


// Big-O
// Time Complexity: O(n) => O of N
// Space Complexity: O(n) => O of N

*/