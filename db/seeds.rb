# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Artist.create(
    username: "test1",
    password_digest: "test",
    profile_img: "n/a",
    cover_img: "n/a",
    bio: "bio",
    socialmedia_links: "twitter",
    music: "my music",
    video: "my video"
)
