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

Artist.create(
    username: "Wes Bourke",
    password: "pass",
    profile_img: nil,
    cover_img: nil,
    bio: nil,
    socialmedia_links: nil,
    music: nil,
    video: nil
)

Artist.create(
    username: "Poppa Crespo",
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

Agent.create(
    username: "Agent Alexa",
    password: "test",
    bio: nil,
    profile_img: nil,
    isAgent: nil
)

5.times do 
    Agent.create(
        username: Faker::Name.unique.name,
        password: "pass"
    )
end

Gig.create(
    agent_id: 1,
    venue: "The Bitter End",
    time: 8,
    timetwo: "pm",
    date: "06/03/2022",
    genres: "Rock, Indie, Alternative",
    description: "Rock show baby"
)

Gig.create(
    agent_id: 1,
    venue: "The Bowery Electric",
    time: 9,
    timetwo: "pm",
    date: "06/12/2022",
    genres: "Hip Hop, Trap",
    description: "Rap show baby"
)

Gig.create(
    agent_id: 2,
    venue: "Pianos NYC",
    time: 11,
    timetwo: "pm",
    date: "06/24/2022",
    genres: "Folk, Bluegrass, Country",
    description: "Country show baby"
)

Gig.create(
    agent_id: 3,
    venue: "The Delancey",
    time: 8,
    date: "06/28/2022",
    genres: "Electronic, Indie, EDM",
    description: "Show baby"
)

Gig.create(
    agent_id: 3,
    venue: "The Delancey",
    time: 7,
    timetwo: "pm",
    date: "06/28/2022",
    genres: "Electronic, Indie, EDM",
    description: "Show baby"
)

Gig.create(
    agent_id: 3,
    venue: "The Delancey",
    time: 9,
    timetwo: "pm",
    date: "06/28/2022",
    genres: "Electronic, Indie, EDM",
    description: "Show baby"
)

Gig.create(
    agent_id: 3,
    venue: "The Delancey",
    time: 10,
    timetwo: "pm",
    date: "06/28/2022",
    genres: "Electronic, Indie, EDM",
    description: "Show baby"
)

Gig.create(
    agent_id: 3,
    venue: "The Delancey",
    time: 11,
    timetwo: "pm",
    date: "06/28/2022",
    genres: "Electronic, Indie, EDM",
    description: "Show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "Rockwood Music Hall",
    time: 10,
    timetwo: "pm",
    date: "07/30/2022",
    genres: "Rock, Hard Rock",
    description: "Rock show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "Arlene's Grocery",
    time: 8,
    timetwo: "pm",
    date: "08/02/2022",
    genres: "Heavy Metal, Hard Rock, Metal",
    description: "Metal show baby"
)

Gig.create(
    agent_id: 1,
    venue: "Sultan Room BK",
    time: 9,
    timetwo: "pm",
    date: "07/06/2022",
    genres: "Indie, Alternative, Electronic Indie",
    description: "Indie show baby"
)

Gig.create(
    agent_id: 1,
    venue: "Sultan Room BK",
    time: 7,
    timetwo: "pm",
    date: "07/06/2022",
    genres: "Indie, Alternative, Electronic Indie",
    description: "Indie show baby"
)

Gig.create(
    agent_id: 1,
    venue: "Sultan Room BK",
    time: 8,
    timetwo: "pm",
    date: "07/06/2022",
    genres: "Indie, Alternative, Electronic Indie",
    description: "Indie show baby"
)

Gig.create(
    agent_id: 1,
    venue: "Sultan Room BK",
    time: 10,
    timetwo: "pm",
    date: "07/06/2022",
    genres: "Indie, Alternative, Electronic Indie",
    description: "Indie show baby"
)

Gig.create(
    agent_id: 1,
    venue: "Sultan Room BK",
    time: 11,
    timetwo: "pm",
    date: "07/06/2022",
    genres: "Indie, Alternative, Electronic Indie",
    description: "Indie show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "Mercury Lounge",
    time: 8,
    timetwo: "pm",
    date: "06/11/2022",
    genres: "Country",
    description: "Country show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "Mercury Lounge",
    time: 8,
    timetwo: "pm",
    date: "06/11/2022",
    genres: "Country",
    description: "Country show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "Mercury Lounge",
    time: 8,
    timetwo: "pm",
    date: "06/11/2022",
    genres: "Country",
    description: "Country show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "Mercury Lounge",
    time: 8,
    timetwo: "pm",
    date: "06/11/2022",
    genres: "Country",
    description: "Country show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "Mercury Lounge",
    time: 8,
    timetwo: "pm",
    date: "06/11/2022",
    genres: "Country",
    description: "Country show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "Mercury Lounge",
    time: 8,
    timetwo: "pm",
    date: "06/11/2022",
    genres: "Country",
    description: "Country show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "Mercury Lounge",
    time: 8,
    timetwo: "pm",
    date: "06/11/2022",
    genres: "Country",
    description: "Country show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "Mercury Lounge",
    time: 8,
    timetwo: "pm",
    date: "06/11/2022",
    genres: "Country",
    description: "Country show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "Mercury Lounge",
    time: 8,
    timetwo: "pm",
    date: "06/11/2022",
    genres: "Country",
    description: "Country show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "Mercury Lounge",
    time: 8,
    timetwo: "pm",
    date: "06/11/2022",
    genres: "Country",
    description: "Country show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "Mercury Lounge",
    time: 8,
    timetwo: "pm",
    date: "06/11/2022",
    genres: "Country",
    description: "Country show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "Mercury Lounge",
    time: 8,
    timetwo: "pm",
    date: "06/11/2022",
    genres: "Country",
    description: "Country show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "Mercury Lounge",
    time: 8,
    timetwo: "pm",
    date: "06/11/2022",
    genres: "Country",
    description: "Country show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "Mercury Lounge",
    time: 8,
    timetwo: "pm",
    date: "06/11/2022",
    genres: "Country",
    description: "Country show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "Mercury Lounge",
    time: 8,
    timetwo: "pm",
    date: "06/11/2022",
    genres: "Country",
    description: "Country show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "Mercury Lounge",
    time: 8,
    timetwo: "pm",
    date: "06/11/2022",
    genres: "Country",
    description: "Country show baby"
)



puts("done seeding")