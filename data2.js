/* ============================================================
   8. KEY CHARACTERS
   ============================================================ */
const CHARACTERS = [
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
      { to: "The Whisperer", type: "Unknown Observer", detail: "The Whisperer has been watching Kaelen since he was a child. The reason is unknown." }
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
      { to: "Chieftain Morag Bloodaxe", type: "Political Rival", detail: "Morag wants Vexa's seat. Vexa wants Morag dead. They maintain a formal politeness." },
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
      { to: "The Silent Council", type: "Ruling Body", detail: "Seraphine created the Silent Council to help her rule. They do not know about the binding. She has kept the secret from them for a thousand years." },
      { to: "Kaelen Vareth", type: "Person of Interest", detail: "Seraphine has heard rumors of a halfborn with ash-colored eyes. She suspects he is connected to the binding. She is watching." },
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
      { to: "Kaelen Vareth", type: "Person of Interest", detail: "Aelith has been speaking to Kaelen in his dreams. She believes he is the key to her freedom. She is right." },
      { to: "The Whisperer", type: "Ally", detail: "Aelith has been in contact with the Whisperer. They have a deal. The terms are unknown." }
    ],
    quotes: [
      "I created them. I loved them. I taught them. And they bound me in the dark.",
      "I do not seek revenge. I seek justice. There is a difference. I will teach it to them.",
      "The world has forgotten me. That is a mistake. I will remind them."
    ],
    storyHooks: [
      "Aelith has nearly broken the binding. She will be free within the year. She will not be gentle.",
      "Aelith has chosen Kaelen as her vessel. She has been preparing him for twenty-four years. He does not know.",
      "Aelith has made a deal with the Whisperer. The terms are simple: help me return, and I will give you what you want. The Whisperer has agreed."
    ]
  }
];

/* ============================================================
   9. ARTIFACTS
   ============================================================ */
const ARTIFACTS = [
  {
    icon: "⚔️",
    name: "The Bloodaxe",
    type: "Weapon · Legendary",
    desc: "The ancestral weapon of House Bloodaxe. Seven hundred years old. Said to be unbreakable, and to drink the blood of those it kills. It has been wielded by every Chieftain of House Bloodaxe since its forging. It is currently in the hands of Morag Bloodaxe — who is dying."
  },
  {
    icon: "🗡️",
    name: "Grunna's Wrath",
    type: "Weapon · Legendary",
    desc: "The axe of Grunna Ironbound, forged by the god Karok himself. It was used to shatter the chains of Vordrim slavery. It has not been wielded since Grunna's death, three hundred years ago. It rests in the Great Forge of House Emberforge, waiting for a worthy hand."
  },
  {
    icon: "💎",
    name: "The Tear of Aelith",
    type: "Relic · Divine",
    desc: "A single tear, shed by the goddess Aelith when she created the Aeldrin. It is kept in the Crystal Throne of Aelthalas, and it is said to grant the bearer a single moment of perfect clarity — a moment in which they can see the truth of any situation."
  },
  {
    icon: "📜",
    name: "The Karoknul",
    type: "Book · Divine",
    desc: "The holy book of the Vordrim, written in the language of the gods. It contains the secret of their creation and the method by which Karok might be resurrected. It was shattered into seven fragments at the Sundering. Each fragment is guarded by a different Vordrim clan."
  },
  {
    icon: "👁️",
    name: "The Eye of Vorthal",
    type: "Relic · Divine",
    desc: "A single eye, preserved from the body of the sleeping god Vorthal. It is kept in the Winterhold of the Karathi. It is said that whoever looks into the eye will see the future — and go mad. Thane Ironheart has looked into it. He does not speak of what he saw."
  },
  {
    icon: "🔥",
    name: "The Ashen Flame",
    type: "Relic · Bloodfire",
    desc: "An eternal flame, kept in the Ember Keep of House Cinderborn. It was lit by Aeryn the Bold herself, ten thousand years ago, and has never gone out. It is said to be the physical manifestation of the Draekon's curse. Some say that if it ever goes out, the Draekon will be free."
  },
  {
    icon: "◈",
    name: "The Voidstone",
    type: "Relic · Void",
    desc: "A black stone, no larger than a fist, that exists in a state of constant fluctuation. It is sometimes solid, sometimes liquid, sometimes gas. It is kept in the Silent Hall of House Whisper. It is said to be a fragment of the void between worlds — a piece of pure nothingness, given form."
  },
  {
    icon: "🌟",
    name: "The Starheart",
    type: "Relic · Divine",
    desc: "A shard of the first star, shattered at the Sundering. It is kept in the Fading Garden of the Silver Wood. It is said to be the source of all magic in Aethermoor — the physical manifestation of the Song. If it were ever destroyed, magic would end."
  },
  {
    icon: "⚱️",
    name: "The Urn of Maelith",
    type: "Relic · Necromantic",
    desc: "An urn containing the ashes of Queen Maelith — and, more importantly, the ashes of her spirit. Lord Vexar has used these ashes to maintain the spell that keeps his mother animated. If the urn were ever destroyed, the Queen would collapse — and Vexar would die."
  },
  {
    icon: "🗝️",
    name: "The Key of Aelthalas",
    type: "Relic · Unknown",
    desc: "A key made of starlight, kept in the Crystal Throne. It is said to open any door — including the door to the prison of Aelith. Only Seraphine Vaelor knows what the key truly does. She has not told anyone."
  },
  {
    icon: "🌑",
    name: "The Shadowcloak",
    type: "Armor · Void",
    desc: "A cloak woven from pure shadow, kept in the Throne of Bone. It is said to grant the wearer perfect invisibility — not by hiding them, but by making them forgettable. The wearer becomes so unremarkable that no one can remember seeing them. The effect lasts until the cloak is removed."
  },
  {
    icon: "🜁",
    name: "The Breath of Karok",
    type: "Relic · Divine",
    desc: "A vial containing the last breath of the war-god Karok, exhaled at the moment of his death. It is kept in Grunna's Anvil, hidden even from the Vordrim themselves. It is said that whoever breathes the contents of the vial will become the next Karok — a god of war, reborn in mortal flesh."
  },
  {
    icon: "🜂",
    name: "The Ember Crown",
    type: "Crown · Bloodfire",
    desc: "The crown of the Draekon High Chieftain. It is forged from pure obsidian and lit from within by the Ashen Flame. It is said to grant the wearer mastery over all fire — including the fire within their own blood. It has not been worn for three hundred years."
  },
  {
    icon: "🌊",
    name: "The Pearl of the Sunken King",
    type: "Relic · Unknown",
    desc: "A pearl the size of a fist, taken from the crown of a Sunken King. It is kept in the Golden Harbor of the Sunlit Coast, where it is displayed as a curiosity. It is said to grant the bearer the ability to breathe underwater. It is also said to be cursed."
  },
  {
    icon: "🌲",
    name: "The First Seed",
    type: "Relic · Divine",
    desc: "The seed from which the Fading Garden grew. It is kept in a vault beneath the garden, guarded by the Silent Choir. It is said to contain the potential for all life — and to be the only thing that could regrow the world if it were ever destroyed."
  },
  {
    icon: "⚖️",
    name: "The Scales of Judgment",
    type: "Relic · Divine",
    desc: "A set of scales used by the gods to weigh the souls of the dead. They were lost at the Sundering. It is said that whoever finds them will be able to judge the living and the dead — and that the judgment will be absolute."
  },
  {
    icon: "🎭",
    name: "The Mask of the Whisperer",
    type: "Relic · Void",
    desc: "A mask of pure shadow, worn by the Whisperer. It is said to grant the wearer the ability to become anyone — to take on their appearance, their voice, their memories. The mask has never been seen. No one knows if it exists."
  },
  {
    icon: "🌠",
    name: "The Fallen Star",
    type: "Relic · Divine",
    desc: "A meteorite that fell from the sky at the Sundering, carrying with it a fragment of a dead god. It is kept in the Godfall, where it lies in the Glass Sea, radiating a faint, cold light. Those who touch it are said to see the moment of the god's death."
  }
];

/* ============================================================
   10. FALLEN GODS
   ============================================================ */
const GODS = [
  {
    icon: "☀️",
    name: "Aelith",
    domain: "Light, Knowledge, Creation",
    status: "Imprisoned",
    desc: "The mother of the Aeldrin and Sylvaar. Bound beneath the Silver Wood by her own children. She is not dead. She is waiting."
  },
  {
    icon: "⚔️",
    name: "Karok",
    domain: "War, Strength, Conquest",
    status: "Dead",
    desc: "The creator of the Vordrim. Slain by Aeryn the Bold at the Sundering. His book, the Karoknul, is the only thing that could bring him back."
  },
  {
    icon: "🌑",
    name: "Vorthal",
    domain: "Silence, Dreams, Secrets",
    status: "Sleeping",
    desc: "The sleeping god beneath the Frostspine. He has spoken only once — to Thane Ironheart. He has not spoken since. He may never speak again."
  },
  {
    icon: "🔥",
    name: "Vharenth",
    domain: "Fire, Dragons, Passion",
    status: "Dead",
    desc: "The last of the great dragons, and the lover of Aeryn the Bold. Killed by Karok at the Sundering. His heart was eaten by Aeryn — and this is how the Draekon curse began."
  },
  {
    icon: "🌊",
    name: "Nerith",
    domain: "Seas, Storms, Change",
    status: "Unknown",
    desc: "The goddess of the sea. She vanished at the Sundering. Some say she is sleeping beneath the Sea of Sorrow. Some say she is dead. Some say she is the thing that lives in the Sunken Kingdoms now."
  },
  {
    icon: "🌲",
    name: "Elyra",
    domain: "Nature, Growth, Healing",
    status: "Dead",
    desc: "The goddess of nature. She died at the Sundering, and her death is why the Fading Garden is dying — and why nothing grows in the Ashen Wastes."
  },
  {
    icon: "⚖️",
    name: "Justicar",
    domain: "Justice, Law, Order",
    status: "Unknown",
    desc: "The god of justice. He has not been seen since the Sundering. The Sylvaar believe he is dead. The Vordrim believe he is hiding. The Aeldrin believe he is waiting — for the right moment to return."
  },
  {
    icon: "🎭",
    name: "Lirien",
    domain: "Deception, Trickery, Chaos",
    status: "Alive (possibly)",
    desc: "The god of deception. He is the only god who may have survived the Sundering intact. He has not been seen in a thousand years. But then, he would not be."
  },
  {
    icon: "🜂",
    name: "Ignar",
    domain: "Fire, Forge, Craft",
    status: "Dead",
    desc: "The god of the forge. He forged the weapons of the gods. He died at the Sundering, and his death is why the greatest artifacts of Aethermoor can never be duplicated."
  },
  {
    icon: "🌙",
    name: "Selene",
    domain: "Moon, Tides, Mystery",
    status: "Dead",
    desc: "The goddess of the moon. She died at the Sundering, and the moon has not been the same since. It is said that her body is the moon — and that she watches over Aethermoor still."
  },
  {
    icon: "🜄",
    name: "Mereth",
    domain: "Death, Endings, Rebirth",
    status: "Dead",
    desc: "The god of death. He died at the Sundering. His death is why the dead do not stay dead in the Dead Marches — and why no one knows what happens after death anymore."
  },
  {
    icon: "🗡️",
    name: "Kaelith",
    domain: "Honor, Valor, Sacrifice",
    status: "Dead",
    desc: "The god of honor. He died at the Sundering, defending his siblings. His death is the reason why the concept of honor has become so rare in Aethermoor."
  },
  {
    icon: "🌠",
    name: "The Nameless",
    domain: "Unknown",
    status: "Erased",
    desc: "The rogue god who attempted to seize the Song six thousand years ago. His name has been erased from all records. His body lies in the Godfall. His death is what made the Sundering possible — because the other gods learned, that day, that gods could die."
  },
  {
    icon: "🜁",
    name: "The Hollow",
    domain: "Void, Nothingness, Silence",
    status: "Unknown",
    desc: "The god of the void. He is not worshipped. He is not loved. He is not even remembered by most. But he exists — somewhere in the spaces between worlds. He is the reason Voidwalking works. He is the reason the Sylvaar have a god, even if they do not know it."
  }
];

/* ============================================================
   11. CREATURES
   ============================================================ */
const CREATURES = [
  {
    icon: "🐉",
    name: "True Dragons",
    class: "Divine",
    danger: "Extinction",
    desc: "The great dragons of Vaelthar, once numbering in the thousands, are now reduced to fewer than a dozen. The last confirmed sighting was in 398 S.A. — a female, flying east. No one knows where she went."
  },
  {
    icon: "🐺",
    name: "Frost-Wyrms",
    class: "Beast",
    danger: "Extreme",
    desc: "Massive serpentine creatures that live in the deepest reaches of the Frostspine. They are 200 feet long, armored in ice, and can kill a fully armed warrior with a single bite. Thane Ironheart killed one with his bare hands. He does not recommend it."
  },
  {
    icon: "🕷️",
    name: "Void-Spiders",
    class: "Void",
    danger: "High",
    desc: "Spiders that live in the Void between worlds. They can slip through cracks in reality and appear anywhere. Their webs are not made of silk — they are made of pure shadow, and they can cut through steel."
  },
  {
    icon: "👻",
    name: "The Screaming Dead",
    class: "Undead",
    danger: "Extreme",
    desc: "The souls trapped in the Dead Marches, cursed to die and rise forever. They cannot be killed — they can only be temporarily dispersed. They remember nothing of their former lives. They only scream."
  },
  {
    icon: "🦅",
    name: "Storm-Eagles",
    class: "Beast",
    danger: "Moderate",
    desc: "Eagles the size of horses, native to the Stormlands. They can fly through hurricanes, and their feathers are said to be able to channel lightning. The Stormborn family keeps several as pets."
  },
  {
    icon: "🐍",
    name: "Ash-Serpents",
    class: "Beast",
    danger: "High",
    desc: "Serpents that live in the Ashen Wastes, adapted to the ash and the heat. They are 30 feet long, black as coal, and their venom is said to be hotter than fire. The Vordrim hunt them for sport."
  },
  {
    icon: "🦌",
    name: "Silver Stags",
    class: "Fey",
    danger: "Low",
    desc: "Beautiful, intelligent stags that live in the Silver Wood. They are not hostile — they are, in fact, quite curious — but they are also sacred to the Aeldrin, and killing one is punishable by death."
  },
  {
    icon: "🦇",
    name: "Shadow-Bats",
    class: "Void",
    danger: "Moderate",
    desc: "Bats that live in the Shadowmere Depths. They are not dangerous on their own, but they travel in swarms of thousands, and they can drain the life-force from a living creature in seconds."
  },
  {
    icon: "🐙",
    name: "The Drowned",
    class: "Undead",
    danger: "Extreme",
    desc: "The things that live in the Sunken Kingdoms. They were once human — but the sea changed them. They are now something else: tentacled, many-eyed, and utterly without mercy."
  },
  {
    icon: "🦎",
    name: "Fire-Newts",
    class: "Elemental",
    danger: "Low",
    desc: "Small, lizard-like creatures that live in the Dragon's Reach. They are not dangerous — they are, in fact, quite friendly — but they can set things on fire if they are startled. They are popular as pets among Draekon children."
  },
  {
    icon: "🌳",
    name: "The Speaking Trees",
    class: "Fey",
    danger: "Moderate",
    desc: "The trees of the Whispering Forest. They are not hostile — they are, in fact, quite helpful — but they are also completely mad. They have been listening to the world for ten thousand years, and they have opinions. They will share them. At length."
  },
  {
    icon: "🦁",
    name: "The Beast of the Broken Steppe",
    class: "Unknown",
    danger: "Unknown",
    desc: "A creature that has been sighted four times in the past century on the Broken Steppe. It is described as 'a lion the size of a house, with the eyes of a man, and a voice that speaks in riddles.' No one has ever survived a close encounter. It may not exist."
  }
];

/* ============================================================
   12. PROPHECIES
   ============================================================ */
const PROPHECIES = [
  {
    icon: "✦",
    title: "The Vaelor Prophecy",
    source: "Vaelor the Seer, Year 1,000 B.S.",
    text: "When the last dragon wakes and the first god bleeds, the ash-born shall sit upon a throne of fire, and Aethermoor shall know either dawn — or ending.",
    status: "Approaching",
    desc: "The most famous prophecy in Aethermoor. Vaelor the Seer spoke it a thousand years before the Sundering. He was executed for heresy. The prophecy was preserved in secret. It has been interpreted in a thousand different ways — and every interpretation has led to war."
  },
  {
    icon: "◈",
    title: "The Prophecy of the Wounded Choir",
    source: "Unknown, Year ~500 B.S.",
    text: "When the god-touched are gathered, and the halfborn stand as one, the thrones of heaven shall be empty forever, and the earth shall be ruled by those born of it.",
    status: "Waiting",
    desc: "A prophecy whispered among the Halfborn. It has never been written down — it is passed from Halfborn to Halfborn, in secret. It predicts the death of the gods and the rise of the mortal races. The Wounded Choir believes it is inevitable."
  },
  {
    icon: "🌑",
    title: "The Prophecy of the Hollow",
    source: "The Hollow God (attributed)",
    text: "When the last light is swallowed, and the last song is silenced, and the last god is forgotten, I shall return. Not to save. Not to destroy. Simply to be.",
    status: "Unknown",
    desc: "A prophecy that appears, in different forms, in the sacred texts of every race. It predicts the end of the world — not by fire or ice, but by simple, quiet emptiness. The Hollow God will return when nothing else remains."
  },
  {
    icon: "🐉",
    title: "The Prophecy of the Last Dragon",
    source: "Draekon oral tradition, pre-Sundering",
    text: "The last Draekon to undergo the Changing will not become a dragon. They will become the Dragon. And the Dragon will wake the first Draekon, and the fire will return to the world.",
    status: "Approaching",
    desc: "A prophecy of the Draekon. It predicts the return of Aeryn the Bold — the first Draekon, the mother of dragons. It is said that when she returns, the curse will be broken, and the Draekon will be free."
  },
  {
    icon: "❄️",
    title: "The Prophecy of the Long Winter",
    source: "Vorthal (attributed), spoken to Thane Ironheart",
    text: "The winter that comes will not end. The cold that comes will not thaw. And only the one who has never been cold will survive it.",
    status: "Approaching",
    desc: "A prophecy spoken by the sleeping god Vorthal to Thane Ironheart, forty years ago. Thane Ironheart has never told anyone else. The Long Winter is coming. It will be the last."
  },
  {
    icon: "🌙",
    title: "The Prophecy of the Bound Goddess",
    source: "Seraphine Vaelor (private)",
    text: "The binding will break. It will not be gentle. And when it breaks, I will pay for what I have done.",
    status: "Approaching",
    desc: "Not a prophecy, exactly — but a certainty. Seraphine Vaelor knows that the binding of Aelith will eventually break. She has spent a thousand years preparing for it. She is still not ready."
  }
];

/* ============================================================
   13. LANGUAGES
   ============================================================ */
const LANGUAGES = [
  {
    name: "The Common Tongue",
    speakers: "All races",
    script: "Latin",
    desc: "The trade language of Aethermoor, developed after the Sundering to allow the surviving races to communicate. It is simple, flexible, and constantly evolving. Every educated person speaks it."
  },
  {
    name: "The Old Script",
    speakers: "Aeldrin, Sylvaar, some Vordrim shamans",
    script: "Runic",
    desc: "The language of the gods, used to write runes. It cannot be spoken — it can only be written. Every rune is a word, a command, a piece of reality. Reading the Old Script aloud is impossible; the words do not exist in any spoken language."
  },
  {
    name: "Draekon (The Fire-Tongue)",
    speakers: "Draekon",
    script: "Draconic",
    desc: "A language of fire and passion. It is spoken with the whole body — the hands, the eyes, the breath. It cannot be learned by non-Draekon, because the sounds require a Draekon's throat."
  },
  {
    name: "Karathi (The Ice-Tongue)",
    speakers: "Karathi",
    script: "Karathi Runes",
    desc: "A language of survival. It has no words for luxury, art, or beauty — but it has seventeen words for snow, and forty-three words for various types of cold. It is spoken only in the Frostspine."
  },
  {
    name: "Vordrim (The Ash-Tongue)",
    speakers: "Vordrim",
    script: "Vordrim Runes",
    desc: "A language of strength and honor. It is a guttural, powerful language, well-suited for oaths, poetry, and war-cries. It has been preserved, unchanged, for three hundred years."
  },
  {
    name: "Sylvaar (The Shadow-Tongue)",
    speakers: "Sylvaar",
    script: "Sylvaar Glyphs",
    desc: "A language of secrets. It is whispered, not spoken. It changes constantly, to prevent outsiders from learning it. There are at least seven dialects, and no outsider has ever learned more than one."
  },
  {
    name: "Kemiiri (The Pack-Tongue)",
    speakers: "Kemiiri",
    script: "None (oral only)",
    desc: "A language of survival. It has no written form — it is passed down orally, from pack to pack. It is simple, direct, and often silent — much of it is communicated through gesture and scent."
  },
  {
    name: "The Song",
    speakers: "Unknown",
    script: "None",
    desc: "The primordial language of creation. It cannot be learned — it can only be remembered. Those who remember it can reshape reality. Fewer than a dozen people alive remember even a fragment."
  }
];