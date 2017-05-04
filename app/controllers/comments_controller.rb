class CommentsController < ApplicationController

	def create
		@post = Post.find(params[:post_id])
		@comment = Comment.create(comment_params)
		@comment.post_id = @post.id
		respond_to do |format|
			format.json do 
				if @post.save 
					render json: @comment 
				end
			end 
		end 
	end 

	def update
		@comment = Comment.find(params[:id])
		respond_to do |format|
			format.json do 
				if @comment.update(comment_params)
					redirect_to posts_path
				else
					redirect_to posts_path
				end 
			end 
		end
	end 

	def destroy 
		@comment = Comment.find(params[:id])
		@comment.destroy
		respond_to do |format|
			format.json { render :json => {}, :status => :no_content }
		end 
	end 

	private 

	def comment_params
		params.require(:comment).permit(:author, :content, :post_id)
	end 

end 