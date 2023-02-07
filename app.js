const fs = require('fs');

const genders = ["M", "F"];
const maleNames = ["John", "Michael", "William", "David"];
const femaleNames = ["Emily", "Sarah", "Ava", "Olivia"];
const lastNames = ["Doe", "Bond", "Cj", "Crus"]

const randChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];

const people = [];

for (let i = 0; i < 20; i++) {
  let gender = randChoice(genders);
  let name;
  if (gender === "M") {
    name = randChoice(maleNames);
  } else {
    name = randChoice(femaleNames);
  }
  let lastName = randChoice(lastNames);
  let age = Math.floor(Math.random() * 80) + 18;
  let phone = Math.floor(Math.random() * 1000000000) + 100000000;
  let email = name + "." + lastName + "@gmail.com";
  let person = {
    gender: gender,
    name: name,
    lastName: lastName,
    age: age,
    phone: phone,
    email: email
  };
  people.push(person);
}

const data = JSON.stringify(people);

fs.writeFile('people.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
