// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js
import {Utils} from './../lib/utils';

export const Formats: (FormatsData | {section: string, column?: number})[] = [

	// US/UM Singles
	///////////////////////////////////////////////////////////////////
	{
		section: "US/UM Singles",
	},
	{
		name: "[Gen 7] Anything Goes",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3587441/">Anything Goes Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3591711/">Anything Goes Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3646736/">Anything Goes Sample Teams</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
];
