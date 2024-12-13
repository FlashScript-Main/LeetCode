/*
    Problem: FizzBuzz

    #1 => Create a Function which takes a number as an argument
    #2 => Create an Empty Array and Push Elements to it
    #3 => Loop from 1 to the given number
    #4 => Return "Fizz" if the given number is divided by 3
    #5 => Return "Buzz" if the given number is divided by 5
    #6 => Return "FizzBuzz" if the given number is divided by both 3 & 5
    #7 => Return the Looped Number 
*/


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
fizzBuzz(3); 

// n = 5 => ["1","2","Fizz","4","Buzz"]
fizzBuzz(5); 

// n = 15 => ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
fizzBuzz(15); 


// Big-O
// Time Complexity: O(n) => O of N
// Space Complexity: O(n) => O of N