// Bun writes to files
const data = "Latte"
await Bun.write('output.txt', data)

// Bun reads from files
const file = await Bun.file('output.txt')
console.log(await file.text())
console.log(file.size)
// console.log(file.stream())
console.log(file.arrayBuffer())