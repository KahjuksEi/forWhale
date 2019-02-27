new Vue({
			el: '#app',
			data: {
				name: '',
				message: ''
			},
			methods: {
				changeName: function(event) {
					this.name = event.target.value
				}
			}	
		})	