//TestData
const testUsers = [
  { id: 1, name: "Alice", score: 85, active: true },
  { id: 2, name: "Bob", score: 42, active: false },
  { id: 3, name: "Charlie", score: 90, active: true },
  { id: 4, name: "Diana", score: 55, active: true }
];

//**Transform testUsers into a new array containing only the active users who scored ≥ 50, and format their names to be lowercase. */

const transform = testUsers.map((element) => (element.score >= 50));

console.log(map(transform));