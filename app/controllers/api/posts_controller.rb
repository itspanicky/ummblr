class Api::PostsController < ApplicationController

    # before_action :ensure_logged_in

    def create
        @post = current_user.posts.new(post_params)
        if @post.save
            render :show
            # render :index
        else
            render @post.errors.full_messages, status: 422
        end
    end

    def update
        @post = Post.find(params[:id])
        if @post.update(post_params)
            render json: @post
        else
            render @post.errors.full_messages, status: 422
        end
    end

    def index
        # if params[:author_id] = current_user.id
        #     @posts = Post.includes
        # else
        #     @posts = Post.all
        #     render @posts
        # end
        @posts = Post.all
        render :index
    end

    def show
        @post = Post.find(params[:id])
        render :show
    end

    def destroy
        @post = Post.find(params[:id])
        @post.destroy
    end

    private

    def post_params
        params.require(:post).permit(:title, :content, :post_type, :author_id, :photo )
    end
end