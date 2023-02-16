A function calls itself directly or indirectly.
Type :
1. Direct
2. Indirect

``` Javascript
// direct recursion
function fun1(){
 // code here
 fun1();
 // code here
}
```

```Javscript
// indirect recursion
function fun1(){
	fun2();
}

function fun2(){
	fun1();
}
```

### Base Case (Exit Condition)
- Condition/Case based on which the function invoking terminates.

## Structure of Recursion
```Javascript
function fun(args){
	 // base case
	 // Recursive call like fun(args); with some change in the parameters.
}
```


## Applications of Recursion
- Any problem that can be programmed using recursion can be written as iterative code or vice versa.
- Algorithm techniques based on recursion:
	- Dynamic Programming
	- Backtracking 
	- Divide and Conquer (Sorts)

- Problems based on Recursion:
	- Tower of Hanoi
	- DFS Traversal


## Tail Recursion
Tail recursive functions take less time on modern compilers
``` Javascript
function fun(n){
	if(n==0) return 0;
	console.log(n);
	fun(n-1);
}
// since the last statment is a recursive call hence it is a tail recursive fn.
```
These are fast as there is no need to manage the caller's state.