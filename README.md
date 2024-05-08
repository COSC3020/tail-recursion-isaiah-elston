# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

## Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the non-tail-recursive version? Why, or why not, and what is the complexity (worst-case $\Theta$)? Add your answer, including your reasoning, to this markdown file.

### Answer

#### TL;DR

`fib` $\in \mathrm{\Theta}(n)$

#### Reasoning

This tail-recursive version of `fib` does **not** have the same worst-case $\Theta$ runtime complexity as the non-tail-recursive `fib` function. Namely, this is because the original version has two recursive calls while my tail-recursive version only has one recursive call. Moreover, the recursive calls are the only *non-constant* facets of either implementation.

We know that my tail-recursive `fib` function will **always** run until `iterationCount` $= 0$. Since `iterationCount` is the input that is representing the $i$th value in the Fibonacci sequence ($F_{i}$), we can contrive that the runtime complexity is $\mathrm{\Theta}(n)$. There is an obvious linear relationship between the "size" of `iterationCount` and how many numbers that `fib` will need to sum as it decrements `iterationCount` by exactly one each time.
