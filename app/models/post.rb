# == Schema Information
#
# Table name: posts
#
#  id                 :bigint           not null, primary key
#  title              :string
#  content            :text
#  post_type          :string           not null
#  author_id          :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  reblog_post_id     :integer
#  reblog_description :string
#

class Post < ApplicationRecord
    validates :post_type, :author_id, presence: true

    has_one_attached :photo

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User
    
    has_many :likes

    has_many :comments,
        primary_key: :id,
        foreign_key: :post_id,
        class_name: :Comment

    # validate :ensure_photo
    # def ensure_photo
    #   unless self.photo.attached? errors[:photo] << "must be attached"
    # end
end
