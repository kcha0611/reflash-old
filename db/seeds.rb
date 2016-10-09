# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create!({username: "Guest", password: "123456", f_name: "guest", l_name: "guest"})
User.create!({username: "a", password:"kencha", f_name: "ken", l_name: "cha"})
Picture.create!({picture_url: "http://res.cloudinary.com/dllnnnotc/image/upload/v1474935416/1920x1080_e1aoab.jpg", user_id: 1, subject: "Nature"})
Picture.create!({picture_url: "http://res.cloudinary.com/dllnnnotc/image/upload/v1474935409/1920x1080_uu9qd2.jpg", user_id: 1, subject: "Nature"})
Picture.create!({picture_url: "http://res.cloudinary.com/dllnnnotc/image/upload/v1474935406/1920x1080_gyajym.jpg", user_id: 2, subject: "Nature"})
Picture.create!({picture_url: "http://res.cloudinary.com/dllnnnotc/image/upload/v1474935395/1920x1080_a0vlgw.jpg", user_id: 2, subject: "Nature"})
Picture.create!({picture_url: "http://res.cloudinary.com/dllnnnotc/image/upload/v1474935389/1920x1080_vx3ffo.jpg", user_id: 2, subject: "Nature"})
