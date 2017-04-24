class PostsController < ApplicationController

	def index
		@posts = Post.all
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

	end 


	def destroy
		Post.find(params[:id]).destroy
		respond_to do |format|
			format.json { render :json =>{}, :status => :no_content }
		end 
	end 

	private

	def post_params
		params.require(:post).permit(:title, :author, :content)
	end

end
