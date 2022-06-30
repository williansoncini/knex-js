const knex = require('../config/database');

async function main() {
  try {
    const response = await knex('users')
      .select('id', 'first_name')
      .whereIn('id', [1, 2]);

    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    knex.destroy();
  }
}

main();
