const num = 5;

console.log(num.toString(2));


const toBinary = (n) => {

 const res = []

  while (n > 0) {
  	const cur = n % 2 === 0 ? 0 : 1;
    res.push(cur);
    n = Math.trunc(n/2);
  }
  
  return res.reverse().join('');
	
}

console.log(toBinary(5));