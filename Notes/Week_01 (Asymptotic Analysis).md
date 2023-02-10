
# Introduction


https://learninglab.gitlabpages.inria.fr/mooc-rr/mooc-rr-ressources/module1/ressources/introduction_to_markdown.html

## Asymptotic Analysis
- The idea is to measure order of growth
- Does not depend upon Machine, Programming Language etc.
- No need to implement, we can analyze algorithms theortically.


## Order of Growth
A function f(n) is said to be growing faster than g(n) if :
### $\frac{\lim}{n\to\infty} \frac{g(n)}{f(n)} = 0$

**OR**

### $\frac{\lim} {n\to\infty} \frac{f(n)}{g(n)} = \infty$

Given: 
- f(n) & g(n) represents time taken by algorithm f & g.
- n $\ge$ 0, n represents size of input
- f(n), g(n) $\ge$ 0
- $n\to\infty$, i.e. it makes sense on very large n values

## Find and Compare Growths
1. Ignore lower order terms
2. Ignore leading term constants

	Eg: f(n) = $2n^2+n+6$
	Order of growth: $n^2$ (Quadratic)


## Functions Growth Order $$ C < log(log(n)) < log(n) < n^\frac{1}{3} < n^\frac{1}{2} < n < n^2 <  n^3 < n^4 < 2^n < n^n $$
### Best Case, Average Case, Worst Case
#### Best Case
- Minimum Order of growth of an Algorithm

#### Average Case
- Ideal situation or requires us to make some assumptions.

#### Worst Case
- Used mostly
- Maximum Order of growth of an Algorithm

**NOTE** : These could be same as well. But sometimes algorithms might differently based on different inputs.

### Asymptotic Notations
**Big O** - Exact or Upper
**Theta** - Exact
**Omega** - Exact or Lower

## Big O Notation
#### Steps:
- Ignore lower order terms
- Ignore leading terms constant

We say f(n) = O(g(n)) if and only if there exists constants c and n0 such that f(n) $\le$ c.g(n) for all n$\ge$n0. 


## Omega Notation
f(n)=$\Omega$(g(n)) if and only if there exists constants c where ( c>0 ) and ( n0 $\ge$ 0 ) such  cg(n) $\le$ f(n) for all n$\ge$n0. 

Inverse of Big O Notation
Also,
 If f(n) = O(g(n)) then g(n)=$\Omega$(f(n)).


## Theta Notation
- To represent exact bound of a function.
f(n)=$\Theta$(g(n)) if and only if there exists constants C1 and C2 ( C1 > 0 and  C2 > 0 ) and n0 ( n0 $\ge$ 0 ) such that C1.g(n) $\le$  f(n) $\le$ C2.g(n) for all n $\ge$ n0.

Note:
If f(n) = $\Theta$(g(n)) then,
- f(n) = O(g(n)) and f(n) = $\Omega$(g(n)) and,
- g(n) = O(f(n)) and g(n) = $\Omega$(f(n))


## Analysis of Recursion
Step 1: Write a reccurrence relation
Step 2: Solve the reccurrence relation

## Recursion Tree to solve Reccurrence Relation
- We consider the recursion tree and compute the total work done.
- We write non-recursive part as root of the tree and write the recursive part as children.
- We keep expanding until we see a pattern.
- T(n) = Recursive Part + Non-Recursive Part
- Root = Non-Recursive Part
- Children = Recursive Part
- We just need to find out how many terms the series have.
Eg: T(n) = 2T(n/2) + Cn => O(nlogn)


## Space Complexity
- Order of growth of memory (or RAM) space in terms of input size.

### Auxiliary Space
Order of growth of extra space or temporary space in terms of input size.







