var Posts = React.createClass({
	getInitialState: function(){
		return {
			posts: this.props.posts,
			post: {
				title: '',
				author: '',
				content: ''
			}
		}
	},
	handlePostCreate: function(){
		var that = this;
		//console.log(this.state, "Hello");
		$.ajax({
			method: 'POST',
			data: { post: that.state.post },
			url: '/posts.json',
			success: function(res){
				var newPostList = that.state.posts;
				newPostList.push(res);
				that.setState({
					posts: newPostList,
					post: {
						title: '',
						author: '',
						content: ''
					}
				});
			} 
		});
	},
	handlePostDelete(post){
	    var postList = this.state.posts.filter(function(item) {
	      return post.id !== item.id;
	    });
	    this.setState({posts: postList});
  	},
	handleTitleChange(e) {
	    var newPost = this.state.post
	    newPost.title = e.target.value
	    this.setState({post: newPost});
  	},
  	handleAuthorChange(e) {
	    var newPost = this.state.post
	    newPost.author = e.target.value
	    this.setState({post: newPost});
  	},
  	handleContentChange(e) {
	    var newPost = this.state.post
	    newPost.content = e.target.value
	    this.setState({post: newPost});
  	},
	render: function(){	
			var that = this; 
			var postBoard = this.state.posts.map(function(post){
				return (
				<Post post={post} key={post.id} onDeletePost={that.handlePostDelete} />
				);
			});
		return (
			<div> 
				<div className="form_container post col-md-8 col-md-push-2">
					<h4>Create a Post</h4>
					<br />
					<div className='form-group'>
						<input value={this.state.post.title} onChange={this.handleTitleChange} type='text' className='form-control' />
					</div>
					<div className='form-group'>
						<input value={this.state.post.author} onChange={this.handleAuthorChange} type='text' className='form-control' />
					</div>
					<div className='form-group'>
						<input value={this.state.post.content} onChange={this.handleContentChange} type="text"className="form-control" />
					</div>
					<button onClick={this.handlePostCreate} className="btn btn-success">Post</button>
				</div>
				{ postBoard }
				
			</div>

		);
	}
});