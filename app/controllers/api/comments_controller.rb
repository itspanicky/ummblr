class Api::CommentsController < ApplicationController
    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status 422
        end
    end

    def show
        @comment = Comment.find(params[:id])
        render :show
    end

    def index
        @comments = Comment.find_by(params[:post_id])
    end

    private

    def comment_params
        params.required(:post).permit(:body, :post_id, :author_id)
    end

end