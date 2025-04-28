// Sample game data
const games = [
  {
    id: 'the-witcher-3',
    title: 'The Witcher 3: Wild Hunt',
    description: 'An action role-playing game set in an open world environment, focusing on the story of Geralt of Rivia.',
    seller: 'CD Projekt',
    releaseDate: 'May 19, 2015',
    genre: ['RPG', 'Open World', 'Action'],
    platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'],
    price: 39.99,
    imageUrl: '/images/witcher3.jpg'
  },
  {
    id: 'red-dead-redemption-2',
    title: 'Red Dead Redemption 2',
    description: 'A western-themed action-adventure game set in an open world environment, featuring both single-player and online multiplayer components.',
    seller: 'Rockstar Games',
    releaseDate: 'October 26, 2018',
    genre: ['Action', 'Adventure', 'Open World'],
    platforms: ['PC', 'PlayStation', 'Xbox'],
    price: 59.99,
    imageUrl: '/images/rdr2.jpg'
  },
  {
    id: 'minecraft',
    title: 'Minecraft',
    description: 'A sandbox video game focused on exploration, resource gathering, crafting, and building in a procedurally generated world. Minecraft was created by Mojang Studios in 2011. Minecraft is a widely popular sandbox game available on multiple platforms. Minecraft is currently rated 4.5/5.',
    seller: 'Mojang Studios',
    releaseDate: 'November 18, 2011',
    genre: ['Sandbox', 'Survival', 'Creative'],
    platforms: ['PC', 'Mobile', 'PlayStation', 'Xbox', 'Nintendo Switch'],
    price: 29.99,
    imageUrl: '/images/minecraft.jpg'
  },
  {
    id: 'horizon-zero-dawn',
    title: 'Horizon Zero Dawn',
    description: 'An action role-playing game set in a post-apocalyptic world dominated by robotic creatures.',
    seller: 'Sony Interactive Entertainment',
    releaseDate: 'February 28, 2017',
    genre: ['RPG', 'Action', 'Open World'],
    platforms: ['PC', 'PlayStation'],
    price: 49.99,
    imageUrl: '/images/horizon.jpg'
  },
  {
    id: 'halo-infinite',
    title: 'Halo Infinite',
    description: 'A first-person shooter game developed by 343 Industries and part of the Halo series.',
    seller: 'Xbox Game Studios',
    releaseDate: 'December 8, 2021',
    genre: ['FPS', 'Action', 'Sci-Fi'],
    platforms: ['PC', 'Xbox'],
    price: 59.99,
    imageUrl: '/images/halo.jpg'
  },
  {
    id: 'inscryption',
    title: 'Inscryption',
    description: 'Inscryption is a card game released on October 19, 2021. Published by Devolver Digital and created by Daniel Mullins Games; The game combines horror and deckbuilding to create an experience like no other. Lose yourself in the mystery the game offers, immerse yourself in the amazing story, and win with your wits and strategies.',
    seller: 'Daniel Mullins Games',
    releaseDate: 'October 19, 2021',
    genre: ['Psychological Horror', 'Deckbuilder', 'Roguelike', 'Escape Room', 'Puzzles'],
    platforms: ['PC'],
    price: 24.99,
    imageUrl: '/images/inscryption.jpg'
  },
  {
    id: 'sifu',
    title: 'Sifu',
    description: 'A kung fu action game following a young student on a path of revenge through the criminal underworld. Sifu is a game fueled by vengeance and an action fighting game. Released on February 6th, 2022, by Sloclap, Kepler Interactive, and Microids. This is a highly rated game with a rating of 4.5/5 stars.',
    seller: 'Sloclap',
    releaseDate: 'February 8, 2022',
    genre: ['Action', 'Martial Arts', 'Fighting'],
    platforms: ['PC', 'PlayStation'],
    price: 39.99,
    imageUrl: '/images/sifu.jpg'
  },
  {
    id: 'grand-turismo-7',
    title: 'Grand Turismo 7',
    description: 'A racing simulation game that combines the best features of the Gran Turismo series with stunning graphics and realistic physics. Grand Turismo 7 is a widely popular driving and racing game. This game is a real driving simulator that took 25 years to develop. This game is developed by Polyphony Digital Inc., released on March 4, 2022. This game is the 8th in the Grand Turismo series and is a PlayStation exclusive developed for the PlayStation 5.',
    seller: 'Sony Interactive Entertainment',
    releaseDate: 'March 4, 2022',
    genre: ['Racing', 'Simulation', 'Sports'],
    platforms: ['PlayStation'],
    price: 69.99,
    imageUrl: '/images/gt7.jpg'
  },
  {
    id: 'bookworm-adventures-vol-2',
    title: 'Bookworm Adventures Vol. 2',
    description: 'Bookworm Adventures Vol. 2 is a computer game created by PopCap Games. Released on July 30th, 2009, the game was a sequel to Bookworm Adventures. You play as Lex, the titular bookworm, who is the guardian of the great library. Join Lex on an adventure through books to defeat enemies with the power of spelling.',
    seller: 'PopCap Games',
    releaseDate: 'July 30, 2009',
    genre: ['Puzzle', 'Word Game', 'Educational'],
    platforms: ['PC'],
    price: 14.99,
    imageUrl: '/images/bookworm2.jpg'
  },
  {
    id: 'the-finals',
    title: 'The Finals',
    description: 'A free-to-play FPS game where players compete in a virtual combat gameshow with destructible environments. Its release date was December 7, 2023, but it was playable beforehand with closed alphas and open betas.',
    seller: 'Embark Studios',
    releaseDate: 'December 8, 2023',
    genre: ['FPS', 'Action', 'Battle Royale'],
    platforms: ['PC', 'PlayStation', 'Xbox'],
    price: 0.00,
    imageUrl: '/images/finals.jpg'
  },
  {
    id: 'star-wars-battlefront-ii',
    title: 'Star Wars Battlefront II',
    description: 'A multiplayer shooter set in the Star Wars universe featuring iconic characters and locations from all eras of the franchise. Star Wars Battlefront II is a widely popular game developed by DICE. The game was released in 2017, and it is currently rated 4.3/5. This game is based on the famous Star Wars franchise.',
    seller: 'Electronic Arts',
    releaseDate: 'November 17, 2017',
    genre: ['FPS', 'Action', 'Sci-Fi'],
    platforms: ['PC', 'PlayStation', 'Xbox'],
    price: 29.99,
    imageUrl: '/images/battlefront2.jpg'
  },
  {
    id: 'marvel-rivals',
    title: 'Marvel Rivals',
    description: 'A team-based competitive hero shooter featuring characters from the Marvel universe with unique abilities and team synergies. Marvel Rivals is a 3rd-person hero shooter game. This game was released fairly recently on December 6th, 2024. This game has 3.6/5 stars.',
    seller: 'NetEase Games',
    releaseDate: '2024',
    genre: ['Hero Shooter', 'Action', 'Multiplayer'],
    platforms: ['PC', 'PlayStation', 'Xbox'],
    price: 49.99,
    imageUrl: '/images/marvel-rivals.jpg'
  },
  {
    id: 'assassins-creed-origins',
    title: "Assassin's Creed Origins",
    description: 'Assassin\'s Creed Odyssey is an action RPG game first released in 2018 by Ubisoft. It is the 11th game in the Assassin\'s Creed series, a successor to the successful Assassin\'s Creed Origins. Currently has positive reviews, 4.5/5 stars. This game is based on Greek Mythology.',
    seller: 'Ubisoft',
    releaseDate: 'October 27, 2017',
    genre: ['Action', 'Adventure', 'Open World', 'Historical'],
    platforms: ['PC', 'PlayStation', 'Xbox'],
    price: 49.99,
    imageUrl: '/images/ac-origins.jpg'
  },
  {
    id: 'assassins-creed-odyssey',
    title: "Assassin's Creed Odyssey",
    description: 'Assassin\'s Creed Origins is an action RPG game released by Ubisoft in 2017. It is the 10th game in the Assassin\'s Creed series, the successor to Assassin\'s Creed Syndicate. The game is heavily influenced by Egyptian mythology. It has positive reviews of 4.5/5 stars.',
    seller: 'Ubisoft',
    releaseDate: 'October 5, 2018',
    genre: ['RPG', 'Action', 'Open World', 'Historical'],
    platforms: ['PC', 'PlayStation', 'Xbox'],
    price: 59.99,
    imageUrl: '/images/ac-odyssey.jpg'
  },
  {
    id: 'fallout-new-vegas',
    title: 'Fallout: New Vegas',
    description: 'Fallout: New Vegas is considered to be the magnum opus of the Fallout games. Developed by Obsidian Entertainment, we travel the Mojave Desert to find the man who shot us in the head. An incredible adventure throughout.',
    seller: 'Obsidian Entertainment',
    releaseDate: 'October 19, 2010',
    genre: ['RPG', 'Open World', 'Post-Apocalyptic'],
    platforms: ['PC', 'PlayStation', 'Xbox'],
    price: 19.99,
    imageUrl: '/images/fallout-new-vegas.jpg'
  },
  {
    id: 'darkest-dungeon',
    title: 'Darkest Dungeon',
    description: 'Darkest Dungeon is a challenging game created by Red Hook Studios. Take on horrors beyond your comprehension as a collection of heroes dungeon-crawling to fight off evil.',
    seller: 'Red Hook Studios',
    releaseDate: 'January 19, 2016',
    genre: ['RPG', 'Roguelike', 'Turn-based', 'Horror'],
    platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'],
    price: 24.99,
    imageUrl: '/images/darkest-dungeon.jpg'
  },
  {
    id: 'house-flipper',
    title: 'House Flipper',
    description: 'House Flipper gives you the skills to design your own and others\' houses. Take on jobs where people ask you to clean, demolish, paint, and furnish their houses. Earn money to do this for your own properties!',
    seller: 'Frozen District',
    releaseDate: 'May 17, 2018',
    genre: ['Simulation', 'Design', 'Construction'],
    platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'],
    price: 29.99,
    imageUrl: '/images/house-flipper.jpg'
  },
  {
    id: 'f1-25',
    title: 'F1 25',
    description: 'F1 25 is a racing game developed by Codemasters. It is the 18th installment in the F1 series. This game is not yet rated and is set to release on May 30th, 2025.',
    seller: 'Codemasters',
    releaseDate: 'May 30, 2025',
    genre: ['Racing', 'Simulation', 'Sports'],
    platforms: ['PC', 'PlayStation', 'Xbox'],
    price: 69.99,
    imageUrl: '/images/f1-25.jpg'
  },
  {
    id: 'fc25',
    title: 'FC25',
    description: 'FC 25 is developed by EA Sports and was released on September 27, 2024. It is the 32nd installment of EA\'s very popular football simulation games. FC25 is currently rated 3.4/5 on PlayStation.',
    seller: 'EA Sports',
    releaseDate: 'September 27, 2024',
    genre: ['Sports', 'Football', 'Simulation'],
    platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'],
    price: 69.99,
    imageUrl: '/images/fc25.jpg'
  },
  {
    id: 'college-football-25',
    title: 'College Football 25',
    description: 'This is a very popular game after eleven years of waiting fans finally are able to enjoy the second installment in EA Sports college football simulation game. It is currently reviewed a 3.86 on Playstation.',
    seller: 'EA Sports',
    releaseDate: 'July 19, 2024',
    genre: ['Sports', 'Football', 'Simulation'],
    platforms: ['PlayStation', 'Xbox'],
    price: 69.99,
    imageUrl: '/images/college-football-25.jpg'
  },
  {
    id: 'call-of-duty-black-ops-6',
    title: 'Call of Duty: Black Ops 6',
    description: 'Call of Duty: Black Ops 6 is a first-person shooter game published by Activision. It is the 21st installment of the Call of Duty franchise. It is currently reviewed 4/5 on PlayStation.',
    seller: 'Activision',
    releaseDate: 'October 25, 2024',
    genre: ['FPS', 'Action', 'Multiplayer'],
    platforms: ['PC', 'PlayStation', 'Xbox'],
    price: 69.99,
    imageUrl: '/images/call-of-duty-black-ops-6.jpg'
  },
  {
    id: 'ready-or-not',
    title: 'Ready or Not',
    description: 'Ready or Not makes your hands shake. You play as a SWAT officer going through your choice of map, attempting to subdue a slew of baddies with grounded and unforgiving combat.',
    seller: 'VOID Interactive',
    releaseDate: 'December 13, 2021',
    genre: ['FPS', 'Tactical', 'Simulation', 'Action'],
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
    genre: ['Puzzle', 'Casual', 'Action'],
    platforms: ['PC', 'Mobile'],
    price: 9.99,
    imageUrl: '/images/zumas-revenge.jpg'
  },
  {
    id: 'lethal-company',
    title: 'Lethal Company',
    description: 'Lethal Company is a goofy co-op horror game where you team up with a crew to scavenge scrap while avoiding scary monsters.',
    seller: 'Zeekerss',
    releaseDate: 'October 23, 2023',
    genre: ['Horror', 'Co-op', 'Indie', 'Survival'],
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
    genre: ['Tower Defense', 'Strategy', 'Casual'],
    platforms: ['PC', 'Mobile', 'Xbox', 'PlayStation'],
    price: 14.99,
    imageUrl: '/images/plants-vs-zombies.jpg'
  },
  {
    id: 'spore',
    title: 'Spore',
    description: 'Spore lets you play god and create a species from scratch. You then watch them evolve from bacteria into space-faring civilizations.',
    seller: 'Maxis',
    releaseDate: 'September 4, 2008',
    genre: ['Simulation', 'Strategy', 'God Game'],
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
    genre: ['MMO', 'Bullet Hell', 'Roguelike', 'Pixel Art'],
    platforms: ['PC'],
    price: 0.00,
    imageUrl: '/images/realm-of-the-mad-god.jpg'
  },
  {
    id: 'team-fortress-2',
    title: 'Team Fortress 2',
    description: 'Team Fortress 2 is an eccentric class-based shooter that has redefined the shooter genre and has a cult following. Take part in the useless war for land by being one of the nine "professionals" and blow opponents to bits.',
    seller: 'Valve',
    releaseDate: 'October 10, 2007',
    genre: ['FPS', 'Class-Based', 'Multiplayer', 'Action'],
    platforms: ['PC'],
    price: 0.00,
    imageUrl: '/images/team-fortress-2.jpg'
  },
  {
    id: 'total-war-shogun-2',
    title: 'Total War: SHOGUN 2',
    description: 'Total War: SHOGUN 2 takes place during Japan\'s tumultuous civil war. Choose a real-life clan to control mass armies, and watch them fight in real time!',
    seller: 'SEGA',
    releaseDate: 'March 15, 2011',
    genre: ['Strategy', 'Real-time Tactics', 'Historical'],
    platforms: ['PC'],
    price: 29.99,
    imageUrl: '/images/total-war-shogun-2.jpg'
  },
  {
    id: 'two-point-hospital',
    title: 'Two Point Hospital',
    description: 'Two Point Hospital gives you the ability to build your cartoony hospital. Manage staff, treat patients, get money!',
    seller: 'Two Point Studios',
    releaseDate: 'August 29, 2018',
    genre: ['Simulation', 'Management', 'Building', 'Comedy'],
    platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'],
    price: 34.99,
    imageUrl: '/images/two-point-hospital.jpg'
  },
  {
    id: 'yakuza-0',
    title: 'YAKUZA 0',
    description: 'Yakuza 0 is a prequel to the legendary series, where you play as two characters steeped in Japan\'s crime world. Beat up foes and uncover the mystery.',
    seller: 'SEGA',
    releaseDate: 'January 24, 2017',
    genre: ['Action', 'Adventure', 'Open World', 'Beat \'em up'],
    platforms: ['PC', 'PlayStation', 'Xbox'],
    price: 19.99,
    imageUrl: '/images/yakuza-0.jpg'
  },
  {
    id: 'warhammer-40000-darktide',
    title: 'Warhammer 40,000: Darktide',
    description: 'Warhammer Darktide lets you play as losers. But not just any losers, losers who will mow down hordes of corrupted entities with only the greatest weapons the emperor offers',
    seller: 'Fatshark',
    releaseDate: 'November 30, 2022',
    genre: ['FPS', 'Co-op', 'Action', 'Sci-Fi'],
    platforms: ['PC', 'Xbox'],
    price: 39.99,
    imageUrl: '/images/warhammer-40000-darktide.jpg'
  },
  {
    id: 'doki-doki-literature-club',
    title: 'Doki Doki Literature Club',
    description: 'Doki Doki Literature Club is full of cute girls! This game is not suitable for children or those who are usually disturbed.',
    seller: 'Team Salvato',
    releaseDate: 'September 22, 2017',
    genre: ['Visual Novel', 'Psychological Horror', 'Dating Sim'],
    platforms: ['PC'],
    price: 0.00,
    imageUrl: '/images/doki-doki-literature-club.jpg'
  },
  {
    id: 'elden-ring',
    title: 'Elden Ring',
    description: 'Elden Ring is a critically acclaimed fantasy action RPG. Become a legendary warrior and defeat powerful bosses after navigating through FromSoftware\'s iconic game design.',
    seller: 'FromSoftware',
    releaseDate: 'February 25, 2022',
    genre: ['Action RPG', 'Open World', 'Souls-like', 'Fantasy'],
    platforms: ['PC', 'PlayStation', 'Xbox'],
    price: 59.99,
    imageUrl: '/images/elden-ring.jpg'
  }
];

export function getAllGames() {
  return games;
}

export function getGameById(id) {
  return games.find(game => game.id === id);
}

export function getSortedGames(sortType) {
  return [...games].sort((a, b) => {
    if (sortType === 'alphabetical') {
      return a.title.localeCompare(b.title);
    } else {
      return a.seller.localeCompare(b.seller);
    }
  });
}