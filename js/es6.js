const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

const name = 'ally';
const email = 'alexandra.m.hamner@gmail.com';
const languages = ['html', 'css', 'javascript'];

// Does not allow me to reassign the variable because it is a const
// name = "alexandra";

users.push({
  name,
  email,
  languages,
});

let emails = [];
let names = [];

// users.forEach(function(user) {
//   return emails.push(user.email);
// });

// users.forEach(function(user) {
//   return names.push(user.name);
// });

users.forEach((user) => {
  emails.push(user.email);
  names.push(user.name);
});


let developers = [];

users.forEach(user => {
  // const name = user.name;
  // const email = user.email;
  // const languages = user.languages;
  const {name, email, languages} = user;
  // developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
  developers.push(`${name}'s email is ${email}${name} knows ${languages.join(", ")}`);
});

let list = '<ul>';

// developers.forEach(function (developer) {
for (let developer of developers) {
  list += `<li>${developer}</li>`;
}
list += '</ul>';