
function fibonacci(n) {
  if (n == 1 || n == 2) {
    return 1;
  }

  return (fibonacci(n-1) + fibonacci(n-2));
}

//Hmm this also seems to go very slow..... it's all about finding more efficient ways:

for (var i=1; i < 100; i++) {
  console.log(fibonacci(i));
}
