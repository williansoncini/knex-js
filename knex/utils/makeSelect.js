const knex = require('../config/database');

const makeSelect = async (table, columns) => {
  try {
    const response = await knex(table).select(columns);
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    knex.destroy();
  }
};

module.exports = makeSelect;
