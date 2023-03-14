const crypto = require('crypto');

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
                   .update('Aspire Systems')
                   .digest('hex');
console.log(hash);