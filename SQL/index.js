const { faker } = require('@faker-js/faker');
let getRandomUser = () =>{
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
 
  };
}
console.log(getRandomUser());