const games = [
  {
    id: 'the-witcher-3',
    title: 'The Witcher 3: Wild Hunt',
    description: 'An action role-playing game set in an open world environment, focusing on the story of Geralt of Rivia.',
    seller: 'CD Projekt',
    releaseDate: 'May 19, 2015',
    genre: ['RPG', 'Open World', 'Action', 'Fantasy', 'Adventure', 'Story Rich', 'Mature', 'Third-Person'],
    platforms: ['PC', 'PlayStation 4', 'PlayStation 5', 'Xbox One', 'Xbox Series X|S', 'Nintendo Switch'],
    price: 39.99,
    imageUrl: '/images/witcher3.jpg'
  },
  {
    id: 'red-dead-redemption-2',
    title: 'Red Dead Redemption 2',
    description: 'A western-themed action-adventure game set in an open world environment, featuring both single-player and online multiplayer components.',
    seller: 'Rockstar Games',
    releaseDate: 'October 26, 2018',
    genre: ['Action', 'Adventure', 'Open World', 'Western', 'Story Rich', 'Shooter', 'Third-Person', 'Historical'],
    platforms: ['PC', 'PlayStation 4', 'PlayStation 5', 'Xbox One', 'Xbox Series X|S', 'Stadia'],
    price: 59.99,
    imageUrl: '/images/rdr2.jpg'
  },
  {
    id: 'minecraft',
    title: 'Minecraft',
    description: 'A sandbox video game focused on exploration, resource gathering, crafting, and building in a procedurally generated world. Minecraft was created by Mojang Studios in 2011. Minecraft is a widely popular sandbox game available on multiple platforms. Minecraft is currently rated 4.5/5.',
    seller: 'Mojang Studios',
    releaseDate: 'November 18, 2011',
    genre: ['Sandbox', 'Survival', 'Creative', 'Building', 'Open World', 'Multiplayer', 'First-Person', 'Adventure'],
    platforms: ['PC', 'Mac', 'Linux', 'Mobile', 'PlayStation 4', 'PlayStation 5', 'Xbox One', 'Xbox Series X|S', 'Nintendo Switch'],
    price: 29.99,
    imageUrl: '/images/minecraft.jpg'
  },
  {
    id: 'horizon-zero-dawn',
    title: 'Horizon Zero Dawn',
    description: 'An action role-playing game set in a post-apocalyptic world dominated by robotic creatures.',
    seller: 'Sony Interactive Entertainment',
    releaseDate: 'February 28, 2017',
    genre: ['RPG', 'Action', 'Open World', 'Adventure', 'Post-Apocalyptic', 'Third-Person', 'Story Rich', 'Sci-Fi'],
    platforms: ['PC', 'PlayStation 4', 'PlayStation 5'],
    price: 49.99,
    imageUrl: '/images/horizon.jpg'
  },
  {
    id: 'halo-infinite',
    title: 'Halo Infinite',
    description: 'A first-person shooter game developed by 343 Industries and part of the Halo series.',
    seller: 'Xbox Game Studios',
    releaseDate: 'December 8, 2021',
    genre: ['FPS', 'Action', 'Sci-Fi', 'Multiplayer', 'Story Rich', 'Shooter', 'Open World'],
    platforms: ['PC', 'Xbox One', 'Xbox Series X|S'],
    price: 59.99,
    imageUrl: '/images/halo.jpg'
  },
  {
    id: 'inscryption',
    title: 'Inscryption',
    description: 'Inscryption is a card game released on October 19, 2021. Published by Devolver Digital and created by Daniel Mullins Games; The game combines horror and deckbuilding to create an experience like no other. Lose yourself in the mystery the game offers, immerse yourself in the amazing story, and win with your wits and strategies.',
    seller: 'Daniel Mullins Games',
    releaseDate: 'October 19, 2021',
    genre: ['Psychological Horror', 'Deckbuilder', 'Roguelike', 'Escape Room', 'Puzzles', 'Card Game', 'Strategy', 'Indie'],
    platforms: ['PC', 'Mac', 'PlayStation 4', 'PlayStation 5', 'Nintendo Switch'],
    price: 24.99,
    imageUrl: '/images/inscryption.jpg'
  },
  {
    id: 'sifu',
    title: 'Sifu',
    description: 'A kung fu action game following a young student on a path of revenge through the criminal underworld. Sifu is a game fueled by vengeance and an action fighting game. Released on February 6th, 2022, by Sloclap, Kepler Interactive, and Microids. This is a highly rated game with a rating of 4.5/5 stars.',
    seller: 'Sloclap',
    releaseDate: 'February 8, 2022',
    genre: ['Action', 'Martial Arts', 'Fighting', 'Beat \'em up', 'Difficult', 'Third-Person', 'Indie', 'Singleplayer'],
    platforms: ['PC', 'PlayStation 4', 'PlayStation 5', 'Xbox One', 'Xbox Series X|S', 'Nintendo Switch'],
    price: 39.99,
    imageUrl: '/images/sifu.jpg'
  },
  {
    id: 'grand-turismo-7',
    title: 'Grand Turismo 7',
    description: 'A racing simulation game that combines the best features of the Gran Turismo series with stunning graphics and realistic physics. Grand Turismo 7 is a widely popular driving and racing game. This game is a real driving simulator that took 25 years to develop. This game is developed by Polyphony Digital Inc., released on March 4, 2022. This game is the 8th in the Grand Turismo series and is a PlayStation exclusive developed for the PlayStation 5.',
    seller: 'Sony Interactive Entertainment',
    releaseDate: 'March 4, 2022',
    genre: ['Racing', 'Simulation', 'Sports', 'Driving', 'Realistic', 'Multiplayer', 'Competitive'],
    platforms: ['PlayStation 4', 'PlayStation 5'],
    price: 69.99,
    imageUrl: '/images/gt7.jpg'
  },
  {
    id: 'bookworm-adventures-vol-2',
    title: 'Bookworm Adventures Vol. 2',
    description: 'Bookworm Adventures Vol. 2 is a computer game created by PopCap Games. Released on July 30th, 2009, the game was a sequel to Bookworm Adventures. You play as Lex, the titular bookworm, who is the guardian of the great library. Join Lex on an adventure through books to defeat enemies with the power of spelling.',
    seller: 'PopCap Games',
    releaseDate: 'July 30, 2009',
    genre: ['Puzzle', 'Word Game', 'Educational', 'Casual', 'Adventure', 'Strategy', 'Turn-based', 'Indie'],
    platforms: ['PC', 'Browser'],
    price: 14.99,
    imageUrl: '/images/bookworm2.jpg'
  },
  {
    id: 'the-finals',
    title: 'The Finals',
    description: 'A free-to-play FPS game where players compete in a virtual combat gameshow with destructible environments. Its release date was December 7, 2023, but it was playable beforehand with closed alphas and open betas.',
    seller: 'Embark Studios',
    releaseDate: 'December 8, 2023',
    genre: ['FPS', 'Action', 'Battle Royale', 'Multiplayer', 'Competitive', 'Team-Based', 'Destruction', 'Free to Play'],
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S'],
    price: 0.00,
    imageUrl: '/images/finals.jpg'
  },
  {
    id: 'star-wars-battlefront-ii',
    title: 'Star Wars Battlefront II',
    description: 'A multiplayer shooter set in the Star Wars universe featuring iconic characters and locations from all eras of the franchise. Star Wars Battlefront II is a widely popular game developed by DICE. The game was released in 2017, and it is currently rated 4.3/5. This game is based on the famous Star Wars franchise.',
    seller: 'Electronic Arts',
    releaseDate: 'November 17, 2017',
    genre: ['FPS', 'Action', 'Sci-Fi', 'Multiplayer', 'Third-Person', 'Star Wars', 'Shooter', 'PvP'],
    platforms: ['PC', 'PlayStation 4', 'PlayStation 5', 'Xbox One', 'Xbox Series X|S'],
    price: 29.99,
    imageUrl: '/images/battlefront2.jpg'
  },
  {
    id: 'marvel-rivals',
    title: 'Marvel Rivals',
    description: 'A team-based competitive hero shooter featuring characters from the Marvel universe with unique abilities and team synergies. Marvel Rivals is a 3rd-person hero shooter game. This game was released fairly recently on December 6th, 2024. This game has 3.6/5 stars.',
    seller: 'NetEase Games',
    releaseDate: '2024',
    genre: ['Hero Shooter', 'Action', 'Multiplayer', 'Third-Person', 'Superhero', 'Team-Based', 'Competitive', 'PvP'],
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S'],
    price: 49.99,
    imageUrl: '/images/marvel-rivals.jpg'
  },
  {
    id: 'assassins-creed-origins',
    title: "Assassin's Creed Origins",
    description: 'Assassin\'s Creed Odyssey is an action RPG game first released in 2018 by Ubisoft. It is the 11th game in the Assassin\'s Creed series, a successor to the successful Assassin\'s Creed Origins. Currently has positive reviews, 4.5/5 stars. This game is based on Greek Mythology.',
    seller: 'Ubisoft',
    releaseDate: 'October 27, 2017',
    genre: ['Action', 'Adventure', 'Open World', 'Historical', 'RPG', 'Stealth', 'Third-Person', 'Egypt'],
    platforms: ['PC', 'PlayStation 4', 'PlayStation 5', 'Xbox One', 'Xbox Series X|S', 'Stadia'],
    price: 49.99,
    imageUrl: '/images/ac-origins.jpg'
  },
  {
    id: 'assassins-creed-odyssey',
    title: "Assassin's Creed Odyssey",
    description: 'Assassin\'s Creed Origins is an action RPG game released by Ubisoft in 2017. It is the 10th game in the Assassin\'s Creed series, the successor to Assassin\'s Creed Syndicate. The game is heavily influenced by Egyptian mythology. It has positive reviews of 4.5/5 stars.',
    seller: 'Ubisoft',
    releaseDate: 'October 5, 2018',
    genre: ['RPG', 'Action', 'Open World', 'Historical', 'Ancient Greece', 'Stealth', 'Adventure', 'Third-Person'],
    platforms: ['PC', 'PlayStation 4', 'PlayStation 5', 'Xbox One', 'Xbox Series X|S', 'Stadia', 'Switch'],
    price: 59.99,
    imageUrl: '/images/ac-odyssey.jpg'
  },
  {
    id: 'fallout-new-vegas',
    title: 'Fallout: New Vegas',
    description: 'Fallout: New Vegas is considered to be the magnum opus of the Fallout games. Developed by Obsidian Entertainment, we travel the Mojave Desert to find the man who shot us in the head. An incredible adventure throughout.',
    seller: 'Obsidian Entertainment',
    releaseDate: 'October 19, 2010',
    genre: ['RPG', 'Open World', 'Post-Apocalyptic', 'Action', 'Adventure', 'Story Rich', 'First-Person', 'Shooter'],
    platforms: ['PC', 'PlayStation 3', 'Xbox 360'],
    price: 19.99,
    imageUrl: '/images/fallout-new-vegas.jpg'
  },
  {
    id: 'darkest-dungeon',
    title: 'Darkest Dungeon',
    description: 'Darkest Dungeon is a challenging game created by Red Hook Studios. Take on horrors beyond your comprehension as a collection of heroes dungeon-crawling to fight off evil.',
    seller: 'Red Hook Studios',
    releaseDate: 'January 19, 2016',
    genre: ['RPG', 'Roguelike', 'Turn-based', 'Horror', 'Dark Fantasy', 'Difficult', 'Strategy', 'Atmospheric'],
    platforms: ['PC', 'Mac', 'Linux', 'PlayStation 4', 'PlayStation Vita', 'Xbox One', 'Nintendo Switch', 'iOS', 'Android'],
    price: 24.99,
    imageUrl: '/images/darkest-dungeon.jpg'
  },
  {
    id: 'house-flipper',
    title: 'House Flipper',
    description: 'House Flipper gives you the skills to design your own and others\' houses. Take on jobs where people ask you to clean, demolish, paint, and furnish their houses. Earn money to do this for your own properties!',
    seller: 'Frozen District',
    releaseDate: 'May 17, 2018',
    genre: ['Simulation', 'Design', 'Construction', 'Casual', 'Building', 'First-Person', 'Relaxing', 'Singleplayer'],
    platforms: ['PC', 'Mac', 'PlayStation 4', 'PlayStation 5', 'Xbox One', 'Xbox Series X|S', 'Nintendo Switch', 'Mobile'],
    price: 29.99,
    imageUrl: '/images/house-flipper.jpg'
  },
  {
    id: 'f1-25',
    title: 'F1 25',
    description: 'F1 25 is a racing game developed by Codemasters. It is the 18th installment in the F1 series. This game is not yet rated and is set to release on May 30th, 2025.',
    seller: 'Codemasters',
    releaseDate: 'May 30, 2025',
    genre: ['Racing', 'Simulation', 'Sports', 'Driving', 'Multiplayer', 'Competitive', 'Realistic', 'eSports'],
    platforms: ['PC', 'PlayStation 4', 'PlayStation 5', 'Xbox One', 'Xbox Series X|S'],
    price: 69.99,
    imageUrl: '/images/f1-25.jpg'
  },
  {
    id: 'fc25',
    title: 'FC25',
    description: 'FC 25 is developed by EA Sports and was released on September 27, 2024. It is the 32nd installment of EA\'s very popular football simulation games. FC25 is currently rated 3.4/5 on PlayStation.',
    seller: 'EA Sports',
    releaseDate: 'September 27, 2024',
    genre: ['Sports', 'Football', 'Simulation', 'Multiplayer', 'Soccer', 'Competitive', 'Team-Based', 'eSports'],
    platforms: ['PC', 'PlayStation 4', 'PlayStation 5', 'Xbox One', 'Xbox Series X|S', 'Nintendo Switch'],
    price: 69.99,
    imageUrl: '/images/fc25.jpg'
  },
  {
    id: 'college-football-25',
    title: 'College Football 25',
    description: 'This is a very popular game after eleven years of waiting fans finally are able to enjoy the second installment in EA Sports college football simulation game. It is currently reviewed a 3.86 on Playstation.',
    seller: 'EA Sports',
    releaseDate: 'July 19, 2024',
    genre: ['Sports', 'Football', 'Simulation', 'American Football', 'Multiplayer', 'Competitive', 'Team-Based', 'eSports'],
    platforms: ['PlayStation 4', 'PlayStation 5', 'Xbox One', 'Xbox Series X|S'],
    price: 69.99,
    imageUrl: '/images/college-football-25.jpg'
  },
  {
    id: 'call-of-duty-black-ops-6',
    title: 'Call of Duty: Black Ops 6',
    description: 'Call of Duty: Black Ops 6 is a first-person shooter game published by Activision. It is the 21st installment of the Call of Duty franchise. It is currently reviewed 4/5 on PlayStation.',
    seller: 'Activision',
    releaseDate: 'October 25, 2024',
    genre: ['FPS', 'Action', 'Multiplayer', 'Shooter', 'Military', 'Competitive', 'Zombies', 'Campaign'],
    platforms: ['PC', 'PlayStation 4', 'PlayStation 5', 'Xbox One', 'Xbox Series X|S'],
    price: 69.99,
    imageUrl: '/images/call-of-duty-black-ops-6.jpg'
  },
  {
    id: 'ready-or-not',
    title: 'Ready or Not',
    description: 'Ready or Not makes your hands shake. You play as a SWAT officer going through your choice of map, attempting to subdue a slew of baddies with grounded and unforgiving combat.',
    seller: 'VOID Interactive',
    releaseDate: 'December 13, 2021',
    genre: ['FPS', 'Tactical', 'Simulation', 'Action', 'Realistic', 'Multiplayer', 'Co-op', 'Strategy'],
    platforms: ['PC'],
    price: 39.99,
    imageUrl: '/images/ready-or-not.jpg'
  },
  {
    id: 'zumas-revenge',
    title: 'Zuma\'s Revenge!',
    description: 'Zuma\'s Revenge is a classic puzzle game. Use your powers to stop evil spirits from getting to their goal.',
    seller: 'PopCap Games',
    releaseDate: 'September 15, 2009',
    genre: ['Puzzle', 'Casual', 'Action', 'Arcade', 'Match-3', 'Fast-Paced', 'Colorful', 'Classic'],
    platforms: ['PC', 'Mac', 'Mobile', 'Nintendo DS'],
    price: 9.99,
    imageUrl: '/images/zumas-revenge.jpg'
  },
  {
    id: 'lethal-company',
    title: 'Lethal Company',
    description: 'Lethal Company is a goofy co-op horror game where you team up with a crew to scavenge scrap while avoiding scary monsters.',
    seller: 'Zeekerss',
    releaseDate: 'October 23, 2023',
    genre: ['Horror', 'Co-op', 'Indie', 'Survival', 'First-Person', 'Comedy', 'Multiplayer', 'Atmospheric'],
    platforms: ['PC'],
    price: 9.99,
    imageUrl: '/images/lethal-company.jpg'
  },
  {
    id: 'plants-vs-zombies',
    title: 'Plants vs. Zombies: Game of the Year Edition',
    description: 'Plants vs. Zombies is the classic tower defense game where you plant weaponized plants to defend your brains from zombies!',
    seller: 'PopCap Games',
    releaseDate: 'May 5, 2009',
    genre: ['Tower Defense', 'Strategy', 'Casual', 'Zombie', 'Comedy', 'Family-Friendly', 'Colorful', 'Indie'],
    platforms: ['PC', 'Mac', 'Mobile', 'Xbox 360', 'PlayStation 3', 'Nintendo DS', 'Browser'],
    price: 14.99,
    imageUrl: '/images/plants-vs-zombies.jpg'
  },
  {
    id: 'spore',
    title: 'Spore',
    description: 'Spore lets you play god and create a species from scratch. You then watch them evolve from bacteria into space-faring civilizations.',
    seller: 'Maxis',
    releaseDate: 'September 4, 2008',
    genre: ['Simulation', 'Strategy', 'God Game', 'Sandbox', 'Adventure', 'Creative', 'Science Fiction', 'Evolution'],
    platforms: ['PC', 'Mac'],
    price: 19.99,
    imageUrl: '/images/spore.jpg'
  },
  {
    id: 'realm-of-the-mad-god',
    title: 'Realm of the Mad God Exalt',
    description: 'Realm of the Mad God is a pixelated MMO bullet hell where you chose a character, fight off monsters, and get stronger to defeat the titular mad god!',
    seller: 'DECA Games',
    releaseDate: 'June 20, 2011',
    genre: ['MMO', 'Bullet Hell', 'Roguelike', 'Pixel Art', 'Permadeath', 'Action', 'RPG', 'Free to Play'],
    platforms: ['PC', 'Mac', 'Browser'],
    price: 0.00,
    imageUrl: '/images/realm-of-the-mad-god.jpg'
  },
  {
    id: 'team-fortress-2',
    title: 'Team Fortress 2',
    description: 'Team Fortress 2 is an eccentric class-based shooter that has redefined the shooter genre and has a cult following. Take part in the useless war for land by being one of the nine "professionals" and blow opponents to bits.',
    seller: 'Valve',
    releaseDate: 'October 10, 2007',
    genre: ['FPS', 'Class-Based', 'Multiplayer', 'Action', 'Team-Based', 'Comedy', 'Free to Play', 'Shooter'],
    platforms: ['PC', 'Mac', 'Linux'],
    price: 0.00,
    imageUrl: '/images/team-fortress-2.jpg'
  },
  {
    id: 'total-war-shogun-2',
    title: 'Total War: SHOGUN 2',
    description: 'Total War: SHOGUN 2 takes place during Japan\'s tumultuous civil war. Choose a real-life clan to control mass armies, and watch them fight in real time!',
    seller: 'SEGA',
    releaseDate: 'March 15, 2011',
    genre: ['Strategy', 'Real-time Tactics', 'Historical', 'Turn-Based Strategy', 'War', 'Grand Strategy', 'Military', 'Tactical'],
    platforms: ['PC', 'Mac', 'Linux'],
    price: 29.99,
    imageUrl: '/images/total-war-shogun-2.jpg'
  },
  {
    id: 'two-point-hospital',
    title: 'Two Point Hospital',
    description: 'Two Point Hospital gives you the ability to build your cartoony hospital. Manage staff, treat patients, get money!',
    seller: 'Two Point Studios',
    releaseDate: 'August 29, 2018',
    genre: ['Simulation', 'Management', 'Building', 'Comedy', 'Strategy', 'Economy', 'Casual', 'Medical'],
    platforms: ['PC', 'Mac', 'Linux', 'PlayStation 4', 'Xbox One', 'Nintendo Switch'],
    price: 34.99,
    imageUrl: '/images/two-point-hospital.jpg'
  },
  {
    id: 'yakuza-0',
    title: 'YAKUZA 0',
    description: 'Yakuza 0 is a prequel to the legendary series, where you play as two characters steeped in Japan\'s crime world. Beat up foes and uncover the mystery.',
    seller: 'SEGA',
    releaseDate: 'January 24, 2017',
    genre: ['Action', 'Adventure', 'Open World', 'Beat \'em up', 'Story Rich', 'Crime', 'Minigames', 'Mature'],
    platforms: ['PC', 'PlayStation 4', 'PlayStation 5', 'Xbox One', 'Xbox Series X|S'],
    price: 19.99,
    imageUrl: '/images/yakuza-0.jpg'
  },
  {
    id: 'warhammer-40000-darktide',
    title: 'Warhammer 40,000: Darktide',
    description: 'Warhammer Darktide lets you play as losers. But not just any losers, losers who will mow down hordes of corrupted entities with only the greatest weapons the emperor offers',
    seller: 'Fatshark',
    releaseDate: 'November 30, 2022',
    genre: ['FPS', 'Co-op', 'Action', 'Sci-Fi', 'Warhammer 40K', 'Gore', 'Violent', 'Futuristic'],
    platforms: ['PC', 'Xbox Series X|S'],
    price: 39.99,
    imageUrl: '/images/warhammer-40000-darktide.jpg'
  },
  {
    id: 'doki-doki-literature-club',
    title: 'Doki Doki Literature Club',
    description: 'Doki Doki Literature Club is full of cute girls! This game is not suitable for children or those who are usually disturbed.',
    seller: 'Team Salvato',
    releaseDate: 'September 22, 2017',
    genre: ['Visual Novel', 'Psychological Horror', 'Dating Sim', 'Anime', 'Free to Play', 'Story Rich', 'Horror', 'Meta'],
    platforms: ['PC', 'Mac', 'Linux', 'PlayStation 4', 'PlayStation 5', 'Xbox One', 'Xbox Series X|S', 'Nintendo Switch'],
    price: 0.00,
    imageUrl: '/images/doki-doki-literature-club.jpg'
  },
  {
    id: 'elden-ring',
    title: 'Elden Ring',
    description: 'Elden Ring is a critically acclaimed fantasy action RPG. Become a legendary warrior and defeat powerful bosses after navigating through FromSoftware\'s iconic game design.',
    seller: 'FromSoftware',
    releaseDate: 'February 25, 2022',
    genre: ['Action RPG', 'Open World', 'Souls-like', 'Fantasy', 'Difficult', 'Third-Person', 'Adventure', 'Atmospheric'],
    platforms: ['PC', 'PlayStation 4', 'PlayStation 5', 'Xbox One', 'Xbox Series X|S'],
    price: 59.99,
    imageUrl: '/images/elden-ring.jpg'
  },
  {
    id: 'wizard101',
    title: 'Wizard101',
    description: 'A fantasy MMORPG with card-based combat where players take on the role of students at the Ravenwood School of Magical Arts. Wizard101 is a multi-player online adventure game (aka MMORPG) fit for all ages. Developed by Kingsisle Entertainment Inc., Wizard101 first came online in 2008, allowing players to enter a magical universe known as the Spiral. Beginning their journey as a student wizard, players are able to battle monsters, train pets, tend to gardens, and explore new worlds in the adventure of the ages.',
    seller: 'KingsIsle Entertainment',
    releaseDate: 'September 2, 2008',
    genre: ['MMORPG', 'Card Game', 'Fantasy', 'Family-Friendly', 'Magic', 'PvE', 'PvP', 'Adventure', 'Turn-Based'],
    platforms: ['PC', 'Mac'],
    price: 0.00,
    imageUrl: '/images/wizard101.jpg'
  },
  {
    id: 'blade-and-soul',
    title: 'Blade and Soul',
    description: 'Blade & Soul is a Korean, Wuxia-themed massively multiplayer online role-playing game (aka MMORPG). Here, players are able to choose to be 1 of 4 magical races based on the 4 mythical beasts of Chinese mythology. Upon entering the world of Blade and Soul, players are able to explore an open world and complete quests, battle monsters, and raid dungeons with players from across the world.',
    seller: 'NCSoft',
    releaseDate: 'June 30, 2012',
    genre: ['MMORPG', 'Action', 'Martial Arts', 'Fantasy', 'PvP', 'Free to Play', 'Adventure', 'Character Customization'],
    platforms: ['PC'],
    price: 0.00,
    imageUrl: '/images/blade-and-soul.jpg'
  },
  {
    id: 'elsword',
    title: 'Elsword',
    description: 'Elsword is a Korean free-to-play, 2.5D side-scrolling action MMORPG. Players are able to choose from fourteen playable characters, each with their own unique backstories, abilities, and fighting styles. Elsword offers players the chance to fight monsters, battle other competitors, craft items, raise pets, and start guilds.',
    seller: 'KOG Studios',
    releaseDate: 'December 27, 2007',
    genre: ['MMORPG', 'Side-Scrolling', 'Action', 'Anime', 'Fighting', 'Fantasy', 'Free to Play', 'Multiplayer'],
    platforms: ['PC'],
    price: 0.00,
    imageUrl: '/images/elsword.jpg'
  },
  {
    id: 'smite-2',
    title: 'SMITE 2',
    description: 'SMITE 2 is the sequel game to the original SMITE. Both games are a free-to-play MMO fighting style games that allow players to engage in area style tournaments with other players, raid dungeons, and complete daily quests.',
    seller: 'Hi-Rez Studios',
    releaseDate: '2024',
    genre: ['MOBA', 'Action', 'Mythology', 'PvP', 'Third-Person', 'Team-Based', 'Strategy', 'Free to Play'],
    platforms: ['PC', 'PlayStation 4', 'PlayStation 5', 'Xbox One', 'Xbox Series X|S'],
    price: 0.00,
    imageUrl: '/images/smite-2.jpg'
  },
  {
    id: 'world-of-warcraft',
    title: 'World of Warcraft',
    description: 'World of Warcraft (WoW) is a subscription-based massively multiplayer online role-playing (MMORPG) video game where players explore the landscape, fight various monsters, complete quests, and interact with non-player characters (NPCs) or other players.',
    seller: 'Blizzard Entertainment',
    releaseDate: 'November 23, 2004',
    genre: ['MMORPG', 'Fantasy', 'Adventure', 'PvE', 'PvP', 'Role-Playing', 'Open World', 'Subscription'],
    platforms: ['PC', 'Mac'],
    price: 14.99,
    imageUrl: '/images/world-of-warcraft.jpg'
  },
  {
    id: 'fusionfall',
    title: 'FusionFall',
    description: 'Fusion Fall was Cartoon Network\'s first pay-to-play (eventually free-to-play) MMORPG. In this open-world game, players design their own characters and traverse a post-apocalyptic world containing every character created in Cartoon Network-produced shows. Here, players choose one of 1 4 storylines that will guide them through quests on their journey to save the world from an alien invasion started by the evil intergalactic tryan, Fuse.',
    seller: 'Cartoon Network',
    releaseDate: 'January 14, 2009',
    genre: ['MMORPG', 'Action', 'Adventure', 'Cartoon', 'Sci-Fi', 'Family-Friendly', 'Open World', 'Free to Play'],
    platforms: ['PC', 'Browser'],
    price: 0.00,
    imageUrl: '/images/fusionfall.jpg'
  },
  {
    id: 'pirate101',
    title: 'Pirate101',
    description: 'Pirate101 is the sophmoric release from Kingsisle Entertainment. Following the success of Wizard101, Pirate 101 is another massively multiplayer online role-playing game (MMORPG) developed set in the same fictional universe of the "Spiral". Here, rather than spells and sorcery, players are able to engage in swashbuckling adventures as a pirate, fighting as you explore the world and find mythical treasures.',
    seller: 'KingsIsle Entertainment',
    releaseDate: 'October 15, 2012',
    genre: ['MMORPG', 'Turn-based Strategy', 'Fantasy', 'Family-Friendly', 'Adventure', 'Pirates', 'PvE', 'PvP', 'Multiplayer'],
    platforms: ['PC', 'Mac', 'Browser'],
    price: 0.00,
    imageUrl: '/images/pirate101.jpg'
  },
  {
    id: 'grandchase',
    title: 'GrandChase',
    description: 'GrandChase Classic is a free side-scrolling online action RPG with anime inspired graphics. Enjoy exciting adventures in dungeons and PvP with 23 unique characters.',
    seller: 'KOG Studios',
    releaseDate: 'August 20, 2003',
    genre: ['MMORPG', 'Side-Scrolling', 'Action', 'Anime', 'Fantasy', 'PvP', 'Adventure', 'Multiplayer', 'Hack and Slash'],
    platforms: ['PC', 'Mobile', 'Browser'],
    price: 0.00,
    imageUrl: '/images/grandchase.jpg'
  },
  {
    id: 'club-penguin',
    title: 'Club Penguin',
    description: 'Club Penguine was one of Disney\'s most popular games, featuring a virtual world including a wide range of online games and activities. It was created by New Horizon Interactive (now known as Disney Canada Inc.). Players used cartoon penguin-avatars and played in an Antarctic-themed open world.',
    seller: 'Disney',
    releaseDate: 'October 24, 2005',
    genre: ['MMO', 'Social', 'Virtual World', 'Family-Friendly', 'Casual', 'Minigames', 'Educational', 'Adventure'],
    platforms: ['PC', 'Browser', 'Mac', 'Mobile'],
    price: 0.00,
    imageUrl: '/images/club-penguin.jpg'
  }
];

// Map specific genres to simplified general categories
const genreMappings = {
  // Action & Adventure group
  'Action': 'Action & Adventure',
  'Action RPG': 'Action & Adventure',
  'Beat \'em up': 'Action & Adventure',
  'FPS': 'Action & Adventure',
  'Tactical': 'Action & Adventure',
  'Fighting': 'Action & Adventure',
  'Martial Arts': 'Action & Adventure',
  'Hero Shooter': 'Action & Adventure',
  'Class-Based': 'Action & Adventure',
  'Battle Royale': 'Action & Adventure',
  'Shooter': 'Action & Adventure',
  'Adventure': 'Action & Adventure',
  'Open World': 'Action & Adventure',
  'Historical': 'Action & Adventure',
  'Post-Apocalyptic': 'Action & Adventure',
  'Third-Person': 'Action & Adventure',
  'First-Person': 'Action & Adventure',
  
  // RPG & Strategy group
  'RPG': 'RPG & Strategy',
  'MMORPG': 'RPG & Strategy',
  'Souls-like': 'RPG & Strategy',
  'Fantasy': 'RPG & Strategy',
  'Strategy': 'RPG & Strategy',
  'Real-time Tactics': 'RPG & Strategy',
  'Tower Defense': 'RPG & Strategy',
  'Turn-based': 'RPG & Strategy',
  'Turn-based Strategy': 'RPG & Strategy',
  'Management': 'RPG & Strategy',
  'Role-Playing': 'RPG & Strategy',
  
  // Simulation & Sports group
  'Simulation': 'Simulation & Sports',
  'Racing': 'Simulation & Sports',
  'Sports': 'Simulation & Sports',
  'Football': 'Simulation & Sports',
  'Design': 'Simulation & Sports',
  'Construction': 'Simulation & Sports',
  'God Game': 'Simulation & Sports',
  'Building': 'Simulation & Sports',
  'Driving': 'Simulation & Sports',
  
  // Casual & Family group
  'Casual': 'Casual & Family',
  'Puzzle': 'Casual & Family',
  'Word Game': 'Casual & Family',
  'Educational': 'Casual & Family',
  'Family-Friendly': 'Casual & Family',
  'Social': 'Casual & Family',
  'Virtual World': 'Casual & Family',
  'Minigames': 'Casual & Family',
  'Colorful': 'Casual & Family',
  
  // Horror & Thriller group
  'Horror': 'Horror & Thriller',
  'Psychological Horror': 'Horror & Thriller',
  'Survival': 'Horror & Thriller',
  'Dark Fantasy': 'Horror & Thriller',
  'Gore': 'Horror & Thriller',
  'Violent': 'Horror & Thriller',
  
  // Indie & Experimental group
  'Indie': 'Indie & Experimental',
  'Pixel Art': 'Indie & Experimental',
  'Roguelike': 'Indie & Experimental',
  'Deckbuilder': 'Indie & Experimental',
  'Card Game': 'Indie & Experimental',
  'Experimental': 'Indie & Experimental',
  'Meta': 'Indie & Experimental',
  
  // Multiplayer & Competitive group
  'Multiplayer': 'Multiplayer & Competitive',
  'Co-op': 'Multiplayer & Competitive',
  'PvP': 'Multiplayer & Competitive',
  'PvE': 'Multiplayer & Competitive',
  'MOBA': 'Multiplayer & Competitive',
  'MMO': 'Multiplayer & Competitive',
  'Team-Based': 'Multiplayer & Competitive',
  'Competitive': 'Multiplayer & Competitive',
  'eSports': 'Multiplayer & Competitive',
  
  // Creative & Sandbox group
  'Sandbox': 'Creative & Sandbox',
  'Creative': 'Creative & Sandbox',
  
  // Other genres
  'Dating Sim': 'Other',
  'Visual Novel': 'Other',
  'Sci-Fi': 'Other',
  'Comedy': 'Other',
  'Anime': 'Other',
  'Side-Scrolling': 'Other',
  'Bullet Hell': 'Other',
  'Cartoon': 'Other',
  'Escape Room': 'Other',
  'Puzzles': 'Other',
  'Mythology': 'Other',
  'Story Rich': 'Other',
  'Military': 'Other',
  'Western': 'Other',
  'Pirates': 'Other'
};

// Get general genre for a specific genre
export function getGeneralGenre(specificGenre) {
  return genreMappings[specificGenre] || 'Other';
}

// Get all general genres for a game
export function getGameGeneralGenres(game) {
  const generalGenres = new Set();
  game.genre.forEach(genre => {
    generalGenres.add(getGeneralGenre(genre));
  });
  return Array.from(generalGenres);
}

// RESTORE: Get game by ID function
export function getGameById(id) {
  return games.find(game => game.id === id);
}

// RESTORE: Get sorted games function with enhanced functionality
export function getSortedGames(sortType, games = getAllGames()) {
  return [...games].sort((a, b) => {
    switch (sortType) {
      case 'alphabetical':
        return a.title.localeCompare(b.title);
      case 'seller':
        return a.seller.localeCompare(b.seller);
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        // For games with just year, assume end of year
        const dateA = new Date(a.releaseDate);
        const dateB = new Date(b.releaseDate);
        return dateB - dateA;
      case 'oldest':
        const dateC = new Date(a.releaseDate);
        const dateD = new Date(b.releaseDate);
        return dateC - dateD;
      default:
        return a.title.localeCompare(b.title);
    }
  });
}

// RESTORE: Get all games function
export function getAllGames() {
  return games;
}

export function getFilteredGames(filters) {
  let filteredGames = games;
  
  if (filters.genre && filters.genre !== 'all') {
    filteredGames = filteredGames.filter(game => 
      // Check if any of the game's genres map to the selected general genre
      game.genre.some(g => getGeneralGenre(g) === filters.genre)
    );
  }
  
  if (filters.seller && filters.seller !== 'all') {
    filteredGames = filteredGames.filter(game => 
      game.seller.toLowerCase() === filters.seller.toLowerCase()
    );
  }
  
  if (filters.platform && filters.platform !== 'all') {
    filteredGames = filteredGames.filter(game => 
      game.platforms.some(p => p.toLowerCase() === filters.platform.toLowerCase())
    );
  }
  
  return filteredGames;
}

export function getUniqueGenres() {
  const generalGenres = new Set();
  games.forEach(game => {
    game.genre.forEach(genre => {
      const generalGenre = getGeneralGenre(genre);
      generalGenres.add(generalGenre);
    });
  });
  return Array.from(generalGenres).sort();
}

export function getUniqueSellers() {
  const sellers = new Set();
  games.forEach(game => {
    sellers.add(game.seller);
  });
  return Array.from(sellers).sort();
}

export function getUniquePlatforms() {
  const platforms = new Set();
  games.forEach(game => {
    game.platforms.forEach(platform => platforms.add(platform));
  });
  return Array.from(platforms).sort();
}