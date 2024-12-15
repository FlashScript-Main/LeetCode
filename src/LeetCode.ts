/*
    Problem: Reverse String

    #1 => Create a Function which takes an arguments of Array of strings
    #2 => Create two variables to become a CheckPoint of First and Last Index
    #3 => Change the Array Elements from start index to end index using while Loop
*/


// Easy Method (NOT with Space-Complexity of O(1))
// const reverseString = (s: string[]) => {
//     return s.reverse();
// }

// console.log(reverseString(["h","e","l","l","o"]));


const reverseString = (s: string[]) => {
    let start = 0;
    let end = s.length - 1;

    while (start <= end) {
        [s[start], s[end]] = [s[end], s[start]];

        start++;
        end--;
    }
}

// s = ["h","e","l","l","o"] 👉🏻 ["o","l","l","e","h"]
const s1 = ["h","e","l","l","o"];
reverseString(s1)
console.log(s1);

// s = ["H","a","n","n","a","h"] 👉🏻 ["h","a","n","n","a","H"]
const s2 = ["H","a","n","n","a","h"];
reverseString(s2)
console.log(s2);


// Big-O
// Time Complexity: O(n) => O of N
// Space Complexity: O(1) => O of 1


/*
const sortString = (str: string) => {
    return str.split("").sort().join("");
}

const isAnagram = (s: string, t: string) => {
    
    // Simple Way 👇🏻
    // return s.split("").sort().join("") === t.split("").sort().join("");

    if (sortString(s) === sortString(t)) {
        return true;
    } else {
        return false;
    }

}

// s = "anagram", t = "nagaram" 👉🏻 true
isAnagram("anagram", "nagaram"); 

// s = "rat", t = "car" 👉🏻 false
isAnagram("rat", "car");


// Big-O
// Time Complexity: O(n log n) => O of N log N
// Space Complexity: O(n) => O of N
*/


/*
const twoSum = (nums: number[], target: number): number[] => {
    const map = new Map();

    for(let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];

        if (map.has(difference)) {
            return [map.get(difference), i];
        }
        else {
            map.set(nums[i], i)
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
// Time Complexity: O(n) => O of N
// Space Complexity: O(n) => O of N
*/
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