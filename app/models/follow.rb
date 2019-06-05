# == Schema Information
#
# Table name: follows
#
#  id           :bigint           not null, primary key
#  following_id :integer          not null
#  follower_id  :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Follow < ApplicationRecord
    # problem - getting duplicate follows
    # validates :follower_id, uniqueness: true
    # validates_uniqueness_of :follower_id, scope: { :follower}

    belongs_to :following,
        primary_key: :id,
        foreign_key: :following_id,
        class_name: :User

    
    belongs_to :follower,
        primary_key: :id,
        foreign_key: :follower_id,
        class_name: :User

end
