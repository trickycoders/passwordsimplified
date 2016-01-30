
var request = require('sync-request');


var res = request('GET', 'http://codotvu.com/api/whois?domain=arunkumar');
console.log(res.getBody().toString('utf8'));
