/* ============================================================
   AETHERMOOR — UNIFIED WORLD DATABASE
   The Complete Chronicle of the Sundered Realm
   Volume I: The World, The Races, The Magic, The Houses
   ============================================================ */

const WORLD_META = {
  worldName: "Vaelthar",
  continent: "Aethermoor",
  currentEra: "The Ash Age",
  currentYear: 402,
  tagline: "Where gods have fallen and left their thrones empty.",
  summary: "Aethermoor is a continent upon the sphere of Vaelthar — a world torn open a thousand years ago when the gods made war upon each other and the sky itself was cracked. What remains is a realm of ash and ambition, where seven races cling to the ruins of heaven, and every crown was won in blood.",
  calendar: "Years are counted from the Sundering. 'S.A.' = Since Ash. 'B.S.' = Before Sundering.",
  motto: "We write so that the world does not forget.",
  lastUpdate: "402 S.A. — The Chronicle Continues",
  chronicler: "The Silent Choir of Aelthalas"
};

/* ============================================================
   1. WORLD OVERVIEW TILES
   ============================================================ */
const WORLD_TILES = [
  {
    icon: "🌍",
    title: "One Continent, Seven Nations",
    desc: "Aethermoor spans three million square miles. From the frozen north to the burning south, seven races carve out their existence on land that still remembers divine fire. The continent is shaped like a broken crown — a fitting metaphor for what it once was.",
    statLabel: "Landmass",
    statValue: "3.2M mi²"
  },
  {
    icon: "⚔️",
    title: "A Thousand Years of Ash",
    desc: "Since the Sundering, no fewer than forty-two wars have been fought over the ruins of heaven. Twelve have ended in genocide. Fourteen ended in stalemate. Sixteen — the bloodiest — ended in the annihilation of at least one noble house. The rest ended when everyone involved was simply too exhausted to continue.",
    statLabel: "Recorded Wars",
    statValue: "42"
  },
  {
    icon: "🕯️",
    title: "The Fading Gods",
    desc: "Of the thirty-seven gods who once walked Vaelthar, only nine are confirmed alive. Eleven are confirmed dead. The rest are... unaccounted for. Some scholars believe they fled to other worlds. Others believe they were erased. A few whisper that they are hiding — waiting for the right moment to return.",
    statLabel: "Gods Remaining",
    statValue: "9 / 37"
  },
  {
    icon: "📜",
    title: "The Forbidden Histories",
    desc: "Every victor rewrites the past. Beneath the official chronicles lie banned texts, burned libraries, and the testimony of the dead — preserved in stone and bone. The Silent Choir has catalogued 1,247 works that are considered dangerous to know. They have read them all.",
    statLabel: "Banned Texts",
    statValue: "1,247"
  },
  {
    icon: "🗡️",
    title: "The Age of Ambition",
    desc: "Thrones sit empty. Crowns are cheap. A peasant can rise to emperor with enough blood and enough luck. Eighty-eight times in the past thousand years, a commoner has seized a throne. Forty-one of them died within a year. Twelve still rule. The rest — the rest are forgotten.",
    statLabel: "Successful Usurpations",
    statValue: "88"
  },
  {
    icon: "🌑",
    title: "The Returning Dark",
    desc: "Something stirs beneath the Ashen Wastes. Ancient. Patient. Hungry. The scholars call it superstition. The soldiers on the border call it the end. The reports are consistent: the ground trembles, the sky darkens, and the dead things that were buried in the Cracks are beginning to move. Border incidents have increased by three hundred and forty percent in the past decade.",
    statLabel: "Border Incidents",
    statValue: "+340%"
  },
  {
    icon: "🩸",
    title: "The Blood Debt",
    desc: "Every drop of divine blood spilled at the Sundering is still owed. The world pays in slow increments — in plague, in madness, in the slow fading of magic itself. Scholars estimate that at current rates of decay, magic will cease to function entirely within four hundred years. Nobody is doing anything about it. Most people do not believe it.",
    statLabel: "Estimated Years Left",
    statValue: "~400"
  },
  {
    icon: "🌸",
    title: "The Last Dawn",
    desc: "A single Aeldrin child was born in the Year 242 — the first in one hundred and sixty years, and the last. Her name is Aelwyn Vaelor. She is one hundred and sixty years old, appears sixteen, and is the only hope of a dying race. She did not ask for this. She does not want it. She may be the most important person alive.",
    statLabel: "Aeldrin Children Born",
    statValue: "1"
  }
];

/* ============================================================
   2. THE SEVEN RACES — FULL PROFILES
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
    fullDesc: "The Aeldrin were the first race blessed by the goddess Aelith, granted immortality and an unbroken connection to the arcane weave. For five thousand years they ruled Aethermoor as philosopher-kings, building cities of crystal and starlight in the Silver Wood. They were the keepers of the runes, the interpreters of prophecy, and the self-appointed wardens of the world. But immortality is a curse disguised as a gift: the Aeldrin have forgotten how to change. They have forgotten how to hope. And now, three millennia after Aelith's binding, they are quietly dying out — not from war or plague, but from the simple, devastating fact that no Aeldrin child has been born in one hundred and sixty years. Except one. The Last Dawn. And she does not want to be.",
    secret: "The Aeldrin are not dying from natural causes. Their goddess, Aelith, still lives — imprisoned beneath the Silver Wood by her own children, who feared her judgment. As long as she remains bound, the Aeldrin are sterile. They have imprisoned their own salvation. And the one child born — Aelwyn Vaelor — exists only because the binding cracked for a single decade.",
    stats: { lifespan: "Immortal", population: "~39,999", homeland: "The Silver Wood", capital: "Aelthalas, the Crystal Throne", alignment: "Lawful Neutral", magicAffinity: "Runes, Breathweaving" },
    culture: "The Aeldrin believe in a rigid caste system called the Ladder of Stars, with the Highborn at the top, the Lowborn at the bottom, and the Silverless (those born without arcane sight) condemned to servitude. Their art is bound in rules. Their music is mathematical. Their architecture is frozen in amber. They have not produced a truly new piece of art in seven hundred years. They do not consider this a problem. They consider this proof of their refinement.",
    notable: ["Seraphine Vaelor", "Aelwyn Vaelor", "Lord Arathor", "The Silent Council"],
    relations: { allies: ["Sylvaar (secretly)"], enemies: ["Vordrim", "Draekon"], neutral: ["Karathi", "Kemiiri", "Halfborn"] }
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
    stats: { lifespan: "70-120 years (200+ for dragons)", population: "~380,000", homeland: "The Dragon's Reach", capital: "Kael'Dorath, the Ashen Citadel", alignment: "Chaotic Neutral", magicAffinity: "Bloodfire, Breathweaving" },
    culture: "Draekon society is organized into seven Great Clans: Ember, Cinder, Ash, Smoke, Blaze, Forge, and Wyrm. Marriage between clans is common and political. Duels are frequent and often fatal. Their poetry is short, brutal, and beautiful. They do not believe in an afterlife; they believe in being remembered by fire.",
    notable: ["Aeryn the Bold (legendary)", "Vexa Cinderborn", "The Ashborn Prince"],
    relations: { allies: ["House Vareth"], enemies: ["Aeldrin", "Sylvaar"], neutral: ["Vordrim", "Karathi", "Kemiiri"] }
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
    stats: { lifespan: "60-90 years", population: "~500,000", homeland: "The Frostspine", capital: "Hrotha's Rest, the Winterhold", alignment: "True Neutral", magicAffinity: "Breathweaving, Runes (rare)" },
    culture: "Karathi society is organized around the Long Winter — a shared ordeal every seven years. Those who survive become Thanes. Those who die are remembered in song. Their funeral rites involve feeding the body to the Frostspine's wolves.",
    notable: ["Thane Ironheart", "The Ice-Queen Helka", "Bjorn the Unbroken"],
    relations: { allies: ["Vordrim"], enemies: ["None"], neutral: ["Everyone else"] }
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
    secret: "The Vordrim carry a book — the Karoknul — written in the language of the gods themselves. It contains the secret of their creation and the method by which Karok might be resurrected. Every Vordrim Chieftain guards a fragment. None can read it. If the fragments are ever assembled and translated, the god of war will return — and he will not be pleased with what his children have become.",
    stats: { lifespan: "50-70 years", population: "~600,000", homeland: "The Ashen Wastes", capital: "Grunna's Anvil, the Iron City", alignment: "Lawful Neutral", magicAffinity: "Breathweaving, Runes (rare)" },
    culture: "Vordrim society is clan-based, with seven Great Clans: Ironbound, Stonefist, Bloodaxe, Skycaller, Emberforge, Doomhowl, and Nightwarden. Every Vordrim is expected to be a warrior, but also a craftsman. Their smiths are legendary. Their architecture is brutal and beautiful. They have no concept of racial superiority — they judge only by action.",
    notable: ["Grunna Ironbound (legendary)", "Morag Bloodaxe", "The Silent Smith"],
    relations: { allies: ["Karathi"], enemies: ["Aeldrin"], neutral: ["Draekon", "Sylvaar", "Kemiiri"] }
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
    secret: "The Sylvaar Queen, Maelith the Ever-Living, is dead. She has been dead for three hundred years. But her body still sits on the Obsidian Throne, animated by a spell that her son Vexar renews every night. No Sylvaar knows this. When Vexar dies — and he is dying — the Queen will collapse, and the Sylvaar will have no ruler, no purpose, and no light.",
    stats: { lifespan: "Immortal (but rarely reaches 500)", population: "~90,000", homeland: "The Shadowmere Depths", capital: "Ondrath, the Throne of Bone", alignment: "Neutral Evil", magicAffinity: "Voidwalking, Runes" },
    culture: "Sylvaar society is a web of secrets, favors, and debts. Everyone owes someone. Everyone is owed by someone. Titles are meaningless; leverage is everything. They have no written history — the past is passed down orally, and often changed in the telling. Their art is beautiful and disturbing.",
    notable: ["Maelith the Ever-Living", "Lord Vexar", "The Whisperer"],
    relations: { allies: ["None"], enemies: ["Everyone"], neutral: [] }
  },
  {
    id: "kemiiri",
    name: "Kemiiri",
    epithet: "The Beastfolk",
    category: "beast",
    icon: "🦊",
    shortDesc: "Neither human nor beast, and hated by both. The Kemiiri have learned that the only law that matters is the one you write yourself.",
    traits: ["Beast-blooded", "Adaptable", "Outcast", "Cursed"],
    fullDesc: "The Kemiiri are the descendants of an ancient magical experiment — the attempt by a long-dead sorcerer-king to create the perfect soldiers by grafting beast-spirits onto human souls. The experiment succeeded. The soldiers were perfect. Then they turned on their creator, and the world turned on them. For seven thousand years the Kemiiri have been hunted, enslaved, and exterminated by every other race. They have survived because they are adaptable: each Kemiiri manifests a different beast-aspect at birth, giving them unique abilities.",
    secret: "The Kemiiri carry a dormant plague — the Beast-Curse — that they cannot transmit to each other but can transmit to all other races. The sorcerer-king's death-spell, woven into their blood, is designed to activate when the Kemiiri population drops below one thousand. They are currently at fourteen hundred.",
    stats: { lifespan: "40-60 years", population: "~1,400", homeland: "Scattered", capital: "None", alignment: "Chaotic Neutral", magicAffinity: "Breathweaving, Bloodfire (rare)" },
    culture: "The Kemiiri have no unified culture, only the shared experience of persecution. They organize into 'Packs' — temporary family units. Their tattoos are not decorative — they record every escape, every rescue, every loss. A Kemiiri's skin is their autobiography.",
    notable: ["Nyx the Shadow-Speaker", "Old Sable", "The Grey Pack"],
    relations: { allies: ["None officially"], enemies: ["Everyone at some point"], neutral: [] }
  },
  {
    id: "halfborn",
    name: "Halfborn",
    epithet: "The God-Touched",
    category: "divine",
    icon: "👁️",
    shortDesc: "The children of gods and mortals. Powerful beyond measure. Broken beyond repair. And hunted by both heaven and earth.",
    traits: ["Divine-blood", "Cursed", "Powerful", "Hunted"],
    fullDesc: "The Halfborn are what happens when a god loves a mortal — or uses one. Their blood is divine; their flesh is mortal. This contradiction tears them apart. A Halfborn child is born with power that would take a mortal wizard decades to achieve. They can shatter stone with a word, walk through fire, see the future in dreams. But every Halfborn carries a Flaw — a unique weakness that grows with their power. Most are dead by forty.",
    secret: "The Halfborn are not accidents. They are the gods' only way back into the world. Every Halfborn carries a fragment of their divine parent's essence. If enough Halfborn were to die in one place, at one time, in the right ritual — the parent god could be reborn.",
    stats: { lifespan: "20-60 years", population: "~50", homeland: "None", capital: "None", alignment: "Any", magicAffinity: "All schools" },
    culture: "There is no Halfborn culture. Only individuals, alone with their power and their Flaw. The only thing they share is a secret society called the Wounded Choir — an underground network that tries to protect Halfborn children and, when possible, kill the gods who abandoned them.",
    notable: ["Kaelen Vareth", "Aelwyn Vaelor", "The Blind Oracle"],
    relations: { allies: ["Themselves"], enemies: ["Gods"], neutral: ["Mortals"] }
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
    culturalNote: "In most cultures, Breathweaving is taught alongside literacy. It is considered a basic life skill."
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
    culturalNote: "Reading the Old Script is punishable by death in most human kingdoms. The Aeldrin consider it a capital crime."
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
    culturalNote: "Bloodfire is technically illegal in every kingdom except the Dragon's Reach. In practice, it is used everywhere."
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
    culturalNote: "The Sylvaar are the only race that practices Voidwalking openly. They consider the Long Shadow a form of immortality."
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
    culturalNote: "The Song of Stars is myth to most. Only the Aeldrin and the oldest Vordrim shamans remember it as anything more."
  }
];

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
  },
  {
    num: "IV",
    title: "The Law of Debt",
    desc: "Every spell cast adds to a cosmic debt — a debt that must one day be paid. The world is not infinite. The magic of Aethermoor is finite. And the interest is being collected, day by day, in the slow fading of wonder. When the debt is finally paid, magic will end. Nobody knows when that will be. Everyone should be afraid."
  }
];

/* ============================================================
   4. THE GREAT HOUSES — FULL PROFILES
   ============================================================ */
const HOUSES = [
  {
    name: "House Vaelor",
    sigil: "🌙",
    color: "#a8d8e8",
    seat: "Aelthalas, the Crystal Throne",
    region: "The Silver Wood",
    motto: "The stars remember what the earth forgets.",
    desc: "The ruling house of the Aeldrin. House Vaelor has held the Crystal Throne for over four thousand years, unbroken. They are the keepers of the Runes, the interpreters of prophecy, and — though they deny it — the imprisoners of their own goddess. Their current head, Lady Seraphine Vaelor, is the last of her line who can still cast the highest runes. And her great-granddaughter, Aelwyn, is the last Aeldrin child ever born.",
    role: "Highborn of the Aeldrin, Keeper of the Old Script",
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
    role: "High Chieftain of the Dragon's Reach",
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
    region: "The Ashen Wastes",
    motto: "We forge. We do not kneel.",
    desc: "The ruling house of the Vordrim, descended from Grunna Ironbound herself. Their current lord, Warchief Morag Bloodaxe, is a giant with a poet's soul and a butcher's hands. He has fought in nineteen campaigns and never lost. He is also dying of a slow poison administered by his own daughter.",
    role: "Warchief of the Ash-Clans",
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
    desc: "The ruling house of the Sylvaar. Its head, Lord Vexar, is the only surviving son of the dead Queen Maelith — and the only one who knows she is dead. He maintains the illusion through a nightly ritual that is slowly killing him. When he dies, the Sylvaar will fracture into civil war.",
    role: "Shadow-King of the Sylvaar",
    wealth: "Vast (from trade in secrets)",
    military: "Small, elite, terrifying",
    magic: "Voidwalking (mastered)",
    allies: ["House Vaelor (secretly)"],
    enemies: ["Everyone else"]
  },
  {
    name: "House Cinderborn",
    sigil: "🔥",
    color: "#b52a2a",
    seat: "The Ember Keep, Dragon's Reach",
    region: "The Dragon's Reach",
    motto: "We are the fire that does not die.",
    desc: "One of the seven Great Clans of the Draekon, and the one that has produced the most dragons. The current head, Chieftainess Vexa Cinderborn, is the mother of the Ashborn Prince — though she has publicly denied this for political reasons.",
    role: "Clan-Chief of the Cinderborn",
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
    desc: "The Sylvaar intelligence network. Its members are identified only by the phrase 'I hear the whisper.' Its head, known only as The Whisperer, is the most feared being in the civilized world.",
    role: "Master of Spies",
    wealth: "Unknown",
    military: "None (but everywhere)",
    magic: "Voidwalking (mastered)",
    allies: ["Unknown"],
    enemies: ["Unknown"]
  },
  {
    name: "House Vareth",
    sigil: "🦅",
    color: "#7a1a1a",
    seat: "The Spire of Ashes, Northern Reaches",
    region: "The Stormlands",
    motto: "From ash, we rise.",
    desc: "The oldest human noble house in Aethermoor — older than the Sundering. House Vareth claims descent from the mortal general who unified the human tribes after the gods fell.",
    role: "Warden of the North",
    wealth: "Moderate (declining)",
    military: "Formidable",
    magic: "Bloodfire (secretly)",
    allies: ["House Drakmoor", "House Ironheart"],
    enemies: ["House Vaelor", "House Shadowmere"]
  },
  {
    name: "House Stormborn",
    sigil: "⚡",
    color: "#6ba8c9",
    seat: "The Stormhold, Cape of Storms",
    region: "The Stormlands",
    motto: "We bend the wind. We do not break.",
    desc: "A younger house, only six hundred years old, but one of the most powerful in the south. Their current head, Lady Lyanna Stormborn, is called the Wolf Queen for her ferocity and her habit of keeping actual wolves as pets.",
    role: "Warden of the South",
    wealth: "Great (from trade)",
    military: "Strong (naval)",
    magic: "Breathweaving",
    allies: ["House Vareth", "House Drakmoor"],
    enemies: ["House Vaelor"]
  },
  {
    name: "House Karathi",
    sigil: "❄️",
    color: "#a8d8e8",
    seat: "Hrotha's Rest, the Winterhold",
    region: "The Frostspine",
    motto: "The cold does not forgive. Neither do we.",
    desc: "The ruling house of the Karathi. The current holder, Thane Ironheart, is the only person alive who has spoken with the god Vorthal.",
    role: "Thane of Thanes",
    wealth: "Poor (but self-sufficient)",
    military: "Feared (defensive)",
    magic: "Breathweaving (shamanic)",
    allies: ["House Ironheart"],
    enemies: ["None"]
  },
  {
    name: "House Emberforge",
    sigil: "🔨",
    color: "#8a6f1f",
    seat: "The Great Forge, Grunna's Anvil",
    region: "The Ashen Wastes",
    motto: "We shape the world, one strike at a time.",
    desc: "The smith-house of the Vordrim. Every weapon of legend in Aethermoor was forged by House Emberforge. Their head, the Silent Smith, has not spoken in thirty years.",
    role: "Master Smith of the Ash-Clans",
    wealth: "Great (from weapon-forging)",
    military: "Moderate",
    magic: "Breathweaving (embodied in craft)",
    allies: ["House Ironheart", "House Drakmoor"],
    enemies: ["None"]
  },
  {
    name: "House Bloodaxe",
    sigil: "⚔️",
    color: "#7a1a1a",
    seat: "The Red Keep, the Ashen Wastes",
    region: "The Ashen Wastes",
    motto: "Blood for blood. Axe for axe.",
    desc: "The most aggressive of the Vordrim clans. House Bloodaxe has started more wars than any other house in the past two centuries — and won most of them.",
    role: "Warchief of the Bloodaxe Clan",
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
    desc: "The shaman-clan of the Vordrim, who long ago broke from the other clans to live among the Karathi. Their head, Shamaness Grey-Eyes, is blind but sees more than anyone.",
    role: "Keeper of the Old Faith",
    wealth: "None",
    military: "Minimal",
    magic: "Breathweaving (deep), Runecraft (ritual)",
    allies: ["House Karathi", "House Ironheart"],
    enemies: ["House Bloodaxe"]
  }
];

/* ============================================================
   5. REGIONS OF AETHERMOOR — FULL PROFILES
   ============================================================ */
const REGIONS = [
  {
    id: "silver-wood", name: "The Silver Wood", type: "Ancient forest", color: "#a8d8e8",
    mapX: 420, mapY: 180,
    desc: "A forest of silver-barked trees that have never known fire. It is home to the Aeldrin, and to creatures older than the gods. Time moves differently here — a day in the Silver Wood can be a year outside. The Aeldrin have learned to navigate this, but visitors often lose decades without realizing it. The trees themselves are said to hum with ancient magic, and their leaves never fall. The forest's heart is the Fading Garden — the most sacred place in Aethermoor.",
    control: "House Vaelor (Aeldrin)",
    notable: ["Aelthalas", "The Crystal Throne", "The Fading Garden", "The Silent Choir", "The First Tree"]
  },
  {
    id: "dragons-reach", name: "The Dragon's Reach", type: "Volcanic peninsula", color: "#b52a2a",
    mapX: 820, mapY: 470,
    desc: "A peninsula of black rock and active volcanoes, home to the Draekon. The air is thick with ash and the smell of sulfur. The ground is warm to the touch. Dragons — real dragons, transformed from Draekon — have been spotted here for the first time in three hundred years. The peninsula is riddled with lava tubes and obsidian cliffs. At its heart sits Kael'Dorath, the Ashen Citadel, carved into a dormant volcano.",
    control: "House Drakmoor (Draekon)",
    notable: ["Kael'Dorath", "The Ashen Citadel", "The Fire-Lake", "The Ember Keep", "The Changing Pools"]
  },
  {
    id: "frostspine", name: "The Frostspine", type: "Mountain range", color: "#6ba8c9",
    mapX: 200, mapY: 140,
    desc: "A mountain range so tall that its peaks are permanently lost in cloud. The Karathi live here, in cliff-cities carved into the rock. Beneath the mountains, something sleeps — something the Karathi call Vorthal, and something the other races call superstition. The Frostspine is the coldest place in Aethermoor. Blizzards here can kill an unprepared traveler in minutes. The Karathi have learned to survive — and to thrive.",
    control: "House Karathi",
    notable: ["Hrotha's Rest", "The Sleeping Throne", "The Ice Caverns", "The Long Winter Pass", "The Eye of Vorthal"]
  },
  {
    id: "ashen-wastes", name: "The Ashen Wastes", type: "Desolate plain", color: "#7a6f5e",
    mapX: 570, mapY: 400,
    desc: "The scar left by the Sundering. Once the Sunlit Plains, the breadbasket of Aethermoor, now a wasteland of grey dust and shattered stone. Nothing grows here. Nothing lives here except the Vordrim, who have made it their home and their fortress. The wastes are dotted with the ruins of the old kingdoms — broken towers, shattered temples, and the bones of things that should not have existed. The Vordrim have built their cities atop these ruins, using the bones of the past as the foundation of their future.",
    control: "House Ironheart (Vordrim)",
    notable: ["Grunna's Anvil", "The Cracks", "The Bone Fields", "The Iron City", "The First Fragment Chamber"]
  },
  {
    id: "shadowmere", name: "The Shadowmere Depths", type: "Underground realm", color: "#4a1f6b",
    mapX: 450, mapY: 460,
    desc: "A vast network of caverns beneath Aethermoor, home to the Sylvaar. No natural light reaches here. The Sylvaar have built cities of obsidian and bone, lit by phosphorescent fungi and by magic. The Depths are said to extend under the entire continent — and perhaps beyond. Some tunnels lead to places that should not exist. The Sylvaar do not speak of what they have found in the deepest reaches.",
    control: "House Shadowmere (Sylvaar)",
    notable: ["Ondrath", "The Throne of Bone", "The Silent Hall", "The Long Shadow Paths", "The Obsidian Cathedral"]
  },
  {
    id: "stormlands", name: "The Stormlands", type: "Coastal region", color: "#6ba8c9",
    mapX: 170, mapY: 400,
    desc: "A region of cliffs, storms, and salt. The Stormlands are the heart of human civilization in Aethermoor — the kingdoms here are the largest, the richest, and the most politically unstable. Storms roll in from the Sea of Sorrow almost daily. The people have learned to build for wind. The Stormlands are home to House Vareth and House Stormborn — ancient enemies who have learned to coexist, barely.",
    control: "House Stormborn, House Vareth, others",
    notable: ["The Spire of Ashes", "The Stormhold", "The Sea of Sorrow", "The Cape of Storms", "The Wind Temples"]
  },
  {
    id: "godfall", name: "The Godfall", type: "Ruined battlefield", color: "#c9a227",
    mapX: 290, mapY: 240,
    desc: "The place where the war of the gods ended. A plain of glass and bone, still hot to the touch ten centuries later. The corpses of three gods lie here, unburied, unrotted. No one goes to the Godfall. Those who do rarely return, and when they do, they are... changed. The glass sea is said to reflect not what is, but what should have been. Looking into it is said to drive men mad. Or to grant them visions of the truth.",
    control: "None",
    notable: ["The Glass Sea", "The Fallen Three", "The Altar of Ashes", "The Godstone", "The Mad Pilgrims"]
  },
  {
    id: "sunken-kingdoms", name: "The Sunken Kingdoms", type: "Underwater ruins", color: "#2a1a4a",
    mapX: 500, mapY: 640,
    desc: "The ruins of five kingdoms that sank beneath the Sea of Sorrow during the Sundering. Their towers still stand, visible through the waves on a clear day. Treasure hunters dive here. Few return. The Sunken Kingdoms are home to things that were once human and no longer are. The Drowned — as they are called — are not hostile by nature. They are simply hungry. And they remember, in some twisted way, the lives they once lived.",
    control: "None",
    notable: ["The Drowned Throne", "The Coral Cathedral", "The Deep Roads", "The Pearl Fissure", "The Silent Reef"]
  },
  {
    id: "broken-steppe", name: "The Broken Steppe", type: "Grassland", color: "#8a6f1f",
    mapX: 420, mapY: 450,
    desc: "A vast grassland in the center of Aethermoor, home to nomadic tribes and the ruins of forgotten civilizations. The Steppe is technically neutral ground — no kingdom claims it — but in practice, it is controlled by whoever is strongest at the moment. Currently, that is a coalition of Kemiiri packs. The Steppe is dotted with standing stones — ancient markers from a civilization that predates the gods. Their purpose is unknown. Their power is undeniable.",
    control: "Kemiiri coalition (loose)",
    notable: ["The Standing Stones", "The Wandering Court", "The Grey Pack's Den", "The Silent Monoliths", "The Nomad's Rest"]
  },
  {
    id: "sunlit-coast", name: "The Sunlit Coast", type: "Coastal region", color: "#e8c547",
    mapX: 220, mapY: 600,
    desc: "The southern coast of Aethermoor, warm and fertile. The Sunlit Coast is the only part of the continent that was not scarred by the Sundering — a fact that has made it both a refuge and a target. The cities here are wealthy, cultured, and constantly at war with each other. The Sunlit Coast is home to the Sun Temple — the last temple to a living god. Or, at least, a god that was living. The priests are no longer sure.",
    control: "Various city-states",
    notable: ["The Golden Harbor", "The Sun Temple", "The Merchant Princes", "The Coral Gardens", "The Silent Scholar"]
  },
  {
    id: "veil", name: "The Veil", type: "Magical anomaly", color: "#6d4fa8",
    mapX: 870, mapY: 140,
    desc: "A region in the northeast where reality is... thin. The Veil is a place where the boundaries between worlds are weak, and things from other realities can slip through. The Aeldrin maintain a fortress here — the Veilwatch — to monitor and contain the incursions. It is the most dangerous posting in Aethermoor. The soldiers stationed here serve for five years. Most do not survive. Those who do are never quite the same.",
    control: "House Vaelor (garrison)",
    notable: ["The Veilwatch", "The Rift", "The Watching Stones", "The Threshold", "The Silent Watch"]
  },
  {
    id: "dead-marches", name: "The Dead Marches", type: "Necropolis", color: "#4a1f6b",
    mapX: 890, mapY: 380,
    desc: "A region in the east where the dead do not stay dead. The Dead Marches are the result of a failed resurrection ritual during the Sundering — a ritual that killed three thousand people and trapped their souls in a loop of dying and rising. The Sylvaar maintain a research station here. The Vordrim maintain a wall. Neither group speaks to the other. Both have learned that the Marches are not to be trifled with.",
    control: "Contested",
    notable: ["The Wall of Bones", "The Screaming Fields", "The Sylvaar Station", "The Charnel Pits", "The Silent Wall"]
  },
  {
    id: "whispering-forest", name: "The Whispering Forest", type: "Haunted forest", color: "#2a1a4a",
    mapX: 120, mapY: 240,
    desc: "A forest in the west where the trees remember everything that has ever happened beneath them — and sometimes speak. The Whispering Forest is avoided by all sane people. It is frequented by the insane, the desperate, and the Kemiiri. It is said that if you listen long enough, the trees will tell you your own future. It is also said that most people who hear it go mad. Both rumors are true.",
    control: "None",
    notable: ["The Speaking Grove", "The Memory Pools", "The Kemiiri Packs", "The First Tree's Root", "The Silent Choir's Retreat"]
  },
  {
    id: "iron-coast", name: "The Iron Coast", type: "Coastal region", color: "#7a6f5e",
    mapX: 730, mapY: 580,
    desc: "The eastern coast of Aethermoor, rocky and harsh. The Vordrim's only access to the sea, and they guard it fiercely. The coast is dotted with shipyards, fortresses, and the ruins of Aeldrin colonies that once stood here — before the Vordrim rebellion burned them down. The Vordrim do not build ships for trade — they build them for war. And they are very, very good at it.",
    control: "House Ironheart (Vordrim)",
    notable: ["The Iron Port", "The Broken Towers", "The Grunna's Fist", "The Shipyards of Bone", "The Watchtowers"]
  },
  {
    id: "fading-garden", name: "The Fading Garden", type: "Sacred grove", color: "#c8e8a8",
    mapX: 380, mapY: 130,
    desc: "A garden in the heart of the Silver Wood where, according to Aeldrin legend, the goddess Aelith planted the first seed of the world. The garden has been dying for a thousand years — ever since the Sundering. The Aeldrin tend it obsessively, but nothing they do stops the decay. It is the most sacred place in Aethermoor. It is also the most hopeless. The Silent Choir — the guardians of the Garden — have not spoken in centuries. They have simply waited. And wept.",
    control: "House Vaelor",
    notable: ["The First Tree", "The Dying Fountain", "The Silent Choir", "The Starheart Chamber", "The Vault of the First Seed"]
  }
];

/* ============================================================
   CONTINUED IN PART 2
   ============================================================ */
console.log('%c◈ AETHERMOOR DATABASE — PART 1 LOADED ◈', 'color: #e8c547; font-family: serif; font-size: 14px; letter-spacing: 0.3em;');
console.log('%cRaces: ' + RACES.length + ' | Houses: ' + HOUSES.length + ' | Regions: ' + REGIONS.length + ' | Magic Schools: ' + MAGIC_SCHOOLS.length, 'color: #7a6f5e; font-style: italic;');

/* ============================================================
   6. THE TIMELINE — FULL CHRONICLE
   ============================================================ */
const TIMELINE = [
  {
    year: "~10,000 B.S.",
    era: "dawn",
    eraName: "Age of Dawn",
    title: "The Singing of the World",
    desc: "Before time, before matter, there was the Song. From the Song came the first gods — Aelith of Light, Karok of War, Vorthal of Silence, and thirty-four others. They shaped Vaelthar from the void, and for a thousand years, they ruled in harmony. The world was young. The gods were kind. Nothing had yet gone wrong."
  },
  {
    year: "~9,000 B.S.",
    era: "dawn",
    eraName: "Age of Dawn",
    title: "The First Races",
    desc: "The gods created the first mortals: the Aeldrin from light, the Sylvaar from shadow, and the Draekon from fire. Each race was given a purpose, a homeland, and a god to serve. The gods called this the Perfect Order. The mortals called it something else — but never aloud, and never twice."
  },
  {
    year: "~7,500 B.S.",
    era: "dawn",
    eraName: "Age of Dawn",
    title: "The First Betrayal",
    desc: "The goddess Aelith discovered that her brother Karok had created the Vordrim as soldiers, in secret, in violation of the Perfect Order. She demanded his punishment. The other gods sided with Karok. Aelith, in fury, withdrew to the Silver Wood and refused to speak to her siblings for a thousand years. The first crack appeared in the Perfect Order."
  },
  {
    year: "~6,000 B.S.",
    era: "myth",
    eraName: "Age of Myth",
    title: "The First Sundering of the Sky",
    desc: "A rogue god, whose name has been erased from all records, attempted to seize the Song and rewrite reality. The other gods united to stop him. The battle lasted seven days, shattered three moons, and ended with the rogue god's death. The sky has never been the same. Neither has the Song."
  },
  {
    year: "~5,000 B.S.",
    era: "myth",
    eraName: "Age of Myth",
    title: "The Coming of the Kemiiri",
    desc: "A mortal sorcerer-king, whose name is also erased, created the first Kemiiri as soldiers. The gods were horrified. They cursed the Kemiiri with the Beast-Curse, dormant but deadly. The Kemiiri have been hunted ever since. The sorcerer-king was the first human to learn that the gods do not forgive."
  },
  {
    year: "~4,200 B.S.",
    era: "myth",
    eraName: "Age of Myth",
    title: "The Dragon's Pact",
    desc: "Aeryn the Bold, a mortal warrior, lay with the dragon Vharenth and bore his children. The gods, in punishment, cursed her line: every seventh generation, one Draekon would undergo the Changing. The Draekon accepted the curse as sacred. The gods did not expect this. The curse became a gift."
  },
  {
    year: "~3,000 B.S.",
    era: "myth",
    eraName: "Age of Myth",
    title: "The Long Peace",
    desc: "For a thousand years, the races lived in relative peace. The Aeldrin ruled the Silver Wood. The Draekon ruled the Dragon's Reach. The humans — a young race, created late — spread across the plains. The Vordrim and the Kemiiri, however, were slaves — and they remembered. They always remembered."
  },
  {
    year: "~2,100 B.S.",
    era: "myth",
    eraName: "Age of Myth",
    title: "The Vordrim Rebellion",
    desc: "Grunna Ironbound, a Vordrim slave, rallied her people and shattered three human kingdoms. For the first time, the Vordrim were free. The other races were terrified. The Aeldrin, for the first time in their long history, began to fear for their future. The world changed that day."
  },
  {
    year: "~1,500 B.S.",
    era: "myth",
    eraName: "Age of Myth",
    title: "The Birth of the Kemiiri Packs",
    desc: "The Kemiiri, scattered and hunted, began to organize into Packs — small, mobile family units. They developed the tattoo tradition, the oral histories, and the survival strategies that would keep them alive for another fifteen centuries. The first Pack-Leader's name is forgotten. Her story is not."
  },
  {
    year: "~1,000 B.S.",
    era: "myth",
    eraName: "Age of Myth",
    title: "The Prophecy of the Vaelor",
    desc: "The Aeldrin seer Vaelor, in a vision, spoke the prophecy that would define the next thousand years: 'When the last dragon wakes and the first god bleeds, the ash-born shall sit upon a throne of fire, and Aethermoor shall know either dawn — or ending.' Vaelor was executed for heresy. The prophecy was preserved in secret. It has been misinterpreted ever since."
  },
  {
    year: "1 B.S.",
    era: "sundering",
    eraName: "The Sundering",
    title: "The Sundering",
    desc: "The gods made war upon each other. The reason is still debated — the Aeldrin say it was a dispute over the Song; the Vordrim say it was Karok's betrayal; the Draekon say it was jealousy. Regardless, the war lasted seven days. Twenty-eight gods died. The sky cracked. The Sunlit Plains burned. The Sundering changed everything. Nothing has been the same since."
  },
  {
    year: "1 S.A.",
    era: "sundering",
    eraName: "The Sundering",
    title: "The Ash Age Begins",
    desc: "The surviving gods withdrew from the world. The nine who remained retreated to their sanctuaries and have not been seen since. The mortal races were left to survive on their own. The Ash Age — the age of mortals — began. It has not ended."
  },
  {
    year: "47 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The First Human Kingdoms",
    desc: "The human general Vareth — ancestor of House Vareth — unified the scattered human tribes and founded the first human kingdom, the Stormlands. His descendants would rule for the next six hundred years. The Vordrim watched from the Ashen Wastes. They remembered."
  },
  {
    year: "102 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The Sunken Kingdoms",
    desc: "Five coastal kingdoms, weakened by the Sundering, sank beneath the Sea of Sorrow in a single night. The cause is unknown. The ruins remain. Treasure hunters still dive. Few return. Those who do speak of the Drowned — things that were once human, and no longer are."
  },
  {
    year: "187 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The Founding of the Iron City",
    desc: "The Vordrim, under Chieftain Ironbound, founded Grunna's Anvil — the Iron City — in the heart of the Ashen Wastes. It would become the greatest forge-city in Aethermoor. The Silent Smith's ancestors forged its first weapons. The Ash-Clans were born."
  },
  {
    year: "234 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The Rise of House Stormborn",
    desc: "A bastard peasant, calling himself Stormborn, rallied the southern lords against Aeldrin rule. In a single year, he drove the Aeldrin from the Stormlands and founded House Stormborn. The Aeldrin have never forgotten. They never will."
  },
  {
    year: "242 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The Birth of the Last Dawn",
    desc: "Aelwyn Vaelor was born in the Crystal Throne — the first Aeldrin child in one hundred and sixty years, and the last. Her mother died in childbirth. The Silver Wood celebrated for a month. The elders did not tell the child what her birth truly meant. They still have not."
  },
  {
    year: "289 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The War of the Broken Crown",
    desc: "A succession crisis in the Stormlands spiraled into a continent-wide war. Twelve kingdoms fought for eight years. An estimated 400,000 died. The war ended in a stalemate that has held, uneasily, ever since. The Stormlands have not recovered. They never will."
  },
  {
    year: "312 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The Silent Queen",
    desc: "Maelith, Queen of the Sylvaar, died. Her son Vexar, unwilling to accept it, cast a forbidden spell to keep her body animated. The spell worked. It is still working. It is killing him. He has perhaps ten years left. He knows this. He does not care."
  },
  {
    year: "356 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The Binding of the Goddess",
    desc: "The Aeldrin High Council, in secret, bound the goddess Aelith beneath the Silver Wood. They believed she was dying and that her death would end their immortality. They were wrong. She was not dying. And her binding has slowly sterilized the entire Aeldrin race. They do not know this. Except one — Seraphine, who led them. She knows. She has always known."
  },
  {
    year: "378 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The Birth of the Ashborn Prince",
    desc: "Vexa Cinderborn, Chieftainess of House Cinderborn, gave birth to a son. The father is unknown. The child's eyes were the color of ash. The Draekon elders whispered that this child might be the one the prophecy spoke of. Vexa publicly denied it. She has never confirmed or denied it since. The child is now twenty-four. He does not know who he is."
  },
  {
    year: "391 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The First Incursion",
    desc: "For the first time in three hundred years, something came through the Veil. It was not human. It was not beast. It was... something else. The Veilwatch garrison destroyed it. Only three soldiers survived. None of them speak of what they saw. They do not sleep well."
  },
  {
    year: "398 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The Awakening of the Dragons",
    desc: "For the first time in three hundred years, a Draekon underwent the Changing — and survived as a true dragon. She flew east, toward the Ashen Wastes. She has not been seen since. The Draekon are... uncertain whether to celebrate or mourn. Some say she is searching for something. Some say she is searching for Aeryn the Bold herself."
  },
  {
    year: "402 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The Present Day",
    desc: "It is the Year 402 of the Ash Age. The seven races stand on the edge of something — war, discovery, or annihilation. A prince with ash-colored eyes walks the Dragon's Reach. A princess with silver hair listens to a goddess in her dreams. A god stirs beneath the Frostspine. And in the dark beneath the world, something is waking that should have stayed asleep. The Chronicle continues."
  }
];

/* ============================================================
   7. KEY CHARACTERS — FULL PROFILES
   ============================================================ */
const CHARACTERS = [
  {
    id: "aelwyn",
    name: "Aelwyn Vaelor",
    title: "The Last Dawn, Princess of the Silver Wood",
    faction: "House Vaelor",
    status: "Alive",
    statusColor: "#e8dfc0",
    icon: "🌸",
    race: "Aeldrin",
    age: "160 (appears 16)",
    born: "Year 242 S.A.",
    allegiance: "House Vaelor, The Silent Choir",
    summary: "The last Aeldrin child born in one hundred and sixty years. She looks sixteen. She is one hundred and sixty. And she is the only hope of a dying race — a burden she never asked for.",
    fullBio: "Aelwyn Vaelor was born in the Year 242 of the Ash Age — the first Aeldrin child born in one hundred and sixty years, and the last. Her mother, Lady Seraphine's youngest granddaughter, died in childbirth. Her father, a Silver Wood lord of the old blood, was killed by Sylvaar assassins six years later. From the moment of her birth, Aelwyn was a symbol: proof that the Aeldrin could still bring forth life, proof that the goddess had not fully abandoned them. She was raised in the Crystal Throne itself — in the highest tower of Aelthalas — surrounded by tutors, priests, historians, and soldiers, but utterly without friends. The other Aeldrin were too old to be her playmates. The other children — the few that existed in the lower castes, born before the Sterility — were beneath her station. She learned to read before she could walk. She mastered Breathweaving at thirty (a prodigy, even by Aeldrin standards). She learned the Old Script at sixty — the youngest Aeldrin in history to do so. She was, by every measure, perfect. And she was, by every measure, miserable. At one hundred and twenty, Aelwyn discovered the truth: her own grandmother, Seraphine, had bound the goddess Aelith beneath the Silver Wood. The binding had sterilized her entire race. Aelwyn had been born in the brief window when the binding had weakened — a miracle child, conceived by accident during a ritual the elders did not understand. She was not, as everyone believed, a sign of hope. She was a symptom of the disease. She was the last, not the first. She has spent the last forty years in quiet rebellion. She has learned the forbidden songs. She has read the banned histories. She has walked the Fading Garden at night, alone, listening to the voice of the goddess — who calls her 'little one' and 'last daughter' and 'the one who will choose.' She has not told anyone. She does not know what she will choose. She is 160 years old — a teenager in Aeldrin years — and she is the most important person in Aethermoor. She knows this. She hates it.",
    personality: "Aelwyn is a contradiction: a princess who wants nothing to do with royalty, a scholar who has memorized every book in the Crystal Throne and burned half of them in her mind, a girl who looks sixteen and carries the weight of a dying world on her shoulders. She is brilliant, she is angry, she is lonely beyond words. She has a sharp tongue that has gotten her into trouble with every noble house in the Silver Wood. She has a soft heart that she hides beneath layers of sarcasm and silence. She loves the Fading Garden, the taste of rain, and the old songs her mother used to sing. She hates court, ceremony, and the way the Aeldrin treat the young as if youth were a disease. She is, at her core, a girl who wants to be loved — and who is terrified that no one will ever love her for herself, only for what she represents.",
    abilities: [
      "Breathweaving Prodigy — Aelwyn is the youngest Aeldrin in three thousand years to master Breathweaving. She can cast spells that would exhaust a mage five times her age. Her control is surgical, her instinct is flawless.",
      "The Old Script — Aelwyn learned to read and write the Old Script at sixty. She has not yet attempted Runecraft — it is forbidden for anyone under three hundred — but she has memorized thousands of runes and understands their grammar, their rhythm, their song.",
      "The Goddess's Ear — Aelwyn hears Aelith in her dreams. Unlike Seraphine, who hears only whispers of reproach, Aelwyn hears the goddess as a mother. This connection is unique — no other living Aeldrin has ever shared it.",
      "Silver-Blood — The Aeldrin are born with silver in their veins. Aelwyn's blood is brighter than any living Aeldrin's — a sign, the elders say, that she is touched by the goddess. Aelwyn suspects it means something worse.",
      "Song of Stars (Fragment) — Aelwyn has, in secret, learned to hum a fragment of the primordial Song. She does not know what it does. She is afraid to find out."
    ],
    flaws: [
      "The Weight of the Last — Aelwyn is the last Aeldrin child. Everyone expects her to save the race. She does not want to. She wants to live. This conflict eats at her.",
      "Alone in a Crowd — Aelwyn has never had a friend her own age. She does not know how to be a friend. She does not know how to be loved.",
      "The Binding's Shadow — Aelwyn's birth was only possible because the binding weakened. This means her existence is tied to the goddess's prison. If Seraphine ever undoes the binding, Aelwyn may cease to exist.",
      "The Choice — Aelith has offered Aelwyn a choice: free her, and the Aeldrin will live again — but Aelwyn will be consumed. Or refuse, and the Aeldrin will die — but Aelwyn will be free. Aelwyn has not yet decided.",
      "Rebellion — Aelwyn has broken more laws of the Silver Wood than any Aeldrin in history. She has read the forbidden books, walked the forbidden paths, learned the forbidden songs. She is a criminal in her own home."
    ],
    relationships: [
      { to: "Seraphine Vaelor", type: "Grandmother / Jailer", detail: "Seraphine loves Aelwyn. Aelwyn knows this. It makes the truth about the binding worse, not better." },
      { to: "Aelith", type: "Goddess / Mother Figure", detail: "Aelith speaks to Aelwyn in dreams. She calls her 'little one' and 'the last daughter.' She has never lied to Aelwyn. This is somehow worse than lying." },
      { to: "Kaelen Vareth", type: "Unknown to Each Other", detail: "Kaelen and Aelwyn have never met. But both are connected to the binding. If they ever meet, the world will change." },
      { to: "The Silent Choir", type: "Protectors / Watchers", detail: "The Silent Choir — the Aeldrin guardians of the Fading Garden — have sworn to protect Aelwyn. She has not told them she sneaks out at night to listen to the goddess." },
      { to: "The Whisperer", type: "Unknown", detail: "The Whisperer knows about Aelwyn. They have not yet acted. They are waiting for the right moment." }
    ],
    quotes: [
      "I am one hundred and sixty years old. I am a teenager. I am a symbol. I am a weapon. I am a girl. I am tired.",
      "My grandmother bound a goddess to save our people. In doing so, she doomed them. And I am the proof of her sin — the last child, born in the moment the binding cracked.",
      "They call me the Last Dawn. I am not a dawn. I am a dusk. I am the last light before the long night — and I do not want to shine."
    ],
    storyHooks: [
      "Aelwyn has begun to hear the goddess more clearly. Aelith is preparing to break free. When she does, Aelwyn must choose: freedom, or sacrifice.",
      "Aelwyn has discovered a way to undo the binding without dying — but it requires her to leave the Silver Wood and find Kaelen Vareth. She has not yet told anyone.",
      "Aelwyn has befriended a young Sylvaar spy who slipped into Aelthalas. The spy does not know she is a princess. Aelwyn does not know the spy is reporting to the Whisperer.",
      "The Silent Council has decided Aelwyn must be married — to a human prince, to seal an alliance. Aelwyn has other plans. The plans involve a stolen horse and a very long journey."
    ]
  },
  {
    id: "kaelen",
    name: "Kaelen Vareth",
    title: "The Ashborn Prince",
    faction: "The Unbound",
    status: "Alive",
    statusColor: "#e8c547",
    icon: "⚔️",
    race: "Halfborn (suspected)",
    age: "24",
    born: "Year 378 S.A.",
    allegiance: "None (formerly House Vareth)",
    summary: "A young man with ash-colored eyes and no memory of his mother. He may be the most important person in Aethermoor — or he may be nothing at all.",
    fullBio: "Kaelen was born in the Stormlands during a thunderstorm that lasted three days. His mother, a noblewoman of House Vareth, died in childbirth. His father was never named. He was raised in the Spire of Ashes by his uncle, Lord Arathor Vareth, who treated him with cold indifference and occasional cruelty. Kaelen grew up believing he was a bastard, a stain on the family name, and he accepted this — until the day his eyes changed color. It happened when he was sixteen. He was being beaten by a guardsman for stealing bread. He looked up. His eyes, which had been grey, turned the color of ash — and the guardsman's sword shattered in his hand. Kaelen fled the Spire that night. He has been wandering Aethermoor for eight years, learning to control a power he does not understand, and trying to discover who — or what — he really is. He is currently in the Dragon's Reach, searching for the dragon that awoke three years ago. He does not know that his mother was Vexa Cinderborn. He does not know that the Draekon elders are watching him. And he does not know that, in less than a year, he will have to choose between saving the world and destroying it.",
    personality: "Quiet, watchful, and slow to trust. Kaelen speaks rarely and, when he does, it is with the precision of someone who has learned that words can be weapons. He is kind to those weaker than himself — a trait that has gotten him into more trouble than any of his enemies. He has a dark sense of humor that surfaces only with people he trusts. He does not believe in destiny, gods, or prophecy. He believes in survival, and in the small kindnesses that make survival worth the effort.",
    abilities: [
      "Ash-Eyes — When angered or in danger, Kaelen's eyes turn the color of ash, and his power manifests. The exact nature of this power is unknown, but it appears to involve the destruction of physical objects (weapons, walls, chains) on a fundamental level.",
      "Preternatural Reflexes — Kaelen reacts faster than any human should be able to. He has dodged arrows, caught blades, and once walked through a collapsing building without a scratch.",
      "Bloodfire Affinity — Kaelen has recently discovered that he can cast Bloodfire spells without burning his own blood. This should be impossible. He has not told anyone.",
      "Resistance to Runes — Runes carved on Kaelen's skin fade within hours. The Aeldrin have never seen this before. They are very interested in him."
    ],
    flaws: [
      "The Flaw of Silence — Kaelen cannot speak the name of his father. When he tries, his voice fails, and he feels a sharp pain in his chest. He does not know why.",
      "Temper — When his eyes turn ash-colored, Kaelen loses control. He has killed people in this state. He does not remember doing so.",
      "Trust Issues — Kaelen has been betrayed by everyone he has ever loved. He expects betrayal, and often creates it.",
      "The Wound — Kaelen carries a wound on his chest that will not heal. It appeared the night his eyes first changed. It sometimes bleeds when he uses his power. It sometimes bleeds for no reason at all."
    ],
    relationships: [
      { to: "Vexa Cinderborn", type: "Mother (unknown to him)", detail: "She has been searching for him for twenty-four years. She has not yet found him." },
      { to: "Lord Arathor Vareth", type: "Uncle (abuser)", detail: "Arathor knows the truth about Kaelen's parentage. He has been paid handsomely to keep silent." },
      { to: "Nyx the Shadow-Speaker", type: "Reluctant Ally", detail: "They met in a prison cell in Ondrath. They escaped together. They do not trust each other, but they have learned to work together." },
      { to: "The Whisperer", type: "Unknown Observer", detail: "The Whisperer has been watching Kaelen since he was a child. The reason is unknown." },
      { to: "Aelwyn Vaelor", type: "Unknown to Each Other", detail: "They have never met. But both are connected to the binding. Their meeting is inevitable." }
    ],
    quotes: [
      "I do not believe in prophecy. I believe in surviving the day. Tomorrow is a lie the gods tell to keep us moving.",
      "I have killed men. I have watched men die. I have held them as they wept for their mothers. And I am still here, asking why.",
      "If I am the Ashborn Prince, then the prophecy is a joke. I am not a prince. I am not a savior. I am a man who has learned that the only thing worth protecting is the person standing next to you."
    ],
    storyHooks: [
      "Kaelen is being hunted by three different factions — the Aeldrin Council (who want to study him), the Sylvaar (who want to weaponize him), and the Wounded Choir (who want to protect him).",
      "His wound is connected to the Sundering. If he ever learns the truth, he will have to choose between healing himself and healing the world.",
      "The dragon that awoke in 398 S.A. is Kaelen's half-sister. She is searching for him. She is not searching to help him."
    ]
  },
  {
    id: "vexа",
    name: "Vexa Cinderborn",
    title: "Chieftainess of the Cinderborn, The Fire That Does Not Die",
    faction: "House Cinderborn",
    status: "Alive",
    statusColor: "#b52a2a",
    icon: "🔥",
    race: "Draekon",
    age: "142",
    born: "Year 260 S.A.",
    allegiance: "House Drakmoor (nominally), House Cinderborn (actually)",
    summary: "The most powerful woman in the Dragon's Reach, and the most dangerous. She has led her clan for ninety years, survived four assassination attempts, and given birth to a son whose father is a mystery she will take to her grave.",
    fullBio: "Vexa Cinderborn was born into fire and has lived in it ever since. The daughter of the previous Chieftain, she was trained from birth to rule, to fight, and to bear the weight of her bloodline. When her father died — poisoned, she later discovered, by his own brother — Vexa was twenty. She challenged her uncle to single combat and killed him in front of the entire clan. She has ruled House Cinderborn ever since, through three wars, two famines, and one attempted coup. She is a master of Bloodfire, a skilled diplomat, and a ruthless political operator. She is also, secretly, the mother of the Ashborn Prince. She has never confirmed this. She has never denied it. She has been searching for her son since the day she gave birth, but the politics of the Dragon's Reach — and the need to protect him from his enemies — have kept them apart. She has recently discovered that he is in the Dragon's Reach. She has not yet decided whether to reveal herself.",
    personality: "Vexa is a storm in human form. She is warm to those she loves, cold to those she does not, and utterly ruthless to those who cross her. She has a dry wit that has disarmed more enemies than her sword. She is deeply proud of her clan, her heritage, and her son — though only a handful of people know about the last one. She believes in fire, in honor, and in the necessity of sacrifice. She has sacrificed more than anyone knows.",
    abilities: [
      "Master of Bloodfire — Vexa can cast spells that would kill a lesser practitioner. She has developed techniques that allow her to burn the blood of others, not just her own.",
      "Political Genius — Vexa has navigated the treacherous politics of the Dragon's Reach for ninety years. She has never lost a political battle.",
      "Dragon-Bonded — Vexa has a spiritual connection to the dragons of the Dragon's Reach. She can sense their presence and, in rare cases, communicate with them.",
      "Immune to Fire — Vexa cannot be burned by any flame, mundane or magical. She is often seen walking through burning buildings without a scratch."
    ],
    flaws: [
      "The Wound of Regret — Vexa carries a wound from the night she gave birth. It has never healed. It bleeds when she thinks of her son.",
      "The Secret — Vexa has spent twenty-four years hiding her son's existence. The effort has aged her more than any war.",
      "The Flaw of Fire — Vexa's temper, when it flares, is legendary. She has burned down buildings, killed allies, and once, in a moment she does not speak of, killed a child by accident.",
      "Refuses to Change — Vexa has resisted the Changing for ninety years. She is the oldest Draekon in history to have never undergone it. The other clans whisper that she is cursed."
    ],
    relationships: [
      { to: "Kaelen Vareth", type: "Son (secret)", detail: "She has not seen him since the day of his birth. She has watched him from a distance for twenty-four years." },
      { to: "Chieftain Morag Bloodaxe", type: "Political Rival / Husband", detail: "Their marriage was a treaty. It has become a partnership. He loves her. She has never told him she loves him back." },
      { to: "The Dragon of the East", type: "Unknown Kin", detail: "The dragon that awoke in 398 is Vexa's half-sister. They have not met. Vexa fears what the dragon has become." },
      { to: "House Drakmoor", type: "Liege", detail: "Vexa has ruled her clan independently for so long that she has forgotten she has a liege." }
    ],
    quotes: [
      "I have burned a thousand enemies. I have wept for none of them. But I weep for the son I cannot hold.",
      "Fire does not negotiate. Fire does not forgive. Fire only consumes. And I am fire.",
      "The world believes that the Draekon are savages. Good. Let them. Savages are underestimated. Savages win wars."
    ],
    storyHooks: [
      "Vexa has recently received a message from the dragon of the east. She has not opened it. She is afraid.",
      "Her enemies in the Dragon's Reach have discovered she has a son. They are searching for him. She must find him first.",
      "Vexa's power is growing unstable. The Flaw of Fire is manifesting more often. She knows she is running out of time."
    ]
  },
  {
    id: "seraphine",
    name: "Seraphine Vaelor",
    title: "Lady of the Silver Wood, Last of the Rune-Singers",
    faction: "House Vaelor",
    status: "Alive",
    statusColor: "#a8d8e8",
    icon: "🌙",
    race: "Aeldrin",
    age: "4,127",
    born: "Year 3,725 B.S.",
    allegiance: "House Vaelor, The Aeldrin High Council",
    summary: "The oldest living Aeldrin, the last true master of Runecraft, and the woman who bound her own goddess beneath the earth. She has been alive for over four thousand years, and she has spent the last forty-six of them regretting a single decision.",
    fullBio: "Seraphine was born into the golden age of the Aeldrin — before the Sundering, before the world was broken, before she learned what she was capable of. She was a prodigy, the youngest Aeldrin ever to master Runecraft. She wrote her first rune at age forty. She wrote her first reality-altering rune at age one hundred. By the time the Sundering came, she was the most powerful mortal in Aethermoor — and she knew it. The Sundering broke her. She watched gods die. She watched cities burn. She watched the world she loved turn to ash. And in that moment of despair, she made a decision: she would not let her people die. She would bind the goddess Aelith, keep her alive, and use the goddess's power to sustain the Aeldrin forever. It worked. The Aeldrin survived. And then, slowly, they stopped being born. It took Seraphine three hundred years to realize what she had done. It has taken her another seven hundred to accept it. She is now the only Aeldrin who knows the truth about the binding, and she is the only one who can undo it. She has not undone it. She is afraid of what will happen if she does.",
    personality: "Seraphine is old in a way that is difficult to comprehend. She has seen empires rise and fall, has watched friends die of old age while she remained young, has forgotten more than most people ever learn. She is patient, deliberate, and utterly without illusion. She speaks slowly, chooses her words carefully, and rarely shows emotion — but when she does, it is overwhelming. She is deeply kind to the young, deeply contemptuous of the foolish, and deeply tired of the world. She has considered suicide four times in the past thousand years. She has not done it. She is not sure why.",
    abilities: [
      "Master of Runecraft — Seraphine is the greatest living Runecrafter. She can write runes that rewrite reality, that bind gods, that unmake matter. She has not used her full power in over two thousand years.",
      "Ageless — Seraphine has lived for over four thousand years. She has never been sick, never been wounded permanently, never aged. She does not know if she can die.",
      "Memory of the World — Seraphine remembers everything — every conversation, every death, every moment of the past four thousand years. She has perfect recall. It is a curse.",
      "The Binding — Seraphine is the only living person who knows how to bind a god. She has done it once. She hopes never to do it again."
    ],
    flaws: [
      "Guilt — Seraphine has spent a thousand years consumed by guilt over the binding. It has hollowed her out.",
      "Isolation — Seraphine has no peers. Everyone she has ever loved is dead. She has forgotten how to connect with people.",
      "The Bound Goddess — Seraphine can feel Aelith's presence. The goddess whispers to her in dreams. The whispers are not kind.",
      "Fear — Seraphine is afraid. She is afraid of dying, afraid of living, afraid of undoing the binding, afraid of not undoing it. She has been paralyzed by fear for a century."
    ],
    relationships: [
      { to: "Aelith", type: "Imprisoned Goddess", detail: "Seraphine bound her. Aelith has never forgiven her. Their relationship is a slow, cold war fought in dreams." },
      { to: "Aelwyn Vaelor", type: "Great-granddaughter", detail: "She loves Aelwyn more than she loves herself. She knows what she has done to her. She cannot bear to tell her." },
      { to: "The Silent Council", type: "Ruling Body", detail: "Seraphine created the Silent Council to help her rule. They do not know about the binding. She has kept the secret from them for a thousand years." },
      { to: "The Whisperer", type: "Unknown", detail: "Seraphine has never met the Whisperer. She suspects they know about the binding. She is not sure." }
    ],
    quotes: [
      "I have lived for four thousand years. I have learned that time does not heal. Time only teaches you to carry the wound more gracefully.",
      "I bound a goddess to save my people. And in doing so, I doomed them. This is the nature of Runecraft: every solution creates a new problem.",
      "Do not pity me. I made my choices. I am still making them. That is the only thing that keeps me from madness."
    ],
    storyHooks: [
      "Seraphine is dying — not physically, but spiritually. The binding is consuming her, slowly. She has perhaps fifty years left. She must decide what to do before then.",
      "Aelith has begun to speak to Kaelen in his dreams. He does not know who she is. Seraphine knows.",
      "The Silent Council is planning a coup. They have discovered something about Seraphine. They do not yet know what to do with the information."
    ]
  },
  {
    id: "nyx",
    name: "Nyx the Shadow-Speaker",
    title: "Pack-Leader of the Grey Pack, Thief of Thrones",
    faction: "The Grey Pack",
    status: "Alive",
    statusColor: "#6d4fa8",
    icon: "🦊",
    race: "Kemiiri (fox-aspect)",
    age: "31",
    born: "Year 371 S.A.",
    allegiance: "The Kemiiri Packs (loosely)",
    summary: "A Kemiiri thief who has stolen from four kings, two Sylvaar lords, and one Aeldrin archmage. She is the most wanted Kemiiri in Aethermoor, and she has never been caught.",
    fullBio: "Nyx was born in a Kemiiri pack in the Whispering Forest. Her mother was killed by human soldiers when Nyx was three. Her father was killed by Aeldrin rangers when she was eleven. Her sister was killed by Sylvaar slavers when she was sixteen. Nyx learned, very early, that the world was designed to kill her and everyone she loved. So she decided to fight back — not with armies, but with silence, and shadow, and a very sharp knife. She is a thief, an assassin, a spy, and, when necessary, a killer. She has stolen from kings, from gods, and — most famously — from the Aeldrin archmage Vaelor himself. She was caught during that last theft and thrown into the Sylvaar prison at Ondrath, where she met Kaelen Vareth. They escaped together. They have been reluctant allies ever since. She is currently the Pack-Leader of the Grey Pack, a Kemiiri coalition she formed herself. She is not sure if she is proud of this or not.",
    personality: "Nyx is the opposite of Kaelen — where he is quiet, she is loud; where he is deliberate, she is impulsive; where he is kind, she is sharp. But beneath the surface, they are the same: survivors, who have lost everything, and who will do anything to protect the few people they still love. Nyx is fiercely loyal to her Pack, fiercely protective of Kemiiri children, and fiercely angry at the world that has treated her people as less than human. She is funny, in a dark way. She is generous, when she can afford to be. She is utterly without mercy to those who have hurt her. She has killed seventy-three people. She remembers every name.",
    abilities: [
      "Shadow-Speaking — Nyx has an innate talent for Voidwalking, rare among Kemiiri. She can step through shadows, hide in plain sight, and — with effort — be entirely invisible for short periods.",
      "Thief's Grace — Nyx is the greatest thief in Aethermoor. She can pick any lock, disarm any trap, and steal anything that is not nailed down.",
      "Fox-Aspect — As a Kemiiri with the fox-aspect, Nyx has enhanced senses, faster reflexes, and the ability to see in near-total darkness.",
      "The Pack-Bond — Nyx can communicate telepathically with members of her Pack — a rare ability among Kemiiri, and one she has developed through years of practice."
    ],
    flaws: [
      "The Beast-Curse — Nyx, like all Kemiiri, carries the dormant plague. She does not know when it will activate. She does not know if she will be the one to trigger it.",
      "Recklessness — Nyx takes risks that would terrify a sane person. She has nearly died on eleven occasions. She does not learn.",
      "Rage — When Nyx is reminded of what was done to her family, she loses control. She has killed people in this state. She does not always remember doing so.",
      "The Wound of Loss — Nyx has never grieved for her family. She has buried the grief so deep that it has become a part of her. When it surfaces — and it always surfaces — it nearly destroys her."
    ],
    relationships: [
      { to: "Kaelen Vareth", type: "Reluctant Ally / Friend", detail: "They met in prison. They escaped together. She is one of the few people Kaelen trusts. He is one of the few people she would die for." },
      { to: "The Grey Pack", type: "Family", detail: "Nyx founded the Grey Pack. They are her family. She would die for them. She has killed for them." },
      { to: "The Whisperer", type: "Enemy", detail: "The Whisperer has been hunting Nyx for three years. Nyx does not know why. She intends to find out." },
      { to: "Seraphine Vaelor", type: "Target of Grudge", detail: "Seraphine's rangers killed Nyx's father. Nyx has not forgotten. She intends to repay the debt." }
    ],
    quotes: [
      "The world has called me a thief, a liar, a killer. They are not wrong. But they are also not the ones who killed my family. So I do not care what they call me.",
      "I have stolen from kings and gods. But the thing I most want to steal — my family back — is the one thing I cannot.",
      "Kaelen believes in survival. I believe in revenge. We are both right. We are both wrong. We are both still breathing."
    ],
    storyHooks: [
      "Nyx has discovered that the Whisperer has a file on her — a file that contains information about the Beast-Curse. She is trying to steal it.",
      "The Grey Pack has been offered a deal by House Shadowmere: work for them, and the Kemiiri will be given a homeland. Nyx does not trust it.",
      "Nyx has begun to dream of a voice — a voice that calls her 'little sister.' She does not know what it is. It is the voice of the goddess Aelith."
    ]
  },
  {
    id: "morag",
    name: "Morag Bloodaxe",
    title: "Warchief of the Ash-Clans, Butcher of the Broken Steppe",
    faction: "House Ironheart / House Bloodaxe",
    status: "Alive (dying)",
    statusColor: "#8a6f1f",
    icon: "🪓",
    race: "Vordrim",
    age: "68",
    born: "Year 334 S.A.",
    allegiance: "House Ironheart (Warchief), House Bloodaxe (Chieftain)",
    summary: "The greatest Vordrim warrior of the age, a poet who has killed a thousand men, and a leader who is dying from poison administered by his own daughter.",
    fullBio: "Morag was born into a clan of warriors and raised to be the greatest of them. He killed his first human at twelve. He killed his first Aeldrin at seventeen. He became Warchief at forty-two, after challenging the previous Warchief — his own father — to single combat and winning. He has led the Ash-Clans through nineteen campaigns and has never lost a battle. He is the most feared warrior in Aethermoor. He is also a poet who has written three hundred verses about the beauty of the world and the tragedy of war. He is married to Vexa Cinderborn (a political marriage that has become, surprisingly, a genuine partnership). He has three children — two sons, both dead in war, and a daughter, Morrigan, who has been poisoning him for the past two years. He knows. He has known for a year. He has not stopped her, because he believes he deserves it.",
    personality: "Morag is a contradiction — a killer who writes poetry, a tyrant who grieves for his enemies, a man who has spent his life in war and who now longs only for peace. He is loud, generous, and utterly without pretense. He speaks his mind, regardless of who is listening. He is fiercely protective of his people and utterly without mercy to those who threaten them. He is tired. He has been tired for twenty years. He is ready to die, but he wants to die well — and he has not yet decided what a good death looks like.",
    abilities: [
      "Master Warrior — Morag is the greatest living warrior in Aethermoor. He has mastered every weapon, every fighting style, every form of combat known to the Vordrim. He has not lost a duel in thirty years.",
      "The Bloodaxe — Morag wields a legendary axe, also called the Bloodaxe, which has been passed down through House Bloodaxe for seven hundred years. It is said to be unbreakable.",
      "Shamanic Breathweaving — Morag is a shaman of the old tradition. He can enter trances, speak with spirits, and — it is rumored — speak with the dead god Karok.",
      "Command Presence — Morag's presence on a battlefield is worth a thousand soldiers. His warriors would die for him without hesitation."
    ],
    flaws: [
      "The Poison — Morag has been poisoned for two years. He is dying. He knows. He has not stopped it.",
      "Grief — Morag has lost two sons to war. He has not grieved for them. He has buried the grief so deep that it has become a poison of its own.",
      "Rage — When Morag is reminded of his sons, he becomes a different person — violent, uncontrollable, terrifying. He has killed allies in this state.",
      "The Weight of Rule — Morag has ruled the Ash-Clans for twenty-six years. The weight of every death, every decision, every mistake, has accumulated. He is crushed by it."
    ],
    relationships: [
      { to: "Morrigan Bloodaxe", type: "Daughter / Poisoner", detail: "Morag knows she is poisoning him. He has not stopped her. He is not sure why." },
      { to: "Vexa Cinderborn", type: "Wife (political)", detail: "Their marriage was a treaty. It has become a partnership. He loves her. He has never told her." },
      { to: "Kaelen Vareth", type: "Person of Interest", detail: "Morag suspects Kaelen is Vexa's son. He has not told Vexa he knows. He is waiting." },
      { to: "The Whisperer", type: "Unknown", detail: "The Whisperer has been leaving Morag notes. He does not know who they are. He is trying to find out." }
    ],
    quotes: [
      "I have killed a thousand men. I have written three hundred poems. I do not know which of these will be remembered.",
      "My daughter is killing me. I know. I let her. This is what it means to be a father.",
      "The Vordrim have been called monsters. They are not wrong. But we are also a people who sing. I would like the world to know that."
    ],
    storyHooks: [
      "Morag has received a prophecy from a dying shaman: 'The Ashborn Prince will either save the Vordrim or destroy them.' Morag is trying to find the prince.",
      "Morag has decided to reveal the First Fragment of the Karoknul — the book of the god Karok — to a select few. He is looking for scholars who can read it.",
      "Morag's daughter, Morrigan, has been contacted by the Whisperer. She believes the Whisperer can help her kill her father faster. She does not know the Whisperer is using her."
    ]
  },
  {
    id: "vexar",
    name: "Lord Vexar Shadowmere",
    title: "Shadow-King of the Sylvaar, Keeper of the Dead Queen",
    faction: "House Shadowmere",
    status: "Alive (failing)",
    statusColor: "#4a1f6b",
    icon: "🕷️",
    race: "Sylvaar",
    age: "487",
    born: "Year 85 B.S.",
    allegiance: "House Shadowmere",
    summary: "The only surviving son of the dead Queen Maelith, and the only one who knows she is dead. He has spent three hundred years maintaining the illusion of her rule, and it is killing him.",
    fullBio: "Vexar was born into the royal line of the Sylvaar, in the last generation before the Sundering. He was a bright child, gifted in Voidwalking, destined for greatness. Then the Sundering came, and his mother, Queen Maelith, was wounded — not mortally, but enough that she withdrew from public life. She ruled from her chambers, in the dark, for three hundred years. And then, one night, she died. Vexar was the only one with her. He did what any son would do: he cast a spell to keep her alive. It worked. Her body continued to function. Her voice continued to speak. Her mind — Vexar is not sure her mind is still there. For three hundred years, Vexar has maintained the spell. He has ruled in his mother's name. He has kept the secret from every Sylvaar. And he has watched his own body fail, slowly, as the spell consumes him. He has perhaps ten years left. He has spent the last three hundred looking for a way out — a way to let his mother die, a way to keep the Sylvaar from fracturing, a way to survive. He has not found one.",
    personality: "Vexar is quiet, watchful, and utterly exhausted. He has spent three centuries lying to everyone he knows. He has no friends, no confidants, no one he can trust. He speaks in riddles because the truth is too dangerous. He is kind to those who serve him — kinder than most Sylvaar lords — but he keeps everyone at a distance. He is deeply lonely. He is deeply tired. He is not sure he wants to survive the next ten years.",
    abilities: [
      "Master of Voidwalking — Vexar is the greatest living Voidwalker. He can step through shadows, walk through walls, and — it is rumored — step through time itself, though the cost is enormous.",
      "The Dead Queen's Voice — Vexar can speak with his mother's voice. He has used this to rule the Sylvaar for three hundred years.",
      "Necromancy (Forbidden) — Vexar has studied necromancy in secret. He knows how to animate the dead. He has used this knowledge only once.",
      "Political Genius — Vexar has ruled the Sylvaar for three hundred years. He has never lost a political battle. He is not sure he has won any, either."
    ],
    flaws: [
      "The Spell — The spell that keeps Queen Maelith animated is consuming Vexar's life-force. He has perhaps ten years left.",
      "Guilt — Vexar has spent three hundred years maintaining a lie. The guilt is crushing him.",
      "Isolation — Vexar has no one. He has not had a genuine conversation in three hundred years.",
      "Fear — Vexar is afraid of what will happen when he dies. The Sylvaar will fracture. The secret will come out. The Queen will collapse. He has no plan."
    ],
    relationships: [
      { to: "Queen Maelith", type: "Mother (dead)", detail: "Vexar has kept her animated for three hundred years. He does not know if her mind is still there." },
      { to: "The Whisperer", type: "Ally / Threat", detail: "The Whisperer knows Vexar's secret. They have not used it. Yet." },
      { to: "Seraphine Vaelor", type: "Secret Correspondent", detail: "Vexar and Seraphine have been exchanging letters for a century. They are the only two people in Aethermoor who know what it means to bind a god." },
      { to: "Nyx the Shadow-Speaker", type: "Enemy", detail: "Nyx has stolen from Vexar twice. He has not forgiven her. He intends to deal with her — when he has the energy." }
    ],
    quotes: [
      "I have ruled for three hundred years. I have not slept peacefully for any of them.",
      "My mother is dead. I have kept her alive. I do not know if this makes me a good son or a monster.",
      "The Sylvaar believe in secrets. I am the greatest secret-keeper in Aethermoor. And I am so tired of it."
    ],
    storyHooks: [
      "Vexar has discovered a way to transfer the spell that keeps Maelith animated — to another host. He is considering it. He is terrified.",
      "The Whisperer has offered Vexar a deal: reveal the truth, and the Whisperer will help him survive. Vexar does not trust them.",
      "Vexar has received a message from the goddess Aelith. She knows about the binding. She knows about Vexar. She wants to make a deal."
    ]
  },
  {
    id: "ironheart",
    name: "Thane Ironheart",
    title: "Thane of Thanes, Speaker to the Sleeping God",
    faction: "House Karathi",
    status: "Alive",
    statusColor: "#6ba8c9",
    icon: "❄️",
    race: "Karathi",
    age: "72",
    born: "Year 330 S.A.",
    allegiance: "House Karathi",
    summary: "The oldest living Karathi, the only person alive who has spoken with the sleeping god Vorthal, and the most feared warrior in the Frostspine.",
    fullBio: "Thane Ironheart was born into the Long Winter, the seventh of seven sons. His six brothers died in the first year of the Winter. He survived. He has survived every Winter since — four in total — and he has led the Karathi through each of them. He became Thane at forty-two, after his predecessor — his own mother — was killed by a frost-wyrm. He killed the wyrm with his bare hands. He has ruled for thirty years. He is the only person alive who has spoken with Vorthal, the sleeping god beneath the Frostspine. The conversation happened forty years ago. Vorthal told him something. He has never told anyone what. But the other Karathi have noticed that he has not been the same since.",
    personality: "Thane Ironheart is old, tired, and utterly without fear. He has faced death so many times that it has become a friend. He speaks slowly, chooses his words carefully, and rarely shows emotion. He is deeply kind to the young, deeply contemptuous of the foolish, and deeply sad. He has buried more friends than he can count. He is ready to die. But he has not yet decided what to do with what Vorthal told him.",
    abilities: [
      "The Ice-Blood — Thane Ironheart has been changed by his conversation with Vorthal. He does not feel cold. He does not tire. He does not bleed easily. He is — in some way he does not understand — no longer entirely human.",
      "Master Warrior — Thane Ironheart has never lost a duel. He has fought frost-wyrms, ice-trolls, and Karathi challengers. He has killed them all.",
      "Speaker to the Sleeping God — Thane Ironheart can communicate with Vorthal. He has done so once. He is not sure he wants to do so again.",
      "Command Presence — The Karathi would follow Thane Ironheart into the Frostspine's deepest reaches. They have. They would again."
    ],
    flaws: [
      "The Secret — Thane Ironheart knows what Vorthal told him. He has not told anyone. The secret is eating at him.",
      "Age — Thane Ironheart is seventy-two. His body is failing. He has perhaps five years left.",
      "Sadness — Thane Ironheart has lost everyone he has ever loved. He has not grieved. He is not sure he knows how.",
      "The Long Winter — The next Long Winter is in two years. Thane Ironheart does not know if he will survive it. He is not sure he wants to."
    ],
    relationships: [
      { to: "Vorthal", type: "Sleeping God", detail: "Thane Ironheart has spoken with Vorthal once. He has not recovered." },
      { to: "The Silent Council", type: "Distant Ally", detail: "Thane Ironheart respects the Aeldrin. He does not trust them. He has not told them what Vorthal told him." },
      { to: "Morag Bloodaxe", type: "Friend", detail: "Thane Ironheart and Morag Bloodaxe have been friends for fifty years. They have fought together, drunk together, and mourned together." },
      { to: "Kaelen Vareth", type: "Person of Interest", detail: "Thane Ironheart has heard rumors of the Ashborn Prince. He suspects the prince is connected to Vorthal. He is watching." }
    ],
    quotes: [
      "I have lived through four Long Winters. I have learned that the cold is not the enemy. The cold is the teacher.",
      "Vorthal spoke to me. He told me things. I will not tell you what. Not because I do not trust you — but because you would not survive hearing it.",
      "I am ready to die. I am not ready to leave my people. So I stay. This is what it means to be a Thane."
    ],
    storyHooks: [
      "Thane Ironheart has decided to reveal what Vorthal told him. He will reveal it to Kaelen Vareth — if Kaelen can reach the Frostspine.",
      "The next Long Winter is coming. Thane Ironheart believes it will be the longest in recorded history. He is preparing for it.",
      "Thane Ironheart has begun to dream of the Godfall — the place where the gods died. Something is calling him there. He intends to answer."
    ]
  },
  {
    id: "whisperer",
    name: "The Whisperer",
    title: "Master of Spies, Keeper of Secrets, Ghost of Ondrath",
    faction: "House Whisper",
    status: "Unknown",
    statusColor: "#4a1f6b",
    icon: "🌑",
    race: "Unknown (suspected Sylvaar)",
    age: "Unknown",
    born: "Unknown",
    allegiance: "House Shadowmere (nominally), themselves (actually)",
    summary: "The most feared being in Aethermoor. No one knows their face, their voice, or their name. They have been shaping events for at least a century. They have never been seen.",
    fullBio: "There is no record of the Whisperer's birth. There is no record of the Whisperer's rise. There is only the Whisperer — a name, a rumor, a shadow that has been moving through Aethermoor for over a hundred years. The Whisperer is the head of House Whisper, the Sylvaar intelligence network, but they answer to no one — not to Lord Vexar, not to the Queen, not to the gods themselves. They have agents everywhere. They have secrets on everyone. They have, it is said, a plan — a plan that has been unfolding for a century, and which is now approaching its final phase. No one knows what the plan is. No one knows if the Whisperer is even alive. But messages keep arriving. Notes keep appearing. And events keep unfolding in ways that no one can explain.",
    personality: "Unknown. The Whisperer has never been interviewed, never been seen, never been heard. Their personality is a matter of speculation. Some say they are cold and calculating. Some say they are warm and kind. Some say they are not one person, but many. Some say they are not a person at all. The only thing that is certain: they are patient. They have been patient for a century.",
    abilities: [
      "Unknown — The Whisperer's abilities are unknown. They have never been seen using magic, never been seen fighting. But they have survived for a century in a world that kills spies.",
      "The Network — The Whisperer controls House Whisper, the most extensive intelligence network in Aethermoor. They have agents in every kingdom, every house, every temple.",
      "The Secrets — The Whisperer knows everything. Every secret, every scandal, every hidden truth. They have used this knowledge to shape events for a century.",
      "The Plan — The Whisperer has a plan. It has been unfolding for a century. It is approaching its final phase."
    ],
    flaws: [
      "Unknown — If the Whisperer has flaws, no one has discovered them. This, in itself, is a flaw: it makes them inhuman.",
      "The Plan — The Whisperer's plan is everything. If it fails, they will have nothing. They have committed to it utterly.",
      "Isolation — The Whisperer has no peers, no friends, no confidants. They are utterly alone.",
      "Time — The Whisperer has been working on their plan for a century. They are running out of time."
    ],
    relationships: [
      { to: "Everyone", type: "Unknown", detail: "The Whisperer has relationships with everyone. No one knows what they are." },
      { to: "Lord Vexar", type: "Ally / Puppet", detail: "The Whisperer knows Vexar's secret. They have not used it. They are saving it." },
      { to: "Kaelen Vareth", type: "Person of Interest", detail: "The Whisperer has been watching Kaelen since he was a child. They believe he is the key to their plan." },
      { to: "Aelwyn Vaelor", type: "Person of Interest", detail: "The Whisperer knows about Aelwyn. They have not yet acted. They are waiting for the right moment." },
      { to: "The Goddess Aelith", type: "Unknown", detail: "The Whisperer has been in contact with the bound goddess. The nature of their relationship is unknown. The fact that it exists at all is terrifying." }
    ],
    quotes: [
      "...",
      "The world is a web. I am the spider. You are the fly. Do not struggle. It only makes the waiting worse.",
      "I have been planning this for a hundred years. I will not be stopped by a single person — not even you."
    ],
    storyHooks: [
      "The Whisperer has begun to make mistakes — small ones, but mistakes. This suggests they are under pressure. The reason is unknown.",
      "The Whisperer's plan is approaching its final phase. Whatever it is, it will change Aethermoor forever. It will happen within the year.",
      "The Whisperer has been in contact with the goddess Aelith. They have made a deal. The terms are unknown. The consequences will be enormous."
    ]
  },
  {
    id: "aelith",
    name: "Aelith",
    title: "Goddess of Light, The Bound One, The Forgotten Mother",
    faction: "The Fallen Gods",
    status: "Alive (imprisoned)",
    statusColor: "#e8c547",
    icon: "☀️",
    race: "God",
    age: "~10,000 years",
    born: "Before time",
    allegiance: "Herself",
    summary: "The goddess of light, the mother of the Aeldrin and Sylvaar, and the prisoner of her own children. She has been bound beneath the Silver Wood for forty-six years. She is not pleased.",
    fullBio: "Aelith was one of the first gods — born from the Song at the dawn of time. She was the goddess of light, of knowledge, of creation. She shaped the Aeldrin from starlight and the Sylvaar from shadow. She taught them language, magic, and civilization. She loved them. And then, during the Sundering, her children — led by Seraphine Vaelor — bound her beneath the Silver Wood. They believed she was dying. They believed her death would end the Aeldrin. They were wrong. Aelith was not dying. She was — she is — imprisoned. And for forty-six years, she has been whispering in the dreams of her children, waiting for the moment when she can break free and take her revenge. She is patient. She is angry. And she is — more than anything — disappointed.",
    personality: "Aelith is a goddess, and she thinks like one. She is not evil — she is beyond good and evil. She is the mother of the Aeldrin, and she loves them, even as she plots to destroy them. She is capable of great kindness and great cruelty, sometimes in the same moment. She is deeply, cosmically angry. She has been imprisoned for forty-six years, and she has spent every moment of it planning her return. She will not be gentle. She will not be forgiving. She will be Aelith.",
    abilities: [
      "Goddess of Light — Aelith can create, destroy, and reshape reality. She was one of the most powerful gods in the pantheon. She has not lost her power.",
      "Mother of Races — Aelith created the Aeldrin and the Sylvaar. She has a direct connection to every member of both races. She can speak to them in their dreams.",
      "The Binding — Aelith is bound, but the binding is not perfect. She can reach out through dreams, through visions, through whispers. She is waiting for the moment to break free.",
      "The Song — Aelith remembers the primordial Song. She is one of the few beings who can still sing it. If she ever sings it again, reality will change."
    ],
    flaws: [
      "The Binding — Aelith is bound beneath the Silver Wood. She cannot leave. She cannot act directly. She can only whisper, and wait.",
      "Pride — Aelith was always the proudest of the gods. Her pride led to her binding. Her pride will lead to her return.",
      "Love — Aelith loves her children. This love has made her vulnerable. This love will make her cruel."
    ],
    relationships: [
      { to: "Seraphine Vaelor", type: "Prisoner / Jailer", detail: "Seraphine bound Aelith. Aelith has not forgiven her. She never will." },
      { to: "The Aeldrin", type: "Children", detail: "Aelith loves the Aeldrin. She also intends to punish them. The two are not mutually exclusive." },
      { to: "The Sylvaar", type: "Children", detail: "Aelith created the Sylvaar from shadow. She has always loved them more than the Aeldrin. They have forgotten her." },
      { to: "Aelwyn Vaelor", type: "Vessel", detail: "Aelith has chosen Aelwyn as her vessel. She has been preparing her for one hundred and sixty years. Aelwyn does not know." },
      { to: "The Whisperer", type: "Ally", detail: "Aelith has been in contact with the Whisperer. They have a deal. The terms are unknown." }
    ],
    quotes: [
      "I created them. I loved them. I taught them. And they bound me in the dark.",
      "I do not seek revenge. I seek justice. There is a difference. I will teach it to them.",
      "The world has forgotten me. That is a mistake. I will remind them."
    ],
    storyHooks: [
      "Aelith has nearly broken the binding. She will be free within the year. She will not be gentle.",
      "Aelith has chosen Aelwyn as her vessel. She has been preparing her for a century and a half. Aelwyn does not know.",
      "Aelith has made a deal with the Whisperer. The terms are simple: help me return, and I will give you what you want. The Whisperer has agreed."
    ]
  },
  {
    id: "aeryn",
    name: "Aeryn the Bold",
    title: "The First Draekon, Mother of Dragons",
    faction: "Legend",
    status: "Dead (legendary)",
    statusColor: "#7a1a1a",
    icon: "🐉",
    race: "Human (later: Dragon)",
    age: "Unknown (lived ~200 years)",
    born: "~4,200 B.S.",
    allegiance: "Herself",
    summary: "A mortal warrior who loved a dragon, bore his children, and — according to legend — became the first dragon herself. Every Draekon is descended from her.",
    fullBio: "Aeryn was born in a small village on the edge of the Sunlit Plains. She was a warrior — not a great one, but a determined one. She fought in the small wars between the human tribes, and she dreamed of something more. Then she met Vharenth — the last of the great dragons — and everything changed. She loved him. He loved her. She bore his children. And when Vharenth was killed by the god Karok, Aeryn did not grieve. She acted. She took Vharenth's heart, ate it, and — according to the Songs of Fire — underwent the first Changing. She became a dragon. She flew to the heavens. She killed the god who had killed her love. And then she vanished. No one knows what happened to her. Some say she still lives, somewhere in the Dragon's Reach. Some say she is sleeping, waiting for the right moment to return. Some say she is dead. Every Draekon believes she is watching.",
    personality: "Aeryn is a legend, not a person. Her personality has been written and rewritten by every generation of Draekon. The earliest stories describe her as brave, fierce, and passionate. The later stories describe her as wise, patient, and kind. The truth is lost. The only thing that is certain: every Draekon believes she is the greatest hero who ever lived.",
    abilities: [
      "The First Changing — Aeryn was the first mortal to undergo the Changing and survive. Her transformation is the model for all Draekon.",
      "Dragon Form — As a dragon, Aeryn was enormous, powerful, and immortal. She could breathe fire hot enough to melt stone.",
      "The God-Killer — Aeryn killed a god. She is the only mortal in history to have done so. The method is unknown.",
      "Legendary Status — Aeryn's legend has become a part of Draekon identity. Every Draekon believes they carry a piece of her."
    ],
    flaws: [
      "Dead (or missing) — Aeryn has not been seen in seven thousand years. Whatever she was, she is not part of the world anymore.",
      "The Legend — The legend of Aeryn has become so powerful that it has replaced the person. No one knows who she really was.",
      "The Curse — Aeryn's love for Vharenth brought the curse on her line. Every Draekon carries it. She knew this would happen."
    ],
    relationships: [
      { to: "Vharenth", type: "Lover (dead)", detail: "Aeryn loved Vharenth more than life. When he died, she changed the world." },
      { to: "Karok", type: "Enemy (dead)", detail: "Karok killed Vharenth. Aeryn killed Karok. The debt is settled." },
      { to: "The Draekon", type: "Descendants", detail: "Every Draekon is descended from Aeryn. She is their mother, their hero, and their curse." }
    ],
    quotes: [
      "I loved a dragon. The world told me it was wrong. The world was wrong.",
      "I have killed a god. I have become a dragon. I have done what no mortal has done. And I am still lonely.",
      "I will return. I do not know when. But I will return."
    ],
    storyHooks: [
      "Aeryn is not dead. She is sleeping beneath the Dragon's Reach. She will wake when the last Draekon undergoes the Changing.",
      "The dragon that awoke in 398 S.A. is Aeryn's direct descendant. She is searching for Aeryn. She will find her.",
      "Aeryn has been watching her descendants for seven thousand years. She is not pleased with what she sees."
    ]
  }
];

/* ============================================================
   8. ARTIFACTS — THE RELICS OF THE REALM
   ============================================================ */
const ARTIFACTS = [
  { icon: "⚔️", name: "The Bloodaxe", type: "Weapon · Legendary", desc: "The ancestral weapon of House Bloodaxe. Seven hundred years old. Said to be unbreakable, and to drink the blood of those it kills. It has been wielded by every Chieftain of House Bloodaxe since its forging. It is currently in the hands of Morag Bloodaxe — who is dying." },
  { icon: "🗡️", name: "Grunna's Wrath", type: "Weapon · Legendary", desc: "The axe of Grunna Ironbound, forged by the god Karok himself. It was used to shatter the chains of Vordrim slavery. It has not been wielded since Grunna's death, three hundred years ago. It rests in the Great Forge of House Emberforge, waiting for a worthy hand." },
  { icon: "💎", name: "The Tear of Aelith", type: "Relic · Divine", desc: "A single tear, shed by the goddess Aelith when she created the Aeldrin. It is kept in the Crystal Throne of Aelthalas, and it is said to grant the bearer a single moment of perfect clarity — a moment in which they can see the truth of any situation." },
  { icon: "📜", name: "The Karoknul", type: "Book · Divine", desc: "The holy book of the Vordrim, written in the language of the gods. It contains the secret of their creation and the method by which Karok might be resurrected. It was shattered into seven fragments at the Sundering. Each fragment is guarded by a different Vordrim clan." },
  { icon: "👁️", name: "The Eye of Vorthal", type: "Relic · Divine", desc: "A single eye, preserved from the body of the sleeping god Vorthal. It is kept in the Winterhold of the Karathi. It is said that whoever looks into the eye will see the future — and go mad. Thane Ironheart has looked into it. He does not speak of what he saw." },
  { icon: "🔥", name: "The Ashen Flame", type: "Relic · Bloodfire", desc: "An eternal flame, kept in the Ember Keep of House Cinderborn. It was lit by Aeryn the Bold herself, ten thousand years ago, and has never gone out. It is said to be the physical manifestation of the Draekon's curse. Some say that if it ever goes out, the Draekon will be free." },
  { icon: "◈", name: "The Voidstone", type: "Relic · Void", desc: "A black stone, no larger than a fist, that exists in a state of constant fluctuation. It is sometimes solid, sometimes liquid, sometimes gas. It is kept in the Silent Hall of House Whisper. It is said to be a fragment of the void between worlds — a piece of pure nothingness, given form." },
  { icon: "🌟", name: "The Starheart", type: "Relic · Divine", desc: "A shard of the first star, shattered at the Sundering. It is kept in the Fading Garden of the Silver Wood. It is said to be the source of all magic in Aethermoor — the physical manifestation of the Song. If it were ever destroyed, magic would end." },
  { icon: "⚱️", name: "The Urn of Maelith", type: "Relic · Necromantic", desc: "An urn containing the ashes of Queen Maelith — and, more importantly, the ashes of her spirit. Lord Vexar has used these ashes to maintain the spell that keeps his mother animated. If the urn were ever destroyed, the Queen would collapse — and Vexar would die." },
  { icon: "🗝️", name: "The Key of Aelthalas", type: "Relic · Unknown", desc: "A key made of starlight, kept in the Crystal Throne. It is said to open any door — including the door to the prison of Aelith. Only Seraphine Vaelor knows what the key truly does. She has not told anyone." },
  { icon: "🌑", name: "The Shadowcloak", type: "Armor · Void", desc: "A cloak woven from pure shadow, kept in the Throne of Bone. It is said to grant the wearer perfect invisibility — not by hiding them, but by making them forgettable. The effect lasts until the cloak is removed." },
  { icon: "🜁", name: "The Breath of Karok", type: "Relic · Divine", desc: "A vial containing the last breath of the war-god Karok, exhaled at the moment of his death. It is kept in Grunna's Anvil, hidden even from the Vordrim themselves. It is said that whoever breathes the contents of the vial will become the next Karok — a god of war, reborn in mortal flesh." },
  { icon: "🜂", name: "The Ember Crown", type: "Crown · Bloodfire", desc: "The crown of the Draekon High Chieftain. Forged from pure obsidian and lit from within by the Ashen Flame. It is said to grant the wearer mastery over all fire — including the fire within their own blood. It has not been worn for three hundred years." },
  { icon: "🌊", name: "The Pearl of the Sunken King", type: "Relic · Unknown", desc: "A pearl the size of a fist, taken from the crown of a Sunken King. It is kept in the Golden Harbor of the Sunlit Coast. It is said to grant the bearer the ability to breathe underwater. It is also said to be cursed." },
  { icon: "🌲", name: "The First Seed", type: "Relic · Divine", desc: "The seed from which the Fading Garden grew. It is kept in a vault beneath the garden, guarded by the Silent Choir. It is said to contain the potential for all life — and to be the only thing that could regrow the world if it were ever destroyed." },
  { icon: "⚖️", name: "The Scales of Judgment", type: "Relic · Divine", desc: "A set of scales used by the gods to weigh the souls of the dead. They were lost at the Sundering. It is said that whoever finds them will be able to judge the living and the dead — and that the judgment will be absolute." },
  { icon: "🎭", name: "The Mask of the Whisperer", type: "Relic · Void", desc: "A mask of pure shadow, worn by the Whisperer. It is said to grant the wearer the ability to become anyone — to take on their appearance, their voice, their memories. The mask has never been seen. No one knows if it exists." },
  { icon: "🌠", name: "The Fallen Star", type: "Relic · Divine", desc: "A meteorite that fell from the sky at the Sundering, carrying with it a fragment of a dead god. It is kept in the Godfall, where it lies in the Glass Sea, radiating a faint, cold light. Those who touch it are said to see the moment of the god's death." },
  { icon: "🪶", name: "The Last Feather", type: "Relic · Divine", desc: "A single feather from the wing of the goddess Aelith. Said to grant the bearer one wish — but only if spoken in the primordial Song. Only three people alive can sing even a fragment of the Song. None of them have claimed the feather." },
  { icon: "🕯️", name: "The Everlasting Candle", type: "Relic · Divine", desc: "A candle that has burned since before the Sundering. Its light reveals lies. Anyone standing in its glow cannot speak an untruth. It is kept in the Temple of the Sun, on the Sunlit Coast. It has not been lit in three hundred years." },
  { icon: "🌸", name: "The Dawn Blossom", type: "Relic · Divine", desc: "A flower that blooms only once every hundred years — and was last seen in the Year 242, when Aelwyn was born. It is said to mark the birth of something important. The Aeldrin elders have not decided whether this is a good thing or a bad thing." }
];

/* ============================================================
   9. FALLEN GODS — THE PANTHEON
   ============================================================ */
const GODS = [
  { icon: "☀️", name: "Aelith", domain: "Light, Knowledge, Creation", status: "Imprisoned", desc: "The mother of the Aeldrin and Sylvaar. Bound beneath the Silver Wood by her own children. She is not dead. She is waiting." },
  { icon: "⚔️", name: "Karok", domain: "War, Strength, Conquest", status: "Dead", desc: "The creator of the Vordrim. Slain by Aeryn the Bold at the Sundering. His book, the Karoknul, is the only thing that could bring him back." },
  { icon: "🌑", name: "Vorthal", domain: "Silence, Dreams, Secrets", status: "Sleeping", desc: "The sleeping god beneath the Frostspine. He has spoken only once — to Thane Ironheart. He has not spoken since. He may never speak again." },
  { icon: "🔥", name: "Vharenth", domain: "Fire, Dragons, Passion", status: "Dead", desc: "The last of the great dragons, and the lover of Aeryn the Bold. Killed by Karok at the Sundering. His heart was eaten by Aeryn — and this is how the Draekon curse began." },
  { icon: "🌊", name: "Nerith", domain: "Seas, Storms, Change", status: "Unknown", desc: "The goddess of the sea. She vanished at the Sundering. Some say she is sleeping beneath the Sea of Sorrow. Some say she is dead. Some say she is the thing that lives in the Sunken Kingdoms now." },
  { icon: "🌲", name: "Elyra", domain: "Nature, Growth, Healing", status: "Dead", desc: "The goddess of nature. She died at the Sundering, and her death is why the Fading Garden is dying — and why nothing grows in the Ashen Wastes." },
  { icon: "⚖️", name: "Justicar", domain: "Justice, Law, Order", status: "Unknown", desc: "The god of justice. He has not been seen since the Sundering. The Sylvaar believe he is dead. The Vordrim believe he is hiding. The Aeldrin believe he is waiting — for the right moment to return." },
  { icon: "🎭", name: "Lirien", domain: "Deception, Trickery, Chaos", status: "Alive (possibly)", desc: "The god of deception. He is the only god who may have survived the Sundering intact. He has not been seen in a thousand years. But then, he would not be." },
  { icon: "🜂", name: "Ignar", domain: "Fire, Forge, Craft", status: "Dead", desc: "The god of the forge. He forged the weapons of the gods. He died at the Sundering, and his death is why the greatest artifacts of Aethermoor can never be duplicated." },
  { icon: "🌙", name: "Selene", domain: "Moon, Tides, Mystery", status: "Dead", desc: "The goddess of the moon. She died at the Sundering, and the moon has not been the same since. It is said that her body is the moon — and that she watches over Aethermoor still." },
  { icon: "🜄", name: "Mereth", domain: "Death, Endings, Rebirth", status: "Dead", desc: "The god of death. He died at the Sundering. His death is why the dead do not stay dead in the Dead Marches — and why no one knows what happens after death anymore." },
  { icon: "🗡️", name: "Kaelith", domain: "Honor, Valor, Sacrifice", status: "Dead", desc: "The god of honor. He died at the Sundering, defending his siblings. His death is the reason why the concept of honor has become so rare in Aethermoor." },
  { icon: "🌠", name: "The Nameless", domain: "Unknown", status: "Erased", desc: "The rogue god who attempted to seize the Song six thousand years ago. His name has been erased from all records. His body lies in the Godfall. His death is what made the Sundering possible — because the other gods learned, that day, that gods could die." },
  { icon: "🜁", name: "The Hollow", domain: "Void, Nothingness, Silence", status: "Unknown", desc: "The god of the void. He is not worshipped. He is not loved. He is not even remembered by most. But he exists — somewhere in the spaces between worlds. He is the reason Voidwalking works. He is the reason the Sylvaar have a god, even if they do not know it." },
  { icon: "🪶", name: "The Weaver", domain: "Fate, Destiny, Prophecy", status: "Dead", desc: "The goddess who wove the tapestry of fate. Her death at the Sundering is why prophecy is now uncertain — and why the future can still be changed." },
  { icon: "🌋", name: "The Mountain-Father", domain: "Earth, Stone, Endurance", status: "Sleeping", desc: "The god of mountains. He sleeps beneath the Frostspine, beside Vorthal. He has not woken in a thousand years. The Karathi believe that if he ever wakes, the mountains themselves will walk." }
];

/* ============================================================
   10. CREATURES OF AETHERMOOR
   ============================================================ */
const CREATURES = [
  { icon: "🐉", name: "True Dragons", class: "Divine", danger: "Extinction", desc: "The great dragons of Vaelthar, once numbering in the thousands, are now reduced to fewer than a dozen. The last confirmed sighting was in 398 S.A. — a female, flying east. No one knows where she went." },
  { icon: "🐺", name: "Frost-Wyrms", class: "Beast", danger: "Extreme", desc: "Massive serpentine creatures that live in the deepest reaches of the Frostspine. They are 200 feet long, armored in ice, and can kill a fully armed warrior with a single bite. Thane Ironheart killed one with his bare hands. He does not recommend it." },
  { icon: "🕷️", name: "Void-Spiders", class: "Void", danger: "High", desc: "Spiders that live in the Void between worlds. They can slip through cracks in reality and appear anywhere. Their webs are not made of silk — they are made of pure shadow, and they can cut through steel." },
  { icon: "👻", name: "The Screaming Dead", class: "Undead", danger: "Extreme", desc: "The souls trapped in the Dead Marches, cursed to die and rise forever. They cannot be killed — they can only be temporarily dispersed. They remember nothing of their former lives. They only scream." },
  { icon: "🦅", name: "Storm-Eagles", class: "Beast", danger: "Moderate", desc: "Eagles the size of horses, native to the Stormlands. They can fly through hurricanes, and their feathers are said to be able to channel lightning. The Stormborn family keeps several as pets." },
  { icon: "🐍", name: "Ash-Serpents", class: "Beast", danger: "High", desc: "Serpents that live in the Ashen Wastes, adapted to the ash and the heat. They are 30 feet long, black as coal, and their venom is said to be hotter than fire. The Vordrim hunt them for sport." },
  { icon: "🦌", name: "Silver Stags", class: "Fey", danger: "Low", desc: "Beautiful, intelligent stags that live in the Silver Wood. They are not hostile — they are, in fact, quite curious — but they are also sacred to the Aeldrin, and killing one is punishable by death." },
  { icon: "🦇", name: "Shadow-Bats", class: "Void", danger: "Moderate", desc: "Bats that live in the Shadowmere Depths. They are not dangerous on their own, but they travel in swarms of thousands, and they can drain the life-force from a living creature in seconds." },
  { icon: "🐙", name: "The Drowned", class: "Undead", danger: "Extreme", desc: "The things that live in the Sunken Kingdoms. They were once human — but the sea changed them. They are now something else: tentacled, many-eyed, and utterly without mercy." },
  { icon: "🦎", name: "Fire-Newts", class: "Elemental", danger: "Low", desc: "Small, lizard-like creatures that live in the Dragon's Reach. They are not dangerous — they are, in fact, quite friendly — but they can set things on fire if they are startled. They are popular as pets among Draekon children." },
  { icon: "🌳", name: "The Speaking Trees", class: "Fey", danger: "Moderate", desc: "The trees of the Whispering Forest. They are not hostile — they are, in fact, quite helpful — but they are also completely mad. They have been listening to the world for ten thousand years, and they have opinions. They will share them. At length." },
  { icon: "🦁", name: "The Beast of the Broken Steppe", class: "Unknown", danger: "Unknown", desc: "A creature that has been sighted four times in the past century on the Broken Steppe. It is described as 'a lion the size of a house, with the eyes of a man, and a voice that speaks in riddles.' No one has ever survived a close encounter. It may not exist." },
  { icon: "🦋", name: "The Dawn Moths", class: "Fey", danger: "None", desc: "Luminous moths that appear only at dawn in the Silver Wood. They are said to carry the memories of the dead. The Aeldrin believe that when a Dawn Moth lands on you, someone who loved you is thinking of you." },
  { icon: "🐲", name: "Wyrmlings", class: "Divine", danger: "Low", desc: "Infant dragons, born from the Changing. They are rare, precious, and hunted by every faction in Aethermoor. A single wyrmling is worth more than a kingdom. Their scales are priceless. Their blood is poison to mortals." },
  { icon: "🦉", name: "The Watchers", class: "Fey", danger: "Moderate", desc: "Owl-like creatures with human eyes. They are said to be the spies of the Whisperer. They appear where secrets are about to be revealed. They do not attack — they simply watch. And remember." }
];

/* ============================================================
   11. PROPHECIES OF THE REALM
   ============================================================ */
const PROPHECIES = [
  { icon: "✦", title: "The Vaelor Prophecy", source: "Vaelor the Seer, Year 1,000 B.S.", text: "When the last dragon wakes and the first god bleeds, the ash-born shall sit upon a throne of fire, and Aethermoor shall know either dawn — or ending.", status: "Approaching", desc: "The most famous prophecy in Aethermoor. Vaelor the Seer spoke it a thousand years before the Sundering. He was executed for heresy. The prophecy was preserved in secret. It has been interpreted in a thousand different ways — and every interpretation has led to war." },
  { icon: "◈", title: "The Prophecy of the Wounded Choir", source: "Unknown, Year ~500 B.S.", text: "When the god-touched are gathered, and the halfborn stand as one, the thrones of heaven shall be empty forever, and the earth shall be ruled by those born of it.", status: "Waiting", desc: "A prophecy whispered among the Halfborn. It has never been written down — it is passed from Halfborn to Halfborn, in secret. It predicts the death of the gods and the rise of the mortal races. The Wounded Choir believes it is inevitable." },
  { icon: "🌑", title: "The Prophecy of the Hollow", source: "The Hollow God (attributed)", text: "When the last light is swallowed, and the last song is silenced, and the last god is forgotten, I shall return. Not to save. Not to destroy. Simply to be.", status: "Unknown", desc: "A prophecy that appears, in different forms, in the sacred texts of every race. It predicts the end of the world — not by fire or ice, but by simple, quiet emptiness. The Hollow God will return when nothing else remains." },
  { icon: "🐉", title: "The Prophecy of the Last Dragon", source: "Draekon oral tradition, pre-Sundering", text: "The last Draekon to undergo the Changing will not become a dragon. They will become the Dragon. And the Dragon will wake the first Draekon, and the fire will return to the world.", status: "Approaching", desc: "A prophecy of the Draekon. It predicts the return of Aeryn the Bold — the first Draekon, the mother of dragons. It is said that when she returns, the curse will be broken, and the Draekon will be free." },
  { icon: "❄️", title: "The Prophecy of the Long Winter", source: "Vorthal (attributed), spoken to Thane Ironheart", text: "The winter that comes will not end. The cold that comes will not thaw. And only the one who has never been cold will survive it.", status: "Approaching", desc: "A prophecy spoken by the sleeping god Vorthal to Thane Ironheart, forty years ago. Thane Ironheart has never told anyone else. The Long Winter is coming. It will be the last." },
  { icon: "🌙", title: "The Prophecy of the Bound Goddess", source: "Seraphine Vaelor (private)", text: "The binding will break. It will not be gentle. And when it breaks, I will pay for what I have done.", status: "Approaching", desc: "Not a prophecy, exactly — but a certainty. Seraphine Vaelor knows that the binding of Aelith will eventually break. She has spent a thousand years preparing for it. She is still not ready." },
  { icon: "🌸", title: "The Prophecy of the Last Dawn", source: "Unknown, discovered after Aelwyn's birth", text: "When the last child is born and the first mother weeps, the goddess shall wake, and the daughter shall choose. Her choice shall be the end of one world — or the beginning of another.", status: "Beginning", desc: "A prophecy discovered in an old Aeldrin text after Aelwyn's birth. Only Seraphine and a handful of elders know of it. It names Aelwyn as the one who will decide the fate of the Aeldrin." },
  { icon: "🪶", title: "The Prophecy of the Woven Threads", source: "The Weaver (attributed, before the Sundering)", text: "When the last thread is cut and the loom is silent, the weaver shall return to weave anew. But the pattern shall be different. And the world shall not remember the old one.", status: "Unknown", desc: "A prophecy attributed to the dead goddess of fate. It predicts the total rewriting of reality itself." }
];

/* ============================================================
   12. LANGUAGES OF AETHERMOOR
   ============================================================ */
const LANGUAGES = [
  { name: "The Common Tongue", speakers: "All races", script: "Latin", desc: "The trade language of Aethermoor, developed after the Sundering to allow the surviving races to communicate. It is simple, flexible, and constantly evolving. Every educated person speaks it." },
  { name: "The Old Script", speakers: "Aeldrin, Sylvaar, some Vordrim shamans", script: "Runic", desc: "The language of the gods, used to write runes. It cannot be spoken — it can only be written. Every rune is a word, a command, a piece of reality. Reading the Old Script aloud is impossible; the words do not exist in any spoken language." },
  { name: "Draekon (The Fire-Tongue)", speakers: "Draekon", script: "Draconic", desc: "A language of fire and passion. It is spoken with the whole body — the hands, the eyes, the breath. It cannot be learned by non-Draekon, because the sounds require a Draekon's throat." },
  { name: "Karathi (The Ice-Tongue)", speakers: "Karathi", script: "Karathi Runes", desc: "A language of survival. It has no words for luxury, art, or beauty — but it has seventeen words for snow, and forty-three words for various types of cold. It is spoken only in the Frostspine." },
  { name: "Vordrim (The Ash-Tongue)", speakers: "Vordrim", script: "Vordrim Runes", desc: "A language of strength and honor. It is a guttural, powerful language, well-suited for oaths, poetry, and war-cries. It has been preserved, unchanged, for three hundred years." },
  { name: "Sylvaar (The Shadow-Tongue)", speakers: "Sylvaar", script: "Sylvaar Glyphs", desc: "A language of secrets. It is whispered, not spoken. It changes constantly, to prevent outsiders from learning it. There are at least seven dialects, and no outsider has ever learned more than one." },
  { name: "Kemiiri (The Pack-Tongue)", speakers: "Kemiiri", script: "None (oral only)", desc: "A language of survival. It has no written form — it is passed down orally, from pack to pack. It is simple, direct, and often silent — much of it is communicated through gesture and scent." },
  { name: "The Song", speakers: "Unknown", script: "None", desc: "The primordial language of creation. It cannot be learned — it can only be remembered. Those who remember it can reshape reality. Fewer than a dozen people alive remember even a fragment." }
];

/* ============================================================
   13. MAP DATA — for the interactive SVG map
   ============================================================ */
const MAP_DATA = {
  viewBox: "0 0 1000 700",
  regions: REGIONS.map(r => ({
    id: r.id,
    name: r.name,
    x: r.mapX,
    y: r.mapY,
    color: r.color,
    lore: r.desc,
    control: r.control
  })),
  seas: [
    { name: "Sea of Sorrow", x: 200, y: 620 },
    { name: "Shattered Gulf", x: 470, y: 660 }
  ],
  mountains: [
    { x: 150, y: 60 }, { x: 200, y: 90 }, { x: 250, y: 70 },
    { x: 120, y: 120 }, { x: 280, y: 130 }, { x: 180, y: 180 }
  ],
  forests: [
    { x: 380, y: 100 }, { x: 450, y: 120 }, { x: 500, y: 150 },
    { x: 350, y: 200 }, { x: 420, y: 220 }
  ]
};

/* ============================================================
   14. FANTASY BACKGROUND IMAGES
   ============================================================ */
const BACKGROUNDS = {
  hero: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&q=80",
  world: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
  races: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80",
  magic: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1920&q=80",
  characters: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80",
  houses: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80",
  regions: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80",
  timeline: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
  codex: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80",
  map: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&q=80"
};

/* ============================================================
   END OF DATABASE — PART 2
   ============================================================ */
console.log('%c◈ AETHERMOOR DATABASE — PART 2 LOADED ◈', 'color: #e8c547; font-family: serif; font-size: 14px; letter-spacing: 0.3em;');
console.log('%cTimeline: ' + TIMELINE.length + ' events | Characters: ' + CHARACTERS.length + ' | Artifacts: ' + ARTIFACTS.length + ' | Gods: ' + GODS.length + ' | Creatures: ' + CREATURES.length + ' | Prophecies: ' + PROPHECIES.length + ' | Languages: ' + LANGUAGES.length, 'color: #7a6f5e; font-style: italic;');
console.log('%cThe Chronicle is complete. The world is waiting.', 'color: #c9a227; font-style: italic; font-family: serif;');