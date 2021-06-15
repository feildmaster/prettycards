
import {rarityIconsHTML} from "./../libraries/rarity_icons.js";
import {pagegetters} from "./../libraries/page_getters.js";
import {PrettyCards_plugin, settings} from "./../libraries/underscript_checker.js";
import {utility} from "./../libraries/utility.js";

import {NormalPacksTemplate} from "./../libraries/packs_page_templates/normal.js";
import {WidePacksTemplate} from "./../libraries/packs_page_templates/wide.js";
import {ClassicPacksTemplate} from "./../libraries/packs_page_templates/classic.js";

var pagetemplates = [NormalPacksTemplate, WidePacksTemplate, ClassicPacksTemplate];

var settingsoptions = [];
var settingsnote = "Select the look of the Packs Page!";

for (var i=0; i < pagetemplates.length; i++) {
	settingsoptions[i] = pagetemplates[i].displayName();
	settingsnote += ("<br>" + pagetemplates[i].displayName() + ": " + pagetemplates[i].description());
}

function GetPageTemplateByName(name) {
	for (var i=0; i < pagetemplates.length; i++) {
		if (pagetemplates[i].displayName() == name) {
			return pagetemplates[i];
		}
	}
	return null;
}

function ChangeTemplate(newname, oldname) {
	GetPageTemplateByName(newname).generatePage(packs_data);
}

settings.packs_page_template = PrettyCards_plugin.settings().add({
	'key': 'packs_page_template', // key
	'name': 'Packs Page Template', // Name in settings page
	'type': 'select',
	'note': settingsnote, // Show note when hovering over setting
	'refresh': true, // true to add note "Will require you to refresh the page"
	//'disabled': boolean or `function(): boolean`, // true to disable setting
	'default': "Normal", // default value
	'options': settingsoptions, // Options for type 'select'
	'reset': true, // Adds a reset button (sets to default)
	'onChange': ChangeTemplate, // called when value is changed
});

//console.log("PageGetters", pagegetters);

var packs_data = [
	{
		g_cost : 100,
		ucp_cost : 10,
		image: "https://raw.githubusercontent.com/CMD-God/prettycards/master/img/Packs/UndertalePack_old.png",
		name: "Undertale Pack",
		description: "Contains 4 random Undertale Cards.",
		code_id: "Pack", // Open command: open + ID, Buy G command: add + ID, Buy UCP command: add + ID + Ucp
		does_exist: true
	},
	{
		g_cost : 100,
		ucp_cost : 10,
		image: "https://raw.githubusercontent.com/CMD-God/prettycards/master/img/Packs/UndertalePack_old.png",
		name: "Deltarune Pack",
		description: "Contains 4 random Deltarune Cards.",
		code_id: "DRPack",
		does_exist: true
	},
	{
		g_cost : -1,
		ucp_cost : -1,
		image: "https://raw.githubusercontent.com/CMD-God/prettycards/master/img/Packs/UndertalePack_old.png",
		name: "Shiny Pack",
		description: "Contains 4 random Shiny Cards.",
		code_id: "ShinyPack",
		does_exist: true
	},
	{
		g_cost : -1,
		ucp_cost : -1,
		image: "https://raw.githubusercontent.com/CMD-God/prettycards/master/img/Packs/UndertalePack_old.png",
		name: "Super Pack",
		description: `Contains a random ${rarityIconsHTML.BASE.COMMON}/${rarityIconsHTML.DELTARUNE.COMMON}, ${rarityIconsHTML.BASE.RARE}/${rarityIconsHTML.DELTARUNE.RARE}, ${rarityIconsHTML.BASE.EPIC}/${rarityIconsHTML.DELTARUNE.EPIC} and ${rarityIconsHTML.BASE.LEGENDARY}/${rarityIconsHTML.DELTARUNE.LEGENDARY} card.`,
		code_id: "SuperPack",
		does_exist: true
	},
	{
		g_cost : -1,
		ucp_cost : -1,
		image: "https://raw.githubusercontent.com/CMD-God/prettycards/master/img/Packs/UndertalePack_old.png",
		name: "Final Pack",
		description: `Contains a random ${rarityIconsHTML.BASE.RARE}/${rarityIconsHTML.DELTARUNE.RARE}, ${rarityIconsHTML.BASE.EPIC}/${rarityIconsHTML.DELTARUNE.EPIC}, ${rarityIconsHTML.BASE.LEGENDARY}/${rarityIconsHTML.DELTARUNE.LEGENDARY} and ${rarityIconsHTML.BASE.DETERMINATION}/${rarityIconsHTML.DELTARUNE.DETERMINATION} card.`,
		code_id: "FinalPack",
		does_exist: true
	}
]

var packs_data2 = {}; // To ease id-based search of pack data.
for (var i=0; i < packs_data.length; i++) {
	var data = packs_data[i];
	data.amount = pagegetters.GetNumberOfPacks(data.code_id); // Appends how many packs of that kind does the user have to the pack data.
	packs_data2[data.code_id] = data;
}

function deletUglyPage() { // Nothing personal.
	var children = [...document.querySelector(".mainContent").children];
	//console.log(children);
	for (var i=0; i < children.length; i++) {
		var element = children[i];
		if (element.nodeName == "NAV" || element.nodeName == "FOOTER" || element.nodeName == "SCRIPT" || (element.nodeName == "TABLE" && element.id == "cardsOpen")) {
			continue;
		} else {
			element.remove();
		}
	}
}

function InitPacks() {
	
	deletUglyPage();
	document.querySelector(".mainContent").innerHTML += "<div id='PrettyCards_MainContent'></div>";

	ChangeTemplate(settings.packs_page_template.value(), null);
	
	PrettyCards_plugin.events.on("openedPacks", function(a1, a2, a3) {console.log(a1, a2, a3)});
	
	utility.loadCSSFromLink("https://cdn.jsdelivr.net/gh/CMD-God/prettycards@15b2515bf628fdb78e87ef62e3a8eabe974c5caf/css/Packs.css");
}

console.log("InitPacks", InitPacks);

export {InitPacks};