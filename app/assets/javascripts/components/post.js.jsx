var Post = React.createClass({
	getInitialState: function(){
		return {
		    post: this.props.post
		}
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
		return (
		<div>
			<div className="form_container post col-md-8 col-md-push-2">
				<h4>{this.props.post.title}</h4>
				<h5>{this.props.post.author}</h5>
				<p>{this.props.post.content}</p>
				<button className="btn btn-danger spacer" onClick={this.handlePostDelete} >Delete</button>
			</div>
		</div>
		); 
	}
});