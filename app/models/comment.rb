# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  post_id    :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
    validates :body, :author_id, :post_id, presence: true

    belongs_to :author,
        primary_id: :id,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :post,
        primary_id: :id,
        foreign_key: :post_id,
        class_name: :Post

end
