const knex = require('../config/database');

const rawData = `
  insert into users
    (first_name,
      last_name,
      email,
      password_hash,
      salary)
  values ('nikola',
          'tesla',
          'nikola@tesla.com',
          'strong_pass',
          9999.99);
`;

async function main() {
  try {
    const response = await knex.raw(rawData);
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    knex.destroy();
  }
}

main();
