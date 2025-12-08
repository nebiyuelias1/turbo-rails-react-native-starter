class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :ratings, dependent: :destroy

  def self.from_telegram(auth)
    where(telegram_id: auth[:id]).first_or_create do |user|
      user.email = auth[:email] || "#{auth[:id]}@telegram.com" # Generate a unique email if not provided
      user.password = Devise.friendly_token[0, 20]
      user.name = [ auth[:first_name], auth[:last_name] ].join(" ").strip
      user.telegram_id = auth[:id]
    end
  end
end
