var request = require('superagent');

var api_key = 'GjNHirhJC0TZ1nmJFtHP0IWfT';
var acct_key = 'learnabli.skyprepapp.com';

request.get('https://api.skyprep.io/admin/api/test_connection')
	.send({"api_key" : api_key, "acct_key" : acct_key})
	.type('application/json')
	.end(function(err, res){
		if (err) {
			console.log(err);
		} else {
			console.log(res.body)
		}
	});