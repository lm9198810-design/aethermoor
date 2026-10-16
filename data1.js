/* ============================================================
   AETHERMOOR — WORLD DATABASE
   The Chronicle of the Sundered Realm
   ============================================================ */

const WORLD_META = {
  worldName: "Vaelthar",
  continent: "Aethermoor",
  currentEra: "The Ash Age",
  currentYear: 402,
  tagline: "Where gods have fallen and left their thrones empty.",
  summary: "Aethermoor is a continent upon the sphere of Vaelthar — a world torn open a thousand years ago when the gods made war upon each other and the sky itself was cracked.",
  calendar: "Years are counted from the Sundering. 'S.A.' = Since Ash. 'B.S.' = Before Sundering."
};

/* ============================================================
   1. WORLD OVERVIEW TILES
   ============================================================ */
const WORLD_TILES = [
  {
    icon: "🌍",
    title: "One Continent, Seven Nations",
    desc: "Aethermoor spans three million square miles. From the frozen north to the burning south, seven races carve out their existence on land that still remembers divine fire.",
    statLabel: "Landmass",
    statValue: "3.2M mi²"
  },
  {
    icon: "⚔️",
    title: "A Thousand Years of Ash",
    desc: "Since the Sundering, no fewer than forty-two wars have been fought over the ruins of heaven. Twelve have ended in genocide. The rest ended in stalemate.",
    statLabel: "Recorded Wars",
    statValue: "42"
  },
  {
    icon: "🕯️",
    title: "The Fading Gods",
    desc: "Of the thirty-seven gods who once walked Vaelthar, only nine are confirmed alive. Eleven are confirmed dead. The rest are... unaccounted for.",
    statLabel: "Gods Remaining",
    statValue: "9 / 37"
  },
  {
    icon: "📜",
    title: "The Forbidden Histories",
    desc: "Every victor rewrites the past. Beneath the official chronicles lie banned texts, burned libraries, and the testimony of the dead — preserved in stone and bone.",
    statLabel: "Banned Texts",
    statValue: "1,247"
  },
  {
    icon: "🗡️",
    title: "The Age of Ambition",
    desc: "Thrones sit empty. Crowns are cheap. A peasant can rise to emperor with enough blood and enough luck. Most die trying.",
    statLabel: "Successful Usurpations",
    statValue: "88"
  },
  {
    icon: "🌑",
    title: "The Returning Dark",
    desc: "Something stirs beneath the Ashen Wastes. Ancient. Patient. Hungry. The scholars call it superstition. The soldiers on the border call it the end.",
    statLabel: "Border Incidents",
    statValue: "+340%"
  }
];

/* ============================================================
   2. THE SEVEN RACES
   ============================================================ */
const RACES = [
  {
    id: "aeldrin",
    name: "Aeldrin",
    epithet: "The Firstborn of the Silver Wood",
    category: "elven",
    icon: "🌙",
    shortDesc: "The ageless lords of the Silver Wood, whose memories stretch back before the Sundering and whose pride outlasts their dying bloodline.",
    traits: ["Ageless", "Silver-blooded", "Arcanists", "Ancient"],
    fullDesc: "The Aeldrin were the first race blessed by the goddess Aelith, granted immortality and an unbroken connection to the arcane weave. For five thousand years they ruled Aethermoor as philosopher-kings, building cities of crystal and starlight in the Silver Wood. They were the keepers of the runes, the interpreters of prophecy, and the self-appointed wardens of the world. But immortality is a curse disguised as a gift: the Aeldrin have forgotten how to change. They have forgotten how to hope. And now, three millennia after Aelith's death at the Sundering, they are quietly dying out — not from war or plague, but from the simple, devastating fact that no Aeldrin child has been born in four hundred years. They do not know why. Their scholars have theories. Their priests have prayers. None have answers.",
    secret: "The Aeldrin are not dying from natural causes. Their goddess, Aelith, still lives — imprisoned beneath the Silver Wood by her own children, who feared her judgment. As long as she remains bound, the Aeldrin are sterile. They have imprisoned their own salvation.",
    stats: {
      lifespan: "Immortal",
      population: "~40,000",
      homeland: "The Silver Wood",
      capital: "Aelthalas, the Crystal Throne",
      alignment: "Lawful Neutral",
      magicAffinity: "Runes, Breathweaving"
    },
    culture: "The Aeldrin believe in a rigid caste system called the Ladder of Stars, with the Highborn at the top, the Lowborn at the bottom, and the Silverless (those born without arcane sight) condemned to servitude. Their art is bound in rules. Their music is mathematical. Their architecture is frozen in amber. They have not produced a truly new piece of art in seven hundred years.",
    notable: ["Seraphine Vaelor", "Lord Arathor", "The Silent Council"]
  },
  
  {
    id: "draekon",
    name: "Draekon",
    epithet: "The Dragon-Blooded",
    category: "human",
    icon: "🐉",
    shortDesc: "Descendants of the first mortal who dared to love a dragon. Their blood carries fire, and their fate is to one day burn in it.",
    traits: ["Fire-blooded", "Warriors", "Clan-bound", "Cursed"],
    fullDesc: "The Draekon are the descendants of Aeryn the Bold, a mortal warrior who — according to the Songs of Fire — lay with the great dragon Vharenth and bore his children. For this transgression, the gods cursed her line: every seventh generation, one Draekon would undergo the Changing — a slow, agonizing transformation into a dragon. The curse has held for over ten thousand years. The Draekon have learned to revere it. Their culture is built around fire, honor, and clan. They live in the Dragon's Reach, a volcanic peninsula in the southeast, where they train from birth to fight, to ride, and to die with dignity. They are feared by every other race, and they know it.",
    secret: "The Changing is not a curse. It is a gift the gods stole and inverted out of jealousy. The Draekon who undergo the Changing become true dragons — immortal, powerful, and free. The gods feared the Draekon would rise above them. The prophecy of the Last Dragon refers to the first Draekon who will choose the Changing willingly.",
    stats: {
      lifespan: "70-120 years (200+ for dragons)",
      population: "~380,000",
      homeland: "The Dragon's Reach",
      capital: "Kael'Dorath, the Ashen Citadel",
      alignment: "Chaotic Neutral",
      magicAffinity: "Bloodfire, Breathweaving"
    },
    culture: "Draekon society is organized into seven Great Clans, each named after an aspect of the flame: Ember, Cinder, Ash, Smoke, Blaze, Forge, and Wyrm. Marriage between clans is common and political. Duels are frequent and often fatal. Their poetry is short, brutal, and beautiful. They do not believe in an afterlife; they believe in being remembered by fire.",
    notable: ["Aeryn the Bold (legendary)", "Chieftainess Vexa Cinderborn", "The Ashborn Prince"]
  },
  
  {
    id: "karathi",
    name: "Karathi",
    epithet: "The Ice-Blooded",
    category: "human",
    icon: "⚔️",
    shortDesc: "Hard as the glaciers they call home, the Karathi believe in only one law: survival. Everything else is a distraction from the cold.",
    traits: ["Cold-adapted", "Clan-based", "Fierce", "Pragmatic"],
    fullDesc: "The Karathi are the survivors of the Frostspine — a mountain range so cold that it kills an unprepared traveler in minutes. They were not always mountain-dwellers. Before the Sundering, they were a peaceful agrarian people of the Sunlit Plains. When the gods fell, their lands burned, and they fled north. The cold did not kill them. It forged them. Three thousand years later, the Karathi are the most feared warrior culture in Aethermoor. They do not conquer; they simply do not die. Their warriors can march for three days without sleep, fight in blizzards that kill lesser men, and survive wounds that would end an Aeldrin. They have never lost a defensive war.",
    secret: "The Karathi did not flee the Sundering north out of desperation. They were led north by a dead god — Vorthal, the Silent Watcher — who still sleeps beneath the Frostspine. Every Karathi chieftain knows this. Every Karathi chieftain has, at least once, spoken with Vorthal in dreams. They are the only race that still has a direct line to a living god.",
    stats: {
      lifespan: "60-90 years",
      population: "~500,000",
      homeland: "The Frostspine",
      capital: "Hrotha's Rest, the Winterhold",
      alignment: "True Neutral",
      magicAffinity: "Breathweaving, Runes (rare)"
    },
    culture: "Karathi society is organized around the Long Winter — a shared ordeal every seven years when the clans gather and test their strongest warriors against the mountains. Those who survive become Thanes. Those who die are remembered in song. Their funeral rites involve feeding the body to the Frostspine's wolves — a final act of returning to the land. Marriage is for life, and divorce is punishable by exile.",
    notable: ["Thane Ironheart", "The Ice-Queen Helka", "Bjorn the Unbroken"]
  },
  
  {
    id: "vordrim",
    name: "Vordrim",
    epithet: "The Ash-Clans",
    category: "human",
    icon: "🪓",
    shortDesc: "Once called orcs, once called monsters. Now they call themselves the Vordrim — and they will not be called anything else.",
    traits: ["Strong", "Honor-bound", "Tribal", "Spiritual"],
    fullDesc: "The Vordrim were created — not born — by the war-god Karok as soldiers in the divine wars. When Karok fell at the Sundering, his creations were left without purpose. The other races called them orcs, savages, monsters. They were hunted. They were enslaved. For three hundred years they were less than animals. Then came Grunna Ironbound, the first Chieftain, who led a rebellion that shattered three human kingdoms and carved the Ash-Clans out of the eastern plains. The Vordrim have never forgiven. They have never forgotten. And they have never stopped being warriors.",
    secret: "The Vordrim carry a book — the Karoknul — written in the language of the gods themselves. It contains the secret of their creation and, more importantly, the method by which Karok might be resurrected. Every Vordrim Chieftain guards a fragment. None can read it. If the fragments are ever assembled and translated, the god of war will return — and he will not be pleased with what his children have become.",
    stats: {
      lifespan: "50-70 years",
      population: "~600,000",
      homeland: "The Ashen Wastes (eastern)",
      capital: "Grunna's Anvil, the Iron City",
      alignment: "Lawful Neutral",
      magicAffinity: "Breathweaving, Runes (rare)"
    },
    culture: "Vordrim society is clan-based, with seven Great Clans: Ironbound, Stonefist, Bloodaxe, Skycaller, Emberforge, Doomhowl, and Nightwarden. Every Vordrim is expected to be a warrior, but also a craftsman. Their smiths are legendary. Their architecture is brutal and beautiful. They have no concept of racial superiority — they judge only by action. A human who proves themselves can be adopted into a clan.",
    notable: ["Grunna Ironbound (legendary)", "Warchief Morag Bloodaxe", "The Silent Smith"]
  },
  
  {
    id: "sylvaar",
    name: "Sylvaar",
    epithet: "The Shadowed Kin",
    category: "elven",
    icon: "🕷️",
    shortDesc: "Elves who chose the dark over death, and have paid for it every day since.",
    traits: ["Shadow-bound", "Cunning", "Underground", "Secretive"],
    fullDesc: "The Sylvaar were once Aeldrin — the second-born of the goddess Aelith, given to the shadows so that the firstborn might keep the light. For ten thousand years they served as spies, assassins, and secret-keepers. When the Sundering came, the Sylvaar did what they always did: they survived. They fled into the depths of the world, where light never reaches, and there they built cities of obsidian and bone. But the dark demands a price. The Sylvaar have become something else. Their eyes have adjusted. Their skin has paled. Their souls have dimmed. They do not remember the sun.",
    secret: "The Sylvaar Queen, Maelith the Ever-Living, is dead. She has been dead for three hundred years. But her body still sits on the Obsidian Throne, animated by a spell that her courtiers renew every night. No Sylvaar knows this. The spell is maintained by a single surviving son of Maelith, who has gone mad with the effort. When he dies — and he is dying — the Queen will collapse, and the Sylvaar will have no ruler, no purpose, and no light.",
    stats: {
      lifespan: "Immortal (but rarely reaches 500)",
      population: "~90,000",
      homeland: "The Shadowmere Depths",
      capital: "Ondrath, the Throne of Bone",
      alignment: "Neutral Evil",
      magicAffinity: "Voidwalking, Runes"
    },
    culture: "Sylvaar society is a web of secrets, favors, and debts. Everyone owes someone. Everyone is owed by someone. Titles are meaningless; leverage is everything. They have no written history — the past is passed down orally, and often changed in the telling. Their art is beautiful and disturbing: sculptures of living flesh, music that induces hallucinations, poetry that is technically impossible to translate.",
    notable: ["Maelith the Ever-Living", "Lord Vexar", "The Whisperer"]
  },
  
  {
    id: "kemiiri",
    name: "Kemiiri",
    epithet: "The Beastfolk",
    category: "beast",
    icon: "🦊",
    shortDesc: "Neither human nor beast, and hated by both. The Kemiiri have learned that the only law that matters is the one you write yourself.",
    traits: ["Beast-blooded", "Adaptable", "Outcast", "Cursed"],
    fullDesc: "The Kemiiri are the descendants of an ancient magical experiment — the attempt by a long-dead sorcerer-king to create the perfect soldiers by grafting beast-spirits onto human souls. The experiment succeeded. The soldiers were perfect. Then they turned on their creator, and the world turned on them. For seven thousand years the Kemiiri have been hunted, enslaved, and exterminated by every other race. They have survived because they are adaptable: each Kemiiri manifests a different beast-aspect at birth, giving them unique abilities. Some have wolf-like senses. Some have cat-like agility. Some have bird-like sight. They have no homeland. They have no capital. They have only each other.",
    secret: "The Kemiiri carry a dormant plague — the Beast-Curse — that they cannot transmit to each other but can transmit to all other races. It has never been activated. But the sorcerer-king's death-spell, woven into their blood, is designed to activate when the Kemiiri population drops below one thousand. They are currently at fourteen hundred. The Kemiiri elders know this. They have never told their young. They are running out of time.",
    stats: {
      lifespan: "40-60 years",
      population: "~1,400 (estimates vary)",
      homeland: "Scattered",
      capital: "None",
      alignment: "Chaotic Neutral",
      magicAffinity: "Breathweaving, Bloodfire (rare)"
    },
    culture: "The Kemiiri have no unified culture, only the shared experience of persecution. They organize into 'Packs' — temporary family units that form and dissolve as needed. They have a rich oral tradition of songs about survival, escape, and revenge. Their tattoos are not decorative — they record every escape, every rescue, every loss. A Kemiiri's skin is their autobiography.",
    notable: ["Nyx the Shadow-Speaker", "Old Sable", "The Grey Pack"]
  },
  
  {
    id: "halfborn",
    name: "Halfborn",
    epithet: "The God-Touched",
    category: "divine",
    icon: "👁️",
    shortDesc: "The children of gods and mortals. Powerful beyond measure. Broken beyond repair. And hunted by both heaven and earth.",
    traits: ["Divine-blood", "Cursed", "Powerful", "Hunted"],
    fullDesc: "The Halfborn are what happens when a god loves a mortal — or uses one. Their blood is divine; their flesh is mortal. This contradiction tears them apart. A Halfborn child is born with power that would take a mortal wizard decades to achieve. They can shatter stone with a word, walk through fire, see the future in dreams. But every Halfborn carries a Flaw — a unique weakness that grows with their power. Some can be killed by water. Some lose their memories every year. Some hear the thoughts of everyone around them, forever, without relief. The gods do not acknowledge them. The mortals fear them. There are perhaps fifty Halfborn alive. Most are dead by forty.",
    secret: "The Halfborn are not accidents. They are the gods' only way back into the world. Every Halfborn carries a fragment of their divine parent's essence. If enough Halfborn were to die in one place, at one time, in the right ritual — the parent god could be reborn. The gods know this. Some Halfborn suspect it. None have been willing to test it.",
    stats: {
      lifespan: "20-60 years (rarely longer)",
      population: "~50",
      homeland: "None",
      capital: "None",
      alignment: "Any",
      magicAffinity: "All schools"
    },
    culture: "There is no Halfborn culture. There are only individual Halfborn, each alone with their power and their Flaw. Some are worshipped as saints. Some are hunted as demons. Some become kings. Most become corpses. The only thing they share is a secret society called the Wounded Choir — an underground network that tries to protect Halfborn children and, when possible, kill the gods who abandoned them.",
    notable: ["Kaelen Vareth (the Ashborn Prince)", "The Blind Oracle", "The Wounded Choir"]
  }
];

/* ============================================================
   3. THE FIVE SCHOOLS OF MAGIC
   ============================================================ */
const MAGIC_SCHOOLS = [
  {
    id: "breathweaving",
    name: "Breathweaving",
    tag: "The Common Art",
    icon: "🜁",
    color: "#6ba8c9",
    desc: "Breathweaving is the most widely practiced form of magic in Aethermoor, and the most misunderstood. It draws upon the Breath — the fundamental life-force that animates all living things. Every creature has a finite reserve of Breath. Breathweaving spends it. A simple spell might cost an hour of life. A great spell might cost a decade. Those who weave recklessly age prematurely, sicken, and die. Those who weave wisely can extend their lives — a secret the Aeldrin guard jealously.",
    source: "Life-force (Breath)",
    cost: "Aging, exhaustion, and ultimately death",
    users: "Everyone (except Sylvaar)",
    difficulty: "Low to master, high to use well",
    combatUse: "Wards, healing, elemental manipulation",
    culturalNote: "In most cultures, Breathweaving is taught alongside literacy. It is considered a basic life skill.",
    notablePractitioners: ["Almost every wizard in Aethermoor", "Field medics", "Battle-mages"]
  },
  
  {
    id: "runecraft",
    name: "Runecraft",
    tag: "The Forbidden Art",
    icon: "ᛟ",
    color: "#c9a227",
    desc: "Runecraft is the art of writing reality. It uses the Old Script — the language of the gods — to inscribe commands directly into the fabric of Vaelthar. A rune carved into stone will obey forever. A rune carved into flesh will obey until the flesh dies. A rune carved into air will obey for a heartbeat — long enough to change everything. The Aeldrin discovered Runecraft and, for five thousand years, kept it secret. Then the Sylvaar stole it. Now every race has at least one rune-master. The gods, if they were still alive, would be furious.",
    source: "The Old Script (language of the gods)",
    cost: "Memory, identity, and sometimes sanity",
    users: "Aeldrin, Sylvaar, a few humans",
    difficulty: "Extremely high",
    combatUse: "Traps, enchantment, permanent effects",
    culturalNote: "Reading the Old Script is punishable by death in most human kingdoms. The Aeldrin consider it a capital crime.",
    notablePractitioners: ["Seraphine Vaelor", "The Silent Council", "The Whisperer"]
  },
  
  {
    id: "bloodfire",
    name: "Bloodfire",
    tag: "The Burning Art",
    icon: "🔥",
    color: "#b52a2a",
    desc: "Bloodfire is the magic of sacrifice. It draws upon the heat of life itself — the fire that burns in the blood of every living creature. To cast a Bloodfire spell, a practitioner must burn a part of themselves: a memory, a year of life, a piece of their soul. The flames are hotter than any mundane fire. They cannot be extinguished by water. They leave wounds that never heal. Bloodfire was invented by the Draekon, who consider it sacred. The other races consider it abomination. Both are correct.",
    source: "The fire within living blood",
    cost: "Permanent damage to body, mind, or soul",
    users: "Draekon, some Kemiiri, rare humans",
    difficulty: "Moderate to learn, catastrophic to master",
    combatUse: "Destruction, immolation, healing (paradoxically)",
    culturalNote: "Bloodfire is technically illegal in every kingdom except the Dragon's Reach. In practice, it is used everywhere.",
    notablePractitioners: ["Aeryn the Bold (legendary)", "The Ashborn Prince", "Vexa Cinderborn"]
  },
  
  {
    id: "voidwalking",
    name: "Voidwalking",
    tag: "The Hollow Art",
    icon: "◈",
    color: "#6d4fa8",
    desc: "Voidwalking is the art of stepping sideways into the spaces between spaces. It is not teleportation — teleportation implies destination. Voidwalking is movement through the Void, the empty dark that exists behind reality. A skilled Voidwalker can appear anywhere they have previously marked, can hide in plain sight, can step out of time for a heartbeat. The price is the Void itself. Every Voidwalking calls a little more of the Void into the walker's soul. Eventually, the walker becomes... hollow. Silent. Absent. The Sylvaar call this the Long Shadow, and they consider it a sacred death.",
    source: "The Void (the space between worlds)",
    cost: "Gradual erasure of the self",
    users: "Sylvaar, some Halfborn",
    difficulty: "High (requires innate affinity)",
    combatUse: "Assassination, stealth, escape",
    culturalNote: "The Sylvaar are the only race that practices Voidwalking openly. They consider the Long Shadow a form of immortality.",
    notablePractitioners: ["The Whisperer", "Nyx the Shadow-Speaker", "The Blind Oracle"]
  },
  
  {
    id: "songofstars",
    name: "Song of Stars",
    tag: "The Divine Art",
    icon: "✦",
    color: "#e8c547",
    desc: "The Song of Stars is the oldest magic in Vaelthar. Before the gods, there was the Song — the music that sang the world into being. It is not a magic that can be learned. It is a magic that can only be remembered. A practitioner of the Song must find, within themselves, a fragment of the original music. Once found, the fragment can be developed, extended, harmonized. The Song can heal. It can create. It can, if sung correctly, unmake reality itself. It is also the magic the gods feared most — because it is the only magic that can kill them.",
    source: "The primordial Song",
    cost: "The singer's voice, gradually, and then permanently",
    users: "Almost none — perhaps a dozen worldwide",
    difficulty: "Impossible to teach",
    combatUse: "Reality manipulation, divine banishment, creation",
    culturalNote: "The Song of Stars is myth to most. Only the Aeldrin and the oldest Vordrim shamans remember it as anything more.",
    notablePractitioners: ["The Blind Oracle", "The Forgotten Sage", "The first Aeldrin"]
  }
];

/* ============================================================
   4. THE THREE LAWS OF MAGIC
   ============================================================ */
const MAGIC_LAWS = [
  {
    num: "I",
    title: "The Law of Price",
    desc: "Every spell cast draws from a source. That source must be paid. Breath is spent. Memory is erased. Blood is burned. The Void is entered. There is no free magic in Aethermoor. Those who believe otherwise are the ones who die first."
  },
  {
    num: "II",
    title: "The Law of Echo",
    desc: "Every spell leaves an echo — a permanent mark on the world. A healing spell leaves a faint scar. A fire spell leaves a patch of dead soil. A resurrection leaves a hole in the fabric of fate. The more powerful the spell, the deeper the echo. The oldest mages leave trails of ruin behind them."
  },
  {
    num: "III",
    title: "The Law of Silence",
    desc: "Magic cannot create something from nothing. It can only move, transform, or destroy. Those who claim to create — the gods, the halfborn, the legendary mages — are not creating. They are remembering a time before the rules. And the world is still paying the debt."
  }
];

/* ============================================================
   5. THE GREAT HOUSES
   ============================================================ */
const HOUSES = [
  {
    name: "House Vareth",
    sigil: "🦅",
    color: "#7a1a1a",
    seat: "The Spire of Ashes, Northern Reaches",
    region: "The Stormlands",
    motto: "From ash, we rise.",
    desc: "The oldest human noble house in Aethermoor — older than the Sundering, older than the kingdoms. House Vareth claims descent from the mortal general who first unified the human tribes after the gods fell. They rule the Stormlands from the Spire of Ashes, a fortress carved into a volcanic cliff. Their words are ominous, and their history supports them: the House has nearly fallen three times, and risen four.",
    role: "Warden of the North, Keeper of the Northern Gate",
    liege: "Self-sovereign",
    wealth: "Moderate (declining)",
    military: "Formidable",
    magic: "Bloodfire (secretly)",
    allies: ["House Drakmoor", "House Ironheart"],
    enemies: ["House Vaelor", "House Shadowmere"]
  },
  {
    name: "House Vaelor",
    sigil: "🌙",
    color: "#a8d8e8",
    seat: "Aelthalas, the Crystal Throne",
    region: "The Silver Wood",
    motto: "The stars remember what the earth forgets.",
    desc: "The ruling house of the Aeldrin. House Vaelor has held the Crystal Throne for over four thousand years, unbroken. They are the keepers of the Runes, the interpreters of prophecy, and — though they deny it — the imprisoners of their own goddess. Their current head, Lady Seraphine Vaelor, is the last of her line who can still cast the highest runes. When she dies, the Aeldrin will have no one left.",
    role: "Highborn of the Aeldrin, Keeper of the Old Script",
    liege: "Self-sovereign",
    wealth: "Immense (stagnant)",
    military: "Small but deadly",
    magic: "Runecraft (mastered)",
    allies: ["House Shadowmere (secretly)"],
    enemies: ["House Vareth", "House Drakmoor"]
  },
  {
    name: "House Drakmoor",
    sigil: "🐉",
    color: "#b52a2a",
    seat: "Kael'Dorath, the Ashen Citadel",
    region: "The Dragon's Reach",
    motto: "Fire is our birthright. Ash is our duty.",
    desc: "The ruling house of the Draekon. House Drakmoor traces its line to Aeryn the Bold herself. They rule the Dragon's Reach from Kael'Dorath, a fortress built inside a dormant volcano. The current lord, Chieftain Vexa Cinderborn, is the first female to hold the seat in three hundred years. She is also the first Draekon in seven generations to have resisted the Changing. The clan elders see this as both a blessing and a curse.",
    role: "High Chieftain of the Dragon's Reach, Keeper of the Fire-Law",
    liege: "Self-sovereign",
    wealth: "Great (from obsidian and gold)",
    military: "Devastating",
    magic: "Bloodfire (mastered)",
    allies: ["House Vareth"],
    enemies: ["House Vaelor", "House Shadowmere"]
  },
  {
    name: "House Ironheart",
    sigil: "🪓",
    color: "#8a6f1f",
    seat: "Grunna's Anvil, the Iron City",
    region: "The Ashen Wastes (eastern)",
    motto: "We forge. We do not kneel.",
    desc: "The ruling house of the Vordrim, descended from Grunna Ironbound herself. House Ironheart has held the Iron City for over three hundred years, since the Vordrim rebellion. They are smiths, warriors, and — surprisingly — scholars. The current lord, Warchief Morag Bloodaxe, is a giant of a Vordrim with a poet's soul and a butcher's hands. He has fought in nineteen campaigns and never lost. He is also dying of a slow poison administered by his own daughter.",
    role: "Warchief of the Ash-Clans, Keeper of the First Fragment",
    liege: "Self-sovereign",
    wealth: "Moderate (from iron and coal)",
    military: "Fearsome",
    magic: "Breathweaving (shamanic)",
    allies: ["House Vareth", "House Karathi"],
    enemies: ["House Shadowmere", "House Vaelor (cold war)"]
  },
  {
    name: "House Shadowmere",
    sigil: "🕷️",
    color: "#4a1f6b",
    seat: "Ondrath, the Throne of Bone",
    region: "The Shadowmere Depths",
    motto: "All lights cast shadows. We are the shadow of all lights.",
    desc: "The ruling house of the Sylvaar. House Shadowmere is less a house and more a web of alliances, debts, and secrets. Its head, Lord Vexar, is the only surviving son of the dead Queen Maelith — and the only one who knows she is dead. He maintains the illusion of her rule through a nightly ritual that is slowly killing him. When he dies, the Sylvaar will fracture into civil war.",
    role: "Shadow-King of the Sylvaar (in all but name)",
    liege: "Self-sovereign (nominally under Queen Maelith)",
    wealth: "Vast (from trade in secrets and poisons)",
    military: "Small, elite, terrifying",
    magic: "Voidwalking (mastered), Runecraft",
    allies: ["House Vaelor (secretly)"],
    enemies: ["Everyone else"]
  },
  {
    name: "House Stormborn",
    sigil: "⚡",
    color: "#6ba8c9",
    seat: "The Stormhold, Cape of Storms",
    region: "The Stormlands",
    motto: "We bend the wind. We do not break.",
    desc: "A younger house, only six hundred years old, but one of the most powerful in the south. House Stormborn rose to prominence during the War of the Broken Crown, when its founder — a bastard peasant — rallied the southern lords against the Aeldrin. They rule the coast from the Stormhold, a fortress built on a cliff overlooking the Sea of Sorrow. Their current head, Lady Lyanna Stormborn, is called the Wolf Queen for her ferocity and her habit of keeping actual wolves as pets.",
    role: "Warden of the South, Admiral of the Storm Fleet",
    liege: "Self-sovereign",
    wealth: "Great (from trade)",
    military: "Strong (naval)",
    magic: "Breathweaving",
    allies: ["House Vareth", "House Drakmoor"],
    enemies: ["House Vaelor", "House Ironheart (rivalry)"]
  },
  {
    name: "House Karathi",
    sigil: "❄️",
    color: "#a8d8e8",
    seat: "Hrotha's Rest, the Winterhold",
    region: "The Frostspine",
    motto: "The cold does not forgive. Neither do we.",
    desc: "The ruling house of the Karathi, though 'house' is a loose term — the Karathi are organized into clans, and House Karathi is simply the clan that currently holds the Winterhold. The current holder, Thane Ironheart (no relation to House Ironheart), is a seventy-year-old warrior who has survived four Long Winters and killed two challengers in single combat in the past year. He is the only person alive who has spoken with the god Vorthal.",
    role: "Thane of Thanes, Speaker to the Sleeping God",
    liege: "Self-sovereign",
    wealth: "Poor (but self-sufficient)",
    military: "Feared (defensive)",
    magic: "Breathweaving (shamanic)",
    allies: ["House Ironheart"],
    enemies: ["None (the Karathi have no enemies, only the cold)"]
  },
  {
    name: "House Cinderborn",
    sigil: "🔥",
    color: "#b52a2a",
    seat: "The Ember Keep, Dragon's Reach",
    region: "The Dragon's Reach",
    motto: "We are the fire that does not die.",
    desc: "One of the seven Great Clans of the Draekon, and the one that has produced the most dragons in the past thousand years. House Cinderborn is famous for its warriors, its poets, and its tendency to produce the Changing more often than any other clan. The current head, Chieftainess Vexa Cinderborn, is a direct descendant of Aeryn the Bold. She is also the mother of the Ashborn Prince — though she has publicly denied this for political reasons.",
    role: "Clan-Chief of the Cinderborn, Keeper of the Ashen Flame",
    liege: "House Drakmoor",
    wealth: "Moderate",
    military: "Elite",
    magic: "Bloodfire (mastered)",
    allies: ["House Drakmoor"],
    enemies: ["House Vaelor"]
  },
  {
    name: "House Whisper",
    sigil: "🌑",
    color: "#2a1a4a",
    seat: "The Silent Hall, Ondrath",
    region: "The Shadowmere Depths",
    motto: "We hear what others forget to hide.",
    desc: "Not a noble house in the traditional sense — House Whisper is the Sylvaar intelligence network, operating openly within Sylvaar society and secretly throughout Aethermoor. Its members are identified only by the phrase 'I hear the whisper.' Its current head, known only as The Whisperer, is the most feared being in the civilized world. No one knows their face. No one knows their voice. No one knows if they are male or female. No one knows if they are alive.",
    role: "Master of Spies, Keeper of Secrets",
    liege: "House Shadowmere",
    wealth: "Unknown",
    military: "None (but everywhere)",
    magic: "Voidwalking (mastered)",
    allies: ["Unknown"],
    enemies: ["Unknown"]
  },
  {
    name: "House Emberforge",
    sigil: "🔨",
    color: "#8a6f1f",
    seat: "The Great Forge, Grunna's Anvil",
    region: "The Ashen Wastes (eastern)",
    motto: "We shape the world, one strike at a time.",
    desc: "The smith-house of the Vordrim. Every weapon of legend in Aethermoor — including the Ironheart's own axe, Grunna's Wrath — was forged by House Emberforge. They are not rulers, but they are kingmakers. Their current head, the Silent Smith, has not spoken in thirty years and communicates only through written notes. It is said that he is working on something — something that will change the world.",
    role: "Master Smith of the Ash-Clans",
    liege: "House Ironheart",
    wealth: "Great (from weapon-forging)",
    military: "Moderate",
    magic: "Breathweaving (embodied in craft)",
    allies: ["House Ironheart", "House Drakmoor"],
    enemies: ["None (everyone needs a smith)"]
  },
  {
    name: "House Bloodaxe",
    sigil: "⚔️",
    color: "#7a1a1a",
    seat: "The Red Keep, the Ashen Wastes",
    region: "The Ashen Wastes (central)",
    motto: "Blood for blood. Axe for axe.",
    desc: "The most aggressive of the Vordrim clans. House Bloodaxe has started more wars than any other house in the past two centuries — and won most of them. They are traditionalists who believe the Vordrim should return to their ancient ways: conquest, glory, and the worship of Karok. The current head, Warchief Morag Bloodaxe, is the same Morag Bloodaxe who leads House Ironheart — a complex political marriage situation that has caused no end of confusion.",
    role: "Warchief of the Bloodaxe Clan",
    liege: "House Ironheart (nominally)",
    wealth: "Moderate",
    military: "Fearsome",
    magic: "Breathweaving, Bloodfire (secretly)",
    allies: ["None"],
    enemies: ["Everyone"]
  },
  {
    name: "House Skycaller",
    sigil: "🦅",
    color: "#6ba8c9",
    seat: "The Skyhold, the Frostspine",
    region: "The Frostspine",
    motto: "The mountain hears. The mountain answers.",
    desc: "The shaman-clan of the Vordrim, who long ago broke from the other clans to live among the Karathi in the Frostspine. House Skycaller serves as the spiritual leaders of both peoples, maintaining the old rituals and — secretly — the only known correspondence with the sleeping god Vorthal. Their current head, Shamaness Grey-Eyes, is blind but sees more than anyone.",
    role: "Keeper of the Old Faith",
    liege: "House Karathi",
    wealth: "None",
    military: "Minimal",
    magic: "Breathweaving (deep), Runecraft (ritual)",
    allies: ["House Karathi", "House Ironheart"],
    enemies: ["House Bloodaxe"]
  }
];

/* ============================================================
   6. REGIONS OF AETHERMOOR
   ============================================================ */
const REGIONS = [
  {
    name: "The Silver Wood",
    type: "Ancient forest",
    color: "#a8d8e8",
    desc: "A forest of silver-barked trees that have never known fire. It is home to the Aeldrin, and to creatures older than the gods. Time moves differently here — a day in the Silver Wood can be a year outside. The Aeldrin have learned to navigate this, but visitors often lose decades without realizing it.",
    control: "House Vaelor (Aeldrin)",
    notable: ["Aelthalas", "The Crystal Throne", "The Fading Garden"]
  },
  {
    name: "The Dragon's Reach",
    type: "Volcanic peninsula",
    color: "#b52a2a",
    desc: "A peninsula of black rock and active volcanoes, home to the Draekon. The air is thick with ash and the smell of sulfur. The ground is warm to the touch. Dragons — real dragons, transformed from Draekon — have been spotted here for the first time in three hundred years.",
    control: "House Drakmoor (Draekon)",
    notable: ["Kael'Dorath", "The Ashen Citadel", "The Fire-Lake"]
  },
  {
    name: "The Frostspine",
    type: "Mountain range",
    color: "#6ba8c9",
    desc: "A mountain range so tall that its peaks are permanently lost in cloud. The Karathi live here, in cliff-cities carved into the rock. Beneath the mountains, something sleeps — something the Karathi call Vorthal, and something the other races call superstition.",
    control: "House Karathi",
    notable: ["Hrotha's Rest", "The Sleeping Throne", "The Ice Caverns"]
  },
  {
    name: "The Ashen Wastes",
    type: "Desolate plain",
    color: "#7a6f5e",
    desc: "The scar left by the Sundering. Once the Sunlit Plains, the breadbasket of Aethermoor, now a wasteland of grey dust and shattered stone. Nothing grows here. Nothing lives here except the Vordrim, who have made it their home and their fortress.",
    control: "House Ironheart (Vordrim)",
    notable: ["Grunna's Anvil", "The Cracks", "The Bone Fields"]
  },
  {
    name: "The Shadowmere Depths",
    type: "Underground realm",
    color: "#4a1f6b",
    desc: "A vast network of caverns beneath Aethermoor, home to the Sylvaar. No natural light reaches here. The Sylvaar have built cities of obsidian and bone, lit by phosphorescent fungi and by magic. The Depths are said to extend under the entire continent — and perhaps beyond.",
    control: "House Shadowmere (Sylvaar)",
    notable: ["Ondrath", "The Throne of Bone", "The Silent Hall"]
  },
  {
    name: "The Stormlands",
    type: "Coastal region",
    color: "#6ba8c9",
    desc: "A region of cliffs, storms, and salt. The Stormlands are the heart of human civilization in Aethermoor — the kingdoms here are the largest, the richest, and the most politically unstable. Storms roll in from the Sea of Sorrow almost daily. The people have learned to build for wind.",
    control: "House Stormborn, House Vareth, others",
    notable: ["The Spire of Ashes", "The Stormhold", "The Sea of Sorrow"]
  },
  {
    name: "The Godfall",
    type: "Ruined battlefield",
    color: "#c9a227",
    desc: "The place where the war of the gods ended. A plain of glass and bone, still hot to the touch ten centuries later. The corpses of three gods lie here, unburied, unrotted. No one goes to the Godfall. Those who do rarely return, and when they do, they are... changed.",
    control: "None",
    notable: ["The Glass Sea", "The Fallen Three", "The Altar of Ashes"]
  },
  {
    name: "The Sunken Kingdoms",
    type: "Underwater ruins",
    color: "#2a1a4a",
    desc: "The ruins of five kingdoms that sank beneath the Sea of Sorrow during the Sundering. Their towers still stand, visible through the waves on a clear day. Treasure hunters dive here. Few return. The Sunken Kingdoms are home to things that were once human and no longer are.",
    control: "None",
    notable: ["The Drowned Throne", "The Coral Cathedral", "The Deep Roads"]
  },
  {
    name: "The Broken Steppe",
    type: "Grassland",
    color: "#8a6f1f",
    desc: "A vast grassland in the center of Aethermoor, home to nomadic tribes and the ruins of forgotten civilizations. The Steppe is technically neutral ground — no kingdom claims it — but in practice, it is controlled by whoever is strongest at the moment. Currently, that is a coalition of Kemiiri packs.",
    control: "Kemiiri coalition (loose)",
    notable: ["The Standing Stones", "The Wandering Court", "The Grey Pack's Den"]
  },
  {
    name: "The Sunlit Coast",
    type: "Coastal region",
    color: "#e8c547",
    desc: "The southern coast of Aethermoor, warm and fertile. The Sunlit Coast is the only part of the continent that was not scarred by the Sundering — a fact that has made it both a refuge and a target. The cities here are wealthy, cultured, and constantly at war with each other.",
    control: "Various city-states",
    notable: ["The Golden Harbor", "The Sun Temple", "The Merchant Princes"]
  },
  {
    name: "The Veil",
    type: "Magical anomaly",
    color: "#6d4fa8",
    desc: "A region in the northeast where reality is... thin. The Veil is a place where the boundaries between worlds are weak, and things from other realities can slip through. The Aeldrin maintain a fortress here — the Veilwatch — to monitor and contain the incursions. It is the most dangerous posting in Aethermoor.",
    control: "House Vaelor (garrison)",
    notable: ["The Veilwatch", "The Rift", "The Watching Stones"]
  },
  {
    name: "The Dead Marches",
    type: "Necropolis",
    color: "#4a1f6b",
    desc: "A region in the east where the dead do not stay dead. The Dead Marches are the result of a failed resurrection ritual during the Sundering — a ritual that killed three thousand people and trapped their souls in a loop of dying and rising. The Sylvaar maintain a research station here. The Vordrim maintain a wall.",
    control: "Contested",
    notable: ["The Wall of Bones", "The Screaming Fields", "The Sylvaar Station"]
  },
  {
    name: "The Whispering Forest",
    type: "Haunted forest",
    color: "#2a1a4a",
    desc: "A forest in the west where the trees remember everything that has ever happened beneath them — and sometimes speak. The Whispering Forest is avoided by all sane people. It is frequented by the insane, the desperate, and the Kemiiri. It is said that if you listen long enough, the trees will tell you your own future. It is also said that most people who hear it go mad.",
    control: "None",
    notable: ["The Speaking Grove", "The Memory Pools", "The Kemiiri Packs"]
  },
  {
    name: "The Iron Coast",
    type: "Coastal region",
    color: "#7a6f5e",
    desc: "The eastern coast of Aethermoor, rocky and harsh. The Iron Coast is the Vordrim's only access to the sea, and they guard it fiercely. The coast is dotted with shipyards, fortresses, and the ruins of the Aeldrin colonies that once stood here — before the Vordrim rebellion burned them down.",
    control: "House Ironheart (Vordrim)",
    notable: ["The Iron Port", "The Broken Towers", "The Grunna's Fist"]
  },
  {
    name: "The Fading Garden",
    type: "Sacred grove",
    color: "#a8d8e8",
    desc: "A garden in the heart of the Silver Wood where, according to Aeldrin legend, the goddess Aelith planted the first seed of the world. The garden has been dying for a thousand years — ever since the Sundering. The Aeldrin tend it obsessively, but nothing they do stops the decay. It is the most sacred place in Aethermoor. It is also the most hopeless.",
    control: "House Vaelor",
    notable: ["The First Tree", "The Dying Fountain", "The Silent Choir"]
  }
];

/* ============================================================
   7. THE TIMELINE
   ============================================================ */
const TIMELINE = [
  {
    year: "~10,000 B.S.",
    era: "dawn",
    eraName: "Age of Dawn",
    title: "The Singing of the World",
    desc: "Before time, before matter, there was the Song. From the Song came the first gods — Aelith of Light, Karok of War, Vorthal of Silence, and thirty-four others. They shaped Vaelthar from the void, and for a thousand years, they ruled in harmony."
  },
  {
    year: "~9,000 B.S.",
    era: "dawn",
    eraName: "Age of Dawn",
    title: "The First Races",
    desc: "The gods created the first mortals: the Aeldrin from light, the Sylvaar from shadow, and the Draekon from fire. Each race was given a purpose, a homeland, and a god to serve. The gods called this the Perfect Order. The mortals called it something else."
  },
  {
    year: "~7,500 B.S.",
    era: "dawn",
    eraName: "Age of Dawn",
    title: "The First Betrayal",
    desc: "The goddess Aelith discovered that her brother Karok had created the Vordrim as soldiers, in secret, in violation of the Perfect Order. She demanded his punishment. The other gods sided with Karok. Aelith, in fury, withdrew to the Silver Wood and refused to speak to her siblings for a thousand years."
  },
  {
    year: "~6,000 B.S.",
    era: "myth",
    eraName: "Age of Myth",
    title: "The First Sundering of the Sky",
    desc: "A rogue god, whose name has been erased from all records, attempted to seize the Song and rewrite reality. The other gods united to stop him. The battle lasted seven days, shattered three moons, and ended with the rogue god's death. The sky has never been the same."
  },
  {
    year: "~5,000 B.S.",
    era: "myth",
    eraName: "Age of Myth",
    title: "The Coming of the Kemiiri",
    desc: "A mortal sorcerer-king, whose name is also erased, created the first Kemiiri as soldiers. The gods were horrified. They cursed the Kemiiri with the Beast-Curse, dormant but deadly. The Kemiiri have been hunted ever since."
  },
  {
    year: "~4,200 B.S.",
    era: "myth",
    eraName: "Age of Myth",
    title: "The Dragon's Pact",
    desc: "Aeryn the Bold, a mortal warrior, lay with the dragon Vharenth and bore his children. The gods, in punishment, cursed her line: every seventh generation, one Draekon would undergo the Changing. The Draekon accepted the curse as sacred. The gods did not expect this."
  },
  {
    year: "~3,000 B.S.",
    era: "myth",
    eraName: "Age of Myth",
    title: "The Long Peace",
    desc: "For a thousand years, the races lived in relative peace. The Aeldrin ruled the Silver Wood. The Draekon ruled the Dragon's Reach. The humans (a young race, created late) spread across the plains. The Vordrim and the Kemiiri, however, were slaves — and they remembered."
  },
  {
    year: "~2,100 B.S.",
    era: "myth",
    eraName: "Age of Myth",
    title: "The Vordrim Rebellion",
    desc: "Grunna Ironbound, a Vordrim slave, rallied her people and shattered three human kingdoms. For the first time, the Vordrim were free. The other races were terrified. The Aeldrin, for the first time, began to fear for their future."
  },
  {
    year: "~1,500 B.S.",
    era: "myth",
    eraName: "Age of Myth",
    title: "The Birth of the Kemiiri Packs",
    desc: "The Kemiiri, scattered and hunted, began to organize into Packs — small, mobile family units. They developed the tattoo tradition, the oral histories, and the survival strategies that would keep them alive for another fifteen centuries."
  },
  {
    year: "~1,000 B.S.",
    era: "myth",
    eraName: "Age of Myth",
    title: "The Prophecy of the Vaelor",
    desc: "The Aeldrin seer Vaelor, in a vision, spoke the prophecy that would define the next thousand years: 'When the last dragon wakes and the first god bleeds, the ash-born shall sit upon a throne of fire, and Aethermoor shall know either dawn — or ending.' Vaelor was executed for heresy. The prophecy was preserved in secret."
  },
  {
    year: "1 B.S.",
    era: "sundering",
    eraName: "The Sundering",
    title: "The Sundering",
    desc: "The gods made war upon each other. The reason is still debated — the Aeldrin say it was a dispute over the Song; the Vordrim say it was Karok's betrayal; the Draekon say it was jealousy. Regardless, the war lasted seven days. Twenty-eight gods died. The sky cracked. The Sunlit Plains burned. The Sundering changed everything."
  },
  {
    year: "1 S.A.",
    era: "sundering",
    eraName: "The Sundering",
    title: "The Ash Age Begins",
    desc: "The surviving gods withdrew from the world. The nine who remained retreated to their sanctuaries and have not been seen since. The mortal races were left to survive on their own. The Ash Age — the age of mortals — began."
  },
  {
    year: "47 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The First Human Kingdoms",
    desc: "The human general Vareth (ancestor of House Vareth) unified the scattered human tribes and founded the first human kingdom, the Stormlands. His descendants would rule for the next six hundred years."
  },
  {
    year: "102 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The Sunken Kingdoms",
    desc: "Five coastal kingdoms, weakened by the Sundering, sank beneath the Sea of Sorrow in a single night. The cause is unknown. The ruins remain. Treasure hunters still dive."
  },
  {
    year: "187 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The Founding of the Iron City",
    desc: "The Vordrim, under Chieftain Ironbound, founded Grunna's Anvil — the Iron City — in the heart of the Ashen Wastes. It would become the greatest forge-city in Aethermoor."
  },
  {
    year: "234 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The Rise of House Stormborn",
    desc: "A bastard peasant, calling himself Stormborn, rallied the southern lords against Aeldrin rule. In a single year, he drove the Aeldrin from the Stormlands and founded House Stormborn. The Aeldrin have never forgotten."
  },
  {
    year: "289 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The War of the Broken Crown",
    desc: "A succession crisis in the Stormlands spiraled into a continent-wide war. Twelve kingdoms fought for eight years. An estimated 400,000 died. The war ended in a stalemate that has held, uneasily, ever since."
  },
  {
    year: "312 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The Silent Queen",
    desc: "Maelith, Queen of the Sylvaar, died. Her son Vexar, unwilling to accept it, cast a forbidden spell to keep her body animated. The spell worked. It is still working. It is killing him."
  },
  {
    year: "356 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The Binding of the Goddess",
    desc: "The Aeldrin High Council, in secret, bound the goddess Aelith beneath the Silver Wood. They believed she was dying and that her death would end their immortality. They were wrong. She was not dying. And her binding has slowly sterilized the entire Aeldrin race."
  },
  {
    year: "378 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The Birth of the Ashborn Prince",
    desc: "Vexa Cinderborn, Chieftainess of House Cinderborn, gave birth to a son. The father is unknown. The child's eyes were the color of ash. The Draekon elders whispered that this child might be the one the prophecy spoke of. Vexa publicly denied it. She has never confirmed or denied it since."
  },
  {
    year: "391 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The First Incursion",
    desc: "For the first time in three hundred years, something came through the Veil. It was not human. It was not beast. It was... something else. The Veilwatch garrison destroyed it. Only three soldiers survived. None of them speak of what they saw."
  },
  {
    year: "398 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The Awakening of the Dragons",
    desc: "For the first time in three hundred years, a Draekon underwent the Changing — and survived as a true dragon. She flew east, toward the Ashen Wastes. She has not been seen since. The Draekon are... uncertain whether to celebrate or mourn."
  },
  {
    year: "402 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The Present Day",
    desc: "It is the Year 402 of the Ash Age. The seven races stand on the edge of something — war, discovery, or annihilation. A prince with ash-colored eyes walks the Dragon's Reach. An old woman sees a dragon flying toward the east. A god stirs beneath the Frostspine. And in the dark beneath the world, something is waking that should have stayed asleep."
  }
];