function printName(name: string | undefined = 'Unknown'): void {
  console.log(name);
}

printName(); // This will print 'Unknown'
printName(undefined); // This will print 'Unknown'
printName('John'); // This will print 'John' 