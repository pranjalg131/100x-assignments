/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

// Lesson : use while loops with clocks to simulate busy wait.

function sleep(milliseconds) {
  return new Promise(resolve => {
    let start = performance.now();

    while((performance.now() - start) <= milliseconds){}

    resolve();
  })
}

module.exports = sleep;
