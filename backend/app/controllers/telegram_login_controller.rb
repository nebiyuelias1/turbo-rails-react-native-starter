class TelegramLoginController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:callback]

  def callback
    # Barebone implementation
    # The actual implementation will verify the hash and find/create a user
    render plain: "Telegram login callback received."
  end
end
