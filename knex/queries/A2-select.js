const makeSelect = require('../utils/makeSelect');

const columns = ['email as user_email', 'id as user_id'];

makeSelect('users as users_premium', columns);
