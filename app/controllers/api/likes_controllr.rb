class Api::LikesController < ApplicationController

    def index

    end

    def create
        debugger
        @like = Like.new(like_params)
        if @like.save
            render json: @like
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy
        @like = Like.find(params[:id])
        if @like && @like.destroy
            render json: @like
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    private

    def like_params
        debugger
        params.require(:like).permit(:post_id, :user_id)
    end
end