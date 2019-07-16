class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user) 
            # render json: @user
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def index
        @users = User.includes(:followers, :followings, :likes, :comments).all
        render :index
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

    private
    
    def user_params
        params.require(:user).permit(:username, :password, :email, :avatar, followings: [], followers: [])
    end

end