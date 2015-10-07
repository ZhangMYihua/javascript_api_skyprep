var api = new SkyPrepApi();


var doAfterGetUserCourses = function(courses) {
	
}

var doAfterUser = function(response) {
	//ihave the users
	//now get the first users courses
	user = response[0];	
	api.get('get_user_courses', { "user_email" : user.username }, doAfterGetUserCourses);

}

api.initialize = function() {
	return api.get('available_api_calls').then(function(list_of_api_calls) {
	for (var x = 0; x < list_of_api_calls; x++) {
		api[list_of_api_calls[x]] = function(params) {

		}
	}
	
	});
}

api.initialize().then(function() {
	api.get_users();
	api.get_
})



