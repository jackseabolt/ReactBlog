var Post = React.createClass({
	getInitialState: function(){
		return {
		    post: this.props.post, 
		    editMode: false
		}
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
	setEditMode: function(){
		this.setState({ editMode: true }); 
	},
	handlePostUpdate: function(){
		var that = this; 
		$.ajax({
			method: 'PUT',
			data: { post: that.state.post },
			url: '/posts/' + that.state.post.id + '.json',
			success: function(res) {
				that.setState({
					post: res,
					editMode: false
				});
			}
		});
	},
	handlePostDelete: function(){
		var that = this;
		$.ajax({
			method: 'DELETE',
			url: '/posts/' + that.state.post.id + '.json',
			success: function(res){
				that.props.onDeletePost(that.state.post);
			}
		});
	},
	render: function(){
		if (this.state.editMode){
			return (
				<div>
				<div className="form_container post col-md-8 col-md-push-2">
					<h4>Edit Post</h4>
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
					<button onClick={this.handlePostUpdate} className="btn btn-success">Update</button>
				</div>
				</div>
			);
		} else {
			return (
			<div>
				<div className="form_container post col-md-8 col-md-push-2">
					<h4>{this.props.post.title}</h4>
					<h5>{this.props.post.author}</h5>
					<p>{this.props.post.content}</p>
					<button className="btn btn-danger spacer" onClick={this.handlePostDelete}>Delete</button>
					<button className="btn btn-primary spacer" onClick={this.setEditMode}>Edit</button>
				</div>
			</div>
			); 
		}
	}
});