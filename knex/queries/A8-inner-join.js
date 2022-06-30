const knex = require('../config/database');

async function main() {
  try {
    const response = await knex('users')
      .select('users.id', 'profiles.bio')
      .innerJoin('profiles', 'users.id', 'profiles.user_id');

    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    knex.destroy();
  }
}

main();
