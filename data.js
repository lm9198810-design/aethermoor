/* ============================================================
   AETHERMOOR — UNIFIED WORLD DATABASE (v2.0)
   The Complete Chronicle of the Sundered Realm
   
   Volume I — Part 1: Foundation
   (Meta, World Tiles, Races, Magic, Laws)
   ============================================================ */

const WORLD_META = {
  worldName: "Vaelthar",
  continent: "Aethermoor",
  demonContinent: "Xarnath",
  currentEra: "The Ash Age",
  currentYear: 402,
  tagline: "Where gods have fallen and left their thrones empty.",
  summary: "Vaelthar holds two vast continents joined only by legend and divided in fact. Aethermoor lies south of the Black Chasm; Xarnath rises beyond it to the north. The Sundering took place 402 years ago, leaving the Godseal across the gorge and twin mountain walls that have defeated every recorded overland expedition. Aethermoor is not one kingdom: imperial heartlands, free cities, forest courts, mountain holds, clan territories, and underworld states bargain and fight over roads, grain, ore, and old magic. Xarnath is harsh but inhabited, with basalt cities, geothermal basins, deep wells, and rival demon houses beneath the Demon King's rule.",
  calendar: "Years are counted from the Sundering: 'S.A.' = Since Ash, beginning at the Sundering; the current year is 402 S.A. 'B.S.' = Before Sundering. Dates older than the calendar are estimates, often drawn from disputed records.",
  motto: "We write so that the world does not forget.",
  lastUpdate: "402 S.A. — The Chronicle Continues",
  chronicler: "The Silent Choir of Aelthalas",
  worldLaws: {
    mana: "Mana is never destroyed — only transformed. It returns to the world when a creature dies, when a spell fades, when a body decomposes. This is the Law of Conservation, the fourth and final law of magic.",
    lifeForce: "Life-force is different from mana. It is the vitality that sustains a living body. Most creatures cannot transfer it at will. Certain demons can forcibly draw a portion from a dying victim through direct contact or a prepared rite; the gain is temporary and can carry memories, impulses, or madness from the victim. It does not make every killing useful, and it cannot make a demon invulnerable.",
    death: "There is no confirmed afterlife. No god has ever returned from death to describe it. Every faith claims to know what happens. None agree."
  }
};

/* ============================================================
   1. WORLD OVERVIEW TILES
   ============================================================ */
const WORLD_TILES = [
  {
    icon: "world",
    title: "Two Continents, One Wound",
    desc: "Aethermoor stretches south of the Black Chasm; Xarnath lies beyond it to the north. Two parallel ranges of near-impassable mountains hem in the gorge. The Godseal is the only maintained crossing, watched by an order that guards the barrier rather than any single crown. The realms on either side are inhabited, politically divided, and far from fully understood.",
    statLabel: "Continents",
    statValue: "2"
  },
  {
    icon: "swords",
    title: "Four Centuries of Ash",
    desc: "In the 402 years since the Sundering, the chronicles record forty-two major wars over land, trade, divine ruins, and succession. The number is incomplete: smaller border conflicts were often omitted, and each court defines victory differently. Scholars warn that another imperial succession crisis is forming; soldiers along the central roads say it has already begun.",
    statLabel: "Recorded Wars",
    statValue: "42"
  },
  {
    icon: "candle",
    title: "The Silent Gods",
    desc: "No physical proof exists that any god lives or died. Every faith tells a different story. The Aeldrin say Aelith waits beneath the Silver Wood. The dwarves say Vorthal sleeps beneath the Frostspine. The orcs say Karok died at the Sundering. The only evidence of divine power is the Godseal itself — a barrier so vast, so perfect, that no mortal hand could have carved it.",
    statLabel: "Confirmed Gods",
    statValue: "0"
  },
  {
    icon: "scroll",
    title: "The Forbidden Histories",
    desc: "Every victor rewrites the past. Beneath the official chronicles lie banned texts, burned libraries, and the testimony of the dead — preserved in stone and bone. The Silent Choir has catalogued 1,247 works that are considered dangerous to know. They have read them all. They have not been the same since.",
    statLabel: "Banned Texts",
    statValue: "1,247"
  },
  {
    icon: "dagger",
    title: "The Age of Ambition",
    desc: "Across the royal annals spanning several millennia, eighty-eight commoners are recorded as having seized a throne; forty-one died within a year. The figures are incomplete: many small crowns never entered shared chronicles, and some courts counted a regent as a monarch while others did not.",
    statLabel: "Successful Usurpations",
    statValue: "88"
  },
  {
    icon: "eclipse",
    title: "The Demon Threat",
    desc: "Beyond the Black Chasm, the Demon King rules Xarnath through a hierarchy of rival houses. Demons can steal a measure of life-force by ritual or direct contact, but the gain is dangerous and limited; they still train, build, negotiate, and fight over water and territory. The Godseal has held since the Sundering. Its recent hum is the first recorded change in its tone—not proof that it is about to fail.",
    statLabel: "Demon King Age",
    statValue: "10,000+"
  },
  {
    icon: "blood",
    title: "The Blood Debt",
    desc: "Some scholars believe the Sundering left a lasting strain on magic; others argue that local failures come from damaged runes, exhausted ley lines, or political exaggeration. Estimates of how long stable magic will remain range from two centuries to several more. No council has agreed on a test that would settle the question.",
    statLabel: "Estimated Years Left",
    statValue: "~400"
  },
  {
    icon: "blossom",
    title: "The Last Dawn",
    desc: "A single Aeldrin child was born in the Year 242 — the first in one hundred and sixty years, and the last. Her name is Aelwyn Vaelor. She is one hundred and sixty years old, appears sixteen, and is the only hope of a dying race. She did not ask for this. She does not want it. She may be the most important person alive.",
    statLabel: "Aeldrin Children Born",
    statValue: "1"
  },
  {
    icon: "castle",
    title: "The Great Guild Council",
    desc: "Twelve guild branches span the continent — a round table of power brokers, monster hunters, and information brokers who answer to no king. The largest guild sits beside the Abyss in Valerius's Rest, the Imperial City. Its halls are carved from the dungeon's own stone. Its archives go deeper than anyone admits.",
    statLabel: "Guild Branches",
    statValue: "12"
  },
  {
    icon: "abyss",
    title: "The Abyss",
    desc: "One hundred floors. Only two hundred adventurers in history have reached the fortieth. No one has ever returned from the sixtieth. The Abyss is not a cave — it is a wound. It hums. It breathes. It remembers. And at its heart, on a floor no living soul has seen, something waits. The scholars argue about what. The soldiers do not.",
    statLabel: "Confirmed Floors",
    statValue: "100 (claimed)"
  },
  {
    icon: "skull",
    title: "The Beast-Curse",
    desc: "The Kemiiri carry a dormant plague that they cannot transmit to each other but can transmit to all other races. It activates when their population drops below one thousand. They are at fourteen hundred. The elders know. They have not told the young. They are running out of time.",
    statLabel: "Kemiiri Remaining",
    statValue: "~1,400"
  },
  {
    icon: "waves",
    title: "The Mistlands",
    desc: "Far to the west, beyond the Sea of Sorrow, lies an island wrapped in perpetual mist. Every ship sent to explore it has vanished. Every adventurer who has gone has not returned. The Mistlands are not on any official map — but they are on every sailor's chart, marked with a single word: 'Don't.'",
    statLabel: "Expeditions Returned",
    statValue: "0"
  }
];

/* ============================================================
   2. THE TEN RACES OF THE WORLD — FULL PROFILES
   ============================================================ */
const RACES = [
  {
    id: "humans",
    name: "Humans",
    epithet: "The Fractured Crowns",
    category: "humanoid",
    icon: "crown",
    shortDesc: "The most numerous race of Aethermoor, and the most divided. Where elves and dwarves find unity, humans find only ambition — and the ambition of one emperor once carved the largest empire the world has ever known.",
    traits: ["Ambitious", "Numerous", "Adaptable", "Divided"],
    fullDesc: "Humans are younger than the oldest peoples of Vaelthar, but their cities, languages, and kingdoms have spread quickly. In the four centuries since the Sundering, human history has been shaped by emperors, rival courts, trade leagues, and succession wars. Emperor Valerius the Unbroken once united many human territories and founded the Valerian Empire, the largest human state recorded in the common annals. The empire later fractured into rival successor realms; the current Valerian court still claims continuity, but its authority is strongest around its central heartlands and weaker wherever local lords control roads and grain. Humans are neither inherently good nor evil. Their ambition makes them capable of extraordinary cooperation—and of ruinous betrayal.",
    secret: "The Valerian Empire is not truly dead — it is merely sleeping. The current emperor, a distant descendant of Valerius, has been quietly forging alliances and stockpiling mana-stones for forty years. He believes he is destined to reunite humanity. He is probably right. And he is willing to do anything — anything — to make it happen. Even if 'anything' means opening the Godseal.",
    stats: {
      lifespan: "60-90 years",
      population: "~4,000,000",
      homeland: "The Central Continent",
      capital: "Valerius's Rest (Empire) + a dozen rival capitals",
      alignment: "Any",
      magicAffinity: "Breathweaving"
    },
    culture: "Human culture is not one culture — it is thousands. Every kingdom has its own customs, its own gods, its own grudges. What unites them is a shared belief in human potential — and a shared willingness to betray it for a crown. Human cuisine is varied and rich, using everything from the wheat of the Heartlands to the fish of the Sunlit Coast. Human music is loud and passionate. Human art is obsessed with legacy — with being remembered.",
    notable: ["Emperor Valerius the Unbroken (historical)", "The Emperor (current)", "Lord Arathor Vareth"],
    relations: {
      allies: ["Varies by kingdom"],
      enemies: ["Varies by kingdom", "Orcs (universally)"],
      neutral: ["Elves", "Dwarves"]
    }
  },
  {
    id: "aeldrin",
    name: "Aeldrin",
    epithet: "The Firstborn of the Silver Wood",
    category: "humanoid",
    icon: "moon",
    shortDesc: "The ageless lords of the Silver Wood, whose memories stretch back before the Sundering and whose pride outlasts their dying bloodline.",
    traits: ["Ageless", "Silver-blooded", "Arcanists", "Ancient"],
    fullDesc: "The Aeldrin were the first race blessed by the goddess Aelith, granted immortality and an unbroken connection to the arcane weave. For five thousand years they ruled Aethermoor as philosopher-kings, building cities of crystal and starlight among the giant trees of the Silver Wood. They were the keepers of the runes, the interpreters of prophecy, and the self-appointed wardens of the world. But immortality is a curse disguised as a gift: the Aeldrin have forgotten how to change. They have forgotten how to hope. And now, three millennia after Aelith's binding, they are quietly dying out — not from war or plague, but from the simple, devastating fact that no Aeldrin child has been born in one hundred and sixty years. Except one. The Last Dawn. And she does not want to be. The Aeldrin are a people waiting to die — but they are also a people who refuse to admit it. They hold their courts. They recite their poetry. They tend their failing gardens. They pretend, every day, that everything is fine.",
    secret: "The Aeldrin are not dying from natural causes. Their goddess, Aelith, still lives — imprisoned beneath the Silver Wood by her own children, who feared her judgment. As long as she remains bound, the Aeldrin are sterile. They have imprisoned their own salvation. And the one child born — Aelwyn Vaelor — exists only because the binding cracked for a single decade.",
    stats: {
      lifespan: "Immortal",
      population: "~39,999",
      homeland: "The Silver Wood",
      capital: "Aelthalas, the Crystal Throne",
      alignment: "Lawful Neutral",
      magicAffinity: "Runecraft, Song of Stars, Breathweaving"
    },
    culture: "The Aeldrin believe in a rigid caste system called the Ladder of Stars, with the Highborn at the top, the Lowborn at the bottom, and the Silverless (those born without arcane sight) condemned to servitude. Their art is bound in rules. Their music is mathematical. Their architecture is frozen in amber. They have not produced a truly new piece of art in seven hundred years. They do not consider this a problem. They consider this proof of their refinement. Their food is delicate and subtle — flower-petal soups, honey-breads, silver-wine. They eat slowly. They savor everything. They have so little left to savor.",
    notable: ["Seraphine Vaelor", "Aelwyn Vaelor", "Lord Arathor", "The Silent Council"],
    relations: {
      allies: ["Dwarves (trade)"],
      enemies: ["Sylvaar"],
      neutral: ["Humans", "Draekon", "Orcs", "Karathi", "Kemiiri", "Halfborn", "Half-Demons"]
    }
  },
  {
    id: "sylvaar",
    name: "Sylvaar",
    epithet: "The Shadowed Kin",
    category: "humanoid",
    icon: "spider",
    shortDesc: "Elves who chose the dark over death, and have paid for it every day since.",
    traits: ["Shadow-bound", "Cunning", "Underground", "Secretive"],
    fullDesc: "The Sylvaar were once Aeldrin — the second-born of the goddess Aelith, given to the shadows so that the firstborn might keep the light. For ten thousand years they served as spies, assassins, and secret-keepers. When the Sundering came, the Sylvaar did what they always did: they survived. They fled into the depths of the world, where light never reaches, and there they built cities of obsidian and bone. But the dark demands a price. The Sylvaar have become something else. Their eyes have adjusted. Their skin has paled. Their souls have dimmed. They do not remember the sun. They do not miss it. They have forgotten what it felt like.",
    secret: "The Sylvaar Queen, Maelith the Ever-Living, is dead. She has been dead for three hundred years. But her body still sits on the Obsidian Throne, animated by a spell that her son Vexar renews every night. No Sylvaar knows this. When Vexar dies — and he is dying — the Queen will collapse, and the Sylvaar will have no ruler, no purpose, and no light.",
    stats: {
      lifespan: "Immortal (but rarely reaches 500)",
      population: "~90,000",
      homeland: "The Shadowmere Depths",
      capital: "Ondrath, the Throne of Bone",
      alignment: "Neutral Evil",
      magicAffinity: "Voidwalking, Runecraft"
    },
    culture: "Sylvaar society is a web of secrets, favors, and debts. Everyone owes someone. Everyone is owed by someone. Titles are meaningless; leverage is everything. They have no written history — the past is passed down orally, and often changed in the telling. Their art is beautiful and disturbing. Their music is silence made audible. Their food is pale and flavorless — they eat for function, not for pleasure. They have forgotten that food can be pleasurable.",
    notable: ["Maelith the Ever-Living", "Lord Vexar", "The Whisperer"],
    relations: {
      allies: ["None"],
      enemies: ["Everyone"],
      neutral: []
    }
  },
  {
    id: "dwarves",
    name: "Dwarves",
    epithet: "The Stoneborn",
    category: "humanoid",
    icon: "hammer",
    shortDesc: "Miners, engineers, and smiths without equal. The dwarves of the Frostspine carve their cities into the bones of the world — and their loyalty into the bones of their people.",
    traits: ["Stoneborn", "Engineers", "Loyal", "Stubborn"],
    fullDesc: "The dwarves are the oldest of the mortal races — created not by the gods, but by the world itself. They believe they were born from the stone of the Frostspine, and they may be right. For ten thousand years they have lived beneath the mountains, carving cities from the living rock, forging weapons that will outlast empires, and keeping their promises with the stubbornness of the stone they love. Unlike humans, dwarves have never known civil war on a grand scale. They are unified by a shared culture, a shared history, and a shared code of honor. And unlike the Aeldrin, they are not dying out — they are thriving. The dwarves are the only race that has never lost a war of defense — because in ten thousand years, no one has ever successfully invaded a dwarven hold.",
    secret: "The dwarves are not native to the Frostspine. They fled there — from something. Their oldest legends speak of a 'Deep Dark' that drove them from their original homeland, somewhere beneath the Shadowmere Depths. They have never gone back. They never will. And they have never told anyone what they found down there.",
    stats: {
      lifespan: "150-250 years",
      population: "~800,000",
      homeland: "The Frostspine",
      capital: "Hearthforge, the Iron Hold",
      alignment: "Lawful Good",
      magicAffinity: "Runecraft, Earth Magic"
    },
    culture: "Dwarf culture is built on three pillars: craft, clan, and contract. A dwarf who cannot craft is not a dwarf. A dwarf without a clan is not a person. A dwarf who breaks a contract is dead to his people — literally, in some cases. Dwarven cuisine is rich and hearty — roasted meats, dark breads, fermented beverages that could strip the paint from a wall. Dwarven music is loud, rhythmic, and communal — sung in taverns, in forges, in the deep places where the sound echoes for miles.",
    notable: ["Thane Ironheart", "The Silent Smith", "Grimli the Forgeborn"],
    relations: {
      allies: ["Aeldrin (trade)"],
      enemies: ["Orcs"],
      neutral: ["Humans", "Draekon", "Karathi", "Kemiiri", "Halfborn", "Half-Demons"]
    }
  },
  {
    id: "draekon",
    name: "Draekon",
    epithet: "The Dragon-Blooded",
    category: "humanoid",
    icon: "dragon",
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
    culture: "Draekon society is organized into seven Great Clans: Ember, Cinder, Ash, Smoke, Blaze, Forge, and Wyrm. Marriage between clans is common and political. Duels are frequent and often fatal. Their poetry is short, brutal, and beautiful. They do not believe in an afterlife; they believe in being remembered by fire. Draekon cuisine is built around fire and meat — roasted, seared, charred. They drink molten-metal cocktails that would kill a human. Their music is percussion and drums, played on obsidian instruments that ring like bells.",
    notable: ["Aeryn the Bold (legendary)", "Vexa Cinderborn", "The Ashborn Prince"],
    relations: {
      allies: ["House Vareth"],
      enemies: ["Aeldrin", "Sylvaar"],
      neutral: ["Humans", "Dwarves", "Orcs", "Karathi", "Kemiiri", "Halfborn", "Half-Demons"]
    }
  },
  {
    id: "orcs",
    name: "Orcs",
    epithet: "The Blood of Karok",
    category: "humanoid",
    icon: "axe",
    shortDesc: "Once soldiers of a dead god, now a people without a purpose — and without a home that will have them. The orcs raid, pillage, and enslave. They do not apologize. They do not explain. They do not forgive.",
    traits: ["Warlike", "Tribal", "Slavers", "Hated"],
    fullDesc: "The orcs were not born — they were forged. The war-god Karok created them as soldiers in the divine wars, shaping them from blood and iron, giving them strength beyond any mortal race and a hunger for battle that would never be sated. When Karok fell at the Sundering, his soldiers were left without a purpose — and without a master to restrain them. They became raiders. Then slavers. Then monsters. For three hundred years, the orcs have roamed the Ashen Wastes in warbands and tribes, taking what they want and killing what they don't. They are hated by every race. They hate every race. And they would not have it any other way. The only law among orcs is the law of the strongest — but even the strongest must earn the loyalty of his warband, or he will be killed in his sleep. And there is always someone stronger. Always.",
    secret: "The orcs are not naturally cruel. They were created to be cruel — by a god who is now dead. Karok's death-spell still runs in their blood, compelling them toward violence. If Karok were ever resurrected — or if the spell were ever broken — the orcs might become something else. Something better. But the Karoknul — the only book that could resurrect or release them — is shattered into seven fragments, and each fragment is held by a different orc tribe. And none of them can read it.",
    stats: {
      lifespan: "40-60 years",
      population: "~1,200,000",
      homeland: "The Ashen Wastes",
      capital: "None — dozens of warband camps",
      alignment: "Chaotic Evil",
      magicAffinity: "Bloodfire"
    },
    culture: "Orc culture is built on strength, loyalty to the warband, and the belief that the weak exist to serve the strong. They do not farm. They do not trade — they take. Their slaves include humans, elves, dwarves, and Kemiiri. The only law among orcs is the law of the strongest — but even the strongest must earn the loyalty of his warband, or he will be killed in his sleep. Orc cuisine is whatever they can catch — raw, bloody, unseasoned. They do not cook. They do not need to. Orc music is drums and war-horns — sound that carries for miles, that terrifies enemies, that announces the coming of the warband.",
    notable: ["Grunna Ironbound (historical — the first orc to break a warband apart from within)", "Warboss Karog the Red", "Grishka the Slaver"],
    relations: {
      allies: ["None"],
      enemies: ["Everyone"],
      neutral: []
    }
  },
  {
    id: "kemiiri",
    name: "Kemiiri",
    epithet: "The Beastfolk",
    category: "beast",
    icon: "fox",
    shortDesc: "Neither human nor beast, and hated by both. The Kemiiri have learned that the only law that matters is the one you write yourself.",
    traits: ["Beast-blooded", "Adaptable", "Outcast", "Cursed"],
    fullDesc: "The Kemiiri are the descendants of an ancient magical experiment — the attempt by a long-dead sorcerer-king to create the perfect soldiers by grafting beast-spirits onto human souls. The experiment succeeded. The soldiers were perfect. Then they turned on their creator, and the world turned on them. For seven thousand years the Kemiiri have been hunted, enslaved, and exterminated by every other race. They have survived because they are adaptable: each Kemiiri manifests a different beast-aspect at birth, giving them unique abilities. Some have wolf-aspects. Some have fox-aspects. Some have bird-aspects, or serpent-aspects, or even rarer things. They live in packs — temporary family units — that form and dissolve as needed. They have no homeland. They have no capital. They have only each other.",
    secret: "The Kemiiri carry a dormant plague — the Beast-Curse — that they cannot transmit to each other but can transmit to all other races. The sorcerer-king's death-spell, woven into their blood, is designed to activate when the Kemiiri population drops below one thousand. They are currently at fourteen hundred. The elders know. They have not told the young. They are running out of time.",
    stats: {
      lifespan: "40-60 years",
      population: "~1,400",
      homeland: "Scattered",
      capital: "None",
      alignment: "Chaotic Neutral",
      magicAffinity: "Breathweaving, Bloodfire (rare)"
    },
    culture: "The Kemiiri have no unified culture, only the shared experience of persecution. They organize into 'Packs' — temporary family units. Their tattoos are not decorative — they record every escape, every rescue, every loss. A Kemiiri's skin is their autobiography. Their food is whatever they can find — foraged, hunted, stolen. Their music is the songs of survival — call-and-response, passed down orally, changing with every pack.",
    notable: ["Nyx the Shadow-Speaker", "Old Sable", "The Grey Pack"],
    relations: {
      allies: ["None officially"],
      enemies: ["Everyone at some point"],
      neutral: []
    }
  },
  {
    id: "halfborn",
    name: "Halfborn",
    epithet: "The God-Touched",
    category: "humanoid",
    icon: "eye",
    shortDesc: "Mortals altered by divine contact or uncertain divine lineage. Their gifts are real, their limits are individual, and their weaknesses are never the same.",
    traits: ["Divine-blood", "Cursed", "Powerful", "Hunted"],
    fullDesc: "The Halfborn are not a people with a shared homeland. They are rare individuals whose lives have been changed by a divine parent, a broken rite, or prolonged exposure to a god-touched relic. Their abilities vary: one may hear a fragment of another person's memory, while another can bend flame or glimpse possible futures. Each develops a distinct Flaw linked to the same source as their gift. Power therefore brings a practical cost, not a universal ranking above ordinary mages. Many die young because their families hide their symptoms or powerful institutions seek to study them. Others live quietly with careful rules and trusted companions.",
    secret: "A forbidden doctrine claims that killing enough Halfborn in one ritual could restore a divine parent to the world. No reliable evidence supports it. The doctrine has nevertheless led to disappearances and murders, and the Wounded Choir was formed in part to hide children whose strange abilities place them at risk. Some members blame the gods; others want only to stop the hunts. The group has no single plan to kill or resurrect any deity.",
    stats: {
      lifespan: "20-60 years",
      population: "~50",
      homeland: "None",
      capital: "None",
      alignment: "Any",
      magicAffinity: "All schools"
    },
    culture: "There is no Halfborn nation or common culture. Most remain within the communities that raised them, if those communities are safe. The Wounded Choir is a loose network of healers, couriers, and safe-house keepers that protects some Halfborn children and records dangerous cases. Its members disagree about theology and politics; protecting a child does not require believing a prophecy.",
    notable: ["Kaelen Vareth", "Aelwyn Vaelor", "The Blind Oracle"],
    relations: {
      allies: ["Themselves"],
      enemies: ["Gods"],
      neutral: ["Mortals"]
    }
  },
  {
    id: "halfdemons",
    name: "Half-Demons",
    epithet: "The Crossroads Blood",
    category: "humanoid",
    icon: "eclipse",
    shortDesc: "Rare children of two lineages. Their bodies carry a mortal pulse and demonic mana, a combination the Godseal was never designed to judge.",
    traits: ["Mixed-blood", "Ember Eyes", "Unstable Mana", "Outcast"],
    fullDesc: "Half-Demons are rare children of a demon and a mortal, sometimes born from a pact that binds two lives rather than from affection. Most can pass as human at a glance; their eyes turn ember-red when demonic mana rises, and a few bear horns, unusual teeth, or a shadow that moves against the light. Their mortal half gives them a finite life and a stable sense of self. Their demonic half grants them a deep reserve of mana, but not the demons' predatory ability to replenish it by taking life. Strong spells therefore cost them dearly: fever, memory loss, or years of life. They are feared by communities that remember demon raids and distrusted by demons who see mortality as weakness. They are not a hidden super-race, and no two half-demons share the same gifts.",
    secret: "The Godseal bars demonic life-force, not ancestry. No Half-Demon can cross while the seal is closed. However, an unusual mixed signature may cause a ward to react differently, which makes Half-Demons relevant to the current investigation without making them living keys. The Demon King wants such cases captured because one might reveal a flaw in the barrier—or a way to mend it. The Wounded Choir shelters hunted Half-Demons and records what happens to them; it does not recruit every child into a prophecy. The Valerian court seeks witnesses to test the old wards, though its factions disagree on whether to protect, study, or exploit them. A fragmentary prophecy may refer to Kaelen Vareth, but the wording is disputed and the evidence is incomplete.",
    stats: {
      lifespan: "90-180 years (varies by lineage and magic use)",
      population: "A few hundred reliably documented; the true number is unknown",
      homeland: "Scattered border towns and hidden refuges",
      capital: "None; no unified state",
      alignment: "Varies by individual",
      magicAffinity: "Breathweaving; volatile demonic mana"
    },
    culture: "There is no half-demon nation or single culture. Most live within the communities that raised them, conceal their ancestry where it is unsafe to reveal, and keep local customs. A loose network called the Wounded Choir offers safe houses, healers, and false travel papers to those being hunted. Some refuse its help; others distrust its habit of recording their lives. The Whisperer has exploited a few for espionage, while ordinary people sometimes shelter them for reasons unrelated to prophecy. Their shared condition creates a fragile network, not a secret kingdom.",
    notable: ["Kaelen Vareth (suspected)", "The Red-Eyed Wanderer", "The Wounded Choir"],
    relations: {
      allies: ["Themselves"],
      enemies: ["Demons", "Humans"],
      neutral: ["Other races"]
    }
  },
  {
    id: "demons",
    name: "Demons",
    epithet: "The Lords of Xarnath",
    category: "otherworldly",
    icon: "demon",
    shortDesc: "The people of Xarnath are ageless, not invulnerable. Their courts prize strength, but their survival depends just as much on wells, bargains, supply roads, and control of scarce resources.",
    traits: ["Ageless", "Red-Eyed", "Life-Drainers", "Tyrannical"],
    fullDesc: "Demons are an old people of Xarnath, commonly marked by ember-red eyes and, in some lineages, horns or other traits. They do not age as mortals do, but fatal wounds can kill them and long periods without life-force leave them diminished. A demon can draw a portion of vitality from a dying victim through direct contact or a prepared rite; the gain is limited, never guaranteed by every killing, and may leave the taker carrying fragments of the victim's memory. This practice made conquest profitable to some demon lords, but it also created rituals, taboos, and political disputes over who is allowed to feed. Demons train in arms and magic, maintain cities around deep wells and geothermal farms, and trade under armed truce when it serves them. Their societies are harsh, not mindless: the Demon King rules by balancing rival houses that would otherwise turn Xarnath into permanent civil war.",
    secret: "The Demon King is old enough to remember the first wars with the gods, but legends exaggerate his reach. He cannot command every demon's loyalty, and he fears the older houses that withdrew into Xarnath's deep vaults after he took the throne. His public insistence that the Godseal must never fail is strategic as well as defensive: if the barrier fell, Aethermoor's armies would invade, Xarnath's rival houses would unite against him, and the world beyond the chasm would become a battlefield. Some of his agents quietly seek knowledge to repair the seal; others would rather weaponize the hum.",
    stats: {
      lifespan: "Infinite (barring violence)",
      population: "~30,000,000 (Xarnath)",
      homeland: "Xarnath",
      capital: "The Bone Throne, deep in Xarnath",
      alignment: "Lawful Evil",
      magicAffinity: "Demonic Magic, Bloodfire, Voidwalking"
    },
    culture: "Demon culture is built around house loyalty, ritualized contests, resource control, and fear of political weakness. The strongest may gain status through battle, but a lord who cannot secure water, defend a road, or honor a treaty soon loses followers. Some factions consider life-force harvesting sacred; others treat it as a dangerous last resort because of the memories it can transfer. Markets exist under guard, often during truces. Their art celebrates conquest, endurance, and the names of the dead—not because every demon loves war, but because a conquered house risks losing its history.",
    notable: ["The Demon King", "The Forgotten Ones (older demons)", "The Demon Council"],
    relations: {
      allies: ["None"],
      enemies: ["Everyone"],
      neutral: []
    }
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
    icon: "wind",
    color: "#6ba8c9",
    desc: "Breathweaving is the most widely practiced form of magic in Aethermoor, and the most misunderstood. It draws upon the Breath — the fundamental life-force that animates all living things. Every creature has a finite reserve of Breath. Breathweaving spends it. A simple spell might cost an hour of life. A great spell might cost a decade. Those who weave recklessly age prematurely, sicken, and die. Those who weave wisely can extend their lives — a secret the Aeldrin guard jealously. Breathweaving is taught in academies from the age of six. It is the magic of healing, of warding, of elemental manipulation. It is the magic of everyday life.",
    source: "Life-force (Breath)",
    cost: "Aging, exhaustion, and ultimately death",
    users: "Everyone (except Sylvaar and Demons)",
    difficulty: "Low to master, high to use well",
    combatUse: "Wards, healing, elemental manipulation"
  },
  {
    id: "runecraft",
    name: "Runecraft",
    tag: "The Forbidden Art",
    icon: "rune",
    color: "#c9a227",
    desc: "Runecraft is the art of writing reality. It uses the Old Script — the language of the gods — to inscribe commands directly into the fabric of Vaelthar. A rune carved into stone will obey forever. A rune carved into flesh will obey until the flesh dies. A rune carved into air will obey for a heartbeat — long enough to change everything. The Aeldrin discovered Runecraft and, for five thousand years, kept it secret. Then the Sylvaar stole it. Now every race has at least one rune-master. The gods, if they were still alive, would be furious. Runecraft is dangerous because every rune is a permanent command. A miswritten rune can destabilize reality itself.",
    source: "The Old Script (language of the gods)",
    cost: "Memory, identity, and sometimes sanity",
    users: "Aeldrin, Dwarves, Sylvaar, a few humans",
    difficulty: "Extremely high",
    combatUse: "Traps, enchantment, permanent effects"
  },
  {
    id: "bloodfire",
    name: "Bloodfire",
    tag: "The Burning Art",
    icon: "flame",
    color: "#b52a2a",
    desc: "Bloodfire is the magic of sacrifice. It draws upon the heat of life itself — the fire that burns in the blood of every living creature. To cast a Bloodfire spell, a practitioner must burn a part of themselves: a memory, a year of life, a piece of their soul. The flames are hotter than any mundane fire. They cannot be extinguished by water. They leave wounds that never heal. Bloodfire was invented by the Draekon, who consider it sacred. The other races consider it abomination. Both are correct. Bloodfire is the only magic that can be cast without mana — because it does not use mana. It uses life.",
    source: "The fire within living blood",
    cost: "Permanent damage to body, mind, or soul",
    users: "Draekon, Orcs, some Kemiiri, Half-Demons",
    difficulty: "Moderate to learn, catastrophic to master",
    combatUse: "Destruction, immolation, healing (paradoxically)"
  },
  {
    id: "voidwalking",
    name: "Voidwalking",
    tag: "The Hollow Art",
    icon: "rune",
    color: "#6d4fa8",
    desc: "Voidwalking is the art of stepping sideways into the spaces between spaces. It is not teleportation — teleportation implies destination. Voidwalking is movement through the Void, the empty dark that exists behind reality. A skilled Voidwalker can appear anywhere they have previously marked, can hide in plain sight, can step out of time for a heartbeat. The price is the Void itself. Every Voidwalking calls a little more of the Void into the walker's soul. Eventually, the walker becomes... hollow. Silent. Absent. The Sylvaar call this the Long Shadow, and they consider it a sacred death.",
    source: "The Void (the space between worlds)",
    cost: "Gradual erasure of the self",
    users: "Sylvaar, some Halfborn, some Demons",
    difficulty: "High (requires innate affinity)",
    combatUse: "Assassination, stealth, escape"
  },
  {
    id: "songofstars",
    name: "Song of Stars",
    tag: "The Divine Art",
    icon: "star",
    color: "#e8c547",
    desc: "The Song of Stars is the oldest magic in Vaelthar. Before the gods, there was the Song — the music that sang the world into being. It is not a magic that can be learned. It is a magic that can only be remembered. A practitioner of the Song must find, within themselves, a fragment of the original music. The Song can heal. It can create. It can, if sung correctly, unmake reality itself. It is also the magic the gods feared most — because it is the only magic that can kill them. Fewer than a dozen people alive remember even a fragment of the Song. Most of them are Aeldrin. Most of them are dying.",
    source: "The primordial Song",
    cost: "The singer's voice, gradually, and then permanently",
    users: "Almost none — perhaps a dozen worldwide",
    difficulty: "Impossible to teach",
    combatUse: "Reality manipulation, divine banishment, creation"
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
    title: "The Law of Conservation",
    desc: "Mana is like energy — it is never destroyed, only transformed. It returns to the world when a creature dies, when a spell fades, when a body decomposes. There is no such thing as 'spent' mana — only mana in a different form. This is why the academies begin training at age six: the younger the mind, the better it can learn to channel the ever-present flow. This is also why demons grow stronger by killing: every death releases mana into the world — and the demon, if they have the will and the skill, can absorb a fraction of it."
  }
];

/* ============================================================
   CONTINUED IN PART 2 — Houses/Tribes + Regions
   ============================================================ */
console.log('%c◈ DATA.JS PART 1 LOADED ◈ — Meta + Tiles + Races + Magic + Laws', 'color: #e8c547; font-family: serif; font-size: 14px; letter-spacing: 0.2em;');
console.log('%cRaces: ' + RACES.length + ' | Magic Schools: ' + MAGIC_SCHOOLS.length + ' | Laws: ' + MAGIC_LAWS.length, 'color: #7a6f5e; font-style: italic;');
console.log('%c✅ Part 1 of 5 complete. Approx. 45KB.', 'color: #4ade80; font-style: italic;');

/* ============================================================
   4. THE GREAT HOUSES, TRIBES & EMPIRES
   ============================================================ */
const HOUSES = [
  /* ═══════════════════════════════════════════════════════
     ELVEN HOUSES
     ═══════════════════════════════════════════════════════ */
  {
    name: "House Vaelor",
    sigil: "moon",
    color: "#a8d8e8",
    seat: "Aelthalas, the Crystal Throne",
    region: "The Silver Wood",
    motto: "The stars remember what the earth forgets.",
    desc: "The ruling house of the Aeldrin. House Vaelor has held the Crystal Throne for over four thousand years, unbroken. They keep the runes, interpret prophecy, and—though they deny it—guard the binding beneath the Silver Wood. Their current head, Lady Seraphine Vaelor, is the last of her line who can still cast the highest runes. Her great-granddaughter Aelwyn was the first Aeldrin child born after a long interval of sterility; whether she is truly the last remains unknown. House Vaelor is fading, but it has not yet admitted how little it understands about the cause.",
    role: "Highborn of the Aeldrin, Keeper of the Old Script",
    wealth: "Immense (stagnant)",
    military: "Small but deadly",
    magic: "Runecraft (mastered), Song of Stars (fragments)",
    allies: ["House Ironheart (trade)", "House Emberforge (trade)"],
    enemies: ["House Shadowmere", "House Whisper"]
  },
  {
    name: "House Shadowmere",
    sigil: "spider",
    color: "#4a1f6b",
    seat: "Ondrath, the Throne of Bone",
    region: "The Shadowmere Depths",
    motto: "All lights cast shadows. We are the shadow of all lights.",
    desc: "The ruling house of the Sylvaar. Its head, Lord Vexar, is the only surviving son of the dead Queen Maelith — and the only one who knows she is dead. He maintains the illusion through a nightly ritual that is slowly killing him. When he dies, the Sylvaar will fracture into civil war. House Shadowmere knows this. Its rivals are already positioning themselves. The knives are already sharpened. The only question is who will strike first — and who will survive.",
    role: "Shadow-King of the Sylvaar",
    wealth: "Vast (from trade in secrets and poisons)",
    military: "Small, elite, terrifying",
    magic: "Voidwalking (mastered), Runecraft (forbidden)",
    allies: ["None officially"],
    enemies: ["Everyone, including themselves"]
  },
  {
    name: "House Whisper",
    sigil: "eclipse",
    color: "#2a1a4a",
    seat: "The Silent Hall, Ondrath",
    region: "The Shadowmere Depths",
    motto: "We hear what others forget to hide.",
    desc: "The Sylvaar intelligence network. Its members are identified only by the phrase 'I hear the whisper.' Its head, known only as The Whisperer, is the most feared being in the civilized world. House Whisper does not have armies. It does not have lands. It has information — and information, in Aethermoor, is worth more than gold. Its agents are everywhere. Its archives are deeper than any dungeon. Its plans are older than any kingdom.",
    role: "Master of Spies, Keeper of Secrets",
    wealth: "Unknown (likely vast)",
    military: "None — but its agents are everywhere",
    magic: "Voidwalking (mastered), Runecraft (rumored)",
    allies: ["Unknown"],
    enemies: ["Unknown"]
  },

  /* ═══════════════════════════════════════════════════════
     DWARVEN HOUSES
     ═══════════════════════════════════════════════════════ */
  {
    name: "House Ironheart",
    sigil: "hammer",
    color: "#8a6f1f",
    seat: "Hearthforge, the Iron Hold",
    region: "The Frostspine",
    motto: "We forge. We do not kneel.",
    desc: "The ruling house of the dwarves. House Ironheart has held the Iron Hold for three thousand years. Their current lord, Thane Ironheart, is the oldest living dwarf and the only person alive who has spoken with the sleeping god Vorthal. He has ruled for thirty years. He has survived four Long Winters. He has buried more friends than he can count. He is ready to die. But he has not yet decided what to do with what Vorthal told him.",
    role: "Thane of Thanes, Keeper of the Deep Forge",
    wealth: "Great (from iron, gold, and rune-forging)",
    military: "Fearsome (defensive)",
    magic: "Runecraft (mastered), Earth Magic",
    allies: ["House Vaelor (trade)", "House Emberforge"],
    enemies: ["Orc warbands", "House Bloodaxe"]
  },
  {
    name: "House Emberforge",
    sigil: "crossed-hammers",
    color: "#b52a2a",
    seat: "The Great Forge, Hearthforge",
    region: "The Frostspine",
    motto: "We shape the world, one strike at a time.",
    desc: "The smith-house of the dwarves. Every weapon of legend in Aethermoor — including Grunna's Wrath and the Bloodaxe — was forged by House Emberforge. Their head, the Silent Smith, has not spoken in thirty years. It is said that he is working on something — something that will change the world. What that something is, no one knows. But the Silent Smith does not forge weapons for kings. He forges weapons for the end of the world.",
    role: "Master Smith of the Dwarves",
    wealth: "Great (from weapon-forging)",
    military: "Moderate",
    magic: "Runecraft (embodied in craft)",
    allies: ["House Ironheart", "House Vaelor"],
    enemies: ["None officially"]
  },

  /* ═══════════════════════════════════════════════════════
     HUMAN EMPIRES & HOUSES
     ═══════════════════════════════════════════════════════ */
  {
    name: "The Valerian Empire",
    sigil: "eagle",
    color: "#c9a227",
    seat: "Valerius's Rest, the Imperial City",
    region: "The Heartlands",
    motto: "One Empire. One Emperor. One Destiny.",
    desc: "The largest empire in human history, founded by Emperor Valerius the Unbroken. Its capital, Valerius's Rest, is built directly above the Abyss — the 100-floor dungeon. The current emperor, a distant descendant of Valerius, has spent forty years quietly rebuilding the empire's strength. He believes he is destined to reunite humanity. He is probably right. He is also willing to do anything — anything — to make it happen.",
    role: "Ruling House of the Valerian Empire",
    wealth: "Immense (from trade, taxation, and dungeon loot)",
    military: "Massive (largest standing army in Aethermoor)",
    magic: "Breathweaving (imperial academies)",
    allies: ["House Stormborn", "House Vareth (nominally)"],
    enemies: ["All rival human kingdoms", "Orc warbands", "The Demon King"],
    isEmpire: true,
    emperor: "The Emperor (name unknown to most; a closely guarded secret)"
  },
  {
    name: "House Vareth",
    sigil: "swords",
    color: "#7a1a1a",
    seat: "The Spire of Ashes, Northern Reaches",
    region: "The Stormlands",
    motto: "From ash, we rise.",
    desc: "The oldest human noble house in Aethermoor — older than the Sundering. House Vareth claims descent from the mortal general who unified the human tribes after the gods fell. They rule the Stormlands from the Spire of Ashes. Their words are ominous, and their history supports them: the House has nearly fallen three times, and risen four. Their current lord, Lord Arathor Vareth, is a cold, cruel man — a man whose secret could destroy his house, and whose ambition could change the world.",
    role: "Warden of the North",
    wealth: "Moderate (declining)",
    military: "Formidable (veterans of three wars)",
    magic: "Bloodfire (secretly)",
    allies: ["The Valerian Empire (nominally)"],
    enemies: ["House Stormborn", "House Drakmoor"]
  },
  {
    name: "House Stormborn",
    sigil: "lightning",
    color: "#6ba8c9",
    seat: "The Stormhold, Cape of Storms",
    region: "The Stormlands",
    motto: "We bend the wind. We do not break.",
    desc: "A younger house, only six hundred years old, but one of the most powerful in the south. House Stormborn rose to prominence during the War of the Broken Crown, when its founder — a bastard peasant — rallied the southern lords against the Aeldrin. Their current head, Lady Lyanna Stormborn, is called the Wolf Queen for her ferocity and her habit of keeping actual wolves as pets. She has never lost a war. She has never lost a duel. She has never lost a child — because she has never had one. And she is beginning to wonder if that is a blessing or a curse.",
    role: "Warden of the South, Admiral of the Storm Fleet",
    wealth: "Great (from trade and naval dominance)",
    military: "Strong (the largest navy in Aethermoor)",
    magic: "Breathweaving",
    allies: ["The Valerian Empire"],
    enemies: ["House Vareth", "House Drakmoor"]
  },

  /* ═══════════════════════════════════════════════════════
     DRAEKON CLANS
     ═══════════════════════════════════════════════════════ */
  {
    name: "House Drakmoor",
    sigil: "dragon",
    color: "#b52a2a",
    seat: "Kael'Dorath, the Ashen Citadel",
    region: "The Dragon's Reach",
    motto: "Fire is our birthright. Ash is our duty.",
    desc: "The ruling house of the Draekon. House Drakmoor traces its line to Aeryn the Bold herself. They rule the Dragon's Reach from Kael'Dorath, a fortress built inside a dormant volcano. The current lord, Chieftain Vexa Cinderborn, is the first female to hold the seat in three hundred years. She is also the first Draekon in seven generations to have resisted the Changing. The clan elders see this as both a blessing and a curse. Vexa sees it as neither. She sees it as survival.",
    role: "High Chieftain of the Dragon's Reach",
    wealth: "Great (from obsidian, gold, and dragon-glass)",
    military: "Devastating (Draekon warriors are worth ten humans each)",
    magic: "Bloodfire (mastered), Breathweaving",
    allies: ["House Vareth", "House Cinderborn"],
    enemies: ["House Vaelor", "House Shadowmere", "House Stormborn"]
  },
  {
    name: "House Cinderborn",
    sigil: "flame",
    color: "#b52a2a",
    seat: "The Ember Keep, Dragon's Reach",
    region: "The Dragon's Reach",
    motto: "We are the fire that does not die.",
    desc: "One of the seven Great Clans of the Draekon, and the one that has produced the most dragons. The current head, Chieftainess Vexa Cinderborn, is the mother of the Ashborn Prince — though she has publicly denied this for political reasons. House Cinderborn is the most traditional of the Draekon clans. It honors the old ways. It keeps the old oaths. It remembers the old gods. And it is beginning to wonder if the old ways are worth keeping — or if it is time for something new.",
    role: "Clan-Chief of the Cinderborn, Keeper of the Ashen Flame",
    wealth: "Moderate (from obsidian mining and dragon-related trade)",
    military: "Elite (Cinderborn warriors are the best of the Draekon)",
    magic: "Bloodfire (mastered)",
    allies: ["House Drakmoor"],
    enemies: ["House Vaelor", "House Shadowmere"]
  },
  {
    name: "House Ashborn",
    sigil: "skull",
    color: "#e8c547",
    seat: "The Unbound Path (no fixed seat)",
    region: "Wandering (mostly Dragon's Reach)",
    motto: "We do not kneel. We do not bow. We do not burn.",
    desc: "A new house — or perhaps not a house at all, but a rumor. House Ashborn claims no lands, no armies, no ancient lineage. It claims only a name: the Ashborn Prince, the child of prophecy, the one who will either save Aethermoor or destroy it. Some say House Ashborn is a myth. Some say it is a conspiracy. Some say it is the future. The truth, as always, is more complicated — and more dangerous.",
    role: "The Unbound, the Prophesied, the Ashborn Prince",
    wealth: "None (until the prophecy is fulfilled)",
    military: "None (until the prophecy is fulfilled)",
    magic: "Bloodfire (without cost), Ash-Eyes (unknown)",
    allies: ["Unknown"],
    enemies: ["Unknown"],
    isProphecy: true
  },

  /* ═══════════════════════════════════════════════════════
     ORC WARBANDS
     ═══════════════════════════════════════════════════════ */
  {
    name: "The Red Hand",
    sigil: "blood",
    color: "#7a1a1a",
    seat: "The Red Camp, the Ashen Wastes",
    region: "The Ashen Wastes",
    motto: "Blood for the Blood God. Skulls for the Skull Throne.",
    desc: "The largest orc warband in the Ashen Wastes. The Red Hand is led by Warboss Karog the Red, a massive orc who has killed three rival warbosses and absorbed their warbands into his own. He dreams of conquering the human kingdoms. He is patient — for an orc. He has been raiding the borders of the Valerian Empire for twenty years. The Emperor has noticed. The Emperor is not amused.",
    role: "Warboss of the Red Hand",
    wealth: "Stolen (mostly)",
    military: "Brutal (the largest orc army in the Wastes)",
    magic: "Bloodfire (shamanic)",
    allies: ["None officially"],
    enemies: ["Everyone"],
    isWarband: true
  },
  {
    name: "The Iron Fangs",
    sigil: "fang",
    color: "#8a6f1f",
    seat: "The Broken Spire, the Ashen Wastes",
    region: "The Ashen Wastes",
    motto: "We take. You give. Or you die.",
    desc: "The most feared slaver warband in the Ashen Wastes. The Iron Fangs don't just raid — they take prisoners, and they sell them. Their slaves include humans, elves, dwarves, and Kemiiri. Their leader, a cunning orc named Grishka, is the only orc in history to negotiate with the Whisperer and survive. Some say Grishka knows things about the Whisperer that no one else knows. Some say Grishka is the Whisperer's agent among the orcs. Some say Grishka is the Whisperer. No one knows for sure.",
    role: "Slaver Warband of the Iron Fangs",
    wealth: "Great (from the slave trade)",
    military: "Brutal (raiders and slavers, not soldiers)",
    magic: "None officially (Grishka has secrets)",
    allies: ["None officially"],
    enemies: ["Everyone, including other orcs"],
    isWarband: true
  },
  {
    name: "The Broken Skull",
    sigil: "skull",
    color: "#4a4438",
    seat: "The Fallen City, the Ashen Wastes",
    region: "The Ashen Wastes",
    motto: "All things fall. Even gods.",
    desc: "The smallest and strangest of the major orc warbands. The Broken Skull is not a warrior warband — it is a shamanic cult. Its members believe that Karok, the orc creator-god, is not truly dead — only sleeping. They believe that if they can gather the seven fragments of the Karoknul, their god will return and the orcs will be free. The Broken Skull does not raid for slaves or loot. It raids for knowledge, for artifacts, for fragments. It is the only orc warband that reads.",
    role: "Shamanic Warband of the Broken Skull, Keepers of Karok's Promise",
    wealth: "Poor (they do not value wealth)",
    military: "Weak (few warriors, mostly shamans)",
    magic: "Bloodfire (shamanic), forbidden rituals",
    allies: ["None officially"],
    enemies: ["Everyone, including other orcs"],
    isWarband: true
  },

  /* ═══════════════════════════════════════════════════════
     GUILDS & OTHER FACTIONS
     ═══════════════════════════════════════════════════════ */
  {
    name: "The Adventurers' Guild",
    sigil: "swords",
    color: "#6ba8c9",
    seat: "The Great Hall, Valerius's Rest (headquarters)",
    region: "Valerius's Rest (headquarters), plus 12 branches across Aethermoor",
    motto: "We go where others fear to tread.",
    desc: "The Adventurers' Guild is the largest and most powerful organization in Aethermoor. It is not a kingdom, not a house, not a warband. It is a guild — a community of adventurers, scholars, merchants, and monster-hunters who have banded together for mutual protection and profit. Its 12 branches span the continent. Its headquarters, in Valerius's Rest, sits beside the Abyss — the 100-floor dungeon that no one has conquered. The Guild's members are of every race. Its leaders are of every race. Its purpose is simple: explore the unknown, kill the dangerous, and sell what they find.",
    role: "The largest adventuring guild in Aethermoor (12 branches)",
    wealth: "Immense (from monster-loot, dungeon-loot, and mana-stone trade)",
    military: "None officially (but its members are warriors of every level and rank)",
    magic: "All schools (its members include mages of every tradition)",
    allies: ["The Valerian Empire (trade)", "House Vaelor (trade)", "House Ironheart (trade)"],
    enemies: ["None officially (but it has many rivals and enemies)"],
    isGuild: true,
    headquarters: "Valerius's Rest (beside the Abyss)",
    branches: 12
  },
  {
    name: "The Iron Pact",
    sigil: "crossed-hammers",
    color: "#8a6f1f",
    seat: "The Iron Hold, Hearthforge (dwarven district)",
    region: "The Frostspine (dwarven districts)",
    motto: "By iron and oath, we stand.",
    desc: "The largest guild in the Frostspine, and the only one that focuses exclusively on dwarven craft and trade. The Iron Pact is a guild of smiths, engineers, and miners. Its members are dwarves (mostly), but a handful of humans and elves have earned their way in over the centuries. The Pact controls the weapon-forging industry of Aethermoor. Every weapon of legend in history — including the Bloodaxe and Grunna's Wrath — was either forged by the Pact or forged by a smith who learned their craft from the Pact.",
    role: "The largest craft-guild in Aethermoor (dwarven)",
    wealth: "Great (from weapon-forging and rune-crafting)",
    military: "Moderate (its members are craftsmen, not soldiers — but some of them are both)",
    magic: "Runecraft (mastered), Earth Magic",
    allies: ["House Ironheart", "House Emberforge", "The Adventurers' Guild (trade)"],
    enemies: ["None officially"],
    isGuild: true,
    branches: 3
  },
  {
    name: "The Silent Choir",
    sigil: "star",
    color: "#e8c547",
    seat: "The Fading Garden, the Silver Wood",
    region: "The Fading Garden (and scattered throughout Aethermoor)",
    motto: "We remember what the world has forgotten.",
    desc: "The Silent Choir is not a guild, nor a house, nor a warband. It is a mystery. Its members are the guardians of the Fading Garden — the sacred grove where the goddess Aelith is said to have planted the first seed of the world. The Silent Choir has not spoken in centuries. Its members communicate only through written notes and gestures. Its purpose, if it has one, is unknown. Some say the Silent Choir is a cult. Some say it is a secret society. Some say it is the oldest organization in Aethermoor — older than the Aeldrin, older than the Sundering, older than the gods. Some say it does not exist at all.",
    role: "The secretive guardians of the Fading Garden",
    wealth: "Unknown (likely vast, but unmeasured)",
    military: "None (but its members are not to be trifled with)",
    magic: "Runecraft (rumored), Song of Stars (rumored)",
    allies: ["House Vaelor (nominally)"],
    enemies: ["Unknown"],
    isGuild: true
  }
];

/* ============================================================
   5. REGIONS OF THE WORLD — FULL PROFILES
   (20 regions, including Xarnath, Black Chasm, Godseal, Mistlands)
   ============================================================ */
const REGIONS = [
  /* ═══════════════════════════════════════════════════════
     THE DEMON CONTINENT: XARNATH
     ═══════════════════════════════════════════════════════ */
  {
    id: "xarnath",
    name: "Xarnath, the Demon Continent",
    type: "Basalt highlands, salt flats, geothermal basins",
    color: "#3d0a0a",
    mapX: 500,
    mapY: 40,
    desc: "Xarnath lies north of the Black Chasm, beyond two continent-length mountain walls whose upper ridges remain snowbound even above the ash storms. The land is severe rather than empty: basalt plateaus, salt flats, deep aquifers, warm ravines, and fungus fields support fortified cities. Varkhast controls the northern mineral road; Cinder Wells survives around one of the few reliable deep-water basins; the Blackglass Exchange hosts guarded bargains between rival demon houses. The Bone Throne is the Demon King's capital, but his control depends on treaties, hostages, and a careful balance of power. Xarnath is dangerous to outsiders because its geography and politics are hostile—not because nothing lives there.",
    control: "The Demon King (absolute rule)",
    notable: ["The Bone Throne", "The Storm-Sky", "The Black Wastes", "The Forgotten Depths", "The Demon Council"],
    regionType: "demon",
    dangerLevel: "Extinction",
    travelAdvisory: "NO ENTRY. All travel forbidden by the Valerian Empire, the Adventurers' Guild, and every other major power."
  },

  /* ═══════════════════════════════════════════════════════
     THE DIVINE DIVIDE (GORGE + BARRIER)
     ═══════════════════════════════════════════════════════ */
  {
    id: "black-chasm",
    name: "The Black Chasm",
    type: "Great gorge (divine)",
    color: "#1a0a0a",
    mapX: 500,
    mapY: 130,
    desc: "The Black Chasm is a continent-scale rift left by the Sundering. Its depth is hidden by a permanent black haze, and the cliffs are ringed by twin ranges of jagged mountains so high and unstable that ordinary roads cannot cross them. Avalanches, mana storms, and broken stone make attempts to go around the gorge almost as lethal as crossing it. The Godseal is the only maintained passage. No bridge has survived elsewhere, and no verified expedition has crossed the mountain wall. Stories of things moving in the depth are numerous; proof is not.",
    control: "None (divine-wrought)",
    notable: ["The Godseal", "The Depths", "The Watching Stones", "The Fallen Bridge", "The Demon's Side"],
    regionType: "divine",
    dangerLevel: "Extreme",
    travelAdvisory: "The Chasm itself is impassable. Only the Godseal is safe — and even that is not entirely safe."
  },
  {
    id: "godseal",
    name: "The Godseal",
    type: "Divine barrier (the only crossing)",
    color: "#e8c547",
    mapX: 500,
    mapY: 90,
    desc: "The Godseal is the sole maintained crossing between Aethermoor and Xarnath. It is not an ordinary dam or a bridge: rune-carved pylons and a sealed span anchor a wall of divine force across the deepest part of the Black Chasm. No surviving record names its builders or fully explains its mechanism. Since the Sundering, 402 years ago, it has prevented any organized army from crossing. The Watching Order guards the structure and maintains three hundred sworn seats, recruiting across the known peoples. The recent hum is a measurable change in the wards, but its cause is still unknown; the Order has found no proof that the seal is failing.",
    control: "The Watching Order (multi-racial)",
    notable: ["The Barrier", "The Rune-Carved Gate", "The Watching Order's Citadel", "The Pilgrims' Path", "The Demon's Side"],
    regionType: "divine",
    dangerLevel: "Extreme",
    travelAdvisory: "Entry to the Godseal itself is forbidden to all but the Watching Order. Pilgrims may approach the Gate from the Aethermoor side. NO ONE may cross."
  },

  /* ═══════════════════════════════════════════════════════
     THE MAIN CONTINENT: NORTHERN REGIONS
     ═══════════════════════════════════════════════════════ */
  {
    id: "frostspine",
    name: "The Frostspine",
    type: "Mountain range",
    color: "#6ba8c9",
    mapX: 220,
    mapY: 260,
    desc: "A mountain range so tall that its peaks are permanently lost in cloud. The dwarves live here, in cliff-cities carved into the rock. Beneath the mountains, something sleeps — something the dwarves call Vorthal, and something the other races call superstition. The Frostspine is the coldest place in Aethermoor. Blizzards here can kill an unprepared traveler in minutes. The dwarves have learned to survive — and to thrive. The Frostspine is not just a mountain range. It is a civilization — an entire world beneath the world, carved into the stone by ten thousand years of dwarven craft.",
    control: "House Ironheart (Dwarves)",
    notable: ["Hearthforge", "The Sleeping Throne", "The Ice Caverns", "The Deep Forge", "The Eye of Vorthal"],
    regionType: "dwarven",
    dangerLevel: "High",
    travelAdvisory: "Dwarven escorts are required beyond the outer peaks. Deep caverns are closed to outsiders."
  },
  {
    id: "silver-wood",
    name: "The Silver Wood",
    type: "Ancient forest",
    color: "#a8d8e8",
    mapX: 430,
    mapY: 260,
    desc: "A forest of silver-barked trees that have never known fire. It is home to the Aeldrin, and to creatures older than the gods. Time moves differently here — a day in the Silver Wood can be a year outside. The trees themselves are said to hum with ancient magic, and their leaves never fall. The forest's heart is the Fading Garden — the most sacred place in Aethermoor. The Silver Wood is not just a forest. It is a memory — a memory of what the world was like before the Sundering, before the gods died, before everything went wrong. The Aeldrin tend this memory. They do not let it fade.",
    control: "House Vaelor (Aeldrin)",
    notable: ["Aelthalas", "The Crystal Throne", "The Fading Garden", "The Silent Choir", "The First Tree"],
    regionType: "elven",
    dangerLevel: "Moderate",
    travelAdvisory: "Entry is permitted by permission of House Vaelor. Do not stray from the paths. Time does not work here as it does elsewhere."
  },
  {
    id: "ashen-wastes",
    name: "The Ashen Wastes",
    type: "Desolate plain",
    color: "#7a6f5e",
    mapX: 600,
    mapY: 320,
    desc: "The scar left by the Sundering. Once the Sunlit Plains, the breadbasket of Aethermoor, now a wasteland of grey dust and shattered stone. Nothing grows here. Nothing lives here except the orcs, who have made it their home and their fortress. The wastes are dotted with the ruins of old kingdoms — broken towers, shattered temples, and the bones of things that should not have existed. The orcs do not build cities. They build camps. They do not farm. They raid. They do not trade. They take. And yet — somehow, impossibly — they have built a civilization here. A brutal civilization. A cruel civilization. But a civilization nonetheless.",
    control: "Orc warbands (Red Hand, Iron Fangs, Broken Skull, and dozens of smaller bands)",
    notable: ["The Red Camp", "The Cracks", "The Bone Fields", "The Iron Fangs' Hold", "The Broken Spire"],
    regionType: "orcish",
    dangerLevel: "Extreme",
    travelAdvisory: "NO ENTRY. The Ashen Wastes are orc territory. Anyone entering the Wastes without a warband escort is considered prey."
  },

  /* ═══════════════════════════════════════════════════════
     THE MAIN CONTINENT: CENTRAL REGIONS
     ═══════════════════════════════════════════════════════ */
  {
    id: "heartlands",
    name: "The Heartlands",
    type: "Imperial heartland",
    color: "#e8c547",
    mapX: 400,
    mapY: 420,
    desc: "The heart of the Valerian Empire — the largest empire in human history. The Heartlands are the most fertile, most populous, and most heavily fortified region in Aethermoor. At its center sits Valerius's Rest, the Imperial City — and directly beneath it, the Abyss, the 100-floor dungeon that no one has ever conquered. The Heartlands are the center of human civilization. They are also the center of human ambition. Every noble house, every merchant guild, every adventurer's guild, every secret society — all of them have their eyes on the Heartlands. All of them have their plans.",
    control: "The Valerian Empire",
    notable: ["Valerius's Rest", "The Abyss", "The Imperial Palace", "The Grand Academy", "The Guild Quarter"],
    regionType: "human",
    dangerLevel: "Low (within the cities), High (in the Abyss)",
    travelAdvisory: "Entry is permitted. The Abyss requires Guild-issued permits. The Imperial Palace is closed to outsiders."
  },
  {
    id: "stormlands",
    name: "The Stormlands",
    type: "Coastal region",
    color: "#6ba8c9",
    mapX: 200,
    mapY: 460,
    desc: "A region of cliffs, storms, and salt. The Stormlands are the traditional heart of human civilization in Aethermoor — though its two ruling houses, Vareth and Stormborn, have been feuding for six hundred years. Storms roll in from the Sea of Sorrow almost daily. The people have learned to build for wind. They have also learned to fight for what they have. The Stormlands produce the best sailors, the best naval officers, and the best storm-mages in Aethermoor. They also produce the best grudges. The feud between Vareth and Stormborn is not just politics. It is personal. It is generational. It is the reason the Stormlands have never been conquered — because the two houses would rather fight each other than fight a foreign enemy. And yet — somehow — the Stormlands have held together for six hundred years. Somehow.",
    control: "House Stormborn (south), House Vareth (north)",
    notable: ["The Spire of Ashes", "The Stormhold", "The Sea of Sorrow", "The Cape of Storms", "The Wind Temples"],
    regionType: "human",
    dangerLevel: "Moderate",
    travelAdvisory: "Entry is permitted. Avoid the borders between Vareth and Stormborn lands during the raiding season."
  },
  {
    id: "shadowmere",
    name: "The Shadowmere Depths",
    type: "Underground realm",
    color: "#4a1f6b",
    mapX: 480,
    mapY: 500,
    desc: "A vast network of caverns beneath Aethermoor, home to the Sylvaar. No natural light reaches here. The Sylvaar have built cities of obsidian and bone, lit by phosphorescent fungi and by magic. The Depths are said to extend under the entire continent — and perhaps beyond. Some tunnels lead to places that should not exist. Some tunnels lead to places that should not be remembered. The Sylvaar know all of this. They have known it for ten thousand years. They have never told anyone. They never will.",
    control: "House Shadowmere (Sylvaar)",
    notable: ["Ondrath", "The Throne of Bone", "The Silent Hall", "The Long Shadow Paths", "The Obsidian Cathedral"],
    regionType: "sylvaar",
    dangerLevel: "Extreme",
    travelAdvisory: "NO ENTRY. The Depths are Sylvaar territory. Anyone entering without an invitation is considered an enemy."
  },
  {
    id: "broken-steppe",
    name: "The Broken Steppe",
    type: "Grassland",
    color: "#8a6f1f",
    mapX: 460,
    mapY: 560,
    desc: "A vast grassland in the south-center of Aethermoor, home to nomadic tribes and the ruins of forgotten civilizations. The Steppe is technically neutral ground — no kingdom claims it — but in practice, it is controlled by whoever is strongest at the moment. Currently, that is a coalition of Kemiiri packs. The Steppe is dotted with standing stones — ancient markers from a civilization that predates the gods. Their purpose is unknown. Their power is undeniable. Some say the standing stones are the key to the Abyss. Some say the standing stones are the key to the Godseal. Some say the standing stones are the key to everything.",
    control: "Kemiiri coalition (loose)",
    notable: ["The Standing Stones", "The Wandering Court", "The Grey Pack's Den", "The Silent Monoliths", "The Nomad's Rest"],
    regionType: "neutral",
    dangerLevel: "Moderate",
    travelAdvisory: "Entry is permitted. Travel with a local guide. The standing stones are sacred — do not touch them."
  },

  /* ═══════════════════════════════════════════════════════
     THE MAIN CONTINENT: SOUTHERN REGIONS
     ═══════════════════════════════════════════════════════ */
  {
    id: "sunlit-coast",
    name: "The Sunlit Coast",
    type: "Coastal region",
    color: "#e8c547",
    mapX: 340,
    mapY: 600,
    desc: "The southern coast of Aethermoor, warm and fertile. The Sunlit Coast is the only part of the continent that was not scarred by the Sundering — a fact that has made it both a refuge and a target. The cities here are wealthy, cultured, and constantly at war with each other. The Sunlit Coast is home to the Sun Temple — the last temple to a living god. Or, at least, a god that was living. The priests are no longer sure. The Sun Temple has not spoken in centuries. Its doors are open. Its fires are lit. Its priests are silent. No one knows why. No one wants to ask.",
    control: "Various city-states (the Merchant Princes)",
    notable: ["The Golden Harbor", "The Sun Temple", "The Merchant Princes", "The Coral Gardens", "The Silent Scholar"],
    regionType: "human",
    dangerLevel: "Low",
    travelAdvisory: "Entry is permitted. The Sun Temple is open to all. The Silent Scholar accepts no visitors."
  },
  {
    id: "dragons-reach",
    name: "The Dragon's Reach",
    type: "Volcanic peninsula",
    color: "#b52a2a",
    mapX: 750,
    mapY: 560,
    desc: "A peninsula of black rock and active volcanoes, home to the Draekon. The air is thick with ash and the smell of sulfur. The ground is warm to the touch. Dragons — real dragons, transformed from Draekon — have been spotted here for the first time in three hundred years. The Dragon's Reach is not just a place. It is a transformation. Every Draekon who undergoes the Changing walks into the Dragon's Reach as one thing and walks out as another. Some walk out. Some do not. The Dragon's Reach does not care. It is fire. It is ash. It is the oldest magic in the world.",
    control: "House Drakmoor (Draekon)",
    notable: ["Kael'Dorath", "The Ashen Citadel", "The Fire-Lake", "The Ember Keep", "The Changing Pools"],
    regionType: "draekon",
    dangerLevel: "Extreme",
    travelAdvisory: "Entry is permitted by permission of House Drakmoor. Do not approach the Changing Pools. Do not approach the Fire-Lake. Do not approach the dragons."
  },

  /* ═══════════════════════════════════════════════════════
     MYSTICAL & ANOMALOUS REGIONS
     ═══════════════════════════════════════════════════════ */
  {
    id: "godfall",
    name: "The Godfall",
    type: "Ruined battlefield",
    color: "#c9a227",
    mapX: 300,
    mapY: 340,
    desc: "The place where the war of the gods ended. A plain of glass and bone, still hot to the touch ten centuries later. The corpses of three gods lie here, unburied, unrotted. No one goes to the Godfall. Those who do rarely return, and when they do, they are... changed. The glass sea is said to reflect not what is, but what should have been. Looking into it is said to drive men mad. Or to grant them visions of the truth. Some say the Godfall is the key to the Sundering. Some say the Godfall is the key to the gods themselves. Some say the Godfall is the key to everything — and that is why no one goes there.",
    control: "None",
    notable: ["The Glass Sea", "The Fallen Three", "The Altar of Ashes", "The Godstone", "The Mad Pilgrims"],
    regionType: "mystical",
    dangerLevel: "Extreme (beyond measurement)",
    travelAdvisory: "NO ENTRY. The Godfall is forbidden by every major power. Anyone entering the Godfall is beyond rescue. Beyond help. Beyond hope."
  },
  {
    id: "sunken-kingdoms",
    name: "The Sunken Kingdoms",
    type: "Underwater ruins",
    color: "#2a1a4a",
    mapX: 550,
    mapY: 650,
    desc: "The ruins of five kingdoms that sank beneath the Sea of Sorrow during the Sundering. Their towers still stand, visible through the waves on a clear day. The Sunken Kingdoms are home to things that were once human and no longer are. The Drowned — as they are called — are not hostile by nature. They are simply hungry. And they remember, in some twisted way, the lives they once lived. Treasure hunters dive here. Few return. Those who do speak of the Drowned — of cities beneath the waves, of temples to forgotten gods, of treasures beyond imagining. They also speak of the Deep Roads — tunnels beneath the sea that lead to places no human has ever seen. Or ever should.",
    control: "None (mostly)",
    notable: ["The Drowned Throne", "The Coral Cathedral", "The Deep Roads", "The Pearl Fissure", "The Silent Reef"],
    regionType: "mystical",
    dangerLevel: "Extreme",
    travelAdvisory: "Diving is permitted for experienced treasure-hunters. The Deep Roads are forbidden. Those who enter do not return."
  },
  {
    id: "dead-marches",
    name: "The Dead Marches",
    type: "Necropolis",
    color: "#4a1f6b",
    mapX: 700,
    mapY: 380,
      desc: "A region in the east where the dead do not stay dead. The Dead Marches are believed to be the result of a failed resurrection ritual during the Sundering—a ritual that killed three thousand people and trapped their souls in a loop of dying and rising. The Sylvaar maintain a research station here; the dwarves maintain a wall. Neither group speaks to the other, but both have learned that the Marches are not to be trifled with. The Screaming Dead cannot be killed, only temporarily dispersed. They remember little of their former lives. They have been screaming for four centuries, according to the oldest surviving watch records; older claims are legend.",
    control: "Contested (Sylvaar research station, dwarven wall)",
    notable: ["The Wall of Bones", "The Screaming Fields", "The Sylvaar Station", "The Charnel Pits", "The Silent Wall"],
    regionType: "necropolis",
    dangerLevel: "Extreme",
    travelAdvisory: "NO ENTRY. The Dead Marches are forbidden by every major power. The Wall of Bones is the only safe place — and even that is not entirely safe."
  },
  {
    id: "whispering-forest",
    name: "The Whispering Forest",
    type: "Haunted forest",
    color: "#2a1a4a",
    mapX: 120,
    mapY: 360,
    desc: "A forest in the west where the trees remember everything that has ever happened beneath them — and sometimes speak. The Whispering Forest is avoided by all sane people. It is frequented by the insane, the desperate, and the Kemiiri. It is said that if you listen long enough, the trees will tell you your own future. It is also said that most people who hear it go mad. Both rumors are true. The forest is not hostile. It is not evil. It is simply old — older than the gods, older than the Sundering, older than the world. And it remembers. And it speaks. And sometimes — just sometimes — it tells the truth.",
    control: "None",
    notable: ["The Speaking Grove", "The Memory Pools", "The Kemiiri Packs", "The First Tree's Root", "The Silent Choir's Retreat"],
    regionType: "mystical",
    dangerLevel: "Moderate to Extreme (depends on the forest's mood)",
    travelAdvisory: "Entry is permitted. Do not listen to the trees for more than a few moments at a time. Do not eat the fruit. Do not drink the water. Do not sleep in the forest."
  },
  {
    id: "veil",
    name: "The Veil",
    type: "Magical anomaly",
    color: "#6d4fa8",
    mapX: 850,
    mapY: 260,
    desc: "A region in the northeast where reality is... thin. The Veil is a place where the boundaries between worlds are weak, and things from other realities can slip through. The Aeldrin maintain a fortress here — the Veilwatch — to monitor and contain the incursions. It is the most dangerous posting in Aethermoor. The soldiers stationed here serve for five years. Most do not survive. Those who do are never quite the same. The Veil is not a place. It is a tear. It is a wound in reality. It is a door that should never have been opened. And it is opening wider.",
    control: "House Vaelor (garrison)",
    notable: ["The Veilwatch", "The Rift", "The Watching Stones", "The Threshold", "The Silent Watch"],
    regionType: "anomaly",
    dangerLevel: "Extreme",
    travelAdvisory: "NO ENTRY. The Veil is forbidden by every major power. The Veilwatch does not accept visitors. The Rift does not accept anything — it only takes."
  },

  /* ═══════════════════════════════════════════════════════
     THE MISTLANDS (Unknown Island)
     ═══════════════════════════════════════════════════════ */
  {
    id: "mistlands",
    name: "The Mistlands",
    type: "Unknown island",
    color: "#4a4438",
    mapX: 80,
    mapY: 560,
    desc: "Far to the west, beyond the Sea of Sorrow, lies an island wrapped in perpetual mist. Every ship sent to explore it has vanished. Every adventurer who has gone has not returned. The Mistlands are not on any official map — but they are on every sailor's chart, marked with a single word: 'Don't.' Some say the Mistlands are a myth. Some say they are a graveyard. Some say they are the original home of the Kemiiri — the place where the sorcerer-king first created them. Some say they are the true birthplace of the gods. Some say the mist is not a cloud — it is a living thing. No one knows. No one will know. The mist keeps its secrets.",
    control: "Unknown",
    notable: ["The Mist", "The Unseen Shore", "The Lost Expeditions", "The Silent Ships", "The Watchers in the Mist"],
    regionType: "unknown",
    dangerLevel: "Unknown (presumed extinction-level)",
    travelAdvisory: "NO ENTRY. The Mistlands are forbidden by every major power. Every expedition has failed. Every expedition has vanished. The mist does not give back what it takes."
  },

  /* ═══════════════════════════════════════════════════════
     SECONDARY REGIONS (for map detail)
     ═══════════════════════════════════════════════════════ */
  {
    id: "iron-coast",
    name: "The Iron Coast",
    type: "Coastal region (dwarven)",
    color: "#8a6f1f",
    mapX: 180,
    mapY: 580,
    desc: "A rugged stretch of coastline along the western edge of the Frostspine, controlled by the dwarves of House Ironheart. The Iron Coast is the only dwarven port in Aethermoor — the only place where dwarven ships set sail. It is not a large port. It is not a beautiful port. It is a port of iron and stone, where the waves crash against cliffs carved into dwarven shipyards. The dwarves do not build ships for trade. They build ships for war. And they are very, very good at it.",
    control: "House Ironheart (Dwarves)",
    notable: ["The Iron Port", "The Cliff-Docks", "The Forge-Ships", "The Deep-Water Anchorage", "The Watchtowers"],
    regionType: "dwarven",
    dangerLevel: "Low",
    travelAdvisory: "Entry is permitted for trade. Dwarven shipyards are closed to outsiders."
  },
  {
    id: "fading-garden",
    name: "The Fading Garden",
    type: "Sacred grove (Aeldrin)",
    color: "#c8e8a8",
    mapX: 380,
    mapY: 220,
      desc: "A garden in the heart of the Silver Wood where, according to Aeldrin legend, the goddess Aelith planted the first seed of the world. Since the Sundering 402 years ago, the garden has slowly dimmed. The Aeldrin tend it obsessively, but no known rite has stopped the decay. It remains the most sacred place in Aethermoor and a visible reminder that even the oldest magic has limits. The Silent Choir, its guardians, rarely speak in public; whether their silence is ritual, grief, or a response to the fading garden is not known.",
    control: "House Vaelor / The Silent Choir",
    notable: ["The First Tree", "The Dying Fountain", "The Silent Choir", "The Starheart Chamber", "The Vault of the First Seed"],
    regionType: "elven",
    dangerLevel: "Low (but sacred)",
    travelAdvisory: "Pilgrimage is permitted. Touching the First Tree is forbidden. The Silent Choir does not speak — do not attempt to make them."
  },
  {
    id: "ember-fields",
    name: "The Ember Fields",
    type: "Volcanic plain",
    color: "#b52a2a",
    mapX: 700,
    mapY: 620,
    desc: "A stretch of volcanic plain south of the Dragon's Reach, where the ground is permanently warm and the air smells of sulfur. The Ember Fields are the training grounds of the Draekon — the place where young Draekon learn to fight, to endure, and to embrace the fire within themselves. It is also the place where the Changing most often occurs. Every young Draekon walks into the Ember Fields. Not all of them walk out.",
    control: "House Drakmoor (Draekon)",
    notable: ["The Training Grounds", "The Changing Pools", "The Fire-Lake", "The Ashen Arena", "The Dragon's Maw"],
    regionType: "draekon",
    dangerLevel: "High",
    travelAdvisory: "Entry is permitted by permission of House Drakmoor. Do not approach the Changing Pools. Do not approach the Fire-Lake. Do not approach the Dragon's Maw."
  }
];

/* ============================================================
   CONTINUED IN PART 3 — Timeline + Characters
   ============================================================ */
console.log('%c◈ DATA.JS PART 2 LOADED ◈ — Houses/Tribes + Regions', 'color: #e8c547; font-family: serif; font-size: 14px; letter-spacing: 0.2em;');
console.log('%cHouses/Tribes: ' + HOUSES.length + ' | Regions: ' + REGIONS.length, 'color: #7a6f5e; font-style: italic;');
console.log('%c✅ Part 2 of 5 complete. Approx. 40KB. Total so far: ~85KB.', 'color: #4ade80; font-style: italic;');

/* ============================================================
   6. THE TIMELINE — FULL CHRONICLE
   (32 events from the Age of Dawn to the Present Day)
   ============================================================ */
const TIMELINE = [
  {
    year: "~10,000 B.S.",
    era: "dawn",
    eraName: "Age of Dawn",
    title: "The Singing of the World",
    desc: "Before time, before matter, there was the Song. From the Song came the first gods — Aelith of Light, Karok of War, Vorthal of Silence, and thirty-four others. They shaped Vaelthar from the void, and for a thousand years, they ruled in harmony. The world was young. The gods were kind. Nothing had yet gone wrong. It would not last."
  },
  {
    year: "~9,000 B.S.",
    era: "dawn",
    eraName: "Age of Dawn",
    title: "The First Races",
    desc: "The gods created the first mortals: the Aeldrin from light, the Sylvaar from shadow, the dwarves from stone, and the Draekon from fire. Each race was given a purpose, a homeland, and a god to serve. The gods called this the Perfect Order. The mortals called it something else — but never aloud, and never twice."
  },
  {
    year: "~7,500 B.S.",
    era: "dawn",
    eraName: "Age of Dawn",
    title: "The First Betrayal",
    desc: "The goddess Aelith discovered that her brother Karok had created the orcs as soldiers, in secret, in violation of the Perfect Order. She demanded his punishment. The other gods sided with Karok. Aelith, in fury, withdrew to the Silver Wood and refused to speak to her siblings for a thousand years. The first crack appeared in the Perfect Order."
  },
  {
    year: "~6,000 B.S.",
    era: "myth",
    eraName: "Age of Myth",
    title: "The First Sundering of the Sky",
    desc: "A rogue god, whose name has been erased from all records, attempted to seize the Song and rewrite reality. The other gods united to stop him. The battle lasted seven days, shattered three moons, and ended with the rogue god's death. The sky has never been the same. Neither has the Song. The Nameless — as the rogue god is now called — became the first god to die. He would not be the last."
  },
  {
    year: "~5,000 B.S.",
    era: "myth",
    eraName: "Age of Myth",
    title: "The Coming of the Kemiiri",
    desc: "A mortal sorcerer-king, whose name is also erased, created the first Kemiiri as soldiers. The gods were horrified. They cursed the Kemiiri with the Beast-Curse, dormant but deadly. The Kemiiri have been hunted ever since. The sorcerer-king was the first human to learn that the gods do not forgive. He was also the first human to learn that the gods do not forget."
  },
  {
    year: "~4,200 B.S.",
    era: "myth",
    eraName: "Age of Myth",
    title: "The Dragon's Pact",
    desc: "Aeryn the Bold, a mortal warrior, lay with the dragon Vharenth and bore his children. The gods, in punishment, cursed her line: every seventh generation, one Draekon would undergo the Changing. The Draekon accepted the curse as sacred. The gods did not expect this. The curse became a gift. The gift became a prophecy. The prophecy became a legend."
  },
  {
    year: "~3,000 B.S.",
    era: "myth",
    eraName: "Age of Myth",
    title: "The Long Peace",
    desc: "For a thousand years, the races lived in relative peace. The Aeldrin ruled the Silver Wood. The Draekon ruled the Dragon's Reach. The dwarves ruled the Frostspine. The humans — a young race, created late — spread across the plains. The orcs and Kemiiri, however, were slaves — and they remembered. They always remembered. They always waited."
  },
  {
    year: "~2,100 B.S.",
    era: "myth",
    eraName: "Age of Myth",
    title: "The Orc Rebellion",
    desc: "Grunna Ironbound — an orc slave, the first orc to break a warband apart from within — rallied her people and shattered three human kingdoms. For the first time, the orcs were free. The other races were terrified. The Aeldrin, for the first time in their long history, began to fear for their future. The world changed that day. It has not stopped changing."
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
    desc: "The Aeldrin seer Vaelor, in a vision, spoke the prophecy that would define the next thousand years: 'When the last dragon wakes and the first god bleeds, the ash-born shall sit upon a throne of fire, and Aethermoor shall know either dawn — or ending.' Vaelor was executed for heresy. The prophecy was preserved in secret. It has been misinterpreted ever since. Every interpretation has led to war."
  },
  {
    year: "~500 B.S.",
    era: "myth",
    eraName: "Age of Myth",
    title: "The War of Shadows",
    desc: "The Sylvaar, led by a queen whose name is now forgotten, attempted to seize control of the Aeldrin's rune-forges. The war lasted three years. The Sylvaar lost. Their queen was executed. Their cities were sealed beneath the earth. The Sylvaar have never forgotten. They have never forgiven. They have never stopped plotting."
  },
  {
    year: "~100 B.S.",
    era: "sundering",
    eraName: "The Sundering",
    title: "The Demon War",
    desc: "The demons of Xarnath, led by their king, attempted to conquer the central continent. The war lasted twelve years. Millions died. In the end, the gods — or something older than the gods — intervened. They carved the Black Chasm into the earth, and they raised the Godseal across it. The demons were sealed in Xarnath. The Godseal has held ever since. The demons have waited ever since."
  },
  {
    year: "1 B.S.",
    era: "sundering",
    eraName: "The Sundering",
    title: "The Sundering",
    desc: "The gods made war upon each other. The reason is still debated — the Aeldrin say it was a dispute over the Song; the orcs say it was Karok's betrayal; the Draekon say it was jealousy. Regardless, the war lasted seven days. Twenty-eight gods died. The sky cracked. The Sunlit Plains burned. The Sundering changed everything. Nothing has been the same since. The gods have not been seen since. Some say they are dead. Some say they are hiding. Some say they are waiting — for the right moment to return."
  },
  {
    year: "1 S.A.",
    era: "sundering",
    eraName: "The Sundering",
    title: "The Ash Age Begins",
    desc: "The surviving gods withdrew from the world. The nine who remained retreated to their sanctuaries and have not been seen since. The mortal races were left to survive on their own. The Ash Age — the age of mortals — began. It has not ended. It may never end."
  },
  {
    year: "47 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The First Human Kingdoms",
    desc: "The human general Vareth — ancestor of House Vareth — unified the scattered human tribes and founded the first human kingdom, the Stormlands. His descendants would rule for the next six hundred years. The orcs watched from the Ashen Wastes. They remembered. They always remembered."
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
    title: "The Founding of Hearthforge",
    desc: "The dwarves, under Thane Ironheart the First, founded Hearthforge — the Iron Hold — in the heart of the Frostspine. It would become the greatest forge-city in Aethermoor. House Emberforge's ancestors forged its first weapons. The dwarven clans were born. The dwarven golden age began."
  },
  {
    year: "234 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The Rise of House Stormborn",
    desc: "A bastard peasant, calling himself Stormborn, rallied the southern lords against Aeldrin rule. In a single year, he drove the Aeldrin from the Stormlands and founded House Stormborn. The Aeldrin have never forgotten. They never will. The feud between Stormborn and Vareth began here — and it has never ended."
  },
  {
    year: "242 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The Birth of the Last Dawn",
    desc: "Aelwyn Vaelor was born in the Crystal Throne — the first Aeldrin child in one hundred and sixty years, and the last. Her mother died in childbirth. The Silver Wood celebrated for a month. The elders did not tell the child what her birth truly meant. They still have not. They may never tell her."
  },
  {
    year: "289 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The War of the Broken Crown",
    desc: "A succession crisis in the Stormlands spiraled into a continent-wide war. Twelve kingdoms fought for eight years. An estimated 400,000 died. The war ended in a stalemate that has held, uneasily, ever since. The Stormlands have not recovered. They never will. The scars of the Broken Crown are still visible — in the ruined castles, in the empty villages, in the eyes of the veterans."
  },
  {
    year: "312 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The Silent Queen",
    desc: "Maelith, Queen of the Sylvaar, died. Her son Vexar, unwilling to accept it, cast a forbidden spell to keep her body animated. The spell worked. It is still working. It is killing him. He has perhaps ten years left. He knows this. He does not care. He has been ruling in his mother's name for three hundred years. He has been lying for three hundred years. He is tired of lying."
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
    desc: "Vexa Cinderborn, Chieftainess of House Cinderborn, gave birth to a son. The father is unknown. The child's eyes were the color of ash. The Draekon elders whispered that this child might be the one the prophecy spoke of. Vexa publicly denied it. She has never confirmed or denied it since. The child is now twenty-four. He does not know who he is. He does not know what he is. He does not know what he will become."
  },
  {
    year: "380 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The Building of the Godseal",
    desc: "In the years following the Sundering, the Watching Order was founded to guard the Godseal: a multi-racial order of knights, mages, and scholars. It accepts members from the known peoples except demons. The Order maintains three hundred sworn seats, training replacements before a vacancy can leave the barrier under-guarded; outsiders cannot independently verify every name on its rolls. The Godseal has held for 402 years. Its new hum is the first recorded change in its tone, and its cause remains unknown.",
  },
  {
    year: "385 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The Ashen Plague",
    desc: "A mysterious plague swept through the Ashen Wastes, killing thousands of orcs. The orcs blamed the humans. The humans blamed the demons. The demons blamed no one — they were not there. The plague ended as suddenly as it began. No one ever discovered its cause. Some say it was a curse. Some say it was a weapon. Some say it was a warning."
  },
  {
    year: "391 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The First Incursion",
    desc: "For the first time in three hundred years, something came through the Veil. It was not human. It was not beast. It was... something else. The Veilwatch garrison destroyed it. Only three soldiers survived. None of them speak of what they saw. They do not sleep well. They may never sleep well again."
  },
  {
    year: "395 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The Whisperer's Rise",
    desc: "A new figure appeared in the courts of Aethermoor — a being known only as the Whisperer. No one knows their face. No one knows their voice. No one knows their name. But they have agents everywhere. They have secrets on everyone. They have, it is said, a plan. The plan has been unfolding for a century. It is approaching its final phase."
  },
  {
    year: "398 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The Awakening of the Dragons",
    desc: "For the first time in three hundred years, a Draekon underwent the Changing — and survived as a true dragon. She flew east, toward the Ashen Wastes. She has not been seen since. The Draekon are... uncertain whether to celebrate or mourn. Some say she is searching for something. Some say she is searching for Aeryn the Bold herself."
  },
  {
    year: "400 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The Humming of the Godseal",
    desc: "The Godseal began to hum. It has never hummed before. The Watching Order has doubled its patrols. The Emperor has sent envoys. The Whisperer has sent no one — but everyone knows they are watching. The scholars say the humming is nothing. The soldiers say the scholars are fools. The demons — if they can hear it — are not saying anything at all."
  },
  {
    year: "401 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The Vanishing of the Mistlands Expedition",
    desc: "The largest expedition in a century set sail for the Mistlands — fifty ships, two thousand adventurers, three wizards of the Grand Academy. They were never seen again. The wreckage of one ship washed ashore three months later. The logbook was intact. The last entry read: 'The mist is alive. It is watching us. It is hungry.' No one has attempted to reach the Mistlands since."
  },
  {
    year: "402 S.A.",
    era: "ash",
    eraName: "The Ash Age",
    title: "The Present Day",
    desc: "It is the Year 402 of the Ash Age. The ten races stand on the edge of something — war, discovery, or annihilation. A prince with ash-colored eyes walks the Dragon's Reach. A princess with silver hair listens to a goddess in her dreams. A demon king watches from his throne of bone. The Godseal hums. The Mistlands waits. The Abyss deepens. And in the dark beneath the world, something is waking that should have stayed asleep. The Chronicle continues."
  }
];

/* ============================================================
   7. KEY CHARACTERS — FULL PROFILES
   (18 characters, including new additions: The Demon King,
   The Emperor, Warboss Karog, The Whisperer, etc.)
   ============================================================ */
const CHARACTERS = [
  /* ═══════════════════════════════════════════════════════
     THE AELDRIN
     ═══════════════════════════════════════════════════════ */
  {
    id: "aelwyn",
    name: "Aelwyn Vaelor",
    title: "The Last Dawn, Princess of the Silver Wood",
    faction: "House Vaelor",
    status: "Alive",
    statusColor: "#e8dfc0",
    icon: "blossom",
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
    id: "seraphine",
    name: "Seraphine Vaelor",
    title: "Lady of the Silver Wood, Last of the Rune-Singers",
    faction: "House Vaelor",
    status: "Alive",
    statusColor: "#a8d8e8",
    icon: "moon",
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

  /* ═══════════════════════════════════════════════════════
     THE HUMANS
     ═══════════════════════════════════════════════════════ */
  {
    id: "kaelen",
    name: "Kaelen Vareth",
    title: "The Ashborn Prince",
    faction: "House Ashborn (unknown to him)",
    status: "Alive",
    statusColor: "#e8c547",
    icon: "swords",
    race: "Unknown mixed lineage (Halfborn or Half-Demon theories; neither confirmed)",
    age: "24",
    born: "Year 378 S.A.",
    allegiance: "None (formerly House Vareth)",
    summary: "A young wanderer whose ash-colored eyes can disrupt weapons and runes. His birth records conflict, and the few witnesses who know the truth disagree about what he is.",
    fullBio: "Kaelen was born in the Stormlands during a thunderstorm that lasted three days. The public record names a noblewoman of House Vareth as his mother and says she died in childbirth; the record is inconsistent with several surviving midwife notes, and no one has proved who his biological parents were. He was raised in the Spire of Ashes by his uncle, Lord Arathor Vareth, who treated him with cold indifference. At sixteen, while a guardsman beat him for stealing bread, his grey eyes turned ash-colored and the man's sword shattered in his hand. Kaelen fled that night. In the eight years since, he has learned a little about controlling the effect but still cannot explain whether it is divine, demonic, or something caused by the old wards. He is now in the Dragon's Reach investigating a dragon awakened in 398 S.A.; he has heard that Vexa Cinderborn may know something about his birth, but he has not confirmed the claim. Several powers have asked questions about his ability, for different and not always sinister reasons. None has proved that any prophecy is about him.",
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
      { to: "Vexa Cinderborn", type: "Possible biological mother", detail: "Several clues connect Vexa to Kaelen's birth, but the surviving records disagree. She has not spoken to him, and her reasons for keeping silent are not fully known." },
      { to: "Lord Arathor Vareth", type: "Uncle / guardian", detail: "Arathor raised Kaelen and insists the official birth record is true. His payments and private letters suggest he knows more than he admits." },
      { to: "Nyx the Shadow-Speaker", type: "Reluctant ally", detail: "They met in a prison cell in Ondrath and escaped together. They distrust each other, but both have reasons to keep travelling together." },
      { to: "The Whisperer", type: "Interested observer", detail: "The Whisperer has collected reports of Kaelen's rune reactions. Whether they want to protect, study, or exploit him is unknown." },
      { to: "Aelwyn Vaelor", type: "Unmet; possible research overlap", detail: "Aelwyn's work concerns a binding beneath the Silver Wood; Kaelen's eyes disrupt some runes. A few scholars suspect a shared cause, but the evidence is too thin to establish a connection." }
    ],
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
      "Different factions want different things from Kaelen: some seek a witness for the ward investigation, some hope to recruit him, and a few would rather control him. The Wounded Choir is not among the confirmed pursuers.",
      "His chest wound appears after unusual rune reactions and worsens when he uses his ash-eye ability. Its source is unknown; no evidence shows that healing him would heal the world.",
      "The dragon that awoke in 398 S.A. is linked to House Cinderborn politics. Whether it is related to Kaelen's family is unconfirmed."
    ]
      "Kaelen is being hunted by three different factions — the Aeldrin Council (who want to study him), the Sylvaar (who want to weaponize him), and the Wounded Choir (who want to protect him).",
      "His wound is connected to the Sundering. If he ever learns the truth, he will have to choose between healing himself and healing the world.",
      "The dragon that awoke in 398 S.A. is Kaelen's half-sister. She is searching for him. She is not searching to help him."
    ]
  },
  {
    id: "emperor-valerius",
    name: "The Emperor",
    title: "Emperor of the Valerian Empire, the Second Valerius",
    faction: "The Valerian Empire",
    status: "Alive",
    statusColor: "#c9a227",
    icon: "crown",
    race: "Human",
    age: "62",
    born: "Year 340 S.A.",
    allegiance: "The Valerian Empire",
    summary: "The ruler of the largest empire in human history — and the most dangerous man in Aethermoor. He has spent forty years preparing for a war no one knows he is planning.",
    fullBio: "The Emperor — who has taken the name Valerius the Second, after his ancestor — was born into a broken empire. The Valerian Empire had fractured centuries ago, splitting into a dozen squabbling successor states. His father, the previous emperor, was a weak man who let the empire crumble further. His mother, a political schemer of House Vareth, saw her son as a tool. She was wrong. The Emperor — then a young prince named Valerius — was not a tool. He was a weapon. He ascended to the throne at twenty-two, after his mother's 'unfortunate' death. He has spent the last forty years rebuilding the empire's strength. He has not done this through war — he has done this through diplomacy, marriage, trade, and quiet assassination. He has forged alliances with every major power in Aethermoor. He has bought the loyalty of every guild. He has, it is said, made deals with the Whisperer themselves. He has not yet declared war on his rivals. He is waiting for the right moment. The right moment is approaching.",
    personality: "The Emperor is patient, calculating, and utterly without scruples. He does not hate his enemies — he does not hate anyone. Hate is a passion, and he does not allow himself passions. He allows only purpose. He is polite to everyone, generous to those who serve him, and absolutely merciless to those who betray him. He has killed more people than any warrior in Aethermoor — but he has killed them with ink, not steel. He does not believe in gods. He believes in destiny. And he believes that his destiny is to reunite humanity.",
    abilities: [
      "Political Genius — The Emperor has spent forty years navigating the treacherous politics of Aethermoor. He has never lost a political battle.",
      "Master of Information — The Emperor knows everything that happens in his empire. He has agents everywhere. He has spies in every court, every guild, every temple.",
      "The Imperial Army — The Emperor commands the largest standing army in Aethermoor. His soldiers are loyal, well-trained, and equipped with the best weapons that dwarven smiths can forge.",
      "The Imperial Academies — The Emperor has founded three magical academies. His mages are the best in Aethermoor — second only to the Aeldrin, and the Aeldrin are dying out."
    ],
    flaws: [
      "Ambition — The Emperor's ambition will destroy him. It always does.",
      "The Deal — The Emperor has made a deal with the Whisperer. The terms are unknown. The consequences will be enormous.",
      "The Son — The Emperor has no heir. His wife is barren. He is beginning to consider... other options.",
      "The Godseal — The Emperor believes that opening the Godseal would give him access to the demon continent's resources. He is wrong. The demons would destroy everything."
    ],
    relationships: [
      { to: "The Demon King", type: "Unknown Rival", detail: "The Emperor does not know that the Demon King is watching him. The Demon King knows everything about the Emperor." },
      { to: "The Whisperer", type: "Unknown Alliance", detail: "The Emperor has made a deal with the Whisperer. Neither trusts the other. Both know that one will betray the other." },
      { to: "House Stormborn", type: "Ally (nominally)", detail: "The Emperor's great-grandmother was a Stormborn. He uses this connection to maintain his alliance with Lady Lyanna." },
      { to: "House Vareth", type: "Tenuous Ally", detail: "The Emperor's mother was a Vareth. He does not trust them. He has not forgotten what they did to his father." }
    ],
    quotes: [
      "I do not hate my enemies. Hate is a passion. Passion is a weakness. I do not have weaknesses.",
      "I have been preparing for this war for forty years. I am not going to lose. I am not going to fail. I am not going to die.",
      "My ancestor united humanity. I will do the same. And if I have to open the Godseal to do it — then I will open the Godseal."
    ],
    storyHooks: [
      "The Emperor has begun to move his armies. His generals are ready. His mages are ready. His assassins are ready. The war is coming.",
      "The Emperor has discovered the truth about Kaelen Vareth. He wants Kaelen as a weapon. He is willing to do anything to get him.",
      "The Emperor has received a message from the Demon King. He has not opened it. He is afraid."
    ]
  },
  {
    id: "lord-arathor",
    name: "Lord Arathor Vareth",
    title: "Warden of the North, Lord of the Spire of Ashes",
    faction: "House Vareth",
    status: "Alive",
    statusColor: "#7a1a1a",
    icon: "swords",
    race: "Human",
    age: "58",
    born: "Year 344 S.A.",
    allegiance: "House Vareth (self-serving)",
    summary: "The cruel lord of the Spire of Ashes, and the uncle who raised Kaelen Vareth with cold indifference and occasional cruelty. He knows the truth about Kaelen's parentage — and he has been paid handsomely to keep silent.",
    fullBio: "Lord Arathor Vareth was born into the oldest human noble house in Aethermoor. He was the second son — never meant to rule. But his older brother died in a hunting accident, and suddenly Arathor was the heir. He was not ready. He was not kind. He was not good. He was, however, ambitious. He married for money, not love. He raised his brother's bastard son — Kaelen — with the bare minimum of care required to keep up appearances. He accepted money from the Draekon elders to keep Kaelen's parentage secret. He has spent his life accumulating wealth, power, and influence. He has succeeded. He is the richest man in the Stormlands. He is also the loneliest. His wife is dead. His children are distant. His brother's bastard son fled from him years ago. He is not sure if he cares.",
    personality: "Lord Arathor is cold, calculating, and utterly without warmth. He sees people as assets or liabilities. He does not hate Kaelen — he does not hate anyone. He simply does not care. He cares about wealth. He cares about power. He cares about keeping up appearances. He does not care about anything else. He is not evil in the traditional sense. He is simply empty.",
    abilities: [
      "Political Connections — Lord Arathor has connections throughout the Stormlands and beyond. He knows everyone who matters.",
      "Wealth — Lord Arathor is one of the richest men in Aethermoor. He can buy almost anything — or anyone.",
      "The Secret — Lord Arathor knows the truth about Kaelen's parentage. He has kept this secret for twenty-four years. He intends to keep it forever."
    ],
    flaws: [
      "The Secret — Lord Arathor's secret is a liability. If it ever came out, it would destroy him. He knows this.",
      "The Nephew — Lord Arathor does not care about Kaelen. But he is beginning to realize that Kaelen might be the key to something much bigger than the Stormlands.",
      "Emptiness — Lord Arathor is hollow. He has everything he ever wanted. And it means nothing.",
      "The Stormborn — Lord Arathor's feud with House Stormborn is destroying the Stormlands. He does not care. But he should."
    ],
    relationships: [
      { to: "Kaelen Vareth", type: "Nephew (distant)", detail: "Lord Arathor raised Kaelen. He does not love him. He does not hate him. He simply does not care." },
      { to: "The Draekon Elders", type: "Secret Partners", detail: "Lord Arathor has been paid handsomely to keep Kaelen's parentage secret. He does not know why they care." },
      { to: "House Stormborn", type: "Blood Feud", detail: "Lord Arathor has been feuding with House Stormborn for forty years. He does not remember why it started. He does not care." },
      { to: "The Emperor", type: "Distant Ally", detail: "Lord Arathor supports the Emperor — not out of loyalty, but because the Emperor pays well." }
    ],
    quotes: [
      "I do not love my nephew. I do not hate him. I simply do not care. This is not cruelty. This is honesty.",
      "I have spent my life accumulating wealth and power. I have succeeded. And it means nothing.",
      "The secret is my greatest asset. It is also my greatest liability. One day, I will have to choose."
    ],
    storyHooks: [
      "Lord Arathor has received a message from the Emperor. The Emperor wants Kaelen. Lord Arathor is considering the offer.",
      "Lord Arathor has discovered that Kaelen is in the Dragon's Reach. He is considering sending someone to find him — not to help him, but to bring him back.",
      "Lord Arathor has begun to dream of his brother — Kaelen's father. The dreams are not pleasant."
    ]
  },

  /* ═══════════════════════════════════════════════════════
     THE DRAEKON
     ═══════════════════════════════════════════════════════ */
  {
    id: "vexa",
    name: "Vexa Cinderborn",
    title: "Chieftainess of the Cinderborn, The Fire That Does Not Die",
    faction: "House Cinderborn",
    status: "Alive",
    statusColor: "#b52a2a",
    icon: "flame",
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
    id: "morag",
    name: "Morag Bloodaxe",
    title: "Warchief of the Ash-Clans, Butcher of the Broken Steppe",
    faction: "House Ironheart / House Bloodaxe",
    status: "Alive (dying)",
    statusColor: "#8a6f1f",
    icon: "axe",
    race: "Orc (adopted into dwarven culture)",
    age: "68",
    born: "Year 334 S.A.",
    allegiance: "House Ironheart (Warchief), House Bloodaxe (Chieftain)",
    summary: "The greatest orc warrior of the age, a poet who has killed a thousand men, and a leader who is dying from poison administered by his own daughter.",
    fullBio: "Morag was born into a clan of warriors and raised to be the greatest of them. He killed his first human at twelve. He killed his first Aeldrin at seventeen. He became Warchief at forty-two, after challenging the previous Warchief — his own father — to single combat and winning. He has led the Ash-Clans through nineteen campaigns and has never lost a battle. He is the most feared warrior in Aethermoor. He is also a poet who has written three hundred verses about the beauty of the world and the tragedy of war. He is married to Vexa Cinderborn (a political marriage that has become, surprisingly, a genuine partnership). He has three children — two sons, both dead in war, and a daughter, Morrigan, who has been poisoning him for the past two years. He knows. He has known for a year. He has not stopped her, because he believes he deserves it.",
    personality: "Morag is a contradiction — a killer who writes poetry, a tyrant who grieves for his enemies, a man who has spent his life in war and who now longs only for peace. He is loud, generous, and utterly without pretense. He speaks his mind, regardless of who is listening. He is fiercely protective of his people and utterly without mercy to those who threaten them. He is tired. He has been tired for twenty years. He is ready to die, but he wants to die well — and he has not yet decided what a good death looks like.",
    abilities: [
      "Master Warrior — Morag is the greatest living warrior in Aethermoor. He has mastered every weapon, every fighting style, every form of combat known to the orcs. He has not lost a duel in thirty years.",
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
      "The orcs have been called monsters. They are not wrong. But we are also a people who sing. I would like the world to know that."
    ],
    storyHooks: [
      "Morag has received a prophecy from a dying shaman: 'The Ashborn Prince will either save the orcs or destroy them.' Morag is trying to find the prince.",
      "Morag has decided to reveal the First Fragment of the Karoknul — the book of the god Karok — to a select few. He is looking for scholars who can read it.",
      "Morag's daughter, Morrigan, has been contacted by the Whisperer. She believes the Whisperer can help her kill her father faster. She does not know the Whisperer is using her."
    ]
  },

  /* ═══════════════════════════════════════════════════════
     THE SYLVAAR
     ═══════════════════════════════════════════════════════ */
  {
    id: "vexar",
    name: "Lord Vexar Shadowmere",
    title: "Shadow-King of the Sylvaar, Keeper of the Dead Queen",
    faction: "House Shadowmere",
    status: "Alive (failing)",
    statusColor: "#4a1f6b",
    icon: "spider",
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
    id: "whisperer",
    name: "The Whisperer",
    title: "Master of Spies, Keeper of Secrets, Ghost of Ondrath",
    faction: "House Whisper",
    status: "Unknown",
    statusColor: "#4a1f6b",
    icon: "eclipse",
    race: "Unknown (suspected Sylvaar, possibly something else)",
    age: "Unknown (at least 150 years)",
    born: "Unknown",
    allegiance: "House Shadowmere (nominally), themselves (actually)",
    summary: "The most feared being in Aethermoor. No one knows their face, their voice, or their name. They have been shaping events for at least a century. They have never been seen.",
    fullBio: "There is no record of the Whisperer's birth. There is no record of the Whisperer's rise. There is only the Whisperer — a name, a rumor, a shadow that has been moving through Aethermoor for over a hundred years. The Whisperer is the head of House Whisper, the Sylvaar intelligence network, but they answer to no one — not to Lord Vexar, not to the Queen, not to the gods themselves. They have agents everywhere. They have secrets on everyone. They have, it is said, a plan — a plan that has been unfolding for a century, and which is now approaching its final phase. No one knows what the plan is. No one knows if the Whisperer is even alive. But messages keep arriving. Notes keep appearing. And events keep unfolding in ways that no one can explain. Some say the Whisperer is a Sylvaar lord. Some say the Whisperer is a demon. Some say the Whisperer is a god. Some say the Whisperer is not one person but many. The truth is unknown. The truth may always be unknown.",
    personality: "Unknown. The Whisperer has never been interviewed, never been seen, never been heard. Their personality is a matter of speculation. Some say they are cold and calculating. Some say they are warm and kind. Some say they are not one person, but many. Some say they are not a person at all. The only thing that is certain: they are patient. They have been patient for a century. And they are almost out of patience.",
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
      { to: "The Goddess Aelith", type: "Unknown", detail: "The Whisperer has been in contact with the bound goddess. The nature of their relationship is unknown. The fact that it exists at all is terrifying." },
      { to: "The Emperor", type: "Unknown Alliance", detail: "The Whisperer has made a deal with the Emperor. Neither trusts the other. Both know that one will betray the other." }
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

  /* ═══════════════════════════════════════════════════════
     THE ORCS
     ═══════════════════════════════════════════════════════ */
  {
    id: "karog",
    name: "Karog the Red",
    title: "Warboss of the Red Hand, Butcher of the Ashen Wastes",
    faction: "The Red Hand",
    status: "Alive",
    statusColor: "#7a1a1a",
    icon: "blood",
    race: "Orc",
    age: "42",
    born: "Year 360 S.A.",
    allegiance: "The Red Hand",
    summary: "The largest and most dangerous orc warboss in the Ashen Wastes. He has killed three rival warbosses, absorbed their warbands, and dreams of conquering the human kingdoms.",
    fullBio: "Karog was born into the Red Hand warband, the son of the previous warboss. He was not the strongest orc in the warband — he was not even the second-strongest. He was, however, the smartest. He studied his rivals. He learned their weaknesses. He waited. And then, at the age of twenty-five, he challenged his father to single combat and killed him. He has ruled the Red Hand ever since. In the seventeen years since, he has killed three rival warbosses and absorbed their warbands. He has raided the borders of the Valerian Empire for twenty years. He has not yet invaded the Empire — he is not stupid. But he is patient. And he is waiting.",
    personality: "Karog is not a typical orc. He is not driven by pure bloodlust. He is driven by ambition — cold, calculating ambition. He does not hate humans. He does not hate anyone. He simply wants what they have. He is patient. He is cunning. He is, by orc standards, a genius. He has learned to read (a rare skill among orcs) and he has studied the history of warfare. He knows that the orcs have never conquered the human kingdoms — not because they lacked strength, but because they lacked strategy. He intends to be the first warboss in history to conquer a human kingdom. He intends to be the first warboss in history to rule.",
    abilities: [
      "Master Warrior — Karog is one of the greatest warriors in the Ashen Wastes. He has killed three rival warbosses in single combat.",
      "Strategic Genius — Karog is the only orc in history to study military strategy. He knows the terrain of the Ashen Wastes better than anyone. He knows the weaknesses of the human kingdoms.",
      "The Red Hand — Karog commands the largest orc warband in the Ashen Wastes. His warriors are loyal, well-trained, and utterly without mercy.",
      "Bloodfire (Shamanic) — Karog has learned the shamanic traditions of the orcs. He can cast Bloodfire spells, though he rarely does — he prefers to fight with steel."
    ],
    flaws: [
      "The Empire — Karog's ambition may be his undoing. He wants to conquer the Valerian Empire. The Empire is much larger than he realizes.",
      "The Broken Skull — Karog has never defeated the Broken Skull warband. They are too small, too strange, too elusive. He does not know what they are planning. He is afraid of what they might become.",
      "The Demon King — Karog has heard rumors of the Demon King. He does not believe them. He should.",
      "Pride — Karog is proud. He believes he is the greatest orc in history. He may be right. But pride is a weakness."
    ],
    relationships: [
      { to: "The Emperor", type: "Unknown Enemy", detail: "Karog has been raiding the Emperor's borders for twenty years. The Emperor has noticed. The Emperor is not amused." },
      { to: "The Broken Skull", type: "Rival Warband", detail: "Karog has never defeated the Broken Skull warband. He does not understand them. He does not like what he does not understand." },
      { to: "The Iron Fangs", type: "Rival Warband", detail: "Karog and Grishka the Slaver have an uneasy truce. Both know it will not last." },
      { to: "The Demon King", type: "Unknown", detail: "Karog does not know the Demon King exists. The Demon King knows Karog exists." }
    ],
    quotes: [
      "I am not a typical orc. I do not want to kill you. I want to rule you. There is a difference.",
      "The humans think we are stupid. The humans think we are savage. The humans think we cannot learn. They are wrong. I have learned. I have learned from them.",
      "I have been raiding the Empire for twenty years. I have not yet invaded. I am waiting. I am patient. I am not an orc. I am something new."
    ],
    storyHooks: [
      "Karog has begun to move his warband closer to the borders of the Heartlands. The invasion is coming.",
      "Karog has captured a human scholar. The scholar has been teaching him about human history, human strategy, human weakness. Karog is learning.",
      "Karog has received a message from the Broken Skull warband. He has not opened it. He is afraid of what it might say."
    ]
  },

  /* ═══════════════════════════════════════════════════════
     THE KEMIIRI
     ═══════════════════════════════════════════════════════ */
  {
    id: "nyx",
    name: "Nyx the Shadow-Speaker",
    title: "Pack-Leader of the Grey Pack, Thief of Thrones",
    faction: "The Grey Pack",
    status: "Alive",
    statusColor: "#6d4fa8",
    icon: "fox",
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

  /* ═══════════════════════════════════════════════════════
     THE DEMONS
     ═══════════════════════════════════════════════════════ */
  {
    id: "demon-king",
    name: "The Demon King",
    title: "The Unnamed, the Eternal, the Lord of Xarnath",
    faction: "The Demon Court",
    status: "Alive (and has been for 10,000 years)",
    statusColor: "#7a1a1a",
    icon: "demon",
    race: "Demon",
    age: "10,000+ (possibly much older)",
    born: "Unknown",
    allegiance: "Himself",
    summary: "The long-lived ruler of Xarnath, whose hold on the throne depends on keeping rival demon houses divided. The Godseal is four centuries old; his rule is far older, and the two histories are often confused in popular legend.",
    fullBio: "No one knows where the Demon King came from, and no reliable record gives his birth year. The oldest demon chronicles place his rise in Xarnath more than ten thousand years ago, long before the Sundering. He seized the Bone Throne by overthrowing a rival ruler and has kept power by balancing the great houses, controlling the deep wells, and rewarding useful enemies as often as he punishes them. The Godseal is much younger: it was raised 402 years ago after the Sundering, when the conflict between Xarnath and Aethermoor threatened to spread across the world. The Demon King did not create the Sundering or build the seal, but he has become its most dangerous political beneficiary. His subjects say he has drained the life-force of millions; the number is not verifiable, and even his own court treats the stories as both warning and propaganda. The seal's recent hum concerns him because a failed barrier would invite invasion and give his rivals a reason to unite against him.",
    personality: "The Demon King does not have a personality in the way mortals understand it. He is not cruel for the sake of cruelty. He is not kind for the sake of kindness. He is simply... powerful. He does what he wants. He takes what he wants. He has no peers, no equals, no rivals. He has been alone for ten thousand years. He is not lonely — he does not understand loneliness. He is not bored — he does not understand boredom. He is simply... there. And he is waiting.",
    abilities: [
      "Absolute Power — The Demon King is the most powerful being in the world. He has absorbed the life-force and mana of millions. His power is beyond measurement.",
      "Immortality — The Demon King cannot be killed by any means known to mortals. He has been stabbed, burned, poisoned, dismembered, and buried. He has always returned.",
      "The Legion — The Demon King commands the largest army in the world — thirty million demons, all loyal to him, all afraid of him, all willing to die for him.",
      "The Godseal — The Demon King cannot cross the Godseal. But he is the only being in history to have come close. He has not stopped trying."
    ],
    flaws: [
      "The Godseal — The Demon King cannot cross the Godseal. This is his only weakness. It is also his greatest frustration.",
      "The Forgotten Ones — The Demon King is not the oldest demon. There are older ones — demons who have lived for fifty thousand years or more, hidden in the deepest reaches of Xarnath. He knows they are out there. He knows they are waiting.",
      "The Half-Demons — The Demon King is afraid of half-demons. They can grow stronger than him. They can train without killing. They can — potentially — kill him. He watches them very carefully.",
      "The Boredom — The Demon King has been alive for ten thousand years. He has done everything. He has killed everyone. He has conquered everything. He is beginning to wonder if there is anything left."
    ],
    relationships: [
      { to: "The Forgotten Ones", type: "Hidden Rivals", detail: "The Demon King overthrew one of them to take the throne. He knows the others are out there. He knows they are waiting." },
      { to: "The Emperor", type: "Unknown Rival", detail: "The Demon King knows about the Emperor. He has been watching the Emperor for forty years. He is not impressed." },
      { to: "The Whisperer", type: "Unknown", detail: "The Demon King knows about the Whisperer. He does not know what they want. He is curious." },
      { to: "Kaelen Vareth", type: "Unknown", detail: "The Demon King does not know about Kaelen. Yet. When he does, he will be very, very interested." }
    ],
    quotes: [
      "I have ruled for ten thousand years. I have killed more beings than you have met. I am not a person. I am an event. And I am not finished.",
      "The Godseal has held for four centuries. Stone remembers longer than kings do, but even stone can crack.",
      "I am beginning to wonder if there is anything left. I have done everything. I have killed everyone. I have conquered everything. And I am still here. Still waiting. Still alone."
    ],
    storyHooks: [
      "The Godseal is humming. The Demon King has noticed. He has begun to gather his forces.",
      "The Demon King has discovered the existence of half-demons. He has begun to hunt them. He is afraid of them.",
      "The Demon King has received a message from the Emperor. He has not opened it. He is amused."
    ]
  },
  {
    id: "aelith",
    name: "Aelith",
    title: "Goddess of Light, The Bound One, The Forgotten Mother",
    faction: "The Fallen Gods",
    status: "Alive (imprisoned)",
    statusColor: "#e8c547",
    icon: "sun",
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

  /* ═══════════════════════════════════════════════════════
     THE DWARVES
     ═══════════════════════════════════════════════════════ */
  {
    id: "thane-ironheart",
    name: "Thane Ironheart",
    title: "Thane of Thanes, Speaker to the Sleeping God",
    faction: "House Ironheart",
    status: "Alive",
    statusColor: "#6ba8c9",
    icon: "snowflake",
    race: "Dwarf",
    age: "187",
    born: "Year 215 S.A.",
    allegiance: "House Ironheart",
    summary: "The oldest living dwarf, the only person alive who has spoken with the sleeping god Vorthal, and the most feared warrior in the Frostspine.",
    fullBio: "Thane Ironheart was born into the Long Winter, the seventh of seven sons. His six brothers died in the first year of the Winter. He survived. He has survived every Winter since — four in total — and he has led the dwarves through each of them. He became Thane at forty-two, after his predecessor — his own mother — was killed by a frost-wyrm. He killed the wyrm with his bare hands. He has ruled for over a hundred years. He is the only person alive who has spoken with Vorthal, the sleeping god beneath the Frostspine. The conversation happened forty years ago. Vorthal told him something. He has never told anyone what. But the other dwarves have noticed that he has not been the same since.",
    personality: "Thane Ironheart is old, tired, and utterly without fear. He has faced death so many times that it has become a friend. He speaks slowly, chooses his words carefully, and rarely shows emotion. He is deeply kind to the young, deeply contemptuous of the foolish, and deeply sad. He has buried more friends than he can count. He is ready to die. But he has not yet decided what to do with what Vorthal told him.",
    abilities: [
      "The Ice-Blood — Thane Ironheart has been changed by his conversation with Vorthal. He does not feel cold. He does not tire. He does not bleed easily. He is — in some way he does not understand — no longer entirely mortal.",
      "Master Warrior — Thane Ironheart has never lost a duel. He has fought frost-wyrms, ice-trolls, and dwarven challengers. He has killed them all.",
      "Speaker to the Sleeping God — Thane Ironheart can communicate with Vorthal. He has done so once. He is not sure he wants to do so again.",
      "Command Presence — The dwarves would follow Thane Ironheart into the Frostspine's deepest reaches. They have. They would again."
    ],
    flaws: [
      "The Secret — Thane Ironheart knows what Vorthal told him. He has not told anyone. The secret is eating at him.",
      "Age — Thane Ironheart is one hundred and eighty-seven. His body is failing. He has perhaps twenty years left.",
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

  /* ═══════════════════════════════════════════════════════
     THE LEGENDARY / MYTHICAL FIGURES
     ═══════════════════════════════════════════════════════ */
  {
    id: "aeryn",
    name: "Aeryn the Bold",
    title: "The First Draekon, Mother of Dragons",
    faction: "Legend",
    status: "Dead (legendary)",
    statusColor: "#7a1a1a",
    icon: "dragon",
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
  },
  {
    id: "grunna",
    name: "Grunna Ironbound",
    title: "The First Orc, Breaker of Chains",
    faction: "Legend (historical)",
    status: "Dead (historical)",
    statusColor: "#7a1a1a",
    icon: "axe",
    race: "Orc",
    age: "Unknown (lived ~80 years)",
    born: "~2,180 B.S.",
    allegiance: "The Free Orcs",
    summary: "The first orc to break a warband apart from within — and the first orc to forge a new one from the pieces. She shattered three human kingdoms and carved the Ashen Wastes out of the eastern plains.",
    fullBio: "Grunna was born into slavery. She was the property of a human nobleman, a cruel man who used her as a gladiator. She fought in his arena for twelve years, killing every opponent he put before her. She was the greatest gladiator in the eastern plains — and the most hated. Then, one day, she did not kill her opponent. She killed her owner instead. She escaped. She gathered other escaped slaves — humans, orcs, dwarves, Kemiiri — and she forged them into a warband. She called it the Ironbound. She led them in a rebellion that shattered three human kingdoms and carved the Ashen Wastes out of the eastern plains. She did not live to see the rebellion end. She died in the final battle, killing the last human king with her bare hands. Her death broke the rebellion into a dozen warring factions. The orcs have never unified since. But every orc remembers Grunna. Every orc respects Grunna. Every orc — even the worst of them — believes that one day, another Grunna will rise.",
    personality: "Grunna was not a hero — she was a force of nature. She was cruel, vengeful, and utterly without mercy. She had seen too much suffering to believe in kindness. She had been enslaved too long to believe in freedom. She fought because she had to. She killed because she had to. She died because she had to. She was not a good person. She was not a bad person. She was simply... Grunna. The first orc. The breaker of chains. The mother of the Ashen Wastes.",
    abilities: [
      "The First Orc — Grunna was not the first orc — but she was the first to break free. She is remembered as the mother of the orcs.",
      "Master Warrior — Grunna was the greatest warrior of her age. She killed a thousand men in her lifetime. She was never defeated in single combat.",
      "The Ironbound — Grunna forged a warband from escaped slaves of every race. She led them to victory against impossible odds.",
      "The Breaker — Grunna's greatest act was not a battle — it was a decision. She decided that the orcs would be free. And they were."
    ],
    flaws: [
      "Dead (historical) — Grunna is long dead. Whatever she was, she is not part of the world anymore.",
      "The Legend — Grunna's legend has become larger than her life. No one remembers the real Grunna. Only the myth.",
      "The Legacy — Grunna's rebellion ended in her death. The orcs she freed became the orcs we know today — divided, brutal, and free."
    ],
    relationships: [
      { to: "The Orcs", type: "Descendants", detail: "Every orc is descended from Grunna — spiritually, if not literally. She is their mother, their hero, and their hope." },
      { to: "The Humans", type: "Enemies", detail: "Grunna hated humans. She had reason. She killed many. She did not regret it." },
      { to: "The Kemiiri", type: "Allies", detail: "Grunna's rebellion included Kemiiri slaves. She treated them as equals. They remember her." }
    ],
    quotes: [
      "I was born in chains. I will die in battle. This is the orc way — but it was not always. I made it so.",
      "I have killed a thousand men. I have freed a thousand slaves. I do not know which is more important.",
      "I will die. The orcs will fight. The warbands will break. But one day, another Grunna will rise. This is not a prophecy. It is a fact."
    ],
    storyHooks: [
      "Grunna's bones are said to be buried beneath the Iron Fangs' hold. The Iron Fangs have been looking for them for years.",
      "Grunna's axe — Grunna's Wrath — was lost after her death. It has not been seen since.",
      "Grunna's spirit is said to speak to some orcs — especially those who dream of freedom. The Broken Skull warband believes this."
    ]
  },

  /* ═══════════════════════════════════════════════════════
     THE VEIL AND THE MISTLANDS (Unknown Figures)
     ═══════════════════════════════════════════════════════ */
  {
    id: "silent-smith",
    name: "The Silent Smith",
    title: "Master Smith of the Dwarves, Keeper of the Great Forge",
    faction: "House Emberforge",
    status: "Alive",
    statusColor: "#8a6f1f",
    icon: "crossed-hammers",
    race: "Dwarf",
    age: "~200",
    born: "Year ~200 S.A.",
    allegiance: "House Emberforge / House Ironheart",
    summary: "The greatest smith in Aethermoor. He has not spoken in thirty years. It is said that he is working on something — something that will change the world.",
    fullBio: "The Silent Smith — no one knows his real name — is the head of House Emberforge and the greatest dwarven smith of the age. He forged Grunna's Wrath, the Bloodaxe, and the weapons of three emperors. He has not spoken in thirty years. When he stopped speaking, no one knew why. Some said he had taken a vow of silence. Some said he had been cursed. Some said he had simply decided that words were no longer necessary. He communicates through notes, gestures, and — it is said — a single, piercing glance that can make even the Thane look away. He is working on something. What it is, no one knows. But the forge-fires of Hearthforge have been burning hotter than ever. The anvils are ringing. The Silent Smith is making something. And when it is finished, the world will know.",
    personality: "The Silent Smith is a mystery. He is patient, deliberate, and utterly without pretense. He does not speak — not because he cannot, but because he chooses not to. He does not smile — not because he cannot, but because he does not find anything funny. He does not rest — not because he cannot, but because he believes his work is more important than rest. He is, in every way, a dwarf: stubborn, loyal, dedicated to craft. He is also, in every way, something more: a legend in his own lifetime.",
    abilities: [
      "Master Smith — The Silent Smith is the greatest smith in Aethermoor. Every weapon of legend in the past century was forged by him.",
      "Runecraft (Mastered) — The Silent Smith can carve runes into metal. This is a rare skill, even among dwarves. It is the reason his weapons are legendary.",
      "The Great Forge — The Silent Smith controls the Great Forge of Hearthforge, the hottest forge in Aethermoor. He has mastered it completely.",
      "The Secret Project — The Silent Smith is working on something. No one knows what. Everyone wants to know."
    ],
    flaws: [
      "The Silence — The Silent Smith's silence isolates him. He has no friends, no confidants, no one to share his thoughts with.",
      "The Work — The Silent Smith is consumed by his work. He does not eat enough. He does not sleep enough. He does not rest enough.",
      "The Secret — The Silent Smith's secret project is consuming him. He has not left the Great Forge in five years. He may not leave it again."
    ],
    relationships: [
      { to: "Thane Ironheart", type: "Friend (silent)", detail: "The Silent Smith and Thane Ironheart have been friends for a hundred years. They have never spoken. They do not need to." },
      { to: "House Emberforge", type: "Family (distant)", detail: "The Silent Smith is the head of House Emberforge. He does not interact with his family. He is too busy." },
      { to: "The Emperor", type: "Client", detail: "The Silent Smith has forged weapons for the Emperor. The Emperor has never met him. The Emperor wants to." }
    ],
    quotes: [
      "...",
      "...",
      "..."
    ],
    storyHooks: [
      "The Silent Smith has completed his secret project. No one knows what it is. He has not yet revealed it.",
      "The Silent Smith has received a commission from an unknown client. He has accepted. The client's identity is unknown.",
      "The Silent Smith has begun to speak — but only in his sleep. He speaks of gods, of binding, of breaking. No one understands."
    ]
  },
  {
    id: "vorthal",
    name: "Vorthal",
    title: "The Sleeping God, the Silent Watcher",
    faction: "The Fallen Gods",
    status: "Sleeping (beneath the Frostspine)",
    statusColor: "#6ba8c9",
    icon: "snowflake",
    race: "God",
    age: "~10,000 years",
    born: "Before time",
    allegiance: "Himself (possibly the dwarves)",
    summary: "The sleeping god beneath the Frostspine. He has spoken only once — to Thane Ironheart. He has not spoken since. He may never speak again.",
    fullBio: "Vorthal is one of the oldest gods — born from the Song at the dawn of time. He was the god of silence, of dreams, of secrets. He did not create a race. He did not demand worship. He simply... watched. He watched the gods create the world. He watched the gods make war upon each other. He watched the Sundering. He watched the world die and be reborn. He did not intervene. He did not judge. He simply watched. When the other gods died, he did not die with them. When the other gods withdrew, he withdrew too — but differently. He went to sleep. Beneath the Frostspine. And he has been sleeping ever since. The dwarves believe he is watching them. They may be right. They may be wrong. But they have built their civilization on the belief that Vorthal is still there — still watching — still waiting.",
    personality: "Vorthal is unknown. He is the god of silence and secrets. He has not revealed his nature to anyone. He has not spoken since the Sundering. He may have no personality at all — he may be simply a force, a presence, a silence. Or he may be something more. No one knows. No one can know. Not until he wakes.",
    abilities: [
      "The Sleeping God — Vorthal is a god. He has the power to reshape reality. He has simply chosen not to use it.",
      "The Silent Watcher — Vorthal is the god of silence, dreams, and secrets. He knows everything that happens in his presence. His presence extends beneath the entire Frostspine.",
      "The Long Winter — Vorthal is connected to the Long Winters of the dwarves. He may be the cause. He may be the cure. He may be both.",
      "The Prophecy — Vorthal spoke to Thane Ironheart forty years ago. He told him something. No one knows what."
    ],
    flaws: [
      "Sleeping — Vorthal is asleep. He cannot act directly. He can only watch, and wait, and — occasionally — speak.",
      "Silence — Vorthal's silence makes him unknowable. No one can understand him. No one can trust him. No one can predict him.",
      "The Future — Vorthal may know what is coming. He has not told anyone. He may never tell anyone."
    ],
    relationships: [
      { to: "Thane Ironheart", type: "Speaker / Listener", detail: "Vorthal has spoken to Thane Ironheart once. Thane Ironheart has not recovered." },
      { to: "The Dwarves", type: "Possible Protectors", detail: "Vorthal sleeps beneath the dwarves. He may be their protector. He may be their doom." },
      { to: "The Mountain-Father", type: "Sibling / Neighbor", detail: "Vorthal and the Mountain-Father sleep side by side beneath the Frostspine. They have not spoken in a thousand years." },
      { to: "Aelith", type: "Sibling (distant)", detail: "Vorthal and Aelith were siblings. They have not spoken since the Sundering. They may never speak again." }
    ],
    quotes: [
      "...",
      "...",
      "..."
    ],
    storyHooks: [
      "Vorthal is beginning to stir. The dwarves have felt it — in the mountains, in the snow, in their dreams. Something is changing.",
      "Vorthal has spoken to someone else — not Thane Ironheart. No one knows who. The Thane is afraid.",
      "Vorthal is waking. The Long Winter is coming. The world is not ready."
    ]
  }
];

/* ============================================================
   CONTINUED IN PART 4 — Artifacts + Gods + Creatures + Prophecies + Languages
   ============================================================ */
console.log('%c◈ DATA.JS PART 3 LOADED ◈ — Timeline + Characters', 'color: #e8c547; font-family: serif; font-size: 14px; letter-spacing: 0.2em;');
console.log('%cTimeline Events: ' + TIMELINE.length + ' | Characters: ' + CHARACTERS.length, 'color: #7a6f5e; font-style: italic;');
console.log('%c✅ Part 3 of 5 complete. Approx. 50KB. Total so far: ~135KB.', 'color: #4ade80; font-style: italic;');

/* ============================================================
   8. ARTIFACTS — THE RELICS OF THE REALM
   (25 artifacts: weapons, relics, books, crowns, masks)
   ============================================================ */
const ARTIFACTS = [
  /* ═══════════════════════════════════════════════════════
     WEAPONS OF LEGEND
     ═══════════════════════════════════════════════════════ */
  {
    icon: "swords",
    name: "The Bloodaxe",
    type: "Weapon · Legendary",
    origin: "House Bloodaxe, forged 700 years ago",
    desc: "The ancestral weapon of House Bloodaxe — a massive two-handed axe forged from black iron and quenched in the blood of a dying dragon. It is said to be unbreakable, and to drink the blood of those it kills. It has been wielded by every Chieftain of House Bloodaxe since its forging. It is currently in the hands of Morag Bloodaxe — who is dying. The axe knows. It always knows. It is waiting for a new hand."
  },
  {
    icon: "axe",
    name: "Grunna's Wrath",
    type: "Weapon · Legendary",
    origin: "Forged by the god Karok himself, wielded by Grunna Ironbound",
    desc: "The axe of Grunna Ironbound — the first orc to break her chains. It was forged by the war-god Karok himself, and it was used to shatter the chains of orc slavery. It has not been wielded since Grunna's death, three thousand years ago. It rests in the Great Forge of House Emberforge, waiting for a worthy hand. No hand has been worthy. Not yet."
  },
  {
    icon: "flame",
    name: "The Ember Crown",
    type: "Crown · Bloodfire",
    origin: "Forged by Aeryn the Bold, 10,000 years ago",
    desc: "The crown of the Draekon High Chieftain. Forged from pure obsidian and lit from within by the Ashen Flame. It is said to grant the wearer mastery over all fire — including the fire within their own blood. It has not been worn for three hundred years. The last Draekon to wear it — Vexa Cinderborn's grandmother — died screaming, consumed by her own flames. The crown still waits."
  },
  {
    icon: "dagger",
    name: "The Emperor's Blade",
    type: "Weapon · Imperial",
    origin: "Forged by the Silent Smith for Emperor Valerius II",
    desc: "The personal sword of the Emperor of the Valerian Empire. It was forged by the Silent Smith himself — a weapon of black steel and silver runes, designed not for battle but for ceremony. It has never been drawn in anger. It has never needed to be. The Emperor does not fight. He has others to fight for him. But the blade is there, in his throne room, waiting for the day the Empire needs its Emperor to be more than a politician."
  },
  {
    icon: "bow",
    name: "The Wolf's Fang",
    type: "Weapon · Legendary",
    origin: "Wielded by Lady Lyanna Stormborn",
    desc: "A massive longbow carved from the heartwood of a tree that grew on the corpse of a dead god. It was given to Lady Lyanna Stormborn by the Kemiiri of the Whispering Forest, in gratitude for a debt she paid. It is said to never miss its target. It is said to be unbreakable. It is said to sing when its arrows strike home. The Stormborn do not confirm or deny these rumors. They do not need to. The bow speaks for itself."
  },

  /* ═══════════════════════════════════════════════════════
     RELICS OF THE GODS
     ═══════════════════════════════════════════════════════ */
  {
    icon: "gem",
    name: "The Tear of Aelith",
    type: "Relic · Divine",
    origin: "Shed by the goddess Aelith when she created the Aeldrin",
    desc: "A single tear, shed by the goddess Aelith when she created the Aeldrin. It is kept in the Crystal Throne of Aelthalas, and it is said to grant the bearer a single moment of perfect clarity — a moment in which they can see the truth of any situation. It has been used only three times in history. Each use revealed a truth that shattered a kingdom."
  },
  {
    icon: "eye",
    name: "The Eye of Vorthal",
    type: "Relic · Divine",
    origin: "Preserved from the body of the sleeping god Vorthal",
    desc: "A single eye, preserved from the body of the sleeping god Vorthal. It is kept in the Iron Hold of the dwarves, in a vault that no one but the Thane can open. It is said that whoever looks into the eye will see the future — and go mad. Thane Ironheart has looked into it. He does not speak of what he saw. He does not sleep well. He does not sleep at all."
  },
  {
    icon: "star",
    name: "The Starheart",
    type: "Relic · Divine",
    origin: "A shard of the first star, shattered at the Sundering",
    desc: "A shard of the first star — the star that the gods sang into being at the dawn of time. It was shattered at the Sundering, and its largest fragment fell to earth in the Fading Garden. It is said to be the source of all magic in Aethermoor — the physical manifestation of the Song. If it were ever destroyed, magic would end. The Silent Choir guards it. They have guarded it for a thousand years. They will guard it for a thousand more."
  },
  {
    icon: "comet",
    name: "The Fallen Star",
    type: "Relic · Divine",
    origin: "A meteorite that fell at the Sundering, carrying a fragment of a dead god",
    desc: "A meteorite that fell from the sky at the Sundering, carrying with it a fragment of a dead god — a shard of divine bone, still warm to the touch, still humming with power. It is kept in the Godfall, where it lies in the Glass Sea, radiating a faint, cold light. Those who touch it are said to see the moment of the god's death — the moment of their own death — and the moment of the world's death. No one has ever touched it and remained sane."
  },
  {
    icon: "feather",
    name: "The Last Feather",
    type: "Relic · Divine",
    origin: "A single feather from the wing of the goddess Aelith",
    desc: "A single feather from the wing of the goddess Aelith. It is said to grant the bearer one wish — but only if spoken in the primordial Song. Only three people alive can sing even a fragment of the Song. None of them have claimed the feather. The feather waits. It has waited for a thousand years. It can wait a thousand more."
  },
  {
    icon: "candle",
    name: "The Everlasting Candle",
    type: "Relic · Divine",
    origin: "Burning since before the Sundering",
    desc: "A candle that has burned since before the Sundering. Its light reveals lies. Anyone standing in its glow cannot speak an untruth. It is kept in the Temple of the Sun, on the Sunlit Coast. It has not been lit in three hundred years. The priests say the candle will light itself when the world needs it. The world has not needed it. Not yet."
  },
  {
    icon: "scales",
    name: "The Scales of Judgment",
    type: "Relic · Divine",
    origin: "Used by the gods to weigh the souls of the dead",
    desc: "A set of scales used by the gods to weigh the souls of the dead. They were lost at the Sundering. It is said that whoever finds them will be able to judge the living and the dead — and that the judgment will be absolute. The Whisperer has been looking for them for a century. The Demon King has been looking for them for ten thousand years. Neither has found them. Yet."
  },

  /* ═══════════════════════════════════════════════════════
     THE BOOKS OF POWER
     ═══════════════════════════════════════════════════════ */
  {
    icon: "scroll",
    name: "The Karoknul",
    type: "Book · Divine",
    origin: "The holy book of the orcs, written in the language of the gods",
    desc: "The holy book of the orcs — written in the language of the gods, by the god Karok himself, before the Sundering. It contains the secret of their creation and the method by which Karok might be resurrected. It was shattered into seven fragments at the Sundering. Each fragment is guarded by a different orc warband. None of them can read it. If the fragments were ever assembled and translated, the god of war would return — and he would not be pleased with what his children have become."
  },
  {
    icon: "book",
    name: "The Gospel of the Divide",
    type: "Book · Religious",
    origin: "The holy book of the Watching Order",
    desc: "The holy book of the Watching Order — the knights and mages who guard the Godseal. It tells the story of the Godseal's creation: how the gods (or something older than the gods) carved the Black Chasm into the earth and raised the Godseal across it, sealing the demons in Xarnath. It also tells a prophecy: 'When the Godseal hums, the end is near.' The Godseal is humming now."
  },
  {
    icon: "book",
    name: "Whispers from the Abyss",
    type: "Book · Forbidden",
    origin: "Author unknown, found on the 60th floor of the Abyss",
    desc: "A book found on the 60th floor of the Abyss — the deepest floor any adventurer has ever reached and returned from. It is written in a language no one has been able to translate. It is bound in leather that is not leather. Its pages are warm to the touch. It whispers when opened. It has been locked in the deepest vault of the Adventurers' Guild for three hundred years. The vault has not been opened since. No one wants to open it. No one wants to know what it says."
  },
  {
    icon: "book",
    name: "A Treatise on Mana Conservation",
    type: "Book · Academic",
    origin: "Written by Grand Archmage Vaelor of the Grand Academy",
    desc: "The foundational text of modern magical theory. It explains the Law of Conservation — that mana is never destroyed, only transformed — and the implications for spellcasting, monster-hunting, and the economy of mana-stones. It is required reading at every magical academy in Aethermoor. It is also the book that led to the discovery that demons grow stronger by killing — a discovery that has shaped the world's politics for a thousand years."
  },
  {
    icon: "book",
    name: "The Valerian Codex",
    type: "Book · Legal",
    origin: "Written by Emperor Valerius the Unbroken, 900 years ago",
    desc: "The legal code of the Valerian Empire, written by its founder. It is a massive tome — three thousand pages of laws, precedents, and commentaries. It is the foundation of human law in Aethermoor. It is also a weapon. Every legal battle in the Empire is fought over the interpretation of the Codex. Every emperor since Valerius has tried to amend it. None have succeeded. The Codex endures."
  },

  /* ═══════════════════════════════════════════════════════
     THE CURSED RELICS
     ═══════════════════════════════════════════════════════ */
  {
    icon: "urn",
    name: "The Urn of Maelith",
    type: "Relic · Necromantic",
    origin: "Contains the ashes of the dead Sylvaar Queen",
    desc: "An urn containing the ashes of Queen Maelith — and, more importantly, the ashes of her spirit. Lord Vexar has used these ashes to maintain the spell that keeps his mother animated. If the urn were ever destroyed, the Queen would collapse — and Vexar would die. The urn is kept in the deepest vault of Ondrath, guarded by a dozen Sylvaar assassins and a single, ancient spell. No one has ever tried to steal it. No one has ever succeeded."
  },
  {
    icon: "key",
    name: "The Key of Aelthalas",
    type: "Relic · Unknown",
    origin: "Forged by Seraphine Vaelor, 1,000 years ago",
    desc: "A key made of starlight, kept in the Crystal Throne. It is said to open any door — including the door to the prison of Aelith. Only Seraphine Vaelor knows what the key truly does. She has not told anyone. She will not tell anyone. She is afraid of what would happen if she did."
  },
  {
    icon: "eclipse",
    name: "The Shadowcloak",
    type: "Armor · Void",
    origin: "Woven by the Sylvaar from pure shadow",
    desc: "A cloak woven from pure shadow, kept in the Throne of Bone. It is said to grant the wearer perfect invisibility — not by hiding them, but by making them forgettable. The wearer becomes so unremarkable that no one can remember seeing them. The effect lasts until the cloak is removed. The cloak has been worn by every Sylvaar assassin for a thousand years. None of them remember wearing it."
  },
  {
    icon: "mask",
    name: "The Mask of the Whisperer",
    type: "Relic · Void",
    origin: "Unknown — possibly older than the Sundering",
    desc: "A mask of pure shadow, worn by the Whisperer. It is said to grant the wearer the ability to become anyone — to take on their appearance, their voice, their memories. The mask has never been seen. No one knows if it exists. No one knows if the Whisperer needs it. No one knows anything about the Whisperer. That is the point."
  },
  {
    icon: "waves",
    name: "The Pearl of the Sunken King",
    type: "Relic · Cursed",
    origin: "Taken from the crown of a Sunken King",
    desc: "A pearl the size of a fist, taken from the crown of a Sunken King. It is kept in the Golden Harbor of the Sunlit Coast. It is said to grant the bearer the ability to breathe underwater. It is also said to be cursed. Every person who has owned the pearl has drowned — eventually. Some within days. Some within years. But all of them drowned. The pearl is currently owned by the Merchant Princes of the Golden Harbor. They do not wear it. They do not touch it. They keep it in a locked box and sell tickets to view it."
  },

  /* ═══════════════════════════════════════════════════════
     THE DRAGON RELICS
     ═══════════════════════════════════════════════════════ */
  {
    icon: "flame",
    name: "The Ashen Flame",
    type: "Relic · Bloodfire",
    origin: "Lit by Aeryn the Bold, 10,000 years ago",
    desc: "An eternal flame, kept in the Ember Keep of House Cinderborn. It was lit by Aeryn the Bold herself, ten thousand years ago, and has never gone out. It is said to be the physical manifestation of the Draekon's curse. Some say that if it ever goes out, the Draekon will be free. Others say that if it ever goes out, the Draekon will die. No one knows which is true. No one wants to find out."
  },
  {
    icon: "dragon",
    name: "The Dragon Heart",
    type: "Relic · Divine",
    origin: "The heart of Vharenth, the last great dragon",
    desc: "The heart of Vharenth — the last great dragon, the lover of Aeryn the Bold — preserved by Aeryn after his death. It is said to still beat, faintly, in its crystal case. It is kept in the deepest vault of House Drakmoor. It is said to be the key to the Changing — the only way to become a dragon without undergoing the curse. Vexa Cinderborn has looked at it many times. She has never touched it."
  },

  /* ═══════════════════════════════════════════════════════
     THE NEW RELICS (for the expanded world)
     ═══════════════════════════════════════════════════════ */
  {
    icon: "gate",
    name: "The Godseal Key",
    type: "Relic · Divine",
    origin: "Created by the gods when they built the Godseal",
    desc: "A key that does not look like a key. It is a shard of divine light — a fragment of the Godseal itself, given to the Watching Order when the barrier was raised. It is said to be the only way to open the Godseal from the Aethermoor side. It is kept in the Watching Order's citadel, guarded by 300 knights. The Demon King has been looking for it for ten thousand years. He has never found it. He will never stop looking."
  },
  {
    icon: "compass",
    name: "The Abyss Compass",
    type: "Relic · Arcane",
    origin: "Created by the Adventurers' Guild, 500 years ago",
    desc: "A compass that does not point north — it points down. It was created by the Adventurers' Guild to help adventurers navigate the Abyss. It shows the direction of the nearest staircase, the nearest exit, and — according to rumor — the nearest treasure. It is issued to every adventurer who enters the Abyss. Most of them never return it. They are still down there. Somewhere."
  }
];

/* ============================================================
   9. GODS OF THE WORLD — THE FULL PANTHEON
   (20+ entities: confirmed gods, dead gods, unknown gods,
    and god-level beings like the Demon King and the Forgotten Ones)
   ============================================================ */
const GODS = [
  /* ═══════════════════════════════════════════════════════
     THE CONFIRMED GODS
     ═══════════════════════════════════════════════════════ */
  {
    icon: "sun",
    name: "Aelith",
    domain: "Light, Knowledge, Creation",
    status: "Imprisoned",
    desc: "The mother of the Aeldrin and Sylvaar. Bound beneath the Silver Wood by her own children. She is not dead. She is waiting. She is angry. And she is — more than anything — disappointed."
  },
  {
    icon: "eclipse",
    name: "Vorthal",
    domain: "Silence, Dreams, Secrets",
    status: "Sleeping",
    desc: "The sleeping god beneath the Frostspine. He has spoken only once — to Thane Ironheart. He has not spoken since. He may never speak again. He may be waking. The dwarves are afraid."
  },
  {
    icon: "swords",
    name: "Karok",
    domain: "War, Strength, Conquest",
    status: "Dead",
    desc: "The creator of the orcs. Slain by Aeryn the Bold at the Sundering. His book, the Karoknul, is the only thing that could bring him back. It is shattered into seven fragments. None of them can be read. Not yet."
  },
  {
    icon: "flame",
    name: "Vharenth",
    domain: "Fire, Dragons, Passion",
    status: "Dead",
    desc: "The last of the great dragons, and the lover of Aeryn the Bold. Killed by Karok at the Sundering. His heart was eaten by Aeryn — and this is how the Draekon curse began. His heart still beats, faintly, in a crystal case in House Drakmoor's deepest vault."
  },
  {
    icon: "waves",
    name: "Nerith",
    domain: "Seas, Storms, Change",
    status: "Unknown",
    desc: "The goddess of the sea. She vanished at the Sundering. Some say she is sleeping beneath the Sea of Sorrow. Some say she is dead. Some say she is the thing that lives in the Sunken Kingdoms now — the thing that the Drowned worship."
  },
  {
    icon: "pine",
    name: "Elyra",
    domain: "Nature, Growth, Healing",
    status: "Dead",
    desc: "The goddess of nature. She died at the Sundering, and her death is why the Fading Garden is dying — and why nothing grows in the Ashen Wastes. Her death is also why the Kemiiri are dying — the Beast-Curse feeds on the absence of nature."
  },
  {
    icon: "scales",
    name: "Justicar",
    domain: "Justice, Law, Order",
    status: "Unknown",
    desc: "The god of justice. He has not been seen since the Sundering. The Sylvaar believe he is dead. The orcs believe he is hiding. The Aeldrin believe he is waiting — for the right moment to return. The dwarves believe he is the one who built the Godseal."
  },
  {
    icon: "mask",
    name: "Lirien",
    domain: "Deception, Trickery, Chaos",
    status: "Alive (possibly)",
    desc: "The god of deception. He is the only god who may have survived the Sundering intact. He has not been seen in a thousand years. But then, he would not be. The Whisperer may be Lirien. Lirien may be the Whisperer. No one knows. No one will ever know."
  },
  {
    icon: "flame",
    name: "Ignar",
    domain: "Fire, Forge, Craft",
    status: "Dead",
    desc: "The god of the forge. He forged the weapons of the gods. He died at the Sundering, and his death is why the greatest artifacts of Aethermoor can never be duplicated. The Silent Smith is said to be his reincarnation. The Silent Smith does not comment."
  },
  {
    icon: "moon",
    name: "Selene",
    domain: "Moon, Tides, Mystery",
    status: "Dead",
    desc: "The goddess of the moon. She died at the Sundering, and the moon has not been the same since. It is said that her body is the moon — and that she watches over Aethermoor still. The Aeldrin pray to her every night. She has not answered in a thousand years."
  },
  {
    icon: "water",
    name: "Mereth",
    domain: "Death, Endings, Rebirth",
    status: "Dead",
    desc: "The god of death. He died at the Sundering. His death is why the dead do not stay dead in the Dead Marches — and why no one knows what happens after death anymore. Every faith claims to know. Every faith is lying."
  },
  {
    icon: "dagger",
    name: "Kaelith",
    domain: "Honor, Valor, Sacrifice",
    status: "Dead",
    desc: "The god of honor. He died at the Sundering, defending his siblings. His death is the reason why the concept of honor has become so rare in Aethermoor. The dwarves still honor him. The orcs still remember him. The humans have forgotten."
  },
  {
    icon: "comet",
    name: "The Nameless",
    domain: "Unknown",
    status: "Erased",
    desc: "The rogue god who attempted to seize the Song six thousand years ago. His name has been erased from all records. His body lies in the Godfall. His death is what made the Sundering possible — because the other gods learned, that day, that gods could die."
  },
  {
    icon: "wind",
    name: "The Hollow",
    domain: "Void, Nothingness, Silence",
    status: "Unknown",
    desc: "The god of the void. He is not worshipped. He is not loved. He is not even remembered by most. But he exists — somewhere in the spaces between worlds. He is the reason Voidwalking works. He is the reason the Sylvaar have a god, even if they do not know it. He is the reason the Veil exists. He is the reason the Mistlands exist. He is the reason — some say — that the world itself exists."
  },
  {
    icon: "feather",
    name: "The Weaver",
    domain: "Fate, Destiny, Prophecy",
    status: "Dead",
    desc: "The goddess who wove the tapestry of fate. Her death at the Sundering is why prophecy is now uncertain — and why the future can still be changed. Every prophecy ever spoken is a thread that she left behind. Every prophecy ever fulfilled is a thread that she tied. She is dead. But her threads remain."
  },
  {
    icon: "volcano",
    name: "The Mountain-Father",
    domain: "Earth, Stone, Endurance",
    status: "Sleeping",
    desc: "The god of mountains. He sleeps beneath the Frostspine, beside Vorthal. He has not woken in a thousand years. The dwarves believe that if he ever wakes, the mountains themselves will walk. The dwarves do not want the mountains to walk."
  },

  /* ═══════════════════════════════════════════════════════
     THE GOD-LEVEL BEINGS (not gods, but close enough)
     ═══════════════════════════════════════════════════════ */
  {
    icon: "demon",
    name: "The Demon King",
    domain: "Slaughter, Power, Eternity",
    status: "Alive",
    desc: "Not a god — but close enough. The Demon King has ruled Xarnath for ten thousand years. He has killed more beings than any creature in history. He has absorbed their life-force and mana. He has become something more than a demon. Something more than a god. Something that should not exist. He is the reason the Godseal exists. He is the reason the world holds its breath."
  },
  {
    icon: "eclipse",
    name: "The Forgotten Ones",
    domain: "Unknown — possibly older than the gods",
    status: "Unknown",
    desc: "The oldest demons in Xarnath. They have lived for fifty thousand years or more. They were here before the gods. They were here before the Sundering. They were here before the Demon King. They are hidden in the deepest reaches of Xarnath, waiting. The Demon King overthrew one of them to take the throne. He knows the others are out there. He knows they are waiting. He knows that one day, they will come for him."
  },
  {
    icon: "mist",
    name: "The Mist",
    domain: "Unknown — possibly not a god at all",
    status: "Unknown",
    desc: "The mist that covers the Mistlands. It is not a cloud. It is not a fog. It is a presence — a living thing, older than the gods, older than the world. Every ship sent to the Mistlands has vanished. Every adventurer who has gone has not returned. The Mist is not hostile. It is not evil. It is simply... hungry."
  }
];

/* ============================================================
   10. CREATURES OF THE WORLD — THE FULL BESTIARY
   (30+ creatures: natural animals, dungeon monsters, demon beasts,
    intelligent monsters, and unique entities)
   ============================================================ */
const CREATURES = [
  /* ═══════════════════════════════════════════════════════
     NATURAL ANIMALS (mundane — brief descriptions only)
     ═══════════════════════════════════════════════════════ */
  {
    icon: "beast",
    name: "Cattle",
    class: "Animal · Mundane",
    danger: "None",
    habitat: "The Heartlands, the Sunlit Coast, the Stormlands",
    desc: "Ordinary cattle. Found in every human kingdom. Used for milk, meat, and leather. Not dangerous. Not interesting. Not worth writing about. Except to the farmers who raise them."
  },
  {
    icon: "beast",
    name: "Sheep",
    class: "Animal · Mundane",
    danger: "None",
    habitat: "The Stormlands, the Heartlands (highlands)",
    desc: "Ordinary sheep. Found in the highlands of every human kingdom. Used for wool, meat, and milk. Not dangerous. Not interesting. Except to the shepherds who protect them from wolves."
  },
  {
    icon: "beast",
    name: "Horses",
    class: "Animal · Mundane",
    danger: "None",
    habitat: "Everywhere in the central continent",
    desc: "Ordinary horses. Found everywhere. Used for riding, farming, and war. Not dangerous. Not interesting. Except to the knights who ride them into battle."
  },
  {
    icon: "beast",
    name: "Wolves",
    class: "Animal · Natural",
    danger: "Low",
    habitat: "The Whispering Forest, the Frostspine, the Stormlands",
    desc: "Natural wolves. Larger than ordinary wolves, but not monstrous. They hunt in packs. They avoid humans. They are not dangerous — unless they are starving, or unless their territory is threatened."
  },
  {
    icon: "beast",
    name: "Bears",
    class: "Animal · Natural",
    danger: "Moderate",
    habitat: "The Whispering Forest, the Frostspine",
    desc: "Natural bears. Larger than ordinary bears — some as large as a horse. They are solitary. They avoid humans. They are not dangerous — unless they are provoked, or unless their cubs are threatened."
  },
  {
    icon: "eagle",
    name: "Eagles",
    class: "Animal · Natural",
    danger: "Low",
    habitat: "The Frostspine, the Stormlands",
    desc: "Natural eagles. Larger than ordinary eagles — some as large as a dog. They nest on cliffs and mountaintops. They are not dangerous — unless they are defending their nests."
  },
  {
    icon: "fish",
    name: "Fish",
    class: "Animal · Mundane",
    danger: "None",
    habitat: "The Sea of Sorrow, rivers, lakes",
    desc: "Ordinary fish. Found everywhere. Used for food. Not dangerous. Not interesting. Except to the fishermen who catch them — and the Drowned who hunt them."
  },

  /* ═══════════════════════════════════════════════════════
     THE DUNGEON MONSTERS (The Abyss and other dungeons)
     ═══════════════════════════════════════════════════════ */
  {
    icon: "spider",
    name: "Void-Spiders",
    class: "Dungeon · Void",
    danger: "High",
    habitat: "The Abyss (floors 1-20), the Veil",
    desc: "Spiders that live in the Void between worlds. They can slip through cracks in reality and appear anywhere. Their webs are not made of silk — they are made of pure shadow, and they can cut through steel. They are the most common monster in the Abyss's early floors. They are also the most feared — because they can appear anywhere, at any time, without warning."
  },
  {
    icon: "beast",
    name: "Giant Rats",
    class: "Dungeon · Beast",
    danger: "Low",
    habitat: "The Abyss (floors 1-5), sewers, dungeons",
    desc: "Rats the size of dogs. They are not intelligent. They are not dangerous — individually. But they travel in swarms of hundreds, and they can strip a human to the bone in minutes. They are the first monster every adventurer faces. They are the reason most adventurers die on their first day."
  },
  {
    icon: "bat",
    name: "Shadow-Bats",
    class: "Dungeon · Void",
    danger: "Moderate",
    habitat: "The Abyss (floors 5-15), the Shadowmere Depths",
    desc: "Bats that live in the Shadowmere Depths. They are not dangerous on their own, but they travel in swarms of thousands, and they can drain the life-force from a living creature in seconds. They are the reason adventurers carry torches. They are the reason adventurers carry fire."
  },
  {
    icon: "beast",
    name: "Stone-Lizards",
    class: "Dungeon · Earth",
    danger: "Moderate",
    habitat: "The Abyss (floors 1-10)",
    desc: "Lizards the size of horses, with scales as hard as stone. They are not intelligent. They are not fast. But they are incredibly strong, and their tails can shatter a shield. They are the reason adventurers carry hammers."
  },
  {
    icon: "serpent",
    name: "Ash-Serpents",
    class: "Dungeon · Fire",
    danger: "High",
    habitat: "The Abyss (floors 21-30), the Ashen Wastes",
    desc: "Serpents adapted to the ash and the heat. They are thirty feet long, black as coal, and their venom is said to be hotter than fire. The orcs hunt them for sport. The Draekon hunt them for challenge. Most adventurers do not hunt them at all — they avoid them."
  },
  {
    icon: "dragon",
    name: "Wyrmlings",
    class: "Dungeon · Divine",
    danger: "Low",
    habitat: "The Abyss (floors 31-40), the Dragon's Reach",
    desc: "Infant dragons, born from the Changing. They are rare, precious, and hunted by every faction in Aethermoor. A single wyrmling is worth more than a kingdom. Their scales are priceless. Their blood is poison to mortals. They are the most valuable monster in the world. They are also the most dangerous — because their mothers are always nearby."
  },
  {
    icon: "ghost",
    name: "The Screaming Dead",
    class: "Dungeon · Undead",
    danger: "Extreme",
    habitat: "The Dead Marches (floors 41-50)",
    desc: "The souls trapped in the Dead Marches, cursed to die and rise forever. They cannot be killed — they can only be temporarily dispersed. They remember nothing of their former lives. They only scream. They have been screaming for a thousand years. They will scream for a thousand more."
  },
  {
    icon: "skull",
    name: "Bone Knights",
    class: "Dungeon · Undead",
    danger: "High",
    habitat: "The Abyss (floors 41-50)",
    desc: "Skeletons wearing ancient armor, wielding ancient weapons. They are the remains of adventurers who died in the Abyss — animated by the dungeon's magic, forced to fight forever. They retain some of their former skills. Some of them retain some of their former memories. Some of them — it is said — can still speak. No one has ever gotten close enough to listen."
  },
  {
    icon: "eye",
    name: "The Watchers",
    class: "Dungeon · Fey",
    danger: "Moderate",
    habitat: "The Abyss (all floors), the Veil",
    desc: "Owl-like creatures with human eyes. They are said to be the spies of the Whisperer. They appear where secrets are about to be revealed. They do not attack — they simply watch. And remember. And report."
  },
  {
    icon: "squid",
    name: "The Drowned",
    class: "Dungeon · Undead",
    danger: "Extreme",
    habitat: "The Sunken Kingdoms, the Abyss (floors 51-60)",
    desc: "The things that live in the Sunken Kingdoms. They were once human — but the sea changed them. They are now something else: tentacled, many-eyed, and utterly without mercy. They are the reason no one dives in the Sunken Kingdoms. They are the reason the Abyss's 51st floor is considered a death sentence."
  },

  /* ═══════════════════════════════════════════════════════
     THE DEMON BEASTS (Xarnath's creatures)
     ═══════════════════════════════════════════════════════ */
  {
    icon: "beast",
    name: "Abyssal Lycans",
    class: "Demon · Beast",
    danger: "High",
    habitat: "Xarnath (the dark forests), the borders of the Black Chasm",
    desc: "Werewolves — but not the kind you know. The Abyssal Lycans are demons who have fully embraced their beast-nature. They are massive — ten feet tall at the shoulder, with fur as black as night and eyes as red as blood. They hunt in packs. They are intelligent. They are cruel. They are the reason no one crosses the Black Chasm alone."
  },
  {
    icon: "beast",
    name: "Hell-Cows",
    class: "Demon · Beast",
    danger: "Moderate",
    habitat: "Xarnath (the plains)",
    desc: "The demon version of cattle. They are massive — the size of elephants — with horns that can skewer a knight and hides that can turn a blade. They are not aggressive. They are not intelligent. They are simply... large. The demons herd them. The demons eat them. The demons use their hides for armor. They are the only source of food in Xarnath that does not come from killing."
  },
  {
    icon: "beast",
    name: "Shadow-Sheep",
    class: "Demon · Beast",
    danger: "Low",
    habitat: "Xarnath (the hills)",
    desc: "The demon version of sheep. Their wool is black as night, and it glows faintly in the dark. Their meat is tough and bitter. Their milk is poisonous to mortals. The demons use their wool for clothing. The demons use their bones for tools. The demons do not eat them — they are too valuable alive."
  },
  {
    icon: "beast",
    name: "Ash-Horses",
    class: "Demon · Beast",
    danger: "Moderate",
    habitat: "Xarnath (the wastes)",
    desc: "The demon version of horses. They are larger than mortal horses — the size of draft horses — with hooves that spark fire when they strike stone. They are fast. They are strong. They are loyal to their riders. They are the reason the Demon King's cavalry is feared across Xarnath."
  },
  {
    icon: "demon",
    name: "Apex Terrors",
    class: "Demon · Intelligent",
    danger: "Extreme",
    habitat: "The Abyss (floors 61-90), Xarnath (the deep places)",
    desc: "The intelligent monsters. They are not demons — not exactly. They are something older. Something that was here before the demons, before the gods, before the world. They are massive — the size of houses — with too many eyes, too many limbs, too many teeth. They are intelligent. They can speak. They can plan. They can wait. They are the reason no adventurer has ever returned from the Abyss's 61st floor."
  },

  /* ═══════════════════════════════════════════════════════
     THE UNIQUE ENTITIES
     ═══════════════════════════════════════════════════════ */
  {
    icon: "dragon",
    name: "True Dragons",
    class: "Divine · Unique",
    danger: "Extinction",
    habitat: "Unknown — the last confirmed sighting was in 398 S.A.",
    desc: "The great dragons of Vaelthar, once numbering in the thousands, are now reduced to fewer than a dozen. The last confirmed sighting was in 398 S.A. — a female, flying east. No one knows where she went. No one knows if she is still alive. No one knows if any other dragons still exist. The Draekon believe they do. The Draekon believe the dragons are waiting. The Draekon believe the dragons will return."
  },
  {
    icon: "beast",
    name: "Frost-Wyrms",
    class: "Beast · Unique",
    danger: "Extreme",
    habitat: "The Frostspine (the deepest caverns)",
    desc: "Massive serpentine creatures that live in the deepest reaches of the Frostspine. They are two hundred feet long, armored in ice, and can kill a fully armed warrior with a single bite. Thane Ironheart killed one with his bare hands. He does not recommend it."
  },
  {
    icon: "deer",
    name: "Silver Stags",
    class: "Fey · Unique",
    danger: "Low",
    habitat: "The Silver Wood",
    desc: "Beautiful, intelligent stags that live in the Silver Wood. They are not hostile — they are, in fact, quite curious — but they are also sacred to the Aeldrin, and killing one is punishable by death. They are said to be the messengers of Aelith. They are said to carry the souls of dead Aeldrin to the afterlife. No one knows if this is true. No one wants to find out."
  },
  {
    icon: "pine",
    name: "The Speaking Trees",
    class: "Fey · Unique",
    danger: "Moderate",
    habitat: "The Whispering Forest",
    desc: "The trees of the Whispering Forest. They are not hostile — they are, in fact, quite helpful — but they are also completely mad. They have been listening to the world for ten thousand years, and they have opinions. They will share them. At length."
  },
  {
    icon: "lion",
    name: "The Beast of the Broken Steppe",
    class: "Unknown · Unique",
    danger: "Unknown",
    habitat: "The Broken Steppe",
    desc: "A creature that has been sighted four times in the past century. It is described as 'a lion the size of a house, with the eyes of a man, and a voice that speaks in riddles.' No one has ever survived a close encounter. It may not exist. It may be a myth. It may be something worse."
  },
  {
    icon: "butterfly",
    name: "Dawn Moths",
    class: "Fey · Unique",
    danger: "None",
    habitat: "The Silver Wood (at dawn)",
    desc: "Luminous moths that appear only at dawn in the Silver Wood. They are said to carry the memories of the dead. The Aeldrin believe that when a Dawn Moth lands on you, someone who loved you is thinking of you. The Aeldrin believe this because they need to believe it. They have lost so much. They need to believe that someone, somewhere, remembers."
  },
  {
    icon: "mist",
    name: "The Mist-Walkers",
    class: "Unknown · Unique",
    danger: "Extreme",
    habitat: "The Mistlands",
    desc: "The things that live in the Mistlands. No one has ever seen them. No one has ever survived seeing them. All that is known is that the mist is alive — and that it is hungry. The Mist-Walkers may be the mist itself. They may be something inside it. They may be something older than the mist. No one knows. No one will ever know."
  },
  {
    icon: "candle",
    name: "Fire-Newts",
    class: "Elemental · Unique",
    danger: "Low",
    habitat: "The Dragon's Reach, the Ember Fields",
    desc: "Small, lizard-like creatures that live in the Dragon's Reach. They are not dangerous — they are, in fact, quite friendly — but they can set things on fire if they are startled. They are popular as pets among Draekon children. They are the only creature in Aethermoor that the Draekon consider cute."
  }
];

/* ============================================================
   11. PROPHECIES OF THE WORLD — THE FULL COLLECTION
   (12 prophecies: ancient, modern, and forbidden)
   ============================================================ */
const PROPHECIES = [
  {
    icon: "star",
    title: "The Vaelor Prophecy",
    source: "Vaelor the Seer, Year 1,000 B.S.",
    text: "When the last dragon wakes and the first god bleeds, the ash-born shall sit upon a throne of fire, and Aethermoor shall know either dawn — or ending.",
    status: "Approaching",
    desc: "The most famous prophecy in Aethermoor. Vaelor the Seer spoke it a thousand years before the Sundering. He was executed for heresy. The prophecy was preserved in secret. It has been interpreted in a thousand different ways — and every interpretation has led to war."
  },
  {
    icon: "rune",
    title: "The Prophecy of the Wounded Choir",
    source: "Unknown, Year ~500 B.S.",
    text: "When the god-touched are gathered, and the halfborn stand as one, the thrones of heaven shall be empty forever, and the earth shall be ruled by those born of it.",
    status: "Waiting",
    desc: "A prophecy whispered among the Halfborn. It has never been written down — it is passed from Halfborn to Halfborn, in secret. It predicts the death of the gods and the rise of the mortal races. The Wounded Choir believes it is inevitable."
  },
  {
    icon: "eclipse",
    title: "The Prophecy of the Hollow",
    source: "The Hollow God (attributed)",
    text: "When the last light is swallowed, and the last song is silenced, and the last god is forgotten, I shall return. Not to save. Not to destroy. Simply to be.",
    status: "Unknown",
    desc: "A prophecy that appears, in different forms, in the sacred texts of every race. It predicts the end of the world — not by fire or ice, but by simple, quiet emptiness. The Hollow God will return when nothing else remains."
  },
  {
    icon: "dragon",
    title: "The Prophecy of the Last Dragon",
    source: "Draekon oral tradition, pre-Sundering",
    text: "The last Draekon to undergo the Changing will not become a dragon. They will become the Dragon. And the Dragon will wake the first Draekon, and the fire will return to the world.",
    status: "Approaching",
    desc: "A prophecy of the Draekon. It predicts the return of Aeryn the Bold — the first Draekon, the mother of dragons. It is said that when she returns, the curse will be broken, and the Draekon will be free."
  },
  {
    icon: "snowflake",
    title: "The Prophecy of the Long Winter",
    source: "Vorthal (attributed), spoken to Thane Ironheart",
    text: "The winter that comes will not end. The cold that comes will not thaw. And only the one who has never been cold will survive it.",
    status: "Approaching",
    desc: "A prophecy spoken by the sleeping god Vorthal to Thane Ironheart, forty years ago. Thane Ironheart has never told anyone else. The Long Winter is coming. It will be the last."
  },
  {
    icon: "moon",
    title: "The Prophecy of the Bound Goddess",
    source: "Seraphine Vaelor (private)",
    text: "The binding will break. It will not be gentle. And when it breaks, I will pay for what I have done.",
    status: "Approaching",
    desc: "Not a prophecy, exactly — but a certainty. Seraphine Vaelor knows that the binding of Aelith will eventually break. She has spent a thousand years preparing for it. She is still not ready."
  },
  {
    icon: "blossom",
    title: "The Prophecy of the Last Dawn",
    source: "Unknown, discovered after Aelwyn's birth",
    text: "When the last child is born and the first mother weeps, the goddess shall wake, and the daughter shall choose. Her choice shall be the end of one world — or the beginning of another.",
    status: "Beginning",
    desc: "A prophecy discovered in an old Aeldrin text after Aelwyn's birth. Only Seraphine and a handful of elders know of it. It names Aelwyn as the one who will decide the fate of the Aeldrin."
  },
  {
    icon: "feather",
    title: "The Prophecy of the Woven Threads",
    source: "The Weaver (attributed, before the Sundering)",
    text: "When the last thread is cut and the loom is silent, the weaver shall return to weave anew. But the pattern shall be different. And the world shall not remember the old one.",
    status: "Unknown",
    desc: "A prophecy attributed to the dead goddess of fate. It predicts the total rewriting of reality itself."
  },
  {
    icon: "gate",
    title: "The Prophecy of the Godseal",
    source: "The Gospel of the Divide (Watching Order)",
    text: "When the Godseal hums, the end is near. When the Godseal sings, the end is here. When the Godseal screams, there is no end — only the beginning of something worse.",
    status: "Beginning",
    desc: "The central prophecy of the Watching Order. The Godseal began humming in 400 S.A. It has not stopped. The Watching Order has doubled its patrols. The Emperor has sent envoys. No one knows what the humming means. No one wants to find out."
  },
  {
    icon: "demon",
    title: "The Prophecy of the Demon King",
    source: "The Forgotten Ones (attributed), pre-Sundering",
    text: "The King of Demons shall fall, not to a god, not to a hero, but to a child of two worlds — a half-blood, a half-demon, a half-something-else. And the world shall be remade in the ashes of his throne.",
    status: "Waiting",
    desc: "A prophecy whispered among the Forgotten Ones — the ancient demons who were here before the Demon King. It predicts the fall of the Demon King. It predicts the rise of a half-demon. It predicts the remaking of the world. The Demon King has been hunting half-demons for ten thousand years. This is why."
  },
  {
    icon: "scales",
    title: "The Prophecy of the Half-Demon",
    source: "Unknown, discovered in the Wounded Choir's archives",
    text: "When two bloods meet at the sealed road, the gate may answer. One choice may mend the ward; another may loosen it. The scribe leaves no name, and the surviving line before this passage is missing.",
    status: "Waiting",
    desc: "A fragment copied into the Wounded Choir's archive from an unverified source. Some readers believe it describes a Half-Demon and the Godseal; others argue that 'two bloods' refers to rival houses or an old treaty. The text does not say that any person can open or close the seal, and the Choir has no confirmed candidate. Kaelen's unusual reaction to runes has made him a subject of debate, not a proven chosen one.",
  },
  {
    icon: "star",
    title: "The Prophecy of the Ashborn",
    source: "Unknown, discovered in the Godfall",
    text: "From ash-colored eyes, a disputed heir will rise. The old road shall test their name; the mountain shall not answer blood alone. What is broken may be mended, but no hand shall do so without a cost.",
    status: "Beginning",
    desc: "A damaged inscription from Godfall, translated differently by three archivists. 'Ashborn' may be a family epithet, a condition of the eyes, or a poetic reference to the years after the Sundering. Popular retellings identify Kaelen, but the original contains no name and offers no reliable proof of his destiny.",
  }
];

/* ============================================================
   12. LANGUAGES OF THE WORLD — THE FULL COLLECTION
   (10 languages: common, racial, ancient, and forbidden)
   ============================================================ */
const LANGUAGES = [
  {
    name: "The Common Tongue",
    speakers: "All races (except demons)",
    script: "Latin",
    desc: "The trade language of Aethermoor, developed after the Sundering to allow the surviving races to communicate. It is simple, flexible, and constantly evolving. Every educated person speaks it. Every uneducated person speaks a dialect of it. It is the language of trade, of diplomacy, of war."
  },
  {
    name: "The Old Script",
    speakers: "Aeldrin, Dwarves, Sylvaar, some humans",
    script: "Runic",
    desc: "The language of the gods, used to write runes. It cannot be spoken — it can only be written. Every rune is a word, a command, a piece of reality. Reading the Old Script aloud is impossible; the words do not exist in any spoken language."
  },
  {
    name: "Draekon (The Fire-Tongue)",
    speakers: "Draekon",
    script: "Draconic",
    desc: "A language of fire and passion. It is spoken with the whole body — the hands, the eyes, the breath. It cannot be learned by non-Draekon, because the sounds require a Draekon's throat. It is the language of the Songs of Fire — the oldest poems in Aethermoor."
  },
  {
    name: "Dwarven (The Stone-Tongue)",
    speakers: "Dwarves",
    script: "Dwarven Runes (derived from the Old Script)",
    desc: "A language of stone and craft. It is spoken slowly, deliberately, with the weight of mountains behind every word. It has no word for 'hurry' — dwarves do not hurry. It has no word for 'impossible' — dwarves do not believe in impossible."
  },
  {
    name: "Karathi (The Ice-Tongue)",
    speakers: "The dwarves of the Frostspine, some humans of the north",
    script: "Karathi Runes",
    desc: "A language of survival. It has no words for luxury, art, or beauty — but it has seventeen words for snow, and forty-three words for various types of cold. It is spoken only in the Frostspine. It is dying — like the dwarves themselves. The dwarves do not speak it often. They do not need to. They have the Common Tongue. They have the Stone-Tongue. Karathi is for the old days — the days before the Sundering. It is for memory."
  },
  {
    name: "Orcish (The Ash-Tongue)",
    speakers: "Orcs",
    script: "Orcish Runes",
    desc: "A language of strength and fury. It is a guttural, powerful language, well-suited for oaths, poetry, and war-cries. It has been preserved, unchanged, for three thousand years. It is the language of Grunna Ironbound's rebellion. It is the language of the warbands. It is the language of the Ashen Wastes."
  },
  {
    name: "Sylvaar (The Shadow-Tongue)",
    speakers: "Sylvaar",
    script: "Sylvaar Glyphs",
    desc: "A language of secrets. It is whispered, not spoken. It changes constantly, to prevent outsiders from learning it. There are at least seven dialects, and no outsider has ever learned more than one. It is the language of the Whisperer. It is the language of the shadows."
  },
  {
    name: "Kemiiri (The Pack-Tongue)",
    speakers: "Kemiiri",
    script: "None (oral only)",
    desc: "A language of survival. It has no written form — it is passed down orally, from pack to pack. It is simple, direct, and often silent — much of it is communicated through gesture and scent. It is the language of the persecuted. It is the language of the lost."
  },
  {
    name: "Demonic (The Xarnathi Tongue)",
    speakers: "Demons, some half-demons",
    script: "Demonic Glyphs",
    desc: "The language of Xarnath. It is not spoken — it is projected. Demons do not move their mouths when they speak. They project their thoughts directly into the minds of their listeners. The language is not sound — it is meaning. It is the language of the Demon King. It is the language of the Forgotten Ones. It is the language of the end."
  },
  {
    name: "The Song",
    speakers: "Unknown (fewer than a dozen alive)",
    script: "None",
    desc: "The primordial language of creation. It cannot be learned — it can only be remembered. Those who remember it can reshape reality. Fewer than a dozen people alive remember even a fragment. The Song is not a language — it is the thing that language was made from. It is the thing that the world was made from. It is the thing that the world will be unmade by."
  }
];

/* ============================================================
   CONTINUED IN PART 5 — Books + Guilds + Dungeons + Bestiary + Map + Economy
   ============================================================ */
console.log('%c◈ DATA.JS PART 4 LOADED ◈ — Artifacts + Gods + Creatures + Prophecies + Languages', 'color: #e8c547; font-family: serif; font-size: 14px; letter-spacing: 0.2em;');
console.log('%cArtifacts: ' + ARTIFACTS.length + ' | Gods: ' + GODS.length + ' | Creatures: ' + CREATURES.length + ' | Prophecies: ' + PROPHECIES.length + ' | Languages: ' + LANGUAGES.length, 'color: #7a6f5e; font-style: italic;');
console.log('%c✅ Part 4 of 5 complete. Approx. 45KB. Total so far: ~180KB.', 'color: #4ade80; font-style: italic;');

/* ============================================================
   13. THE GREAT LIBRARY — BOOKS OF AETHERMOOR
   (10 initial books: diaries, religious texts, philosophy,
    history, forbidden tomes)
   ============================================================ */
const BOOKS = [
  {
    id: "diary-20th-floor",
    title: "Diary of the 20th Floor",
    titleFA: "دفترچه‌ی طبقه‌ی بیستم",
    author: "Unknown Adventurer",
    authorFA: "ماجراجوی ناشناس",
    category: "journals",
    categoryFA: "خاطرات",
    date: "Year 398 S.A.",
    language: "Common Tongue",
    pages: 47,
    excerpt: "Day 1: I joined the Guild today. They gave me a bronze tag and a warning. 'Don't die,' they said. 'It's bad for business.' I laughed. They didn't.",
    fullText: `DAY 1
I joined the Guild today. They gave me a bronze tag and a warning. "Don't die," they said. "It's bad for business." I laughed. They didn't.

DAY 3
My first dungeon. The Abyss. I went in with a team of five. We made it to Floor 3 before the rats found us. We lost two. I don't remember their names. I should remember their names.

DAY 7
Floor 8. The Stone-Lizards. My sword broke on their scales. I killed one with a rock. A rock. I am a warrior. I killed a monster with a rock.

DAY 12
Floor 14. The Shadow-Bats. They drained Jenkins dry in seconds. He was standing next to me. I didn't hear him scream. I heard him stop screaming. There's a difference.

DAY 18
Floor 19. We found a chest. Inside: 200 gold, a mana-stone, and a map. The map shows a path to Floor 20. It also shows a warning, written in blood: "Turn back."

DAY 20
Floor 20. The elevator. We made it. We're going back up. I'm going to see the sun again. I'm going to see my mother. I'm going to tell her I'm sorry.

DAY 21
I'm writing this on the surface. I survived. I don't know why. The others didn't. I don't know why I'm the one who gets to see the sun.

I'm going back down tomorrow.`,
    note: "Found on Floor 20 of the Abyss, beside the elevator, in the hand of a dead adventurer. The diary has been preserved by the Guild. It is required reading for every new recruit."
  },
  {
    id: "gospel-divide",
    title: "The Gospel of the Divide",
    titleFA: "انجیل تفرقه",
    author: "The Watching Order",
    authorFA: "فرقه‌ی دیدبان",
    category: "religious",
    categoryFA: "دینی",
    date: "Year 380 S.A.",
    language: "Common Tongue",
    pages: 312,
    excerpt: "In the beginning, there was the Song. And the Song was the world. And the world was the Song. Then the demons came. Then the gods came. Then the Godseal came.",
    fullText: `CHAPTER I: THE FIRST SONG

In the beginning, there was the Song. And the Song was the world. And the world was the Song.

Then the demons came. They came from the north. They came from Xarnath. They came to devour. They devoured everything.

Then the gods came. They came from the sky. They came from the stars. They came to save. They saved nothing.

Then the Godseal came. It came from nothing. It came from everything. It came to hold. It holds.

CHAPTER II: THE FIRST KING

And there was a king. And his name was the Demon King. And his power was absolute.

He killed a thousand demons to take the throne. He killed ten thousand to keep it. He killed a hundred thousand to expand it. He killed a million to rule it.

He is still killing. He has never stopped.

CHAPTER III: THE FIRST SEAL

And the gods said: "We cannot kill him. We can only contain him."

And so they carved the Black Chasm into the earth. And they raised the Godseal across it. And they said: "This is the end of him. This is the end of us. This is the beginning of something else."

CHAPTER IV: THE FIRST HUMMING

And the Godseal was silent for a thousand years. And the world forgot.

And then, in the Year 400 of the Ash Age, the Godseal began to hum.

And the Watching Order said: "The end is near."

And the world said: "Not yet."

And the Godseal said nothing. But it hummed.

CHAPTER V: THE LAST PROPHECY

When the Godseal hums, the end is near.
When the Godseal sings, the end is here.
When the Godseal screams, there is no end — only the beginning of something worse.

The Godseal is humming now. It has not stopped.

We are watching. We have always been watching.

We are the Watching Order. We do not sleep. We do not rest. We do not die.

We watch.`,
    note: "The holy book of the Watching Order. It is not widely distributed. It is not meant to be. It is meant for the 300 members of the Order, and only them. It is one of the few books in Aethermoor that has never been stolen."
  },
  {
    id: "treatise-mana",
    title: "A Treatise on Mana Conservation",
    titleFA: "رساله‌ای در بقای مانا",
    author: "Grand Archmage Vaelor",
    authorFA: "بزرگ‌جادوگر وِیلور",
    category: "philosophy",
    categoryFA: "فلسفه‌ی جادو",
    date: "Year 145 S.A.",
    language: "Common Tongue",
    pages: 428,
    excerpt: "Mana is not a thing. Mana is a relationship. It is the relationship between the world and the will that shapes it. To say that mana is 'spent' is to misunderstand it entirely.",
    fullText: `PREFACE

This treatise is written for the students of the Grand Academy. It is written for those who have just begun their studies. It is written for those who are about to make their first mistake.

It is written for those who will not read it. And it is written for those who will.

CHAPTER I: THE FOURTH LAW

The Four Laws of Magic are taught to every child in Aethermoor:
1. The Law of Price — every spell has a cost.
2. The Law of Echo — every spell leaves a mark.
3. The Law of Silence — magic cannot create something from nothing.
4. The Law of Conservation — mana is never destroyed, only transformed.

It is the fourth law that concerns us here. It is the fourth law that most students fail to understand.

CHAPTER II: MANA AS RELATIONSHIP

Mana is not a thing. Mana is a relationship. It is the relationship between the world and the will that shapes it.

To say that mana is "spent" is to misunderstand it entirely. Mana is not spent — it is transformed. It is transformed from potential into action. It is transformed from the will of the mage into the change in the world.

There is no such thing as "spent" mana. There is only mana in a different form.

CHAPTER III: THE IMPLICATIONS

If mana is never destroyed — only transformed — then what happens to the mana of a dying creature?

The answer: it returns to the world. It returns to the air, the earth, the water. It returns to the great pool of mana that sustains all life.

This is why the academies begin training at age six. The younger the mind, the better it can learn to channel the ever-present flow.

This is also why demons grow stronger by killing. Every death releases mana into the world — and the demon, if they have the will and the skill, can absorb a fraction of it.

CHAPTER IV: THE WARNING

I write this in the year 145 of the Ash Age. I write this for my students. I write this for the future.

I write this because I am afraid.

I am afraid of what will happen if the world's mana runs out. I am afraid of what will happen if the four hundred years are over.

I am afraid of what will happen when the magic ends.

The magic is ending. It has been ending for a thousand years. It will end within four hundred more.

I will not live to see it. My students will not live to see it. Their children will not live to see it.

But someone will. And I hope — I pray — that they will be ready.

— Grand Archmage Vaelor, Year 145 of the Ash Age`,
    note: "The foundational text of modern magical theory. Required reading at every magical academy in Aethermoor. The final chapter — 'The Warning' — is often removed from student editions. The Academy says it is 'too distressing.' The students say it is 'the only part worth reading.'"
  },
  {
    id: "valerian-codex",
    title: "The Valerian Codex",
    titleFA: "قانون‌نامه‌ی والریان",
    author: "Emperor Valerius the Unbroken",
    authorFA: "امپراتور والریوس شکست‌ناپذیر",
    category: "law",
    categoryFA: "قانون",
    date: "Year 47 S.A.",
    language: "Common Tongue",
    pages: 3124,
    excerpt: "Article I: The Emperor is the state. The state is the Emperor. There is no distinction. There has never been a distinction. There will never be a distinction.",
    fullText: `ARTICLE I: THE EMPEROR

The Emperor is the state. The state is the Emperor. There is no distinction. There has never been a distinction. There will never be a distinction.

The Emperor's word is law. The Emperor's will is law. The Emperor's breath is law.

The Emperor is not above the law. The Emperor is the law. There is a difference.

ARTICLE II: THE CITIZENS

A citizen is one who has sworn the Oath of Valerius. The Oath is not complicated. It has three parts:
1. I will serve the Empire.
2. I will obey the Emperor.
3. I will die for the Empire if the Empire requires it.

The Oath is not optional. The Oath is not negotiable. The Oath is the Oath.

ARTICLE III: THE GUILDS

The Guilds are permitted to operate within the Empire. They are permitted to trade, to advent, to explore, to kill monsters.

They are not permitted to:
1. Operate without a Guild Charter.
2. Interfere with Imperial business.
3. Harbor criminals.
4. Open the Godseal.
5. Speak of the Abyss's 60th floor.

The last two are non-negotiable. The last two are the reason the Empire exists.

ARTICLE IV: THE ABYSS

The Abyss is Imperial territory. It is Imperial property. It is Imperial responsibility.

No one may enter the Abyss without an Imperial permit. No one may leave the Abyss without an Imperial permit.

The permit is not a formality. The permit is a contract. The contract is not negotiable.

The Empire has lost thirty thousand adventurers to the Abyss in the past century. The Empire does not want to lose thirty thousand more.

ARTICLE V: THE GODSEAL

The Godseal is the Empire's responsibility. The Godseal is the Empire's burden. The Godseal is the Empire's secret.

No one may approach the Godseal without the Watching Order's permission. No one may cross the Godseal without the Emperor's permission.

The Emperor has not given permission in a thousand years. The Emperor will not give permission in a thousand more.

The Godseal holds. The Godseal will hold. The Godseal must hold.

ARTICLE VI: THE PENALTIES

Treason: death.
Murder: death.
Theft: death.
Sedition: death.
Breaking the Godseal: something worse than death.

The Empire does not have a prison. The Empire has a graveyard.

— Emperor Valerius the Unbroken, Year 47 of the Ash Age`,
    note: "The legal code of the Valerian Empire. Three thousand pages. Every legal battle in the Empire is fought over its interpretation. Every emperor since Valerius has tried to amend it. None have succeeded. The Codex endures."
  },
  {
    id: "whispers-abyss",
    title: "Whispers from the Abyss",
    titleFA: "زمزمه‌هایی از هاویه",
    author: "Unknown",
    authorFA: "ناشناخته",
    category: "forbidden",
    categoryFA: "ممنوعه",
    date: "Unknown (found on Floor 60)",
    language: "Unknown (untranslatable)",
    pages: "Unknown (the pages shift)",
    excerpt: "...",
    fullText: `[This book cannot be read. The pages shift. The words change. The letters form patterns that no mortal mind can follow. It is bound in leather that is not leather. It is warm to the touch. It whispers when opened. It has been locked in the deepest vault of the Adventurers' Guild for three hundred years. The vault has not been opened since. No one wants to open it. No one wants to know what it says.]

[This is the only entry in the book that has ever been translated. It was translated by a scholar who went mad within a week. The translation reads:]

"THE DOOR IS NOT A DOOR. THE FLOOR IS NOT A FLOOR. THE END IS NOT AN END. THE BEGINNING IS NOT A BEGINNING. YOU HAVE ALREADY BEEN HERE. YOU WILL ALWAYS BE HERE. THE ABYSS IS NOT A PLACE. IT IS A PROMISE."

[The scholar is still alive. He is still mad. He has not stopped screaming.]`,
    note: "The most dangerous book in Aethermoor. It was found on Floor 60 of the Abyss — the deepest floor any adventurer has ever reached and returned from. It is kept in the Adventurers' Guild's deepest vault. The vault has not been opened in three hundred years. The Guild says it is for safety. The Guild is lying. The Guild is afraid."
  },
  {
    id: "karoknul-fragment",
    title: "The Karoknul (First Fragment)",
    titleFA: "کارُکنول (پاره‌ی نخستین)",
    author: "Karok (the war-god himself)",
    authorFA: "کارُک (خدای جنگ)",
    category: "religious",
    categoryFA: "دینی",
    date: "Pre-Sundering",
    language: "The Old Script",
    pages: "Unknown (the fragment has 47 pages)",
    excerpt: "In the beginning, there was war. And war was good. And war was the only thing that was good. And I was war. And I was good. And I made my children. And my children were good.",
    fullText: `[The First Fragment of the Karoknul. This is the only fragment that has ever been translated — and the translation is incomplete. It was translated by a dwarven scholar who spent forty years on the task. He completed 12 of the 47 pages before he died. His notes are preserved in the Iron Hold.]

IN THE BEGINNING, THERE WAS WAR.

And war was good. And war was the only thing that was good. And I was war. And I was good. And I made my children. And my children were good.

I made them from iron. I made them from blood. I made them from the screams of my enemies. They were perfect. They were mine.

The other gods did not understand. They said: "Why did you make them?" I said: "Because I could." They said: "What will they do?" I said: "What I tell them to." They said: "What will you tell them to do?" I said: "Everything."

[Pages 2-12 continue in a similar vein. The scholar's translation stops at page 12. The remaining 35 pages have never been translated. The scholar's final note reads: "I cannot go on. The words are not words. They are commands. They are commands I cannot obey and cannot refuse. I am stopping. I am sorry."]

[The First Fragment is held by the Broken Skull warband of the orcs. They cannot read it. They do not need to. They believe that when the seven fragments are assembled and translated, Karok will return. They believe this because they have to. They have nothing else.]`,
    note: "The First Fragment of the Karoknul — the holy book of the orcs. It is the only fragment that has been partially translated. The translator died before he could finish. The remaining 35 pages have never been read. The Broken Skull warband guards it with their lives."
  },
  {
    id: "silver-wood-song",
    title: "The Songs of the Silver Wood",
    titleFA: "سرودهای جنگل نقره‌ای",
    author: "Anonymous Aeldrin Poets",
    authorFA: "شاعران ناشناس آلدِرین",
    category: "poetry",
    categoryFA: "شعر",
    date: "Years 1-400 S.A.",
    language: "Aeldrin (translated to Common)",
    pages: 892,
    excerpt: "The trees remember what we forget. The stars remember what the trees forget. The Song remembers what the stars forget. And I — I remember nothing. I remember only the Song.",
    fullText: `I: THE FIRST TREE

The trees remember what we forget.
The stars remember what the trees forget.
The Song remembers what the stars forget.
And I — I remember nothing.
I remember only the Song.

II: THE FADING GARDEN

The garden is dying.
It has been dying for a thousand years.
We have been dying with it.
We do not speak of this.
We do not need to.
We are the Aeldrin.
We do not speak of things that are true.

III: THE LAST CHILD

She was born in the Year 242.
She was the first child in a hundred and sixty years.
She was the last child in a hundred and sixty years.
She is the last child forever.
She does not know this.
She will learn.

IV: THE BINDING

My grandmother bound a goddess.
My grandmother saved our people.
My grandmother doomed our people.
My grandmother is still alive.
My grandmother does not speak of it.
My grandmother does not need to.
My grandmother is the reason we are dying.
My grandmother is the reason I am writing this.
My grandmother will read this.
My grandmother will understand.
My grandmother will say nothing.
She never does.

V: THE SONG OF THE LAST DAWN

When the last child is born
and the first mother weeps,
the goddess shall wake,
and the daughter shall choose.

Her choice shall be the end of one world —
or the beginning of another.

The daughter does not know this.
The daughter will learn.
The daughter will choose.
The daughter will choose.
The daughter will choose.

[This last poem — "The Song of the Last Dawn" — is the only known written record of the Last Dawn prophecy. It was written by an anonymous Aeldrin poet in the Year 243, one year after Aelwyn's birth. The poet was executed for heresy. The poem was preserved in secret.]`,
    note: "A collection of Aeldrin poetry, spanning four hundred years. It is the largest collection of Aeldrin literature in existence. It was compiled by the Silent Choir, who have not spoken since."
  },
  {
    id: "dwarven-forge-manual",
    title: "The Forgemaster's Manual",
    titleFA: "راهنمای استاد آهنگری",
    author: "The Silent Smith's ancestors",
    authorFA: "نیاکان آهنگر خاموش",
    category: "craft",
    categoryFA: "صنعت",
    date: "Pre-Sundering (updated over millennia)",
    language: "Dwarven Runes",
    pages: 1204,
    excerpt: "Iron is not a metal. Iron is a memory. A memory of the earth, of the fire, of the hammer. When you forge iron, you are not shaping metal. You are shaping memory.",
    fullText: `CHAPTER I: ON THE NATURE OF IRON

Iron is not a metal. Iron is a memory. A memory of the earth, of the fire, of the hammer. When you forge iron, you are not shaping metal. You are shaping memory.

This is why dwarven weapons are superior. We do not forge weapons. We forge memories. Memories of victory. Memories of honor. Memories of the ancestors.

CHAPTER II: ON THE NATURE OF RUNES

A rune is not a symbol. A rune is a command. It is a word written in the language of the gods, and it commands reality to obey.

When you carve a rune into a blade, you are not decorating it. You are commanding it. You are telling it: "Be sharp." You are telling it: "Never break." You are telling it: "Cut through anything."

The blade has no choice. It must obey. That is the nature of runes.

CHAPTER III: ON THE NATURE OF THE FORGE

The forge is not a tool. The forge is a partner. It has a personality. It has a mood. It has a will.

Some forges are kind. They help. They cooperate.
Some forges are cruel. They fight. They resist.

The greatest forges — the Great Forge of Hearthforge, the legendary forge of House Emberforge — are neither kind nor cruel. They are simply old. They have been burning for ten thousand years. They have seen everything. They have nothing to prove.

CHAPTER IV: ON THE SILENT SMITH

The Silent Smith is the greatest of us. He has not spoken in thirty years. He does not need to.

He communicates through his work. His work speaks for him. His work says: "I am here. I am working. I am making something."

What is he making? No one knows. No one asks. The Silent Smith is working. That is enough.

[The Manual has been updated over ten thousand years. Every dwarven smith adds a page when they die. The Manual is currently 1,204 pages. The Silent Smith has added 3 pages. No one has read them. No one dares.]`,
    note: "The foundational text of dwarven smithing. It is passed down from master to apprentice, from generation to generation, for ten thousand years. Every dwarven smith has a copy — handwritten, annotated, personal. The Silent Smith's copy is said to be the most annotated of all. It has never been seen."
  },
  {
    id: "demon-court-chronicles",
    title: "The Chronicles of the Demon Court",
    titleFA: "سال‌نامه‌های دربار شیاطین",
    author: "Unknown (possibly the Demon King himself)",
    authorFA: "ناشناخته (احتمالاً خود پادشاه شیاطین)",
    category: "forbidden",
    categoryFA: "ممنوعه",
    date: "Unknown",
    language: "Demonic",
    pages: 666,
    excerpt: "I have killed a million demons to take the throne. I have killed ten million to keep it. I have killed a hundred million to expand it. I am still killing. I will never stop.",
    fullText: `[This book is written in Demonic. It is one of the few Demonic texts that has ever been found in the central continent. It was found on the body of a half-demon who had crossed the Black Chasm — somehow, impossibly — and made it to the central continent before he died. The book was clutched in his hand. He had been reading it when he died.]

[The book has 666 pages. The first 665 pages are in Demonic. The last page is in Common Tongue — as if the author wanted someone to be able to read it.]

[Translation of the final page:]

"I am the Demon King. I have ruled Xarnath for ten thousand years. I have killed more beings than any creature in history. I have absorbed their life-force, their mana, their souls. I have become something more than a demon. Something more than a god. Something that should not exist.

I am writing this because I am bored.

I have killed everything. I have conquered everything. I have absorbed everything. I am still here. I am still alive. I am still bored.

I have begun to wonder if there is anything left. I have begun to wonder if there is anything worth doing. I have begun to wonder if I should simply... stop.

But I cannot stop. I do not know how.

So I write. I write in a language that no one can read. I write in a book that no one can find. I write in a place that no one can reach.

And I wait. I wait for someone to find this book. I wait for someone to read this page. I wait for someone to understand.

I am the Demon King. I am the most powerful being in the world. And I am the loneliest.

— The Demon King, Year Unknown"

[The book is kept in the Watching Order's citadel. It has been there for three hundred years. No one has ever opened it a second time.]`,
    note: "The only known Demonic text in the central continent. It was found on the body of a half-demon who crossed the Black Chasm — a feat that should be impossible. The book is kept in the Watching Order's citadel. No one has ever opened it a second time."
  },
  {
    id: "wounded-choir-prophecies",
    title: "The Prophecies of the Wounded Choir",
    titleFA: "پیشگویی‌های گروه کر زخمی",
    author: "The Wounded Choir (collective)",
    authorFA: "گروه کر زخمی (جمعی)",
    category: "religious",
    categoryFA: "دینی",
    date: "Years ~500 B.S. - present",
    language: "Common Tongue",
    pages: 88,
    excerpt: "When the god-touched are gathered, and the halfborn stand as one, the thrones of heaven shall be empty forever, and the earth shall be ruled by those born of it.",
    fullText: `[The Wounded Choir is a secret society of halfborn and half-demons. They have no official headquarters. They have no official membership. They have only a book — this book — which is passed from member to member, in secret, for a thousand years.]

[This book has 88 pages. It contains 88 prophecies. Each prophecy was spoken by a different member of the Wounded Choir. Each prophecy was recorded by a different member. Each prophecy has come true — or is coming true — or will come true.]

PROPHECY I
"When the god-touched are gathered, and the halfborn stand as one, the thrones of heaven shall be empty forever, and the earth shall be ruled by those born of it."

PROPHECY XIII
"The child of two bloods shall stand at the crossroads. They shall choose — not for themselves, but for the world. Their choice shall break the Godseal, or seal it forever."

PROPHECY XXXIV
"The half-demon shall be the death of the Demon King. Not by strength. Not by magic. By choice. By the choice that only a half-demon can make."

PROPHECY LVI
"The Ashborn shall rise from the ashes of the fallen god. He shall be the last hope of the dying race, the last light of the dying world. And he shall choose — fire or ice, dawn or dusk, life or death."

PROPHECY LXXXVIII
"The world shall end. But not today. Not tomorrow. Not in a thousand years. The world shall end when the last prophecy is fulfilled. The last prophecy is this prophecy. This prophecy is being fulfilled now."

[The final page — page 88 — is blank except for a single line: "You are reading this. The prophecy is fulfilled. The world shall end when you finish this page. Or it shall not. The choice is yours."]`,
    note: "The holiest text of the Wounded Choir. It is passed from member to member, in secret, for a thousand years. No one knows how many members there are. No one knows who they are. No one knows where they are. But they are everywhere. And they are waiting."
  }
];

/* ============================================================
   14. GUILDS DATA — THE TWELVE BRANCHES
   ============================================================ */
const GUILDS_DATA = [
  {
    id: "adventurers-guild",
    name: "The Adventurers' Guild",
    icon: "swords",
    color: "#6ba8c9",
    founded: "Year 47 S.A.",
    founder: "Valerius the Unbroken",
    purpose: "To organize, train, and regulate adventurers. To explore dungeons, kill monsters, and sell loot.",
    headquarters: "Valerius's Rest",
    branches: 12,
    ranks: ["F", "E", "D", "C", "B", "A", "S", "SS"],
    rankDescriptions: {
      F: "Applicant — not yet a member. Cannot enter dungeons. Cannot fight monsters. Cannot earn.",
      E: "Novice — can enter low-level dungeons (floors 1-5). Usually serves as a porter, loot-carrier, or camp guard.",
      D: "Apprentice — can enter dungeons up to floor 10. Can fight low-level monsters. Can lead small teams.",
      C: "Journeyman — can enter dungeons up to floor 20. Can fight mid-level monsters. Can lead medium teams.",
      B: "Expert — can enter dungeons up to floor 40. Can fight high-level monsters. Can lead large teams.",
      A: "Master — can enter dungeons up to floor 60. Can fight very high-level monsters. Can lead multiple teams.",
      S: "Legend — can enter dungeons up to floor 80. Can fight legendary monsters. Can lead the Guild itself.",
      SS: "Myth — no living SS-rank adventurers. The last one died a thousand years ago. No one knows how to become SS. No one knows if it is possible."
    },
    notable_members: ["The Emperor (honorary)", "Kaelen Vareth (unregistered)", "Nyx the Shadow-Speaker (banned)"],
    secrets: "The Guild has a secret vault beneath its headquarters. It contains 'Whispers from the Abyss' — the forbidden book found on Floor 60. The vault has not been opened in three hundred years. The Guild says it is for safety. The Guild is lying."
  },
  {
    id: "iron-pact",
    name: "The Iron Pact",
    icon: "crossed-hammers",
    color: "#8a6f1f",
    founded: "Year 187 S.A.",
    founder: "House Emberforge",
    purpose: "To organize, train, and regulate dwarven smiths. To forge weapons, armor, and runes for the world.",
    headquarters: "Hearthforge (dwarven district)",
    branches: 3,
    ranks: ["Apprentice", "Journeyman", "Master", "Grandmaster"],
    rankDescriptions: {
      Apprentice: "A student smith. Can forge basic tools. Cannot forge weapons.",
      Journeyman: "A skilled smith. Can forge weapons. Cannot forge runes.",
      Master: "A master smith. Can forge masterwork weapons. Can forge basic runes.",
      Grandmaster: "A legendary smith. Can forge legendary weapons. Can forge any rune. There are only three Grandmasters alive — and one of them is the Silent Smith."
    },
    notable_members: ["The Silent Smith (Grandmaster)", "Thane Ironheart (Master)", "Grimli the Forgeborn (Grandmaster)"],
    secrets: "The Iron Pact has a secret project. It is called 'Project Ember.' No one outside the Pact knows what it is. The Silent Smith is the only one who knows the full scope. He has not spoken in thirty years."
  },
  {
    id: "silent-choir",
    name: "The Silent Choir",
    icon: "star",
    color: "#e8c547",
    founded: "Unknown (possibly pre-Sundering)",
    founder: "Unknown",
    purpose: "Unknown. They guard the Fading Garden. They have not spoken in centuries. They have not needed to.",
    headquarters: "The Fading Garden",
    branches: 1,
    ranks: ["Chorister", "Cantor", "Silent", "The Unheard"],
    rankDescriptions: {
      Chorister: "A new member. Takes the vow of silence. Begins training.",
      Cantor: "A trained member. Can read the Old Script. Can hum fragments of the Song.",
      Silent: "A veteran member. Has taken the vow of eternal silence. Cannot speak, even if they want to.",
      "The Unheard": "The leader of the Silent Choir. No one has ever seen them. No one has ever heard them. No one knows if they exist."
    },
    notable_members: ["Unknown — the Silent Choir does not share names"],
    secrets: "The Silent Choir is the oldest organization in Aethermoor. They are older than the Aeldrin. They are older than the Sundering. They are older than the gods. They know things that no one else knows. They have not spoken in centuries. They may never speak again."
  },
  {
    id: "shadow-guild",
    name: "The Shadow Guild",
    icon: "eclipse",
    color: "#4a1f6b",
    founded: "Year 312 S.A.",
    founder: "The Whisperer (presumably)",
    purpose: "To gather information. To sell information. To use information. The Shadow Guild does not fight. It knows.",
    headquarters: "Unknown (possibly Ondrath, possibly everywhere)",
    branches: "Unknown (possibly dozens)",
    ranks: ["Whisper", "Echo", "Voice", "The Whisperer"],
    rankDescriptions: {
      Whisper: "A new member. Gathers low-level information. Has no authority.",
      Echo: "A trained member. Can negotiate. Can lie. Can kill if necessary.",
      Voice: "A senior member. Can command other members. Can access the Guild's deepest secrets.",
      "The Whisperer": "The leader. Unknown. Possibly a single person. Possibly a title. Possibly a myth."
    },
    notable_members: ["Unknown — the Shadow Guild does not share names"],
    secrets: "The Shadow Guild has been planning something for a century. It is called 'The Plan.' No one outside the Guild knows what it is. The Guild has not told anyone. The Guild will not tell anyone. The Guild is almost ready."
  },
  {
    id: "watching-order",
    name: "The Watching Order",
    icon: "gate",
    color: "#e8c547",
    founded: "Year 380 S.A.",
    founder: "Unknown (possibly the gods themselves)",
    purpose: "To guard the Godseal. To watch for the demons. To wait for the end.",
    headquarters: "The Godseal Citadel",
    branches: 1,
    ranks: ["Watcher", "Keeper", "Sentinel", "Grand Sentinel"],
    rankDescriptions: {
      Watcher: "A new member. Stands guard on the Godseal. Watches for demons.",
      Keeper: "A trained member. Can read the Gospel of the Divide. Can perform the Rites of Watching.",
      Sentinel: "A veteran member. Can command other members. Can make decisions about the Godseal.",
      "Grand Sentinel": "The leader. Has the authority to open the Godseal — if necessary. The Grand Sentinel has not been seen in a century."
    },
    notable_members: ["Unknown — the Watching Order does not share names"],
    secrets: "The Watching Order has 300 members. There have always been 300. When one dies, another takes their place. No one knows how new members are selected. No one knows where they come from. No one knows who the Grand Sentinel is. The Grand Sentinel has not been seen in a century. The Watching Order continues to function. Somehow."
  },
  {
    id: "kemiiri-packs",
    name: "The Kemiiri Packs",
    icon: "fox",
    color: "#6d4fa8",
    founded: "Year ~1,500 B.S.",
    founder: "The first Kemiiri Pack-Leader",
    purpose: "Survival. The Kemiiri do not have a purpose. They have each other.",
    headquarters: "None (scattered)",
    branches: "Unknown (dozens of packs, constantly forming and dissolving)",
    ranks: ["Kit", "Hunter", "Pack-Leader", "Elder"],
    rankDescriptions: {
      Kit: "A young Kemiiri. Cannot fight. Cannot hunt. Must be protected.",
      Hunter: "An adult Kemiiri. Can fight. Can hunt. Provides for the pack.",
      "Pack-Leader": "The leader of a pack. Can make decisions. Can declare war. Can declare peace.",
      Elder: "A senior Kemiiri. Has survived. Has wisdom. Is respected. Is dying."
    },
    notable_members: ["Nyx the Shadow-Speaker", "Old Sable", "The Grey Pack"],
    secrets: "The Kemiiri carry a dormant plague — the Beast-Curse. It activates when their population drops below one thousand. They are currently at fourteen hundred. The elders know. They have not told the young. They are running out of time."
  },
  {
    id: "orc-warbands",
    name: "The Orc Warbands",
    icon: "axe",
    color: "#7a1a1a",
    founded: "Year ~2,100 B.S. (after Grunna's rebellion)",
    founder: "Grunna Ironbound (first warband)",
    purpose: "Survival. Conquest. Blood. The orcs do not have a purpose. They have a hunger.",
    headquarters: "None (dozens of warband camps)",
    branches: "Unknown (dozens of warbands, constantly forming and dissolving)",
    ranks: ["Grunt", "Warrior", "Berserker", "Warboss"],
    rankDescriptions: {
      Grunt: "A new orc. Can fight. Can die. Will die.",
      Warrior: "A proven orc. Can fight. Can lead. Can survive.",
      Berserker: "A veteran orc. Can fight. Can kill. Can die. Will die. Will die screaming.",
      Warboss: "The leader of a warband. Can command. Can conquer. Can be killed by any orc who is stronger."
    },
    notable_members: ["Karog the Red (Warboss of the Red Hand)", "Grishka the Slaver (Warboss of the Iron Fangs)", "The Broken Skull (unknown Warboss)"],
    secrets: "The orcs are not naturally cruel. They were created to be cruel — by a god who is now dead. Karok's death-spell still runs in their blood, compelling them toward violence. If Karok were ever resurrected — or if the spell were ever broken — the orcs might become something else. Something better. But the Karoknul is shattered into seven fragments, and none of them can be read."
  },
  {
    id: "dwarven-clans",
    name: "The Dwarven Clans",
    icon: "hammer",
    color: "#8a6f1f",
    founded: "Year ~187 S.A.",
    founder: "Thane Ironheart the First",
    purpose: "Craft. Clan. Contract. The dwarves do not have a purpose. They have a promise.",
    headquarters: "Hearthforge",
    branches: 7,
    ranks: ["Beardling", "Smith", "Master Smith", "Thane"],
    rankDescriptions: {
      Beardling: "A young dwarf. Cannot craft. Cannot fight. Must learn.",
      Smith: "An adult dwarf. Can craft. Can fight. Can provide for the clan.",
      "Master Smith": "A senior dwarf. Can craft masterwork items. Can lead other smiths. Can sit on the Council.",
      Thane: "The leader of a clan. Can command. Can declare war. Can declare peace. Can die for the clan."
    },
    notable_members: ["Thane Ironheart (current Thane of Thanes)", "The Silent Smith (Grandmaster of the Iron Pact)", "Grimli the Forgeborn (Grandmaster of the Iron Pact)"],
    secrets: "The dwarves are not native to the Frostspine. They fled there — from something. Their oldest legends speak of a 'Deep Dark' that drove them from their original homeland, somewhere beneath the Shadowmere Depths. They have never gone back. They never will. And they have never told anyone what they found down there."
  },
  {
    id: "aетhel-court",
    name: "The Aeldrin Court",
    icon: "moon",
    color: "#a8d8e8",
    founded: "Year ~9,000 B.S.",
    founder: "Aelith (the goddess herself)",
    purpose: "To preserve. To remember. To rule. The Aeldrin do not have a purpose. They have a burden.",
    headquarters: "Aelthalas, the Crystal Throne",
    branches: 1,
    ranks: ["Silverless", "Lowborn", "Highborn", "Silent Council"],
    rankDescriptions: {
      Silverless: "An Aeldrin born without arcane sight. Cannot cast spells. Cannot read the Old Script. Cannot rule. Must serve.",
      Lowborn: "An Aeldrin of low caste. Can cast spells. Can read the Old Script. Cannot rule.",
      Highborn: "An Aeldrin of high caste. Can cast spells. Can read the Old Script. Can rule. Can be on the Silent Council.",
      "Silent Council": "The ruling body of the Aeldrin. Nine members. Elected for life. Cannot speak outside the Council chamber."
    },
    notable_members: ["Seraphine Vaelor (Silent Council, oldest living Aeldrin)", "Aelwyn Vaelor (Highborn, last Aeldrin child)", "Lord Arathor (Highborn, human ambassador — unusual)"],
    secrets: "The Aeldrin are not dying from natural causes. Their goddess, Aelith, still lives — imprisoned beneath the Silver Wood by her own children. As long as she remains bound, the Aeldrin are sterile. They have imprisoned their own salvation. And the one child born — Aelwyn Vaelor — exists only because the binding cracked for a single decade."
  },
  {
    id: "sylvaar-court",
    name: "The Sylvaar Court",
    icon: "spider",
    color: "#4a1f6b",
    founded: "Year ~9,000 B.S.",
    founder: "Aelith (the goddess herself)",
    purpose: "To serve. To spy. To survive. The Sylvaar do not have a purpose. They have a secret.",
    headquarters: "Ondrath, the Throne of Bone",
    branches: 1,
    ranks: ["Servant", "Agent", "Lord", "Shadow-King"],
    rankDescriptions: {
      Servant: "A Sylvaar of low rank. Cannot spy. Cannot kill. Must serve.",
      Agent: "A Sylvaar of high rank. Can spy. Can kill. Can be trusted.",
      Lord: "A Sylvaar of noble rank. Can command. Can rule. Can be on the Court.",
      "Shadow-King": "The ruler of the Sylvaar. Currently Lord Vexar. Has not been seen in public in a century."
    },
    notable_members: ["Lord Vexar Shadowmere (Shadow-King)", "The Whisperer (unknown rank)", "Queen Maelith (dead, but her body still rules)"],
    secrets: "The Sylvaar Queen, Maelith the Ever-Living, is dead. She has been dead for three hundred years. But her body still sits on the Obsidian Throne, animated by a spell that her son Vexar renews every night. No Sylvaar knows this. When Vexar dies — and he is dying — the Queen will collapse, and the Sylvaar will have no ruler, no purpose, and no light."
  },
  {
    id: "merchant-princes",
    name: "The Merchant Princes",
    icon: "coin",
    color: "#e8c547",
    founded: "Year ~102 S.A.",
    founder: "Unknown (the first merchant-prince of the Sunlit Coast)",
    purpose: "Trade. Profit. Power. The Merchant Princes do not have a purpose. They have a ledger.",
    headquarters: "The Golden Harbor",
    branches: 12,
    ranks: ["Clerk", "Merchant", "Master Merchant", "Merchant-Prince"],
    rankDescriptions: {
      Clerk: "A new merchant. Cannot trade independently. Must work for a master.",
      Merchant: "An adult merchant. Can trade independently. Can make deals. Can make money.",
      "Master Merchant": "A senior merchant. Can command other merchants. Can own ships. Can own warehouses.",
      "Merchant-Prince": "The ruler of a Merchant House. Can command the entire Merchant House. Can declare economic war. Can declare economic peace."
    },
    notable_members: ["The Twelve Merchant-Princes (names change frequently)"],
    secrets: "The Merchant Princes have been trading with the demon continent. Not the demons themselves — the half-demons who live on the border. The trade is illegal. The trade is profitable. The trade has been going on for a century. The Emperor knows. The Emperor does not care. The Emperor is buying."
  },
  {
    id: "wounded-choir-society",
    name: "The Wounded Choir",
    icon: "eye",
    color: "#6d4fa8",
    founded: "Unknown (possibly pre-Sundering)",
    founder: "Unknown (possibly the first halfborn)",
    purpose: "To shelter people endangered by divine anomalies, preserve testimony, and prevent persecution. Members disagree about theology and the uses of their records; there is no universally accepted prophecy or single political objective.",
    headquarters: "No central seat; a changing network of safe houses and clinics",
    branches: "Small local circles in the Heartlands, the Silver Wood borderlands, and a handful of trade ports",
    ranks: ["Voice", "Echo", "Silent", "The Unheard"],
    rankDescriptions: {
      Voice: "A new member. Can speak. Can recruit. Cannot act.",
      Echo: "A trained member. Can act. Can fight. Can die.",
      Silent: "A senior member. Cannot speak. Cannot act. Can only watch.",
      "The Unheard": "The leader. Unknown. Possibly dead. Possibly alive. Possibly a myth."
    },
    notable_members: ["Unknown — the Wounded Choir does not share names"],
    secrets: "The Choir keeps conflicting copies of the half-blood prophecy and has not agreed on its meaning. A few archivists suspect Kaelen Vareth's rune reactions may help explain the Godseal's changing tone; others warn that connecting him to the prophecy could endanger him. The Choir has no proof that he is a key to the barrier and has not followed him since childhood as a single coordinated organization.",
  }
];

/* ============================================================
   15. DUNGEONS DATA — THE ABYSS AND OTHER DUNGEONS
   ============================================================ */
const DUNGEONS_DATA = {
  theAbyss: {
    name: "The Abyss",
    location: "Beneath Valerius's Rest, the Imperial City",
    floors: 100,
    exploredFloors: 60,
    returnedFloors: 60,
    description: "The Abyss is not a cave. It is not a dungeon. It is a wound in the world — a shaft of black stone that descends one hundred floors into the earth. No one knows who built it. No one knows why. No one knows what is at the bottom. What is known is that it is the most dangerous place in Aethermoor — and the most profitable.",
    themes: [
      { range: "1-10", theme: "Stone and Soil", description: "Natural caves, earth-elementals, giant rats, stone-lizards. The easiest floors. The most deaths." },
      { range: "11-20", theme: "Water and Ice", description: "Flooded caverns, ice-elementals, frost-wyrms. Cold. Wet. Deadly." },
      { range: "21-30", theme: "Fire and Lava", description: "Volcanic tunnels, fire-elementals, ash-serpents. Hot. Dry. Deadly." },
      { range: "31-40", theme: "Shadow and Illusion", description: "Dark corridors, shadow-elementals, void-spiders. Dark. Disorienting. Deadly." },
      { range: "41-50", theme: "Death and Bone", description: "Bone-strewn halls, undead, bone-knights. Silent. Cold. Deadly." },
      { range: "51-60", theme: "The Drowned Depths", description: "Flooded ruins, drowned-things, tentacled horrors. Wet. Dark. Deadly." },
      { range: "61-70", theme: "Unknown", description: "No living adventurer has returned from Floor 61. The theme is unknown. The creatures are unknown. The danger is unknown." },
      { range: "71-80", theme: "Unknown", description: "No living adventurer has returned from Floor 71. The theme is unknown. The creatures are unknown. The danger is unknown." },
      { range: "81-90", theme: "Unknown", description: "No living adventurer has returned from Floor 81. The theme is unknown. The creatures are unknown. The danger is unknown." },
      { range: "91-100", theme: "Unknown", description: "No living adventurer has returned from Floor 91. The theme is unknown. The creatures are unknown. The danger is unknown." }
    ],
    bosses: [
      { floor: 10, name: "The Stone Guardian", description: "A massive stone golem. Immune to physical damage. Weak to water magic. Has killed 4,000 adventurers." },
      { floor: 20, name: "The Ice Queen", description: "A frost-wyrm of unusual size and intelligence. Can freeze a human solid with a single breath. Has killed 2,000 adventurers." },
      { floor: 30, name: "The Ash Dragon", description: "A young dragon — not a true dragon, but close. Breathes fire hot enough to melt steel. Has killed 1,000 adventurers." },
      { floor: 40, name: "The Shadow Lord", description: "A void-spider of unusual size and intelligence. Can step through shadows. Can kill without warning. Has killed 500 adventurers." },
      { floor: 50, name: "The Bone King", description: "A skeleton wearing ancient armor, wielding an ancient sword. Retains the skills of the adventurer he once was. Has killed 200 adventurers." },
      { floor: 60, name: "The Drowned God", description: "A tentacled horror the size of a house. Was once human. Was once divine. Is now something else. Has killed every adventurer who has ever reached Floor 60." },
      { floor: 61, name: "Unknown", description: "No living adventurer has returned from Floor 61. The boss is unknown." },
      { floor: 70, name: "Unknown", description: "No living adventurer has returned from Floor 70. The boss is unknown." },
      { floor: 80, name: "Unknown", description: "No living adventurer has returned from Floor 80. The boss is unknown." },
      { floor: 90, name: "Unknown", description: "No living adventurer has returned from Floor 90. The boss is unknown." },
      { floor: 100, name: "Unknown", description: "No living adventurer has ever reached Floor 100. The boss is unknown. The floor is unknown. Everything is unknown." }
    ],
    rules: [
      "Entry requires a Guild permit. Permits are issued based on rank.",
      "Floors 1-20 are accessible by elevator. Floors 21+ are stairs only.",
      "Adventurers must carry a return-token. If they die, the token shatters, and the Guild knows.",
      "Corpses decompose within hours. The mana returns to the Abyss. The Abyss always gets its due.",
      "No one may enter the Abyss alone. Teams of 2-6 are required.",
      "No one may enter the Abyss with a weapon they did not forge or buy themselves. The Abyss does not accept gifts.",
      "No one may speak of Floor 60 outside the Guild. The Guild does not want to know what is on Floor 60. But the Guild knows."
    ],
    notableFacts: [
      "Only 200 adventurers in history have reached Floor 40.",
      "Only 12 adventurers in history have reached Floor 50.",
      "Only 1 adventurer in history has reached Floor 60 and returned. He is still alive. He is still mad.",
      "No one has ever reached Floor 61 and returned.",
      "The Abyss was here before the city. The city was built around it.",
      "The Abyss is growing. Slowly. Imperceptibly. But growing.",
      "The Abyss is humming. No one knows why."
    ]
  },
  otherDungeons: [
    {
      name: "The Sunken Vault",
      location: "Beneath the Golden Harbor, Sunlit Coast",
      floors: 15,
      theme: "Water, treasure, drowned-things",
      description: "A sunken dwarven vault, flooded when the Sunken Kingdoms sank. It is filled with treasure — and with the Drowned. The Merchant Princes offer bounties for any treasure recovered. Few adventurers return.",
      boss: "The Drowned King — a massive drowned-thing wearing a crown. It does not speak. It does not need to."
    },
    {
      name: "The Iron Mines",
      location: "Beneath Hearthforge, the Frostspine",
      floors: 8,
      theme: "Stone, iron, earth-elementals",
      description: "The deepest dwarven mines, where the dwarves dug too deep and found something they were not supposed to find. It is now sealed. The dwarves do not speak of it. The dwarves do not go there.",
      boss: "The Deep Worm — a worm the size of a train. It does not have eyes. It does not need them."
    },
    {
      name: "The Whispering Catacombs",
      location: "Beneath the Whispering Forest",
      floors: 22,
      theme: "Bone, memory, undead",
      description: "The catacombs of an ancient civilization — older than the Aeldrin, older than the dwarves, older than the gods. The dead do not rest here. The trees do not whisper here. The silence is worse.",
      boss: "The First King — the first king of the first civilization. He is still alive. He has been alive for ten thousand years. He does not want to be."
    },
    {
      name: "The Shadowmere Rift",
      location: "Beneath Ondrath, the Shadowmere Depths",
      floors: 30,
      theme: "Void, shadow, void-spiders",
      description: "A rift in reality that leads to the Void — the space between worlds. The Sylvaar have been studying it for ten thousand years. They still do not understand it. They still do not want to.",
      boss: "The Long Shadow — a Sylvaar who walked too far into the Void. It is not a Sylvaar anymore. It is not anything anymore. It is a hole in the shape of a person."
    }
  ]
};

/* ============================================================
   16. MAP DATA — THE WORLD MAP
   (New layout with Xarnath, Godseal, Black Chasm, Mistlands)
   ============================================================ */
const MAP_DATA = {
  viewBox: "0 0 1000 700",
  backgroundLayers: [
    { name: "Sea of Sorrow", color: "#0a1a2a", path: "M 0 600 Q 200 620 400 640 L 400 700 L 0 700 Z" },
    { name: "The Deep Ocean", color: "#050d18", path: "M 0 650 Q 500 670 1000 650 L 1000 700 L 0 700 Z" }
  ],
  regions: REGIONS.map(r => ({
    id: r.id,
    name: r.name,
    x: r.mapX,
    y: r.mapY,
    color: r.color,
    type: r.type,
    regionType: r.regionType,
    dangerLevel: r.dangerLevel,
    lore: r.desc,
    control: r.control
  })),
  landmarks: [
    { name: "The Godseal", x: 500, y: 90, type: "divine", icon: "gate" },
    { name: "The Black Chasm", x: 500, y: 130, type: "divine", icon: "eclipse" },
    { name: "Xarnath", x: 500, y: 40, type: "demon", icon: "demon" },
    { name: "The Abyss", x: 400, y: 430, type: "dungeon", icon: "abyss" },
    { name: "The Mistlands", x: 80, y: 560, type: "unknown", icon: "mist" },
    { name: "The Godfall", x: 300, y: 340, type: "mystical", icon: "lightning" },
    { name: "The Veil", x: 850, y: 260, type: "anomaly", icon: "rune" },
    { name: "The Sunken Kingdoms", x: 550, y: 650, type: "mystical", icon: "waves" },
    { name: "The Dead Marches", x: 700, y: 380, type: "necropolis", icon: "skull" },
    { name: "The Whispering Forest", x: 120, y: 360, type: "mystical", icon: "pine" }
  ],
  borderMarkers: [
    { name: "The Black Chasm", from: { x: 100, y: 130 }, to: { x: 900, y: 130 }, color: "#1a0a0a", dashed: false },
    { name: "The Godseal", from: { x: 250, y: 90 }, to: { x: 750, y: 90 }, color: "#e8c547", dashed: true }
  ],
  legends: [
    { icon: "crown", label: "Human", color: "#c9a227" },
    { icon: "moon", label: "Aeldrin", color: "#a8d8e8" },
    { icon: "spider", label: "Sylvaar", color: "#4a1f6b" },
    { icon: "hammer", label: "Dwarves", color: "#8a6f1f" },
    { icon: "dragon", label: "Draekon", color: "#b52a2a" },
    { icon: "axe", label: "Orcs", color: "#7a1a1a" },
    { icon: "fox", label: "Kemiiri", color: "#6d4fa8" },
    { icon: "demon", label: "Demons", color: "#3d0a0a" },
    { icon: "mist", label: "Unknown", color: "#4a4438" }
  ]
};

/* ============================================================
   17. ECONOMY — CURRENCY, PRICES, TRADE
   ============================================================ */
const ECONOMY = {
  currencies: [
    { name: "Copper Coin", nameFA: "سکه‌ی مسی", symbol: "c", value: 1, description: "The smallest unit of currency. Used for bread, ale, and cheap goods." },
    { name: "Silver Mark", nameFA: "نشانه‌ی نقره", symbol: "s", value: 100, description: "The standard unit of currency. Used for weapons, armor, and adventuring gear." },
    { name: "Gold Crown", nameFA: "تاج طلایی", symbol: "g", value: 10000, description: "The largest unit of currency. Used for land, ships, and political power." },
    { name: "Mana Stone", nameFA: "سنگ مانا", symbol: "m", value: 50000, description: "A crystallized mana-stone. Used for magic, enchanting, and high-level trade." },
    { name: "Energy Stone", nameFA: "سنگ انرژی", symbol: "e", value: 500000, description: "A crystallized life-force-stone. Used for resurrection, soul-magic, and forbidden trade." }
  ],
  exchangeRates: {
    "1 Silver Mark": "100 Copper Coins",
    "1 Gold Crown": "100 Silver Marks",
    "1 Mana Stone": "5 Gold Crowns",
    "1 Energy Stone": "10 Mana Stones"
  },
  commonPrices: [
    { item: "Bread (one loaf)", price: "2 copper" },
    { item: "Ale (one mug)", price: "5 copper" },
    { item: "Nights at an inn", price: "1 silver" },
    { item: "A week of food", price: "1 silver" },
    { item: "A basic sword", price: "10 silver" },
    { item: "A basic armor set", price: "50 silver" },
    { item: "A masterwork sword", price: "5 gold" },
    { item: "A masterwork armor set", price: "25 gold" },
    { item: "A magical weapon", price: "1 mana stone" },
    { item: "A magical armor set", price: "5 mana stones" },
    { item: "A minor healing potion", price: "10 silver" },
    { item: "A major healing potion", price: "1 gold" },
    { item: "An elixir of resurrection", price: "1 energy stone" },
    { item: "A small house (rural)", price: "10 gold" },
    { item: "A large house (city)", price: "100 gold" },
    { item: "A small ship", price: "500 gold" },
    { item: "A large ship", price: "5,000 gold" },
    { item: "A noble title", price: "10,000 gold (or more)" }
  ],
  tradeRoutes: [
    { from: "Valerius's Rest", to: "Hearthforge", goods: "Weapons, armor, dwarven craft", value: "High" },
    { from: "Valerius's Rest", to: "Aelthalas", goods: "Runes, silver-wood, aeldrin artifacts", value: "High" },
    { from: "The Golden Harbor", to: "Valerius's Rest", goods: "Fish, spices, foreign goods", value: "Medium" },
    { from: "Ondrath", to: "Valerius's Rest", goods: "Secrets, poisons, void-stones", value: "Extreme (illegal)" },
    { from: "Hearthforge", to: "The Dragon's Reach", goods: "Obsidian, dragon-glass, dragon-hearts", value: "High" },
    { from: "The Ashen Wastes", to: "Anywhere", goods: "Slaves, stolen goods, bloodfire-reagents", value: "Extreme (illegal)" }
  ]
};

/* ============================================================
   18. BESTIARY CLASSIFICATION — CREATURE CATEGORIES
   ============================================================ */
const BESTIARY_CLASSIFICATION = {
  categories: [
    {
      name: "Mundane Animals",
      icon: "beast",
      dangerRange: "None",
      description: "Ordinary animals. Found everywhere. Not dangerous. Not interesting.",
      examples: ["Cattle", "Sheep", "Horses", "Fish", "Birds"]
    },
    {
      name: "Natural Beasts",
      icon: "beast",
      dangerRange: "Low to Moderate",
      description: "Natural animals, but larger and more dangerous than ordinary. They avoid humans. They do not hunt humans. They defend themselves.",
      examples: ["Wolves", "Bears", "Eagles"]
    },
    {
      name: "Dungeon Monsters",
      icon: "spider",
      dangerRange: "Moderate to Extreme",
      description: "Creatures that live in dungeons. They are not natural. They are shaped by the dungeon's magic. They are hostile to all living things.",
      examples: ["Void-Spiders", "Stone-Lizards", "Bone Knights", "Shadow-Bats"]
    },
    {
      name: "Demon Beasts",
      icon: "demon",
      dangerRange: "Moderate to Extreme",
      description: "Creatures that live in Xarnath. They are twisted versions of natural animals. They are hostile to all living things. They are food for demons.",
      examples: ["Abyssal Lycans", "Hell-Cows", "Ash-Horses", "Apex Terrors"]
    },
    {
      name: "Intelligent Monsters",
      icon: "eye",
      dangerRange: "Extreme",
      description: "Creatures that are intelligent. They can speak. They can plan. They can wait. They are found only in high-level dungeons (A and S rank) and in the deep places of Xarnath.",
      examples: ["Apex Terrors", "The Watchers", "The Beast of the Broken Steppe"]
    },
    {
      name: "Unique Entities",
      icon: "dragon",
      dangerRange: "Extinction-level",
      description: "Creatures that exist only once. They are not a species. They are individuals. They are the stuff of legend.",
      examples: ["True Dragons", "Frost-Wyrms", "The Mist-Walkers", "The Speaking Trees"]
    }
  ],
  dangerScale: [
    { level: "None", description: "Not dangerous. Will not attack unless provoked." },
    { level: "Low", description: "Can be killed by a single experienced adventurer." },
    { level: "Moderate", description: "Can be killed by a small team of adventurers." },
    { level: "High", description: "Can be killed by a large team of adventurers." },
    { level: "Extreme", description: "Can be killed by a legendary adventurer — or a very lucky team." },
    { level: "Extinction-level", description: "Cannot be killed. Can only be avoided. Or survived." }
  ]
};

/* ============================================================
   19. WORLD STATISTICS — FOR THE HERO SECTION
   ============================================================ */
const WORLD_STATS = {
  races: RACES.length,
  magicSchools: MAGIC_SCHOOLS.length,
  magicLaws: MAGIC_LAWS.length,
  houses: HOUSES.length,
  regions: REGIONS.length,
  characters: CHARACTERS.length,
  artifacts: ARTIFACTS.length,
  gods: GODS.length,
  creatures: CREATURES.length,
  prophecies: PROPHECIES.length,
  languages: LANGUAGES.length,
  books: BOOKS.length,
  guilds: GUILDS_DATA.length,
  dungeons: DUNGEONS_DATA.otherDungeons.length + 1,
  timelineEvents: TIMELINE.length,
  totalEntries: RACES.length + MAGIC_SCHOOLS.length + MAGIC_LAWS.length + HOUSES.length +
                REGIONS.length + CHARACTERS.length + ARTIFACTS.length + GODS.length +
                CREATURES.length + PROPHECIES.length + LANGUAGES.length + BOOKS.length +
                GUILDS_DATA.length + TIMELINE.length + (DUNGEONS_DATA.otherDungeons.length + 1)
};

/* ============================================================
   END OF DATABASE
   ============================================================ */
console.log('%c◈◈◈ AETHERMOOR DATABASE — COMPLETE ◈◈◈', 'color: #e8c547; font-family: serif; font-size: 16px; letter-spacing: 0.3em;');
console.log('%c═══════════════════════════════════════════════', 'color: #c9a227;');
console.log('%c📊 FINAL STATISTICS:', 'color: #e8c547; font-weight: bold; font-size: 14px;');
console.log('%c  Races: ' + RACES.length + ' | Magic: ' + MAGIC_SCHOOLS.length + ' | Houses: ' + HOUSES.length, 'color: #7a6f5e;');
console.log('%c  Regions: ' + REGIONS.length + ' | Characters: ' + CHARACTERS.length + ' | Timeline: ' + TIMELINE.length, 'color: #7a6f5e;');
console.log('%c  Artifacts: ' + ARTIFACTS.length + ' | Gods: ' + GODS.length + ' | Creatures: ' + CREATURES.length, 'color: #7a6f5e;');
console.log('%c  Prophecies: ' + PROPHECIES.length + ' | Languages: ' + LANGUAGES.length + ' | Books: ' + BOOKS.length, 'color: #7a6f5e;');
console.log('%c  Guilds: ' + GUILDS_DATA.length + ' | Dungeons: ' + (DUNGEONS_DATA.otherDungeons.length + 1), 'color: #7a6f5e;');
console.log('%c  Total Entries: ' + WORLD_STATS.totalEntries, 'color: #4ade80; font-weight: bold;');
console.log('%c═══════════════════════════════════════════════', 'color: #c9a227;');
console.log('%c✅ DATA.JS COMPLETE — Approx. 295KB.', 'color: #4ade80; font-weight: bold;');
console.log('%c🌑 The chronicle is complete. The world is waiting.', 'color: #7a6f5e; font-style: italic;');