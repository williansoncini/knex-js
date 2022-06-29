# Notas :3

# instalação

```js
npm i knex
```

Vai precisar também do pacote do banco que você usa

No caso aqui MySql ❤ - Mas postGre iria bem também @-@

```js
npm i mysql2
```

# Iniciando o Knex

```js
npx knex init
```

Exemplo de arquivo de configuração `knexfile.js`

```js
module.exports = {

  client: 'mysql2',
  connection: {
    host : '127.0.0.1',
    port : 3306,
    user : 'estudante',
    password : '123',
    database : 'estudos'
  }
};
```

# Migrations

## Criando a migration


```js
npx knex migrate:make 'create-users'
```

## Configurando migration

Exemplo de uma migration

```js
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('first_name', 150).notNullable();
    table.string('last_name', 150);
    table.string('email', 255).notNullable().unique();
    table.string('password_hash', 255).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('users');
};

```

### Migration com relaçõesc

```js
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('profiles', (table) => {
    table.increments('id').primary();
    table.text('bio');
    table.text('description');
    table.integer('user_id').unique().unsigned();
    table
      .foreign('user_id')
      .references('users.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('profiles');
};

```

## Aplicando a migration - Aplicar o up

```js
npx knex migrate:latest

// ou

npx knex migrate:up migration_name_file.js
```

## Desfazendo a mgração - Aplicar o down

```js
npx knex migrate:rollback
npx knex migrate:rollback --all

// ou

npx knex migrate:down migration_name_file.js
```

# SELECT

Primeiro é necessário capturar a conexão

`knex/config/database.js`

```js
const knexfile = require('../../knexfile');
const knex = require('knex')(knexfile);

module.exports = knex;
```

`exampleSelect.js`

```js
const knex = require('../config/database');

  knex('users').then(() => {
    console.log(response);
  }).catch (error => {
    console.log(error)
  }).finally {
    knex.destroy();
}

module.exports = makeInsert;
```

Aqui foi usado o then para tratar a promise, mas estruturar com await fica bem melhor :3

> O simples fato de você passar o nome da tabela é reconhecido pelo knex como SELECT * FROM TABLE

# INSERT

`knex/config/database.js`

```js
const knexfile = require('../../knexfile');
const knex = require('knex')(knexfile);

module.exports = knex;
```

`makeInsert.js`

```js
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
```

`exampleInsert.js`

```js
const makeInsert = require('../utils/makeInsert');

const data = [
  {
    first_name: 'William',
    last_name: 'Henry gates',
    email: 'bill.gates@microsoft.com',
    password_hash: 'strong_pass',
    salary: 99999999999.9999,
  },
  {
    first_name: 'Leonardo',
    last_name: 'Davinci',
    email: 'leo@art.com',
    password_hash: 'strong_pass',
    salary: 99999.9999,
  },
];

makeInsert('users', data);
```









# Referencias

https://github.com/luizomf/sql-e-knex







