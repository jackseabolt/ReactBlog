class PostsController < ApplicationController

	def index
		@posts = Post.all.order(created_at: :desc)
		@comment = Comment.new
	end 
	def show 
		@post = Post.find(params[:id])
		@comment = Comment.new
		@comments = @post.comments.all.order(created_at: :desc)
	end 


	def create
		@post = Post.new(post_params)
		respond_to do |format|
			format.json do 
				if @post.save
					render :json => @post
				end
			end
		end 
	end

	def update
	    @post = Post.find(params[:id])
	    respond_to do |format|
	      	format.json do 
	        	if @post.update(post_params)
	          		render :json => @post
	       		end
	      	end
	    end
	 end


	def destroy
		Post.find(params[:id]).destroy
		respond_to do |format|
			format.json { render :json => {}, :status => :no_content }
		end 
	end 


	private

	def post_params
		params.require(:post).permit(:title, :author, :content, :picture, :video)
	end
end
