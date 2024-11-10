function counter(n) {
  let start = performance.now();
  for(let i = 1; i <= n; i++){
    setTimeout(function(i){
      console.log(`1 second has passed`);
    }, 1000 * i)
  }
  let timeTaken = performance.now() - start;

  console.log(`Actual Time taken is ${timeTaken}ms`);
}

counter(10);

