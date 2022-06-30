const knex = require('../config/database');

async function main() {
  try {
    const response = await knex('users').where({ id: 1 }).update({
      first_name: 'Albert',
      last_name: 'Einstein',
    });

    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    knex.destroy();
  }
}

main();
