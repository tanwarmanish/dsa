Bitwise operators are those operators that work on the binary representation of number.
## Operators
1. Bitwise AND ( & )  
2. Bitwise OR ( | )
3. Bitwise XOR ( ^ )
4. Left Shift ( << )
5. Right Shift ( >> )
6. Bitwise Not ( ~ )

#### Left Shift ( x<<y ) 
1. Remove and ignore leading y bits
2. Move remaining 32-y bits to leftmost
3. Append y 0s at the end.

	**Note : ** Equivalent  to *x * ( 2^y )*
	

#### Right Shift ( x>>y )
1. Remove and ignore trailing y bits
2. Move remaining 32-y bits to rightmost
3. Add y 0s at the begining

	**Note :**  Equivalent to ***Floor( x / (2^y) )***


### Bitwise Not ( ~ )
- Inverts every bit

## 1.  Set bit in a number
1. num = 1 << n ( left shift  to n position )
2. x | num

## 2. Unset/Clear bit in a number
1. num = 1 << n
2. num = ~num
3. x & num

## 3. Checking bit at nth position
1. num = 1 << n
2. result = x & num
3. If result !=0 then bit was set ( 1 )
4. Else , it was clear ( 0 )

OR 
1. num = x >> n
2. result = num & 1
3. If result !=0 then bit was set ( 1 )
4. Else , it was clear ( 0 )

