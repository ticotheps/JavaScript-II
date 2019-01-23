// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function getBuckets(buckets) {
  const myPoints = buckets*2;
  console.log(`My name is Tico and I got ${buckets} "buckets" today, which is equal to ${myPoints} points!`);
  debugger;

  function deepBuckets() {
    // Accessing myPoints outside of this function requires use of a closure
    const treyBallLand = "Chef Curry RANGE";
    console.log(`My name is Tico and I caught fire from ${treyBallLand}, managing to hit ${myPoints} trey balls!`);
    debugger;

    function freeBuckets() {
      // Accessing treyBallLand outside of this function requires use of closure
      const freebie = "count it";
      console.log(`Whenever I get fouled while shooting from ${treyBallLand}, you can pretty much say '${freebie}'!`);
      debugger;
    }

    freeBuckets();

  }

  deepBuckets();
}

getBuckets(4);

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
