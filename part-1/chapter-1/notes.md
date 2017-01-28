#Chapter 1: Values, Types, and Operators

"Inside the computer's world, there is only data. You can read data, modify data, create new data—but anything that isn't data simply does not exist."

"Bits are any kind of two-valued things, usually described as zeros and ones."

## Numbers
"Values of the *number* type are numberic values. In a JavaScript program they are written as follows:"
```
13
```
"JavaScript uses a fixed number of bits (64) to store a single number value."

"Fractional numbers are written by using a dot:"
```
9.23
```
"For very big or very small numbers, you can also use scientific notation by adding an 'e' followed by the exponent of the number:"
```
7.232e10
```
"Calculations with whole numbers smaller than 9 quadrillion are guaranteed to always be precise. Calculations with fractional numbers are generally not."

### Arithmetic
"Arithmetic operations such as addition or multiplication take two number values and product a new number from them."
```
23 * 9 + 12
```
"The `+` and `*` symbols are called _operators_."

"When operators appear together without parentheses, the order in which they are applied in is determined by the _precedence_ of the operators."
- Multiplication comes before addition
- Division and multiplication have the same precedence
- Addition and subtraction have the same precedence
- When multiple operators with the same precedence appear next to each other, they are applied left to right

"The `%` symbol is used to represent the _remainder_ operation. X % Y is the remainder of dividing X by Y. Remainder's precedence is the same as that of multiplication and division. This operator is referred to as _modulo_ or _remainder_."

### Special Numbers
"There are three special values in JavaScript that are considered numbers but don't behave like normal numbers."

"The first two are `Infinity` and `-Infinity`."

"`NaN` stands for 'not a number,' even though it is a value of the number type. You'll get this result when you try to calculate `Infinity - Infinity` or any number of numeric operations that don't yield a precise, meaningful result."

## Strings
"String are used to represent text and are written by enclosing their content in quotes."
```
"Hi, my name is Claudio."
"Hello, world!"
```
"Both single and double quotes can be used to mark strings as long as the quotes at the start and the end of the string match."

"Almost anything can be put between quotes, and JavaScript will make a string value out of it."

"Whenever a backslash, `\`, is found inside quoted text, it indicates that the character after it has a special meaning. This is called _escaping_ the character. When an `n` character occurs after a backslash [within a string], it is interpreted as a newline. A `t` after a backslash means a tab character."
```
"This is the first line\nAnd this is the second"
```
Results in
```
This is the first line
And this is the second
```

"Strings cannot be divided, multiplied, or subtracted, but the `+` operator _can_ be used to _concatenate_—or put together—two strings."
```
"con" + "cat" + "e" + "nate"
```

## Unary Operators
"The `typeof` operator is a unary operator that produces a string value naming the type of the value you give it."
### Comparisons
"`console.log` is used to indicate the result of evaluating something and prints the result to the console."

"Operators that use two values are called _binary_ operators, while those that take one are called _unary_ operators."

## Boolean Values
"The _Boolean_ type just has two values: `true` or `false`."

"The `>` and `<` signs are the traditional symbols for 'is grater than' and 'is lesser than' and are binary operators."

"The way strings are ordered is more or less alphabetic: uppercase letters are always 'less' than lowercase ones, so 'Z' < 'a' is true, and nonalphabetic characters are also included in the ordering. The actual comparison is based on the _Unicode_ standard, which assigns a number to every character."

"Other similar operators are `>=`, `<=`, and `==`."

"There is only one value in JavaScript that is not equal to itself, and that is `NaN`.

### Logical Operators
"The `&&` operator represents logical _and_ and its result is `true` only if both the values given to it are true."

"The `||` operator denotes logical _or_, and produces `true` if either of the values given to it are true."

"_Not_ is written as an exclamation mark `!`. It is a unary operator that flips the value given to it—`!true` produces `false` and `!false` gives true."

"`||` has the lowest precedence, then comes `&&`, then the comparison operators and then the rest. This order has been chose such that, in typical expressions as few parentheses as possible are necessary."

"The _conditional_ operator is the only _ternary_ operator in JavaScript. The value on the left of the question mark 'picks' which of the other two values will come out. When it is true, the middle value is chosen, and when it is false, the value on the right comes out."
```
console.log(false ? 1 : 2);
// => 2
```

## Undefined Values
