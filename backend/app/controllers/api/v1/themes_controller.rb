module Api
  module V1
    class ThemesController < ApplicationController
      def published
        theme = Theme.published.first
        if theme
          render json: { id: theme.id, title: theme.title }
        else
          render json: { id: nil, title: nil }, status: :not_found
        end
      end
    end
  end
end
