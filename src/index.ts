// src/index.ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}

function farewell(name: string): string {
  const b: number = 30;
  
  return `Goodbye, ${name}! Farewell at age.`;
}

console.log(greet("TypeScript"));

console.log(farewell("TypeScript"));
