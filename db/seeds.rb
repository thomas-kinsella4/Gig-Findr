puts("deleting")
Artist.delete_all
Agent.delete_all
Gig.delete_all
GigApplication.delete_all

puts("making new")

# Artist.create(
#     username: "Me + Nobody",
#     password: "pass",
#     profile_img: nil,
#     cover_img: nil,
#     bio: nil,
#     socialmedia_links: nil,
#     video: nil
# )

# Artist.create(
#     username: "We$t coa$t we$",
#     password: "pass",
#     profile_img: nil,
#     cover_img: nil,
#     bio: "not gon' hate it, long hair don't care",
#     socialmedia_links: nil,
#     video: nil
# )

# Artist.create(
#     username: "Poppa Crespo",
#     password: "pass",
#     profile_img: nil,
#     cover_img: nil,
#     bio: nil,
#     socialmedia_links: nil,
#     video: nil
# )

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
    venue: "My basement",
    time: 8,
    timetwo: "pm",
    date: "06/03/2022",
    genres: "House, Electronic, Techno",
    description: "Techno show baby"
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
    agent_id: 2,
    venue: "Pianos NYC",
    time: 10,
    timetwo: "pm",
    date: "06/24/2022",
    genres: "Folk, Bluegrass, Country",
    description: "Country show baby"
)

Gig.create(
    agent_id: 2,
    venue: "Pianos NYC",
    time: 9,
    timetwo: "pm",
    date: "06/24/2022",
    genres: "Folk, Bluegrass, Country",
    description: "Country show baby"
)

Gig.create(
    agent_id: 2,
    venue: "Pianos NYC",
    time: 8,
    timetwo: "pm",
    date: "06/24/2022",
    genres: "Folk, Bluegrass, Country",
    description: "Country show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "Mercury Lounge",
    time: 8,
    timetwo: "pm",
    date: "10/11/2022",
    genres: "Country",
    description: "Country show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "Mercury Lounge",
    time: 8,
    timetwo: "pm",
    date: "10/11/2022",
    genres: "Country",
    description: "Country show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "Mercury Lounge",
    time: 8,
    timetwo: "pm",
    date: "10/11/2022",
    genres: "Country",
    description: "Country show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "Mercury Lounge",
    time: 8,
    timetwo: "pm",
    date: "10/11/2022",
    genres: "Country",
    description: "Country show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "Mercury Lounge",
    time: 8,
    timetwo: "pm",
    date: "10/11/2022",
    genres: "Country",
    description: "Country show baby"
)

Gig.create(
    agent_id: 2,
    venue: "Mercury Lounge",
    time: 8,
    timetwo: "pm",
    date: "10/11/2022",
    genres: "Country",
    description: "Country show baby"
)

Gig.create(
    agent_id: 2,
    venue: "Mercury Lounge",
    time: 8,
    timetwo: "pm",
    date: "10/11/2022",
    genres: "Country",
    description: "Country show baby"
)

Gig.create(
    agent_id: 2,
    venue: "Mercury Lounge",
    time: 8,
    timetwo: "pm",
    date: "10/11/2022",
    genres: "Country",
    description: "Country show baby"
)

Gig.create(
    agent_id: 2,
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
    date: "10/11/2022",
    genres: "Country",
    description: "Country show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "Mercury Lounge",
    time: 8,
    timetwo: "pm",
    date: "10/11/2022",
    genres: "Country",
    description: "Country show baby"
)

Gig.create(
    agent_id: 2,
    venue: "Mercury Lounge",
    time: 8,
    timetwo: "pm",
    date: "06/11/2022",
    genres: "Country",
    description: "Country show baby"
)

Gig.create(
    agent_id: 2,
    venue: "Mercury Lounge",
    time: 8,
    timetwo: "pm",
    date: "06/11/2022",
    genres: "Country",
    description: "Country show baby"
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
    agent_id: 2,
    venue: "Baby's Alright BK",
    time: 10,
    timetwo: "pm",
    date: "08/16/2022",
    genres: "Pop, Indie Pop, Dance",
    description: "Dance show baby"
)

Gig.create(
    agent_id: 2,
    venue: "Baby's Alright BK",
    time: 9,
    timetwo: "pm",
    date: "08/16/2022",
    genres: "Pop, Indie Pop, Dance",
    description: "Dance show baby"
)

Gig.create(
    agent_id: 2,
    venue: "Baby's Alright BK",
    time: 8,
    timetwo: "pm",
    date: "08/16/2022",
    genres: "Pop, Indie Pop, Dance",
    description: "Dance show baby"
)

Gig.create(
    agent_id: 3,
    venue: "Elsewhere BK",
    time: 10,
    timetwo: "pm",
    date: "07/17/2022",
    genres: "House, Electronic, Electronic Indie",
    description: "Electronic show baby"
)

Gig.create(
    agent_id: 3,
    venue: "Elsewhere BK",
    time: 11,
    timetwo: "pm",
    date: "07/17/2022",
    genres: "House, Electronic, Electronic Indie",
    description: "Electronic show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "Knitting Factory BK",
    time: 10,
    timetwo: "pm",
    date: "08/10/2022",
    genres: "Classical Music, Beethoven",
    description: "Beethoven show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "Knitting Factory BK",
    time: 9,
    timetwo: "pm",
    date: "08/10/2022",
    genres: "Classical Music, Beethoven",
    description: "Beethoven show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "Knitting Factory BK",
    time: 8,
    timetwo: "pm",
    date: "08/10/2022",
    genres: "Classical Music, Beethoven",
    description: "Beethoven show baby"
)

Gig.create(
    agent_id: 2,
    venue: "Wes' house",
    time: 8,
    timetwo: "pm",
    date: "06/17/2022",
    genres: "Country",
    description: "Country show baby"
)

Gig.create(
    agent_id: 2,
    venue: "Wes' house",
    time: 7,
    timetwo: "pm",
    date: "06/17/2022",
    genres: "Country",
    description: "Country show baby"
)

Gig.create(
    agent_id: 2,
    venue: "Wes' house",
    time: 6,
    timetwo: "pm",
    date: "06/17/2022",
    genres: "Country",
    description: "Country show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "The Lounge",
    time: 10,
    timetwo: "pm",
    date: "07/11/2022",
    genres: "Jazz",
    description: "Jazz show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "The Lounge",
    time: 9,
    timetwo: "pm",
    date: "07/11/2022",
    genres: "Jazz",
    description: "Jazz show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "The Lounge",
    time: 8,
    timetwo: "pm",
    date: "07/11/2022",
    genres: "Jazz",
    description: "Jazz show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "The park next door",
    time: 10,
    timetwo: "pm",
    date: "08/14/2022",
    genres: "folk, singer/songwriter",
    description: "folk"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "The park next door",
    time: 11,
    timetwo: "pm",
    date: "06/14/2022",
    genres: "folk, singer/songwriter",
    description: "folk"
)

Gig.create(
    agent_id: 1,
    venue: "My basement",
    time: 10,
    timetwo: "pm",
    date: "06/15/2022",
    genres: "heavy metal",
    description: "metal show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "The local church",
    time: 8,
    timetwo: "pm",
    date: "07/03/2022",
    genres: "Soul, Gospel, Choir",
    description: "Soul show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "The local church",
    time: 9,
    timetwo: "pm",
    date: "07/03/2022",
    genres: "Soul, Gospel, Choir",
    description: "Soul show baby"
)

Gig.create(
    agent_id: 1,
    venue: "My basement",
    time: 10,
    timetwo: "pm",
    date: "06/09/2022",
    genres: "heavy metal, metal, hardcore",
    description: "metal show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "Mercury Lounge",
    time: 8,
    timetwo: "pm",
    date: "08/11/2022",
    genres: "Blues",
    description: "Blues show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "Mercury Lounge",
    time: 8,
    timetwo: "pm",
    date: "08/11/2022",
    genres: "Blues",
    description: "Blues show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "Mercury Lounge",
    time: 8,
    timetwo: "pm",
    date: "08/11/2022",
    genres: "Blues",
    description: "Blues show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "Mercury Lounge",
    time: 8,
    timetwo: "pm",
    date: "08/11/2022",
    genres: "Blues",
    description: "Blues show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "Mercury Lounge",
    time: 8,
    timetwo: "pm",
    date: "08/11/2022",
    genres: "Blues",
    description: "Blues show baby"
)

Gig.create(
    agent_id: rand(1..4),
    venue: "Mercury Lounge",
    time: 8,
    timetwo: "pm",
    date: "08/11/2022",
    genres: "Blues",
    description: "Blues show baby"
)


puts("done seeding")