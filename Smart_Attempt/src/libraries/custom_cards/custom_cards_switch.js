
import {CustomCardsDictionary} from "/src/libraries/custom_cards/custom_cards_dictionary.js"

CustomCardsDictionary.AddCustomCard({
	soul: {name : "SWITCH", id: 22},
	name: "{{PLURAL:$1|Spellbook|Spellbooks}}",
	image: "Spellbook",
	cost: 0,
	description: "Look at all {{SOUL:SWITCH}} spells (rarity <= {{RARITY:EPIC}}). Choose one to add to your hand. If your opponent has more monsters on the board than you, give it -1 {{cost}}.",
	extension: "BASE",
	rarity: "TOKEN"
});

window.$.i18n().load( {
			en: { 
				"soul-switch" : "SWITCH",
				"soul-switch-desc" : "At the start of every 4th turn add a " + CustomCardsDictionary.DescriptionCard("Spellbook", 1) + " to your hand.",
			}
		})

CustomCardsDictionary.AddCustomCard({
	soul: {name : "SWITCH", id: 22},
	name: "{{PLURAL:$1|Magic Orbs|Magic Orbs}}",
	image: "Magic_Orbs",
	cost: 1,
	description: "Swap the {{ATK}} and {{HP}} of a monster. Draw a card.",
	extension: "BASE",
	rarity: "BASE"
});

CustomCardsDictionary.AddCustomCard({
	soul: {name : "SWITCH", id: 22},
	name: "{{PLURAL:$1|Sacrificial Lamb|Sacrificial Lambs}}",
	image: "Sacrificial_Lamb",
	cost: 4,
	description: "Burn a random {{KW:GENERATED}} spell in your hand to kill an enemy monster.",
	extension: "BASE",
	rarity: "COMMON"
});

CustomCardsDictionary.AddCustomCard({
	soul: {name : "SWITCH", id: 22},
	name: "{{PLURAL:$1|Sabotage|Sabotages}}",
	image: "Sabotage",
	cost: 2,
	description: "Add 2 copis of the enemy's soul's {{RARITY:BASE}} spell to your hand.",
	extension: "BASE",
	rarity: "COMMON"
});

CustomCardsDictionary.AddCustomCard({
	soul: {name : "SWITCH", id: 22},
	name: "{{PLURAL:$1|Chaotic Powers|Chaotic Powers}}",
	image: "Chaotic_Powers",
	cost: 4,
	description: "Add 3 random other spells ({{cost}} <= 4) to your hand which you didn't cast this game.",
	extension: "DELTARUNE",
	rarity: "COMMON"
});

CustomCardsDictionary.AddCustomCard({
	soul: {name : "SWITCH", id: 22},
	name: "{{PLURAL:$1|Mass Necromancy|Mass Necromancies}}",
	image: "Mass_Necromancy",
	cost: 5,
	description: "For ever 3 different {{KW:GENERATED}} spells you've cast this game, burn a random monster in your dustpile and add it to your deck.",
	extension: "BASE",
	rarity: "RARE"
});

CustomCardsDictionary.AddCustomCard({
	soul: {name : "SWITCH", id: 22},
	name: "{{PLURAL:$1|Slice of Temptation|Slices of Temptation}}",
	image: "Slice_of_Temptation",
	cost: 2,
	description: "Both players draw a card. If they already have 7 cards in their hand, deal fatigue {{DMG}} to them twice instead.",
	extension: "BASE",
	rarity: "RARE"
});

CustomCardsDictionary.AddCustomCard({
	soul: {name : "SWITCH", id: 22},
	name: "{{PLURAL:$1|Life Drain|Life Drains}}",
	image: "Life_Drain",
	cost: 2,
	description: "Give an enemy monster -2 {{HP}}. Give the monster in front of it +3 {{HP}}.",
	extension: "BASE",
	rarity: "TOKEN"
});

CustomCardsDictionary.AddCustomCard({
	soul: {name : "SWITCH", id: 22},
	name: "{{PLURAL:$1|Power Drain|Power Drains}}",
	image: "Power_Drain",
	cost: 2,
	description: "Give an enemy monster -2 {{ATK}}. Give the monster in front of it +2 {{ATK}}. {{KW:DELAY}}: Add a " + CustomCardsDictionary.DescriptionCard("Life Drain", 1) + " to your hand.",
	extension: "BASE",
	rarity: "RARE"
});

CustomCardsDictionary.AddCustomCard({
	soul: {name : "SWITCH", id: 22},
	name: "{{PLURAL:$1|Triggers of Lunacy|Triggers of Lunacy}}",
	image: "Triggers_of_Lunacy",
	cost: 2,
	description: "Deal 1 {{DMG}} to all enemy monsters for every 2 spells you've casted this game. This costs 1 more for every 2 spells you've casted this game.",
	extension: "BASE",
	rarity: "EPIC"
});

CustomCardsDictionary.AddCustomCard({
	soul: {name : "SWITCH", id: 22},
	name: "{{PLURAL:$1|Mew Mew's Special|Mew Mew's Specials}}",
	image: "Mew_Mew_Special",
	cost: 2,
	description: "Select a non-{{RARITY:DETERMINATION}} monster in your hand. {{KW:DELAY}}: Add an exact copy of it to your hand.",
	extension: "BASE",
	rarity: "EPIC"
});

CustomCardsDictionary.AddCustomCard({
	soul: {name : "SWITCH", id: 22},
	name: "{{PLURAL:$1|Royal Switch|Royal Switches}}",
	image: "Royal_Switch",
	cost: 4,
	description: "Give all ally monsters +1/+1 for every 6 {{KW:GENERATED}} spells you've casted this game.",
	extension: "BASE",
	tribes: ["ROYAL_INVENTION"],
	rarity: "TOKEN"
});