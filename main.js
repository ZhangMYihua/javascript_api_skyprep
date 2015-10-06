var request = require('superagent');

var api = 'GjNHirhJC0TZ1nmJFtHP0IWfT';
var acct = 'learnabli.skyprepapp.com';
var hash = {"api_key" : api, "acct_key" : acct};
var baseURL = 'https://api.skyprep.io/admin/api';

function extend(a, b){
	for (var key in b)
		if(b.hasOwnProperty(key))
			a[key] = b[key];
	return a;
};

var SkyPrepApi = function(api_key, acct_key){
	this.hash =  {"api_key" : api_key, "acct_key" : acct_key};
};

SkyPrepApi.prototype.get = function(methodName, obj){
	if (typeof obj === 'undefined') {obj = {};}
	var params = extend(this.hash, obj);
	request.get(baseURL + '/' + methodName)
	.send(params)
	.type('application/json')
	.end(function(err, res){
		if (err) {
			console.log(err);
		} else {
			console.log(res.body);
		}
	});
};

var my_api = new SkyPrepApi(api, acct);

my_api.get('test_connection');