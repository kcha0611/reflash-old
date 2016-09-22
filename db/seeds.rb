# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create!({username: "Guest", password: "123456", f_name: "guest", l_name: "guest"})
Picture.create!({picture_url: "https://source.unsplash.com/random/800x600", user_id: 1})
Picture.create!({picture_url: "https://source.unsplash.com/random/801x600", user_id: 1})
Picture.create!({picture_url: "https://source.unsplash.com/random/802x600", user_id: 1})
Picture.create!({picture_url: "https://source.unsplash.com/random/803x600", user_id: 1})
Picture.create!({picture_url: "https://source.unsplash.com/random/804x600", user_id: 1})
Picture.create!({picture_url: "https://source.unsplash.com/random/805x600", user_id: 1})
Picture.create!({picture_url: "https://source.unsplash.com/random/800x601", user_id: 1})
Picture.create!({picture_url: "https://source.unsplash.com/random/800x602", user_id: 1})
Picture.create!({picture_url: "https://source.unsplash.com/random/800x603", user_id: 1})
Picture.create!({picture_url: "https://source.unsplash.com/random/800x604", user_id: 1})
Picture.create!({picture_url: "https://source.unsplash.com/random/800x605", user_id: 1})
Picture.create!({picture_url: "https://source.unsplash.com/random/801x601", user_id: 1})
Picture.create!({picture_url: "https://source.unsplash.com/random/802x601", user_id: 1})
