const knex = require('../config/database');

async function main() {
  try {
    const response = await knex('users').where({ id: 1 }).delete();

    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    knex.destroy();
  }
}

main();
