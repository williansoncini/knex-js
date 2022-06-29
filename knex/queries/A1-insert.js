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
