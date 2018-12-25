var APP_ID = 'pKkU2717xaiyu8egOaNYucH9-gzGzoHsz';
			var APP_KEY = 'pL66pN78H8USTLkSfi6S6Izn';


			AV.init({
				appId: APP_ID,
				appKey: APP_KEY
			});
			var Message = AV.Object.extend('Message');
			var message = new Message();


			// 			1 将待储存的数据通过变量保存下来
			// 			2 将数据放到 name words中
			// 			3 表单提交之后运行save
			
// 
// 			var todo = AV.Object.createWithoutData('Message', '5c2198b0fb4ffe005f51da3e');
// 			todo.fetch().then(function() {
// 				var title = todo.get('name'); // 读取 title
// 				var content = todo.get('words'); // 读取 content
// 				console.log(title, content)
// 			}, function(error) {
// 				// 异常处理
// 			});


			var query = new AV.Query('Message');
			query.find().then(function(messages) {
				let array = messages.map((item)=> item.attributes)
				array.forEach((item)=>{
					let li = document.createElement('li')
					li.innerText = item.names + ' : ' + item.words
					let messageList = document.querySelector('#messageList')
					messageList.appendChild(li)
				})
			}), function(error) {
				// 异常处理
			};

			postMessageForm.addEventListener('submit', function(e) {
				e.preventDefault()

				Message.names = postMessagename.value
				// alert(postMessagename.value)
				Message.words = postMessagewords.value
				message.save({
					names: Message.names,
					words: Message.words
				}).then(function(message) {
					window.location.reload()
					console.log(message)
				})
			})