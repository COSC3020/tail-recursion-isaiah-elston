/*
NOTE: I did something very similar to this in COSC-2300, so I basically just translated my ACL2 code to JavaScript.
*/

function fib(iterationCount, f_0 = 0, f_1 = 1) {
    if (iterationCount < 0) {
        return 0;
    } else if (iterationCount == 0) {
        return f_0;
    } else {
        return fib((iterationCount - 1), f_1, (f_0 + f_1));
    }
}
