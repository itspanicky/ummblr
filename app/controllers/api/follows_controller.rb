class Api::FollowsController < ApplicationController
    # before_action :ensure_logged_in

    def create
        @follow = Follow.new()
        @follow.follower_id = current_user.id
        @follow.following_id = params[:followingId]
        if @follow.save
            # render :show
            render json: @follow
            # render 'api/users/show'
        else
            render json: @follow.errors.full_messages
        end
    end

    def show
       @follow = Follow.find_by(following_id: params[:id], follower_id: current_user.id)
       if @follow
            render :show
            # render 'api/users/show'
       else
            render json: @follow.errors.full_messages
       end
    end

    def destroy
        # for unfollowing
        @follow = Follow.find_by(following_id: params[:id], follower_id: current_user.id )
        if @follow && @follow.destroy
            render json: @follow
            # render 'api/users/show'
        # else
        #     render json @follow.errors.full_messages
        end
    end

    def index
        # query search followings and followers by matching user_id
        @user = User.includes(:followings, :followers).find_by(id: params[:user_id])

        @followings = @user.followings
        @followers = @user.followers

        render :index
    end

    private

    def follow_params
        params.require(:follow).permit(:following_id, :follower_id)
    end

end