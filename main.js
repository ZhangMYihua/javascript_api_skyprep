var request = require('superagent');

var api = 'GjNHirhJC0TZ1nmJFtHP0IWfT';
var acct = 'learnabli.skyprepapp.com';
var hash = {"api_key" : api, "acct_key" : acct};
var baseURL = 'https://api.skyprep.io/admin/api/';
var hash2 = {"user_name" : "Jason"};

function extend(a, b){
	for (var key in b)
		if(b.hasOwnProperty(key))
			a[key] = b[key];
	return a;
};

var outcome = extend(hash, hash2);

request.get('https://api.skyprep.io/admin/api/test_connection')
	.send({"api_key" : api, "acct_key" : acct})
	.type('application/json')
	.end(function(err, res){
		if (err) {
			console.log(err);
		} else {
			console.log(res.body);
		}
	});

var SkyPrepApi = function(api_key, acct_key){
	
};

SkyPrepApi.prototype.get = function(methodName){
	request.get(baseURL + methodName)
	.send()
};

console.log(outcome);