module Api
  module V1
    class SessionsController < ApplicationController

      def create
        user = User.find_by(email: params[:email])
        
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: { name: user.name }, status: :ok
        else
          render json: { error: 'メールアドレスまたはパスワードが正しくありません' }, status: :unauthorized
        end
      end

      def destroy
        session.delete(:user_id)
        render json: { message: 'ログアウトしました' }, status: :ok
      end
    end
  end
end
