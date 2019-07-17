class Api::CommentsController < ApplicationController
    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render json: @comment
        # else
        #     render json: @comment.errors.full_messages, status 422
        end
    end

    def show
        @comment = Comment.find(params[:id])
        render json: @comment
    end

    def index
        post = Post.find(params[:post_id])
        @comments = post.comments
        render :index

    end

    private

    def comment_params
        params.required(:post).permit(:body, :post_id, :author_id)
    end

end