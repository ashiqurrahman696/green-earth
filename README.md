#### 1) What is the difference between var, let, and const?
Ans:
1. var is function-scoped variable. On the other hand, let and const are block-scoped variable.
2. Value of var can be redeclared and reassigned. Value of let can be reassigned but can't be redeclared. Value of const can't be redeclared and reassigned.

#### 2) What is the difference between map(), forEach(), and filter()?
Ans: **map():** `map()` transforms every element in an array. It returns a new array with the transformed values. The original array is not modified.

**forEach():** `forEach()` executes a provided function for each element in an array. It doesn't create new array.

**filter():** `filter()` creates new array containing only those elements from the original array that satisfy a provided condition. The original array is not modified.

#### 3) What are arrow functions in ES6?
Ans: In ES6, arrow functions are a concise way to write anonymous functions.They offer a shorter syntax command compared to traditional function expressions.

#### 4) How does destructuring assignment work in ES6?
Ans: In ES6, destructuring is a concise way to extract values from objects and arrays and assign them to variables. In essence, it unpacks values from data structures into distinct variables. It makes code cleaner to understand.

#### 5) Explain template literals in ES6. How are they different from string concatenation?
Ans: In ES6, template literals are a way to create strings that can embed expressions. They are enclosed with backticks instead of single quotes or double quotes.

Here is how they differ from string concatenation:
1. Template literals allow to embed any JS expressions inside the `${}` placeholders, not just variables.
2. Template literals make the code more readable, especially when dealing with complex strings that include variables.
3. Template literals make it easy to create multiline strings.
4. Template literals reduce the risk of errors caused by forgetting to include a `+` operator.