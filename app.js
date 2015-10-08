var request = require('superagent');
var Q = require('q');

var api  = 'GjNHirhJC0TZ1nmJFtHP0IWfT';
var acct = 'learnabli.skyprepapp.com';
var hash = { "api_key" : api, "acct_key" : acct };
var baseURL = 'https://api.skyprep.io/admin/api';
var postPrefixes = ['update', 'destroy', 'create', 'remove', 'enroll'];


function extend(a, b){
	for (var key in b)
		if(b.hasOwnProperty(key))
			a[key] = b[key];
	return a;
};

var SkyPrepApi = function(api_key, acct_key){
	this.hash =  { "api_key" : api_key, "acct_key" : acct_key };
};
 
SkyPrepApi.prototype.get = function(methodName, obj) {
	var p = Q.defer();
	
	if (typeof obj === 'undefined') {obj = {};}
	var params = extend(this.hash, obj);
	request.get(baseURL + '/' + methodName)
	.send(params)
	.type('application/json')
	.end(function(err, res){
		if (err) {
			p.reject(new Error(err));
		} else {
			p.resolve(res.body);
		}
	});
	
	return p.promise;
	
};

SkyPrepApi.prototype.post = function(methodName, obj){
	
	var p = Q.defer();
	
	if (typeof obj === 'undefined') {obj = {};}
	var params = extend(this.hash, obj);
	request.get(baseURL + '/' + methodName)
	.send(params)
	.type('application/json')
	.end(function(err, res){
		if (err) {
			p.reject(err)
		} else {
			p.resolve(res.body)
		}
	});
	
	return p.promise;
};

SkyPrepApi.prototype.initializer = function() {
	var instance = this;
	return this.get('available_api_calls', {}).then(function(list_of_api_calls) {
		for (var x = 0; x < list_of_api_calls.length; x++) {
			(function (){
				var current_call = list_of_api_calls[x];
				instance[current_call] = function(data) {
				return instance.get(current_call, data)			
				}; 
			})();
		}
	});
};


