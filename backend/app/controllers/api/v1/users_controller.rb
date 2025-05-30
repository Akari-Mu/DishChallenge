module Api
  module V1
    class UsersController < ApplicationController
      def me
        if session[:user_id]
          user = User.find_by(id: session[:user_id])
          if user
            render json: { id: user.id, name: user.name, email: user.email }, status: :ok
          else
            render json: { error: 'ユーザーが見つかりません' }, status: :not_found
          end
        else
          render json: { error: 'ログインしていません' }, status: :unauthorized
        end
      end
    end
  end
end
