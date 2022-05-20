puts("deleting")
Artist.delete_all
Agent.delete_all
Gig.delete_all
GigApplication.delete_all

puts("making new")

Artist.create(
    username: "Me + Nobody",
    password: "pass",
    profile_img: nil,
    cover_img: nil,
    bio: nil,
    socialmedia_links: nil,
    music: nil,
    video: nil
)

Agent.create(
    username: "Agent1",
    password: "test",
    bio: nil,
    profile_img: nil,
    isAgent: nil
)

10.times do 
    Agent.create(
        username: Faker::Name.unique.name,
        password: "pass"
    )
end

Gig.create(
    agent_id: 1,
    venue: "The Bitter End",
    time: 8,
    date: "06/03/2022",
    genres: "Rock, Indie, Alternative",
    description: "Rock show baby"
)

Gig.create(
    agent_id: 1,
    venue: "The Bowery Electric",
    time: 9,
    date: "06/12/2022",
    genres: "Hip Hop, Trap",
    description: "Rap show baby"
)

Gig.create(
    agent_id: 2,
    venue: "Pianos NYC",
    time: 11,
    date: "06/24/2022",
    genres: "Folk, Bluegrass, Country",
    description: "Country show baby"
)

puts("done seeding")