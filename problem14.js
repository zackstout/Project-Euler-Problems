
// Longest Collatz sequence:

// Ex: 13, 40, 20, 10, 5, 16, 8, 4, 2, 1.

// Strategy: to avoid unnecessary labor, save a World Record as longest one yet; as soon as we go beyond that length in a future sequence, we can ignore it and move it.
// Nevermind: we care about longest, not shortest.

// Well we know it won't be any even number except 1000000, because every even gets taken to the start of a previous sequence. Right?
// Indeed, the key insight must have to do with the fact that once you reach *any* number you've already reached, you know what happens to it.
// Well hold on, it could be say 600,000, since we're not looking at 1.2 million. So we can only safely ignore all evens below 500,000.

// One strategy would be go up to like 10000, get a path length for each number, and then save all those, then check each higher number against that list (to avoid needing to go through each step for every number again).

// Is it just 333,333? Or 999,999?










// end;
