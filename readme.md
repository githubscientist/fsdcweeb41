# JavaScript and TypeScript

## JavaScript

- It's a dynamically typed language, which means that variable types are determined at runtime.

## TypeScript

- It's a statically typed superset of JavaScript, which means that it adds static typing to JavaScript.
- TypeScript code is transpiled to JavaScript, which means that it can run in any environment that supports JavaScript.
- TypeScript helps catch errors at compile time, which can improve code quality and reduce bugs.
- Browsers can only understand and execute JavaScript, so TypeScript needs to be transpiled to JavaScript before it can run in a browser.
- TypeScript is often used in larger projects or when working with teams, as it can help improve code maintainability and readability.
- TypeScript is developed and maintained by Microsoft, while JavaScript is an open standard that is implemented by various organizations and developers.

To initialize a TypeScript project, you can use the following command in your terminal:

```bash
tsc --init
```

output: tsconfig.json file will be created in the root directory of your project.

To initialize a npm application, you can use the following command:

```bash
npm init -y
```

output: package.json file will be created in the root directory of your project.

## Variables

Typescript variables should be declared with a type annotation, which specifies the type of value that the variable can hold. For example:

```typescript
let name: string = "John";
let age: number = 30;
```

Data Types in TypeScript include:

- `string`: Represents textual data. Example: `let name: string = "Alice";`
- `number`: Represents numeric values. Example: `let age: number = 25;`
- `boolean`: Represents true or false values. Example: `let isStudent: boolean = true;`
- `array`: Represents a collection of values. Example: `let numbers: number[] = [1, 2, 3];`
- `tuple`: Represents an array with fixed number of elements of different types. Example: `let person: [string, number] = ["Alice", 25];`
- `enum`: Represents a set of named constants. Example:
  ````typescript enum Color {
    Red,
    Green,
    Blue
  } ```
  ````
- `any`: Represents any type of value. Example: `let data: any = "Hello";`
- `void`: Represents the absence of a value. Example: `function greet(): void {
  console.log("Hello!");
}`
- `null` and `undefined`: Represents the absence of a value. Example: `let value: null = null;`
- `object`: Represents a non-primitive type. Example: `let person: object = { name: "Alice", age: 25 };`
