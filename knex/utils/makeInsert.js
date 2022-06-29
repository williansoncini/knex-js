const knex = require('../config/database');

const makeInsert = async (table, data) => {
  try {
    const response = await knex(table).insert(data);
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    knex.destroy();
  }
};

module.exports = makeInsert;
