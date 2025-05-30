module Api
  module V1
    class PostsController < ApplicationController

      def create
        post = Post.new(post_params)
        post.user_id = current_user.id if respond_to?(:current_user)

        if post.save
          render json: { message: '投稿が作成されました', post: post }, status: :created
        else
          render json: { message: '作成に失敗しました', errors: post.errors.full_messages }, status: :unprocessable_entity
        end
      end

      private

      def post_params
        params.require(:post).permit(
          :title,
          :photograph,
          :body,
          :materias,
          :recipe,
          :theme_id,
          :user_id
        )
      end
    end
  end
end
