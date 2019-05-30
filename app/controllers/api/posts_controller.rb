class Api::PostsController < ApplicationController

    def create
        @post = Post.new(post_params)
        if @post.save
            render json: @post
        else
            render @post.errors.full_messages, status: 422
        end
    end


    private

    def post_params
        params.requre(:post).permit(:title, :content, :type)
    end
end