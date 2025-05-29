module Api
  module V1
    class NewusersController < ApplicationController
      def create
        user = User.new(
          email: params[:email],
          password: params[:password],
          name: params[:name]
        )
        if user.save
          session[:user_id] = user.id
          render json: { message: '新規作成成功' }, status: :ok
        else
          render json: { error: user.errors.full_messages.join(', ') }, status: :unprocessable_entity
        end
      end
    end
  end
end
