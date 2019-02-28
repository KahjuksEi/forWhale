var tasklist = {
	
	'config' : {
		'rowsPerPage' : 10
	},

	'todos' : false,

	'users' : false,

	'run' : async function(){
		var jsonPath;
		var todos;
		var todo;
		var users;
		var user;
		var count;
		var rowsPerPage = this.config.rowsPerPage;

		jsonPath = 'https://jsonplaceholder.typicode.com/todos';
		todos = await this.jsonToArray(jsonPath);

		jsonPath = 'https://jsonplaceholder.typicode.com/users';
		users = await this.jsonToArray(jsonPath);

		if(todos.success && users.success){
			this.todos = todos.success;
			this.users = users.success;

			this.showPage(1);

			this.addPagination();


		}
	},

	'getUserNameById' : function (id){
		var users = this.users;
		var user;

		for (var i = 0; i < users.length; i++) {
			user =  users[i];
			if(id == user.id){
				return  user.name;
			}
		}

		return false;

	},

	'showPage' : function(page){

		var todos = this.todos;
		var users = this.users;
		var start;
		var end;
		var rowsPerPage = this.config.rowsPerPage;

		if(page == 1){
		    start = 0;
		    end = rowsPerPage-1;
		}

		if(page>1){
		    start = (page-1) * rowsPerPage;
		    end = start + rowsPerPage;
		}

		for (var i = start; i <= end ; i++) {
			todo = todos[i];
			//user = users[i];
			userName = this.getUserNameById(todo.userId);

			this.addRow(todo, userName);
		}

	},

	'jsonToArray' : async function (json){

		var result = {};
		var msg = {
			'error'    : 'JSON file has been failed!',
			'success'  : 'JSON file has been loaded!',
		};
		var response;

		try {
			response = await $.ajax(json)
				.done(function(data) {
					console.log(msg.success);
				})
				.fail(function() {
					alert(msg.error);
				});
		
		} catch(e) {
		}

		if(response){
			result.success = response;
		}else{
			result.error =  msg.error;
		}

		return result;
	},

	'addRow' : function (todo, userName){

		var table = $('#myTable tbody');
		var row = '<tr>' +
						'<td>' + todo.userId + '</td>' +
						'<td>' + userName + '</td>' +
						'<td>' + todo.title + '</td>' +
						'<td>' + todo.completed + '</td>' +
				  '</tr>';

		table.append(row);

	},

	'addPagination' : function(){

		var tasksTotal = this.todos.length;
		var rowsPerPage = this.config.rowsPerPage;

		var pages = Math.ceil(tasksTotal/rowsPerPage);
		var page;
		var pager = $('#pager');
		var link;
		var links = $('.page-link');
		var pageNum;
		var self = this;

		for (var i = 1; i <= pages; i++) {
			page = i;
			link = '<a href="#" class="page-link" data-id="'+page+'">'+page+'</a>';
			pager.append(link);
		}

		$(document).on('click', '.page-link', function(){
			pageNum = $(this).attr('data-id');
			self.showPage(pageNum);
		})

	}

};

tasklist.config.rowsPerPage = 24;
tasklist.run();



   