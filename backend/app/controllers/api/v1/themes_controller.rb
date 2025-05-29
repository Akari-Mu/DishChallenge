module Api
  module V1
    class ThemesController < ApplicationController
      def published
        theme = Theme.published.first
        if theme
          render json: { title: theme.title }
        else
          render json: { title: nil }, status: :not_found
        end
      end
    end
  end
end
