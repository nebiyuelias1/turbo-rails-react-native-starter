module Api
  module V1
    class AuthController < ApplicationController
      # Keep normal ApplicationController behavior (sessions/CSRF). This endpoint
      # is intended for same-origin clients that use the session cookie.

      # Return JSON for auth checks
      def check
        if current_user
          render json: {
            authenticated: true,
            user: {
              id: current_user.id,
              email: current_user.email,
              name: current_user.respond_to?(:name) ? current_user.name : nil
            }
          }
        else
          render json: { authenticated: false }, status: :unauthorized
        end
      end
    end
  end
end
