
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







