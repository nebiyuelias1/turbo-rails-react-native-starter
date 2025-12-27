class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :ratings, dependent: :destroy

  def self.from_telegram(auth)
    user = where(telegram_id: auth[:id]).first_or_initialize do |u|
      # TODO: Require email verification
      u.email = auth[:email] || "#{auth[:id]}@telegram.com"
      u.password = Devise.friendly_token[0, 20]
    end
    user.name = [ auth[:first_name], auth[:last_name] ].join(" ").strip
    user.username = auth[:username]
    user.telegram_id = auth[:id]
    user.save!
    user
  end
end
