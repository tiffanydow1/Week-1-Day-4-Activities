var countdownGenerator = function(x) {

  var counter = x;

  return function() {

    if (counter >= 1 ) {
      console.log(` T-minus ${counter}`);
      counter--

    } else if (counter === 0) {
      console.log(`Blast off!`);
      counter--

    } else {
      console.log(`Rockets already gone, bub!`);
      counter--
    }
  return counter
  };
}

var countdown = countdownGenerator(10);

countdown();
countdown();
countdown();
countdown();
countdown();
countdown();