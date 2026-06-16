//**convert the keys to camelCase, extract only the user's full name, and filter out inactive */

const rawUsers = [
  { user_id: 101, first_name: "John", last_name: "Doe", is_active: true },
  { user_id: 102, first_name: "Jane", last_name: "Smith", is_active: false },
  { user_id: 103, first_name: "Alex", last_name: "Jones", is_active: true }
];

const fit = rawUsers
    .filter(element=> element.is_active)
    .map(element => ({
        userId : element.user_id,
        fullName: `${element.first_name} ${element.last_name}`
}));
    console.log(fit);